import React, {Component} from 'react';
import Footer from './Footer';
import styled from 'styled-components';
import Header from './header'
import SecondHeader from './second_header'
import ThirdHeader from './third_header'
import Grid from './grid'
import SideNavigation from './SideNavigation';

class DefaultLayout extends Component{
    render(){
        return(
            <React.Fragment>
                <header fluid className="app-header">
                    <Header/>
                </header>
                <header fluid className='app-header'>
                    <SecondHeader/>
                </header>
                <header fluid className='app-header'>
                    <ThirdHeader/>
                </header>
                <ContentWrapper>
                <SideNavigation/>
                <Grid/>
                </ContentWrapper>
                <footer className='footer-fix'>
                    <Footer/>
                </footer>
            </React.Fragment>
        );
    }
}

const ContentWrapper = styled.section`
    display:flex;
    flex-direction:row;
`

export default DefaultLayout;