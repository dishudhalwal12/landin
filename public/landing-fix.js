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
    #dukaan-hero-video, #dukaan-hero-scrim, [data-framer-name="Pre_Loader"] { display: none !important; }
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

  const nearViewport = (el, margin = 300) => {
    const rect = el.getBoundingClientRect()
    return rect.top < window.innerHeight + margin && rect.bottom > -margin
  }

  // Rect-based instead of IntersectionObserver: works in every browser,
  // including embedded/headless ones where observers are throttled.
  const onNear = (el, callback, margin = 300) => {
    if (nearViewport(el, margin)) {
      callback()
      return
    }
    const check = () => {
      if (!el.isConnected || !nearViewport(el, margin)) return
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      callback()
    }
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check, { passive: true })
  }

  const loadHeroFrame = (stage) => {
    if (stage.dataset.loaded) return
    stage.dataset.loaded = '1'
    const holder = stage.querySelector('.dk-video')
    if (!holder) return
    const frame = document.createElement('iframe')
    frame.src = heroEmbed
    frame.title = 'Dukaan.AI'
    frame.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture')
    frame.allowFullscreen = true
    frame.tabIndex = -1
    holder.replaceChildren(frame)
  }

  // The YouTube player pulls ~1MB of scripts. Mount it only when the stage
  // gets close to the viewport instead of during the first paint.
  const watchHeroStage = (stage) => {
    if (stage.dataset.watched) return
    stage.dataset.watched = '1'
    onNear(stage, () => loadHeroFrame(stage))
  }

  const mountHeroStage = () => {
    const hero = document.querySelector('[data-framer-name="HERO"]')
    if (!hero) return

    let stage = document.getElementById('dukaan-hero-stage')
    if (!stage) {
      stage = document.createElement('div')
      stage.id = 'dukaan-hero-stage'
      stage.setAttribute('aria-hidden', 'true')
      stage.innerHTML = '<div class="dk-video"></div>'
    }
    // Flow layout is owned by the static CSS. Keep the stage as the hero's
    // last child so it renders below the buttons and above the ecosystem.
    if (hero.lastElementChild !== stage) hero.appendChild(stage)
    watchHeroStage(stage)
  }

  let videoTicker = null

  const isVideoVisible = (video) => {
    if (!video || !video.isConnected) return false
    if (video.offsetWidth === 0 || video.offsetHeight === 0) return false
    const style = window.getComputedStyle(video)
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false
    const rect = video.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return false
    return rect.top < window.innerHeight + 150 && rect.bottom > -150
  }

  // Stream/load videos on demand: preload="none", play only when actively
  // visible in viewport, pause and stop buffering off-screen.
  const setupVideos = () => {
    const videos = document.querySelectorAll('video')
    if (!videos.length) return
    videos.forEach((video) => {
      if (video.dataset.videoBound) return
      video.dataset.videoBound = '1'
      video.preload = 'none'
      if (video.loop && video.muted) video.dataset.wantPlay = '1'
      if (!video.paused) video.dataset.wantPlay = '1'
      video.addEventListener('playing', () => {
        video.dataset.wantPlay = '1'
      })
    })

    const updateVideos = () => {
      document.querySelectorAll('video').forEach((video) => {
        if (!video.dataset.videoBound || !video.isConnected) return
        if (video.closest('[data-framer-name="HERO BKG Image"]') || (video.src && video.src.includes('xXF7'))) {
          video.pause()
          video.removeAttribute('src')
          video.load()
          video.remove()
          return
        }
        if (isVideoVisible(video)) {
          if (video.dataset.wantPlay === '1' && video.paused) {
            video.preload = 'metadata'
            video.play().catch(() => {})
          }
        } else if (!video.paused) {
          video.pause()
        }
      })
    }

    if (!videoTicker) {
      videoTicker = updateVideos
      window.addEventListener('scroll', videoTicker, { passive: true })
      window.addEventListener('resize', videoTicker, { passive: true })
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(() => updateVideos(), { rootMargin: '150px' })
        videos.forEach((v) => obs.observe(v))
      }
    }
    updateVideos()
  }

  const mountHeroVideo = () => {
    const video =
      document.querySelector('video[src*="xXF7"]') ||
      document.querySelector('[data-framer-name="HERO BKG Image"] video') ||
      document.querySelector('.framer-1slvs2a-container video')
    if (video) {
      video.pause()
      video.removeAttribute('src')
      video.load()
      video.remove()
    }
    const frame = document.getElementById('dukaan-hero-video')
    if (frame) frame.remove()
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
    setupVideos()
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
      setupVideos()
    })
  })
  observer.observe(document.body, { childList: true, subtree: true })
  setTimeout(() => observer.disconnect(), 15000)
})()
