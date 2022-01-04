import React, {Component} from 'react';

import Header from './header'
import SecondHeader from './second_header'

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
            </React.Fragment>
        );
    }
}

export default DefaultLayout;