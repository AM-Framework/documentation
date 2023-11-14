import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src='https://media.discordapp.net/attachments/1091394960894480475/1173927925351985172/image.png?ex=6565bc93&is=65534793&hm=7d8eb75897adca88a33e05c272a44fa8723ced700d71aa2fe72d61688d98e11a&=&width=50&height=50'></img>,
  project: {
    link: 'https://github.com/AM-Framework/documentation',
  },
  chat: {
    link: 'https://discord.gg/yrUVURQ3KP',
  },
  docsRepositoryBase: 'https://github.com/AM-Framework/',
  footer: {
    text: `Copyright @  ${new Date().getFullYear()} AM Framework`,
  },
}

export default config
