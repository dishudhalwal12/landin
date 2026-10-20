import type { FC, ReactNode } from 'react'

import {
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'

const Document: FC = (): ReactNode => {
    return (
        <Html lang='en'>
            <Head>
                <link rel='icon' href='/brand/favicon-32.png' sizes='32x32' type='image/png' />
                <link rel='apple-touch-icon' href='/brand/apple-touch-icon.png' />
                <meta name='theme-color' content='#fbfaf6' />
            </Head>

            <body className='min-h-full flex flex-col'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
