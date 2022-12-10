import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>We build things out of parts.</p>
      <StaticImage
        alt="Gatsby Logo Icon"
        src="../images/icon.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage