import React from 'react'
import { StyledRow, SectionOne, SectionTwo, SectionThree } from '../styles/Footer'

const Footer = () => {
  return (
    <StyledRow>
        <SectionOne>
            5 items left
        </SectionOne>
        <SectionTwo>
            All Active Completed
        </SectionTwo>
        <SectionThree>
            Clear Completed
        </SectionThree>
    </StyledRow>
  )
}

export default Footer