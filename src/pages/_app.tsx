import '@/styles/globals.css'

import type { FC, ReactNode } from 'react'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import { Geist_Mono, Inter, Source_Serif_4 } from 'next/font/google'

const sans = Inter({
    subsets: ['latin'],
    display: 'swap'
})

const serif = Source_Serif_4({
    subsets: ['latin'],
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    display: 'swap'
})

const mono = Geist_Mono({
    subsets: ['latin'],
    display: 'swap'
})

const fontVariables = `:root{--font-app-sans:${sans.style.fontFamily}, "Noto Sans", ui-sans-serif, system-ui, sans-serif;--font-app-heading:${serif.style.fontFamily}, Georgia, ui-serif, serif;--font-app-mono:${mono.style.fontFamily}}`

const App: FC<AppProps> = ({ Component, pageProps }): ReactNode => {
    return (
        <div className='h-full font-sans'>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: fontVariables }} />
            </Head>

            <Component {...pageProps} />
        </div>
    )
}

export default App
