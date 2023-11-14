import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AM Framework</span>,
  project: {
    link: 'https://github.com/AM-Framework/documentation',
  },
  chat: {
    link: 'https://discord.gg/yrUVURQ3KP',
  },
  docsRepositoryBase: 'https://github.com/AM-Framework/',
  footer: {
    text:  `Copyright @  ${new Date().getFullYear()} AM Framework`,
  },
}

export default config
