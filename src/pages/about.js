import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>More information about the builders.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage