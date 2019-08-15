/* eslint-disable jsx-a11y/anchor-is-valid */
import cns from '@sindresorhus/class-names'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'

import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Logo = styled.span`
  margin-right: 1rem;
  font-family: 'Dr Sugiyama', cursive;
`

const routes = [
  { name: 'About', route: '/about' },
  { name: 'Projects', route: '/projects' },
  { name: 'Contact', route: '/contact' },
]

const HeaderNav = () => {
  const [navState, setNavState] = useState(false)
  const toggleNavState = event => {
    event.preventDefault()
    setNavState(!navState)
  }

  const activeClass = { 'is-active': navState }
  const burgerClass = cns('navbar-burger', 'burger', activeClass)
  const navMenuClass = cns('navbar-menu', 'has-text-centered', activeClass)

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-padding" />

        <Link to="/" className="navbar-item">
          <Logo>
            <span>TR.</span>
          </Logo>
        </Link>
        <a
          role="button"
          className={burgerClass}
          onClick={toggleNavState}
          onKeyPress={toggleNavState}
          tabIndex={0}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className={navMenuClass}>
        <div className="navbar-end">
          {routes.map(({ name, route }) => (
            <Link
              to={route}
              className="navbar-item"
              key={name}
              activeClassName="is-active"
              style={{ color: 'var(--textTitle)' }}
            >
              {name}
            </Link>
          ))}
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label className="navbar-item">
                <input
                  type="checkbox"
                  style={{ opacity: 0 }}
                  onChange={e =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={theme === 'dark'}
                />{' '}
                <i className="e1a-stars" />
              </label>
            )}
          </ThemeToggler>
        </div>
      </div>
      <div className="navbar-padding" />
    </nav>
  )
}

export default HeaderNav
