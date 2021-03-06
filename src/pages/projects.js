/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import React from 'react'

import Head from '../components/Head'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Section from '../components/Section'

const Projects = ({ data }) => (
  <Layout
    style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
    }}
  >
    <Head pageTitle="Open Source" />
    <Section className="content">
      <h1 className="title" style={{ color: 'var(--textTitle)' }}>
        Projects
      </h1>
      <p>Here are some projects I authored</p>
      <br />
      {data.repos.edges.map(({ node }) => (
        <React.Fragment key={node.type}>
          <ul>
            {node.repos.map(({ name, description, url }) => (
              <li key={name}>
                <Link href={url} style={{ color: 'var(--textLink)' }}>
                  {name}
                </Link>{' '}
                - {description}
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </Section>
  </Layout>
)

export default Projects

export const query = graphql`
  {
    repos: allProjectsJson {
      edges {
        node {
          type
          repos {
            url
            name
            description
          }
        }
      }
    }
  }
`
