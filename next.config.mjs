/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "./src/app/styles/_mantine.scss";`,
  },
};

export default nextConfig;
