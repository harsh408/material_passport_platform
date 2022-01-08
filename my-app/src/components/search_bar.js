import React, {Component} from 'react'
import SearchIcon from "@material-ui/icons/Search";

class SearchBar extends Component{
    render(){
        return (
            <React.Fragment>
                <input className='bar-styling' placeholder='Find Doors, Windows and more ...' />
            </React.Fragment>
        )
    }
}

export default SearchBar;