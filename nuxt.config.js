export default {
  mode: 'universal',
  head: {
    title: 'Volea',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    [
      'nuxt-i18n',
      {
        locales: ['fr'],
        defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'fr',
          messages: {
            fr: {
              user_form_username: "Nom d'utilisateur",
              user_form_password: 'Mot de passe',
              user_form_first_name: 'Prénom',
              user_form_last_name: 'Nom',
              user_form_email: 'Email',
              user_form_confirm_password: 'Confimer le mot de passe',
              user_form_birthday: 'Anniversaire',
              user_form_avatar: 'Image de profil',
              signin_form_submit: "S'enregistrer",
              form_submit: 'Valider',
              login_form_submit: 'Se connecter',
              login_form_error:
                'Impossible de se connecter avec ces identifiants',
              menu_login: 'Se connecter',
              menu_my_account: 'Mon compte',
              menu_register: "S'enregistrer",
              menu_logout: 'Se déconnecter'
            }
          }
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://localhost:8000/api'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    middleware: ['auth']
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login/', method: 'post', propertyName: 'key' },
          logout: { url: '/auth/logout/', method: 'post' },
          user: { url: '/auth/user/', method: 'get', propertyName: false }
        },
        tokenType: 'Token',
        autoFetchUser: true
      }
    }
  }
}
