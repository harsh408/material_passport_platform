import React, {Component} from 'react'

class SearchBar extends Component{
    render(){
        return (
            <React.Fragment>
                <input className='bar-styling' placeholder='search' />
            </React.Fragment>
        )
    }
}

export default SearchBar;