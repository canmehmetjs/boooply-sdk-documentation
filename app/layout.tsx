import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Boooply Docs — AI Interviews SDK',
  description: 'Documentation for Boooply AI Interviews platform — SDK, API reference, and integration guides.',
}

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <img
          src="https://boooply-public-bucket.s3.eu-central-1.amazonaws.com/boooply-assets/logo/boooplyLogo.png"
          alt="Boooply"
          height={20}
          style={{ height: 20 }}
        />
        <span style={{ fontSize: 13, fontWeight: 500, opacity: 0.35 }}>Docs</span>
      </span>
    }
    projectLink="https://github.com/canmehmetjs/boooply-sdk-documentation"
  />
)

const footer = (
  <Footer>
    <span>
      {new Date().getFullYear()} © Boooply by{' '}
      <a href="https://55.studio" target="_blank" rel="noopener noreferrer">
        55 Studio
      </a>
    </span>
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/canmehmetjs/boooply-sdk-documentation/tree/main"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          nextThemes={{ defaultTheme: 'dark' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
