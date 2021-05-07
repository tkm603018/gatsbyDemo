import React from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my new Tkm. site.</p>
    <p>Now you will know something great.</p>
    <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
