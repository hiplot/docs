module.exports = {
    base: '/docs/',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Documents',
            description: 'Visualization'
        },
        '/': {
            lang: 'zh-CN',
            title: '使用文档',
            description: '可视化'
        }
    },
    themeConfig: {
        locales: {
            // 键名是该语言所属的子路径
            // 作为特例，默认语言可以使用 '/' 作为其路径。
            '/en/': {
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
                    { text: 'Docs', link: '/' },
                    {
                        text: 'Extra',
                        items: [
                            { text: 'Home', link: 'http://61.129.70.139:3030' },
                            { text: 'Community', link: 'https://discord.com/channels/708006569765502996/708006570411163752' },
                        ]
                    }
                ],
                algolia: {},
                sidebar: [
                    {
                        title: 'Introduction',
                        collapsable: true,
                    },
                ],
            },
            '/': {
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
                    { text: '文档', link: '/' },
                    {
                        text: '其他链接',
                        items: [
                            { text: '主页', link: 'http://61.129.70.139:3030/' },
                            { text: '用户频道', link: 'https://discord.com/channels/708006569765502996/708006570411163752' },
                        ]
                    }
                ],
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                sidebar: [
                    {
                        title: '简介',
                        collapsable: true,
                        children: [
                            '/usage/',
                        ]
                    }
                ],
            }
        },

        sidebarDepth: 1,
        activeHeaderLinks: true,
        displayAllHeaders: true,
        repo: 'Miachol/hiplot',

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
