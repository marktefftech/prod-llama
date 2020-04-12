import React, { Component } from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const PaginationLink = props => {
    return (
      <Link to={`/blog/${props.url}`} className='button is-rounded'>
        {props.text}
      </Link>
    )
}

export default class BlogPage extends Component {
  render () {
    const { pageContext } = this.props
    const { group, index, first, last } = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'

    const websiteSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    }

    return (
      <Layout>
        <Helmet>
          <title>Book | Llama Mamama</title>
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>
        <section className='hero is-primary is-bold'>
        <div class="iframe-container">
        <iframe src="https://drive.google.com/file/d/1I9aNbVZUZJRkVhJT64k79wFgCbwOD93Y/preview" allowFullScreen></iframe>
        </div>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title'>
                      Book
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
