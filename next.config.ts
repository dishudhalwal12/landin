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
    async rewrites() {
        return {
            beforeFiles: [{ source: '/', destination: '/landing.html' }],
            afterFiles: [],
            fallback: []
        }
    }
}

export default nextConfig