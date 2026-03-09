import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: 'assertllm — The pytest for LLMs',
  description: 'Test your AI outputs like you test your code. Fast, Pydantic-based assertions for AI applications.',
}

const navbar = (
  <Navbar
    logo={<span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><img src="/icon.svg" alt="" width={20} height={20} /><b>assertllm</b></span>}
    projectLink="https://github.com/bahadiraraz/llmtest"
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © Bahadır Araz
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/bahadiraraz/llmtest/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
