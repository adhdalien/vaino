import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>We build things out of parts.</p>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage