import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hey there from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the home</Link>
  </Layout>
)

export default SecondPage
