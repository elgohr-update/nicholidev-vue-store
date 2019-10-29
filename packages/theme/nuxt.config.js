
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    ['@vue-storefront/nuxt', {
      coreDevelopment: true,
      useRawSource: {
        prod: [        
          '@vue-storefront/composables',
          '@vue-storefront/api-client'
        ]
      }
    }]
  ]
}