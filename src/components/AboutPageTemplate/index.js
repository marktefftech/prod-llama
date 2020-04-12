import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import Author from '../../assets/img/author.jpg'

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero is-primary is-bold is-medium'>
      <img src={Author} alt="Page describing the Author Maria" />
      </section>
  </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
