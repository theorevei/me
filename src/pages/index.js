/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState } from 'react'
import styled from 'styled-components'

import Email from '../components/Email'
import Layout from '../components/Layout'
import LogoSVG from '../images/logo.svg'

const Logo = styled.div`
  cursor: pointer;
  filter: drop-shadow(0 6px 3px rgba(0, 0, 0, 0.3));
  margin: auto;
  margin-bottom: 1rem;
  max-width: 500px;
  transform: scale(1.02);
  transition: all 0.3s ease;
  & < div {
    overflow: inherit;
  }

  &:hover {
    transform: scale(1.08) rotate(1deg);
    filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.2));
  }

  &:active {
    transform: scale(1.04) rotate(0.5deg);
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 20px;
    top: 20px;
    border-radius: 50%;

    background: linear-gradient(
      45deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000
    );
    background-size: 400%;
    width: calc(90% + 4px);
    height: calc(90% + 4px);
    z-index: -1;
    animation: steam 20s linear infinite;
  }
  @keyframes steam {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    filter: blur(50px);
  }
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
        <Logo>
          <div>
            <img style={{ borderRadius: '50%' }} src={LogoSVG} alt="logo" />
          </div>
        </Logo>
      </figure>
    </Container>
  </Layout>
)

export default Index

export const query = graphql`
  {
    img: file(relativePath: { eq: "test.svg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
