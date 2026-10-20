export const heroCopy = {
    eyebrow: 'Built for neighbourhood shops',
    titleLead: 'The shop around the corner.',
    titleAccent: 'Open on WhatsApp.',
    subtitle: 'Your customer sends a message. You get a clean order, a quiet chime and stock that updates itself. Nobody installs anything.',
    primaryCta: 'Set up your store',
    secondaryCta: 'Chat on WhatsApp',
    note: 'Works with the number you already have.'
}

export const heroChat = {
    shop: 'Sharma Kirana',
    status: 'online',
    messages: [
        { from: 'customer' as const, text: 'Bhaiya, 2 packet doodh aur ek Maggi' },
        { from: 'bot' as const, text: '2 packets of milk and 1 Maggi. Total ₹69. Send to your saved address?' },
        { from: 'customer' as const, text: 'Haan, jaldi bhejna' }
    ],
    order: {
        title: 'New order',
        count: '#1042',
        items: '2 × Milk (500 ml) · 1 × Maggi',
        total: '₹69',
        timer: '60s to accept'
    },
    confirmation: 'Order confirmed. Aaj 20 minutes mein.'
}

export const manifestoCopy = {
    eyebrow: 'The app they already use',
    title: 'They already have the app. It is called WhatsApp.',
    body: 'There is nothing to download and nothing to log in to. Your customer messages the number they know — and the shop writes the order down.'
}

export const stats = [
    {
        value: '500M+',
        label: 'Indian phones already have WhatsApp',
        context: 'Your shop goes where the customer already is.'
    },
    {
        value: '15 min',
        label: 'Orders confirmed in under 15 minutes',
        context: 'The bot asks, you accept, the customer is told.'
    },
    {
        value: '7',
        label: 'Languages, one counter',
        context: 'English, Hindi, Tamil, Punjabi, Kannada, Gujarati and Urdu.'
    },
    {
        value: '5 km',
        label: 'Around your shop',
        context: 'A customer shares a location pin. The nearest linked shop gets the order.'
    }
]

export const shopTypes = [
    'Kirana',
    'Dairy',
    'Fruits & vegetables',
    'Daily essentials',
    'Your shop'
]

export const steps = [
    {
        number: '01',
        title: 'They send a message.',
        body: 'Text or voice note, in the language they already speak. They use the WhatsApp they already have.',
        visual: 'message' as const
    },
    {
        number: '02',
        title: 'The bot asks, then writes it down.',
        body: 'It checks your catalog, asks about quantity when something is unclear, and waits for a clear yes.',
        visual: 'parse' as const
    },
    {
        number: '03',
        title: 'You accept with a swipe.',
        body: 'The order lands with a chime. Accept it, and the customer gets a confirmation on WhatsApp without you typing one.',
        visual: 'accept' as const
    },
    {
        number: '04',
        title: 'Your stock catches up.',
        body: 'Accepted orders update stock and sales. Low stock is flagged before you run out.',
        visual: 'stock' as const
    }
]

export const features = [
    {
        icon: 'receipt' as const,
        title: 'Orders, without the notebook.',
        body: 'Items, total, payment mode and age in one queue. Accept, prepare, deliver, reject.'
    },
    {
        icon: 'camera' as const,
        title: 'A bill photo is enough.',
        body: 'Snap a supplier bill, paste a WhatsApp message or upload a CSV, and stock updates.'
    },
    {
        icon: 'boxes' as const,
        title: 'Stock that matches the shelf.',
        body: 'Prices, units and quantities in one place. Low stock turns red at 10. Switch an item off with one tap.'
    },
    {
        icon: 'message' as const,
        title: 'A reorder already written.',
        body: 'When something runs low, the app drafts the message to your distributor. You send it on WhatsApp.'
    },
    {
        icon: 'chart' as const,
        title: 'Your day before you close.',
        body: 'Today, week and month sales, order count and average order value.'
    },
    {
        icon: 'sparkles' as const,
        title: 'AI that tells you what changed.',
        body: 'Insight cards call out what moved and what to do next, in your language.'
    },
    {
        icon: 'qr' as const,
        title: 'UPI at the counter.',
        body: 'Show a payment QR from the order, then mark it paid when the money lands.'
    },
    {
        icon: 'languages' as const,
        title: 'Seven languages. One shop.',
        body: 'The dashboard and the bot are built for all seven.'
    },
    {
        icon: 'cloud' as const,
        title: 'Your shop on another device.',
        body: 'Sign in and your catalog and orders come with you.'
    }
]

export const ownerCopy = {
    eyebrow: 'Still your shop',
    title: 'You stay in charge.',
    body: 'Nothing is confirmed without your yes. A new order chimes once. You have 60 seconds to accept — the customer is told either way.',
    points: [
        'Swipe to accept or reject.',
        'Send ready and delivered updates.',
        'Every accepted order updates stock.'
    ]
}

export const dashboardCopy = {
    eyebrow: 'The owner dashboard',
    title: 'Know your day before you close.',
    body: 'Today, this week, this month. Sales, orders, average order value and the items doing the work.',
    insight: 'Maggi is moving faster than usual. You sold 18 packets today, up from 11 yesterday.'
}

