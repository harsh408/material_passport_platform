import React, {Component} from 'react';
import { GlobalStyles } from '../global-styles';
import Footer from './Footer';

import Header from './header'
import SecondHeader from './second_header'
import ThirdHeader from './third_header'

class DefaultLayout extends Component{
    render(){
        return(
            <React.Fragment>
                <div fluid className="app-header">
                    <Header/>
                </div>
                <div fluid className='app-header'>
                    <SecondHeader/>
                </div>
                {/* <GlobalStyles/> */}
                <div fluid className='app-header'>
                    <ThirdHeader/>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default DefaultLayout;