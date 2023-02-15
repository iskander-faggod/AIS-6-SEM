import { getLectures } from "../../utils"

export default {
  title: "Архитектура ИС",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Все лекции', link: '/lectures/' },
      { text: 'Гайды', link: '/guides/' },
    ],
    editLink: {
      pattern: 'https://github.com/iskander-faggod/AIS-6-SEM/edit/master/docs/:path',
      text: 'Редактировать на GitHub',
    },
    sidebar: [
      {
        text: 'Лекции',
        items: getLectures().map(item => {
          return {
            text: `Лекция ${item}`,
            link: `/lectures/${item}`,
          }
        })
      },
      {
        text: 'Гайды',
        items: [
          { text: 'Как добавить лекцию', link: '/guides/add-lecture' },
        ],
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/iskander-faggod/AIS-6-SEM',
      }
    ],
    footer: {
      message: 'Студенты ИСа',
      copyright: '© Университет ИТМО',
    },
  },
}
