export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/lukhaiminh/15min',
    available: true,
  },
  profile: {
    name: 'MooN',
    job: 'Full Stack Developer and Architect',
    email: 'lukhaiminh@gmail.com',
    phone: '(+84) 868 056 818',
    picture: 'https://avatars.githubusercontent.com/u/6848406?v=4',
  },
  socials: {
    github: 'https://github.com/lukhaiminh',
    twitter: 'https://twitter.com/lukhaiminh__',
    linkedin: 'https://www.linkedin.com/in/lukhaiminh', 
    instagram: 'https://www.instagram.com/#',
    spotify: 'https://open.spotify.com/user/#',
  },
  seo: {
    title: 'Canvas a Nuxt portfolio template',
    description: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by lukhaiminh',
    url: 'https://lukhaiminh-portfolio.nuxt.space',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
    // contentSearch: {
    //   slots: {
    //     modal: '',
    //     input: '[&>input]:text-base/5'
    //   },
    //   variants: {
    //     fullscreen: {
    //       false: {
    //         modal: 'sm:max-w-3xl sm:h-[28rem]'
    //       }
    //     }
    //   }
    // }
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
