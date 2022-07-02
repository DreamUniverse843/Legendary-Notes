module.exports = {
    title : 'Legendary-Notes',
    description : 'Legendary-Notes',
    evergreen : true,
    base : '/',
    locales: {
        '/':{
            lang : 'zh-CN',
            title : 'Legendary-Notes',
        }
    },
    themeConfig :{
        repo : 'DreamCraft-Tech/DreamCraft-Docs',
        docsBranch : 'master',
        docsDir : 'docs',
        editLinks : true,
        locales :{
            '/':{
                selectText : '选择语言',
                label : '简体中文',
                docsDir : 'docs',
                editLinkText : '在 Github 上提交更改',
                lastUpdated : '最后更新',
                sidebar:'auto',
                nav:[
                    {
                        text:'学科选择',
                        ariaLabel:'Subjects Menu',
                        items:[
                            { text:'数学',link:'/maths/'},
                            { text:'语文',link:'/chinese/'},
                            { text:'英语',link:'/english/'}
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
        }
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