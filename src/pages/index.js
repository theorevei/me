/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Logo = styled(Img)`
  overflow: visible !important;
  filter: drop-shadow(0 6px 3px rgba(0, 0, 0, 0.3));
  margin: auto;
  margin-bottom: 1rem;
  max-width: 500px;
  transform: scale(1.02);
  transition: all 0.3s ease;
`

const Container = ({ children }) => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container has-text-centered">{children}</div>
    </div>
  </section>
)

const Index = ({ data }) => (
  <Layout
    hideFooter
    style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
    }}
  >
    <Container>
      <figure className="image">
        <div>
          <Logo fluid={data.img.childImageSharp.fluid} alt="logo" />
        </div>
      </figure>
    </Container>
  </Layout>
)

export default Index

export const query = graphql`
  {
    img: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
