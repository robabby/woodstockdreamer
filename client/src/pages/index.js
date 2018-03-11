import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import pic01 from '../images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount () {
    console.log(this.state.article);
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  render() {
    const articles = this.props.data.allStrapiArticle.edges
    console.log("/articles/", articles);

    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>

        <div id="wrapper">

          <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
          <Main
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            articles={articles}
            onCloseArticle={this.handleCloseArticle}
          />
          <Footer timeout={this.state.timeout} />

        </div>

        <div id="bg"></div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query PageAndArticleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`
