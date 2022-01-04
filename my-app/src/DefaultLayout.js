import React, {Component} from 'react';

import Header from './header'

class DefaultLayout extends Component{
    render(){
        return(
            <React.Fragment>
                <div fluid className="app-header">
                    <Header/>
                </div>
            </React.Fragment>
        );
    }
}

export default DefaultLayout;