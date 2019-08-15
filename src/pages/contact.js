import { graphql } from 'gatsby'
import React from 'react'

import Head from '../components/Head'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Section from '../components/Section'
import trimProtocol from '../helpers/trimProtocol'

// eslint-disable-next-line react/prop-types
const Links = ({ data }) => (
  <Layout
    style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
    }}
  >
    <Head pageTitle="Links" />
    <Section className="content">
      <h1 className="title" style={{'color': 'var(--textTitle)'}}>Contact</h1>
      <br />
      {data.links.edges.map(({ node }) => (
        <React.Fragment key={node.name}>
          <h6 style={{'color': 'var(--textTitle)'}}>{node.name}</h6>
          <ul>
            {node.links.sort().map(({ link, description }) => (
              <li key={link}>
                {description && <span>{description} - </span>}
                <Link href={link} style={{ color: 'var(--textLink)' }}>
                  {trimProtocol(link)}
                </Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </Section>
  </Layout>
)

export default Links

export const query = graphql`
  {
    links: allContactJson {
      edges {
        node {
          name
          links {
            link
            description
          }
        }
      }
    }
  }
`
