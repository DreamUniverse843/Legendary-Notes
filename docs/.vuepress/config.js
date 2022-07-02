module.exports = {
    title : 'Legendary-Notes',
    description : 'Legendary-Notes',
    evergreen : true,
    base : '/Legendary-Notes/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
      ],
    locales: {
        '/':{
            lang : 'zh-CN',
            title : 'Legendary-Notes',
        }
    },
    themeConfig :{
        repo : 'DreamUniverse843/Legendary-Notes',
        docsBranch : 'main',
        docsDir : 'docs',
        editLinks : true,
        locales :{
            '/':{
                selectText : '选择语言',
                label : '简体中文',
                docsDir : 'docs',
                editLinkText : '在 Github 上提交更改',
                lastUpdated : '最后更新',
                nav:[
                    {
                        text:'学科选择',
                        ariaLabel:'Subjects Menu',
                        items:[
                            { text:'数学',link:'/maths/'},
                            { text:'语文',link:'/chinese/'},
                            { text:'英语',link:'/english/'},
                            { text: '历史', items: [
                                { text: '选择性必修一' , link:'/history/optional-1/'},
                            ] },
                        ]
                    }
                ]
            },
            '/en/':{
                selectText : 'Language',
                label : 'English',
                docsDir : 'docs/en',
                editLinkText : 'Commit Changes on Github',
                lastUpdated : 'Last updated on'
            }
        },
        sidebar:{
            '/maths/':[
                'Module1',
            ],
            '/history/optional-1/':[
                'lesson1',
                'lesson2',
            ],
            '/':[
                '',
            ],
        },
    },
    plugins: [
        [
          'vuepress-plugin-mathjax',
          {
            target: 'svg',
            macros: {
              '*': '\\times',
            },
          },
        ],
      ]
  }
