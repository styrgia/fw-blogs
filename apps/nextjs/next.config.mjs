import { nanoid } from 'nanoid';
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,

    poweredByHeader: false,

    cleanDistDir: true,

    swcMinify: true,

    generateBuildId: () => `${nanoid()}-${new Date().toISOString()}`,

    devIndicators: {
        buildActivity: true,
        buildActivityPosition: 'top-right',
    },

    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(nextConfig);
