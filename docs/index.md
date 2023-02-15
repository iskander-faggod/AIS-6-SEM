---
layout: home
title: Welcome

hero:
  name: Архитектура информационных систем
  tagline:  Конспект лекций по курсу Александра Маятина
  image:
    src: http://isu.ifmo.ru/pls/apex/f?p=2143:0::AVATAR:NO::T_UID:114568
  actions:
    - theme: brand
      text: Приступить к изучению
      link: /lectures/

features:
  - icon: 📚
    title: Подробный конспект
    details: Все лекции разбиты на подробные главы
  - icon: 🤝
    title: Одобрено сообществом
    details: Этот конспект пишется и редактируется студентами
  - icon: 📝
    title: Интересный материал
    details: В целом, это просто интересно!
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/60395869?v=4',
    name: 'Искандер Кудашев',
    title: 'Владелец сайта',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/36822207?v=4',
    name: 'Александр Мирошниченко',
    title: 'Техническая поддержка',
    links: [
      { icon: 'github', link: 'https://github.com/sashafromlibertalia' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #lead>
      Авторы проекта
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
