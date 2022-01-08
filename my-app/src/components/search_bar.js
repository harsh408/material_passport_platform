import React, {Component} from 'react'
import Icon from './icons';
import styled from 'styled-components';

class SearchBar extends Component{
    render(){
        return (
            <React.Fragment>
                <StyledInput className='bar-styling' placeholder='Find Doors, Windows and more ...' />
                <StyledButton className='login-button'><SearchIcon className="fas fa-search"/></StyledButton>
            </React.Fragment>
        )
    }
}

const StyledInput = styled.input`
    border-right:none;
    border-radius:1px !important;
`
const StyledButton = styled.button`
    max-height:45px !important;
    border-left:none;
    background:black;
    border-radius:1px !important;
    max-width:50px !important;
`
const SearchIcon = styled(Icon)`
    color:#fff;
`

export default SearchBar;