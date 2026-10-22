(() => {
  const app = 'https://dukaan-ai-hypnexis.vercel.app'
  const whatsapp = 'https://wa.me/919256487182?text=%2Fhey'
  const demo = 'https://youtu.be/hz5WBK9tprw'
  const title = 'Dukaan.AI — the shop around the corner, on WhatsApp'
  const heroVideoId = 'hz5WBK9tprw'
  const heroEmbed =
    'https://www.youtube.com/embed/' +
    heroVideoId +
    '?autoplay=1&mute=1&loop=1&playlist=' +
    heroVideoId +
    '&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3'

  const style = document.createElement('style')
  style.id = 'dukaan-hero-layout'
  style.textContent = `
    [data-framer-name="HERO"] {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    @media (max-width: 809px) {
      [data-framer-name="HERO"] {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
    }
    [data-framer-name="HERO"] [data-framer-name="Content"] {
      text-align: center !important;
      align-items: center !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
    [data-framer-name="HERO"] [data-framer-name="Buttons"] {
      align-items: center !important;
      justify-content: center !important;
    }
    #dukaan-hero-video, #dukaan-hero-scrim { display: none !important; }
  `
  document.head.appendChild(style)
  const map = [
    [/Contra Labs/g, 'Dukaan.AI'],
    [/Contra/g, 'Dukaan.AI'],
    [/calendly/gi, 'dukaan'],
    [/\bcreative\b/gi, 'shop'],
    [/\bresearch\b/gi, 'features'],
    [/\bTaste\b/g, 'Shops'],
    [/^400\+$/, '7'],
  ]

  const fixText = (node) => {
    if (!node.nodeValue || !/Contra|calendly|creative|research|Taste/i.test(node.nodeValue)) return
    let value = node.nodeValue
    for (const [pattern, replacement] of map) value = value.replace(pattern, replacement)
    node.nodeValue = value
  }

  const labelOf = (link) => (link.textContent || '').replace(/\s+/g, ' ').trim()

  const actionFor = (link) => {
    const label = labelOf(link)
    const href = link.getAttribute('href') || ''
    if (/Chat on WhatsApp/.test(label)) return { url: whatsapp }
    if (/^(Demo|Watch the demo)/.test(label)) return { url: demo }
    if (/See how it works/.test(label)) return { url: app }
    if (/(How it works|Features)/.test(label)) return { hash: '#offerings' }
    if (/^(WhatsApp orders|Stock & inventory|Your day insights|Online store)$/.test(label)) return { hash: '#offerings' }
    if (/^(Setup|Open the beta|The beta|For shop owners|Set up your store)/.test(label)) return { url: app }
    if (/^\.?\/(research|jobs|creative|vision|human-creativity|creative-intelligence)/.test(href)) return { url: app }
    return null
  }

  const scrollTo = (selector) => {
    const target = document.querySelector(selector)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const fixLinks = () => {
    document.querySelectorAll('a').forEach((link) => {
      const action = actionFor(link)
      if (action && action.hash) link.setAttribute('href', action.hash)
      else if (action && action.url) link.setAttribute('href', action.url)
    })
  }

  // Framer's router intercepts clicks and opens its own /research and /jobs
  // pages even when the anchor points elsewhere. Capture the click first and
  // send every mapped label to the real Dukaan.AI destination.
  const intercept = (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = event.target && event.target.closest ? event.target.closest('a') : null
    if (!link) return
    const action = actionFor(link)
    if (!action) return
    event.preventDefault()
    event.stopPropagation()
    event.stopImmediatePropagation()
    if (action.hash) scrollTo(action.hash)
    else window.open(action.url, '_blank', 'noopener,noreferrer')
  }

  const mountHeroStage = () => {
    const hero = document.querySelector('[data-framer-name="HERO"]')
    if (!hero) return

    let stage = document.getElementById('dukaan-hero-stage')
    if (!stage) {
      stage = document.createElement('div')
      stage.id = 'dukaan-hero-stage'
      stage.setAttribute('aria-hidden', 'true')
      stage.innerHTML =
        '<div class="dk-video"><iframe src="' + heroEmbed + '" title="Dukaan.AI" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen tabindex="-1"></iframe></div>'
    }
    // Flow layout is owned by the static CSS. Keep the stage as the hero's
    // last child so it renders below the buttons and above the ecosystem.
    if (hero.lastElementChild !== stage) hero.appendChild(stage)
  }

  const mountHeroVideo = () => {
    const video =
      document.querySelector('video[src*="xXF7"]') ||
      document.querySelector('[data-framer-name="HERO BKG Image"] video') ||
      document.querySelector('.framer-1slvs2a-container video')
    if (video) {
      video.style.visibility = 'hidden'
      video.style.pointerEvents = 'none'
      video.muted = true
      if (typeof video.pause === 'function') video.pause()
    }
    const frame = document.getElementById('dukaan-hero-video')
    if (frame) frame.style.display = 'none'
    mountHeroStage()
  }

  const run = () => {
    if (document.title !== title) document.title = title
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    const nodes = []
    while (walker.nextNode()) nodes.push(walker.currentNode)
    nodes.forEach(fixText)
    fixLinks()
    mountHeroVideo()
  }

  document.addEventListener('click', intercept, true)

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run)
  else run()
  setTimeout(run, 900)
  setTimeout(run, 2400)
  setTimeout(run, 6000)

  let queued = false
  const observer = new MutationObserver(() => {
    if (queued) return
    queued = true
    requestAnimationFrame(() => {
      queued = false
      fixLinks()
      mountHeroVideo()
    })
  })
  observer.observe(document.body, { childList: true, subtree: true })
  setTimeout(() => observer.disconnect(), 15000)
})()
