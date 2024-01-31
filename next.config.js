/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true, //enables experimental server actions, which allows for server-side logic to be performed during the server rendering phase of Next.js.
    }

}

module.exports = nextConfig
