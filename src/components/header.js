import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


import { Typography } from '@material-ui/core';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#123456`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
      }}
    >
      <Typography
        variant="h4"
        style={{ fontWeight: 600 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              flexGrow: 1,
            }}
          >
            {siteTitle}
          </Link>
      </Typography>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
