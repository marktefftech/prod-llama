import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'
import A1 from '../../assets/img/A1.jpg'
import A2 from '../../assets/img/A2.jpg'

const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
  pricing,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-medium'>
      <h1 style={{alignSelf: "center"}}> Learn Together </h1>
      <img src={A1} alt="Activity one parents helping kids" />
      <h1 style={{alignSelf: "center"}}> Popsicle stick puppets </h1>
      <img src={A2} alt="Activity two popsicle stick puppets" />
      <h1 style={{alignSelf: "center"}}> More coming soon </h1>
    </section>
  </div>
)

PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

export default PricingPageTemplate
