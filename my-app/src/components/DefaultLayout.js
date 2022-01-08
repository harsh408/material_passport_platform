import React, {Component} from 'react';
import { GlobalStyles } from '../global-styles';
import Footer from './Footer';

import Header from './header'
import SecondHeader from './second_header'
import ThirdHeader from './third_header'
import Grid from './grid'

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
                {/* <GlobalStyles/> */}
                <header fluid className='app-header'>
                    <ThirdHeader/>
                </header>
                <Grid/>
                <footer className='footer-fix'>
                    <Footer/>
                </footer>
            </React.Fragment>
        );
    }
}

export default DefaultLayout;