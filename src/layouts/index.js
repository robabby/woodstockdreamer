import React from 'react'
import get from 'lodash/get'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

class Template extends React.Component {

  render() {
    const { location, children } = get(this, 'props')
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  route: React.PropTypes.object,
}

export default Template

export const pageQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
