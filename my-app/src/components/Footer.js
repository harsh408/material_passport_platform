import React from 'react'
import styled from 'styled-components'
//import { Container, Wrapper } from 'reactstrap'

const Footer = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Popular Locations</Footer.Title>
                    <Footer.SubTitle>Kolkata</Footer.SubTitle>
                    <Footer.SubTitle>Mumbai</Footer.SubTitle>
                    <Footer.SubTitle>Chennai</Footer.SubTitle>
                    <Footer.SubTitle>Pune</Footer.SubTitle>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Trending Locations</Footer.Title>
                    <Footer.SubTitle>Bhubaneswar</Footer.SubTitle>
                    <Footer.SubTitle>Hyderabad</Footer.SubTitle>
                    <Footer.SubTitle>Chandigarh</Footer.SubTitle>
                    <Footer.SubTitle>Nashik</Footer.SubTitle>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.SubTitle>About Material Pasport</Footer.SubTitle>
                    <Footer.SubTitle>Careers</Footer.SubTitle>
                    <Footer.SubTitle>Contact Us</Footer.SubTitle>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Follow Us</Footer.Title>
                    <Footer.SubTitle>Facebook</Footer.SubTitle>
                    <Footer.SubTitle>Instagram</Footer.SubTitle>
                    <Footer.SubTitle>Twitter</Footer.SubTitle>
                    <Footer.SubTitle>Play</Footer.SubTitle>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Container>
    )
}

Footer.Wrapper = function FooterWrapper({children,...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}
Footer.Row = function FooterRow({children,...restProps}){
    return <Row {...restProps}>{children}</Row>
}
Footer.Column = function FooterColumn({children,...restProps}){
    return <Column {...restProps}>{children}</Column>
}
Footer.Title = function FooterTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}
Footer.SubTitle = function FooterSubTitle({children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}



const Container = styled.div`
    padding: 20px 60px;
    // background:radial-gradient(circle, rgba(92, 39, 251, 1) 0%, rgba(112,71,247,1) 100%);
    background: #D3D3D3;
    bottom:0px;
    left:0px;
`
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   max-width:1000px;
   min-width:0 auto;
`
const Row = styled.div`
   display:grid;
   grid-template-columns:repeat(auto-fill, minmax(230px, 1fr));
   grid-gap:20px
`
const Column = styled.div`
    display:flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`
const Title = styled.div`
    font-size:16px;
    font-weight:bold;
    font-color:blue;  
    margin-bottom: 5px;  
`
const SubTitle = styled.div`
    color: blue;
    margin-bottom: 5px;
    font-size:12px;
    text-decoration:none;

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`
export default Footer
