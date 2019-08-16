import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import Email from '../components/Email'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Section from '../components/Section'

// eslint-disable-next-line react/prop-types
const About = ({ data }) => (
  <Layout
    style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
    }}
  >
    <Head pageTitle="About" />
    <Section className="content">
      <h1 className="title">
        <i className="e1a-wave_tone1" />
      </h1>
      <h6 className="title is-size-6" style={{ color: 'var(--textTitle)' }}>
        You can find my CV{' '}
        <a
          href="https://drive.google.com/open?id=1Cl3eyUWbW6EZB5S-mzl0NW8H1k-e9dJr"
          style={{ color: 'var(--textLink)' }}
        >
          in french here
        </a>
      </h6>
      <p>
        I was born in Valence, France, but I’ve been a lot of different places
        around the world.
      </p>
      <p>
        Nevertheless, I stayed at some places and earned professional
        experiences from companies and agencies. My first developer job was at{' '}
        <Link style={{ color: 'var(--textLink)' }} href="https://cansii.com/">
          Cansii
        </Link>{' '}
        back in 2013. Then I went to Japan for a whole year and immediately fell
        in love with this country. Back in France, I worked for a press and
        digital advertising company named{' '}
        <Link
          style={{ color: 'var(--textLink)' }}
          href="https://www.prodigious.com/our_services/prodigiouscloud/"
        >
          Prodigious
        </Link>
        . In 2018 I flewed to Autralia and southern asia later on.
      </p>
      <p>
        June 2019 has undoubtedly been a turning point for me: I would like to
        focus more on web development. Since then, I’ve enjoyed working with
        technologies such as React, Gatsby, NodeJS. I also like playing with
        design tools and librairies such as threeJS, CSS Animations and Adobe
        Editing Softwares.
      </p>
      <p>
        For any assigment, you can reach me on{' '}
        <Email style={{ color: 'var(--textLink)' }} to="trvd.protonmail.com" />{' '}
        or for private matters,{' '}
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
