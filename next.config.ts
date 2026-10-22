import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'standalone',
    poweredByHeader: false,
    devIndicators: false,
    typescript: {
        ignoreBuildErrors: true
    },
    productionBrowserSourceMaps: false,
    experimental: {
        optimizePackageImports: ['lucide-react'],
        cpus: 1,
        workerThreads: false
    },
    async redirects() {
        return [
            { source: '/research/:path*', destination: '/', permanent: false },
            { source: '/jobs/:path*', destination: '/', permanent: false }
        ]
    },
    async headers() {
        return [
            {
                source: '/framer/:path*',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
            },
            {
                source: '/vendor/:path*',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
            },
            {
                source: '/assets/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }
                ]
            }
        ]
    },
    async rewrites() {
        return {
            beforeFiles: [{ source: '/', destination: '/landing.html' }],
            afterFiles: [],
            fallback: []
        }
    }
}

export default nextConfig