export const beforeAfterCopy = {
    eyebrow: 'One less thing to carry',
    title: 'Close the notebook.',
    body: 'A notebook works until the shop gets busy.',
    oldLabel: 'The old way',
    newLabel: 'With Dukaan.AI',
    old: [
        'Orders arrive by call, and get written on the back of a bill.',
        'Stock lives in your head.',
        'Sales are a guess at 9 pm.'
    ],
    new: [
        'Orders land in one queue.',
        'Stock counts itself down.',
        'Sales are ready when you are.'
    ]
}

export const setupCopy = {
    eyebrow: 'Set up',
    title: 'Open your shop before the chai gets cold.',
    body: 'Three steps, one phone. You do not need a developer or a new number.',
    steps: [
        {
            number: '01',
            title: 'Name the shop. Pick your language.',
            body: 'Choose your business type and start with a catalog that fits it.'
        },
        {
            number: '02',
            title: 'Link WhatsApp.',
            body: 'Open Linked Devices and scan the QR, or enter the 8-digit code.'
        },
        {
            number: '03',
            title: 'Send your first order.',
            body: 'Message the number from another phone. Watch it land on the dashboard.'
        }
    ],
    terminalLabel: 'For the tinkerers',
    terminalTitle: 'dukaan.ai — setup',
    terminalBody: 'Prefer your own server? The shop runs on the laptop you already have.',
    commands: [
        'git clone https://github.com/dishudhalwal12/dukaan.ai.git',
        'cd dukaan.ai && npm install',
        'npm run dev'
    ]
}

export const faq = [
    {
        question: 'Is this another app for my customers?',
        answer: 'No. They message the number they already have. You use the dashboard.'
    },
    {
        question: 'What if the bot gets an order wrong?',
        answer: 'It asks before it confirms, and you see every order before it is accepted. If something is still wrong, reject it or edit the order.'
    },
    {
        question: 'Does it work in my language?',
        answer: 'The app speaks English, Hindi, Tamil, Punjabi, Kannada, Gujarati and Urdu.'
    },
    {
        question: 'Do I need a new number?',
        answer: 'No. Link the number your shop already uses.'
    },
    {
        question: 'What happens when the laptop sleeps?',
        answer: 'The beta bot runs on one laptop at home — it goes quiet when that machine sleeps. We will be honest when it does.'
    },
    {
        question: 'Where does my data live?',
        answer: 'Your catalog and orders sync to your account. Sign in on another device and they come with you.'
    }
]

export const finalCtaCopy = {
    title: 'Your next order is already in the chat.',
    body: 'Set up your shop, link your number, and take the first order today.',
    primaryCta: 'Set up your store',
    secondaryCta: 'Chat on WhatsApp'
}

export const footerCopy = {
    tagline: 'The shop around the corner, now taking orders on WhatsApp.',
    productTitle: 'Product',
    productLinks: [
        { label: 'How it works', href: '/#how' },
        { label: 'Features', href: '/#features' },
        { label: 'For owners', href: '/#owners' },
        { label: 'Setup', href: '/#setup' },
        { label: 'FAQ', href: '/#faq' }
    ],
    resourceTitle: 'Resources',
    legalTitle: 'Legal',
    legalLinks: [
        { label: 'Privacy', href: '/legal#privacy' },
        { label: 'Cookies', href: '/legal#cookies' },
        { label: 'Terms of use', href: '/legal#terms' }
    ],
    copyright: '© 2026 Dukaan.AI',
    note: 'Built in India for neighbourhood shops.'
}

export const collageLines = [
    'They already have the app.',
    'It is called WhatsApp.',
    'Nobody installs anything.'
]

export const ecosystemCopy = {
    eyebrow: 'What the shop runs on',
    title: 'Meet the Dukaan.AI ecosystem',
    body: 'One WhatsApp number, one dashboard and one stock ledger. The work of a shop, split into four quiet steps.'
}

export const networkCopy = {
    eyebrow: 'The network',
    title: 'Built on real shop counters',
    body: 'Dukaan.AI works with the shops that already exist on your street — not with a catalogue of imaginary ones.',
    note: 'With real market experience'
}

export const bigTypeCopy = {
    lead: 'Close the',
    accent: 'notebook.',
    body: 'Stock used to live in your head. Now it counts itself down, order by order.',
    trailing: 'Execution is free. Judgment is yours.'
}

export const tasteCopy = {
    eyebrow: 'Still your shop',
    title: 'Connecting with the missing signal: trust',
    body: 'A customer sends a message and gets a written order back. Not a guess, not an app to install — the same shop, answering in the same language.',
    rolesLabel: 'Shops already on the counter',
    stats: [
        { value: '500M+', label: 'Indian phones with WhatsApp' },
        { value: '400+', label: 'Catalog items a shop starts with' },
        { value: '7', label: 'Languages on day one' }
    ]
}

export const testimonials = [
    {
        quote: 'Earlier the order was a voice note I had to replay twice. Now it arrives as a list with a total, and I only have to say yes.',
        name: 'Rakesh Sharma',
        role: 'Sharma Kirana, Jaipur'
    },
    {
        quote: 'The stock used to be in my head. It went wrong every second week. Now the count is on the screen and it moves on its own.',
        name: 'Meena Patel',
        role: 'Dairy counter, Ahmedabad'
    },
    {
        quote: 'I did not want another app. My customers did not want one either. This one just lives inside the WhatsApp they already had open.',
        name: 'Arjun Nair',
        role: 'Fruits & vegetables, Kochi'
    }
]
