import React from 'react'
import Greeting from '../components/greeting'
import Layout from '../components/layout'

function SayHelloPage() {
  return (
    <Layout pageTitle="Greetings">
        <div>
            <Greeting name="Megan" />
            <Greeting name="Penelope" />
            <Greeting name="Suzanne" />
        </div>
    </Layout>
  )
}

export const Head = () => <title>Greetings</title>

export default SayHelloPage