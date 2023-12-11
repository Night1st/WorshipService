/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  distDir: "build", //this line will tell the build to create a file with this name
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["khoinguonsangtao.vn", "media.istockphoto.com" ,"vanhoadoisong.vn", "c4.wallpaperflare.com", "digital-dialogues.net"],
  },
}

module.exports = nextConfig
