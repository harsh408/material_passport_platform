import React, {Component} from 'react';
import {UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

class Dropdown extends Component{
    render(){
        return (
            <React.Fragment>
                <UncontrolledButtonDropdown className="view-as-dropdown">
                    <DropdownToggle color="primary" className="dropdown-toggle">
                        {this.props.content}
                        <ArrowDropDownIcon className="dropdown-toggle-caret"/>
                    </DropdownToggle>
                </UncontrolledButtonDropdown>
            </React.Fragment>
        )
    }
}

export default Dropdown;