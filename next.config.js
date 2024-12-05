/** @type {import('next').NextConfig} */

const nextConfig = {
	trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
	async redirects() {
		return [
			{
				source: '/codingedu',
				destination: '/codingedu/index.html',
				permanent: true,
			},

			{
				source: '/vocarong',
				destination: '/vocarong/index.html',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
