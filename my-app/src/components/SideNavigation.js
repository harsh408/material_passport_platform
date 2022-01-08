import React from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
import { Title } from './Footer'
import PricePerSqFeet from './PricePerSqFeet'
import Pricing from './Pricing'

const SideNavigation = () => {
    return (
        <StyledNav>
            <TopNav>
                <StyledTitle>BUDGET</StyledTitle>
                <Pricing/>
            </TopNav>
            <TopNav>
                <StyledTitle>TYPE</StyledTitle>
                <Checkbox/>
            </TopNav>
            <TopNav>
                <StyledTitle>PRICE PER SQ. FT.</StyledTitle>
                <PricePerSqFeet/>
            </TopNav>
        </StyledNav>
    )
}

export default SideNavigation

const StyledTitle = styled(Title)`
    text-align:left;
    margin-top:20px;
`

const TopNav = styled.div`
border-bottom:1px solid #c8ced3;
`

const StyledNav = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #fff;
    margin:10px;
    margin-right:100px !important;
    border-right:1px solid #c8ced3;
    padding:10px;
    width: 250px;
`