import React from 'react'
import Accordion from '../Component/Pages/Faq/Accordion'
import FaqSection from '../Component/Pages/Faq/FaqSection'

const Faqs = () => {
  return (
    <div>
      <FaqSection title={'faq'} />
      <Accordion />
    </div>
  )
}

export default Faqs