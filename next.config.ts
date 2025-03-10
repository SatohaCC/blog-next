import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true,
        reactRemoveProperties: {
            properties: ["^data-testid$"],
        },
    },
};

export default nextConfig;
