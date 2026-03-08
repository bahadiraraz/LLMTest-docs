import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  redirects: async () => [
    {
      source: '/',
      destination: '/docs',
      permanent: true,
    },
  ],
})
