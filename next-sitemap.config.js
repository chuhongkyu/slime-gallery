/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://slime-gallery.vercel.app/',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
    exclude: [
        '/detail'
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/detail',
                ]
            },
        ]
    }
}