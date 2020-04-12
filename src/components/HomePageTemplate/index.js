import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import P1 from '../../assets/img/pagina1.png'
import { Link } from 'gatsby'
import '../../css/layout.css'


const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div className='problemChild'>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section  className='hero is-primary is-bold is-medium'>
        <img src={P1}  alt="Background of Llama" />     
        <button className="homeButton"><Link className='bookText' to="/blog/">Start Book</Link></button> 
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
