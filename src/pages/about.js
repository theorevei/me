import { graphql, Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import Email from '../components/Email'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Section from '../components/Section'

const Sig = styled(Img)`
  margin: auto;
  margin-top: 2rem;
  max-width: 128px;
`

// eslint-disable-next-line react/prop-types
const About = ({ data }) => (
  <Layout
    style={{
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
    }}
  >
    <Head pageTitle="About" />
    <Section className="content">
      <h1 className="title">
        <i className="e1a-wave_tone1" />
      </h1>
      <p>
        I was born in Valence in France, but I tend to be in a lot of difference
        places around the world.
      </p>
      <p>
        Sometimes, I try to stay at some places and earn experiences from
        companies and agencies. My first developer job was at{' '}
        <Link style={{ color: 'var(--textLink)' }} href="https://cansii.com/">
          Cansii
        </Link>{' '}
        back in 2013. Then I went to Japan for a whole year and found in love
        with this country. Back to France, I worked for a press and digital
        advertising company called{' '}
        <Link
          style={{ color: 'var(--textLink)' }}
          href="https://www.prodigious.com/our_services/prodigiouscloud/"
        >
          Prodigious
        </Link>
        . In 2018, I flewed to Autralia and southern asia.
      </p>
      <p>
        June 2019 was really a turning point for me: I wanted to focus and
        contribute on the open source world. Since then I enjoy working with web
        technologies such as React, Gatsby, NodeJS. I also like playing with
        design technologies such as threeJS, css animations and Adobe editing
        softwares.
      </p>
      <p>
        For any assigment, you can reach me on{' '}
        <Email style={{ color: 'var(--textLink)' }} to="trvd.protonmail.com" />{' '}
        or for private matters:{' '}
        <Email
          style={{ color: 'var(--textLink)' }}
          to="reveillard.theo@gmail.com"
        />
        .
      </p>
      <div className="has-text-centered"></div>
    </Section>
  </Layout>
)

export default About

export const query = graphql`
  {
    sig: file(relativePath: { eq: "Signature.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
