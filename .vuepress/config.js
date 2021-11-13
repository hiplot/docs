module.exports = {
    base: '/docs/',
    head: [
        // 添加百度统计
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function () {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?0b834e1080e98dd6144a263303f8bd1b";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
            `
        ]
    ],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            "title": 'Hiplot',
            description: 'Visualization'
        },
        '/zh/': {
            lang: 'zh-CN',
            "title": 'Hiplot',
            description: '可视化'
        }
    },
    themeConfig: {
        locales: {
            // 键名是该语言所属的子路径
            // 作为特例，默认语言可以使用 '/' 作为其路径。
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    { text: 'Home', link: 'https://hiplot.com.cn' },
                    { text: 'Docs', link: '/' },
                    { text: 'Community', link: 'https://discord.com/channels/708004190286381068' },
                ],
                algolia: {},
                sidebar: [
                    {
                        "title": 'Introduction',
                        collapsable: true,
                        children: [
                            '/',
                            '/modules',
                            '/hisub',
                            '/env',
                            '/download/',
                            '/qa',
                            '/contribute',
                            '/about'
                        ]
                    },
                    {
                        "title": 'Getting Started',
                        collapsable: true,
                        children: [
                            '/usage/basic/',
                            '/usage/advance/',
                            '/usage/mini-tools/',
                            '/usage/clinical-tools/'
                        ]
                    }
                ],
            },
            '/zh/': {
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                nav: [
                    { text: '主页', link: 'https://hiplot.com.cn' },
                    { text: '文档', link: '/zh/' },
                    { text: '用户社区', link: 'https://discord.com/channels/708004190286381068' },
                ],
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                sidebar: [
                    {
                        "title": '简介',
                        collapsable: true,
                        children: [
                            '/zh/',
                            '/zh/modules',
                            '/zh/hisub',
                            '/zh/download/'
                        ]
                    },
                    {
                        "title": '入门指南',
                        collapsable: true,
                        children: [
                            '/zh/usage/basic/',
                            '/zh/usage/advance/',
                            '/zh/usage/mini-tools/',
                            '/zh/usage/clinical-tools/'
                        ]
                    },
                    {
                        "title": '开发指南',
                        collapsable: true,
                        children: [
                            '/zh/development-guides/',
                            '/zh/development-guides/bs4dash',
                            '/zh/development-guides/run'
                        ]
                    }
                ],
            }
        },

        sidebarDepth: 2,
        activeHeaderLinks: false,
        displayAllHeaders: true,
        repo: 'hiplot/docs',

        lastUpdated: 'Last Updated',
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': '../'
            }
        }
    }
}
