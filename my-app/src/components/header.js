import React, {Component} from 'react';
import {Nav} from 'reactstrap';

import logo from './../utils/logo.jpg';

import Dropdown from './dropdown'
import Searchbar from './search_bar'
import LoginButton from  './login_buttons'
import SellButton from './sell_button'

class Header extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="row-flex">
                <nav className="nav">
                    <div className="m-0 p-0 mt-2">
                        <img  src={logo} alt="fireSpot" className="logo-img"/>
                    </div>
                </nav>
                <Dropdown content={"INDIA"}/>
                <Searchbar/>
                <Dropdown content={"ENGLISH"}/>
                <LoginButton/>
                <SellButton/>
            </div>
            </React.Fragment>
        )
    }
}

export default Header;