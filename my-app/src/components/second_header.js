import React, {Component} from 'react';

import Dropdown from './dropdown'

class SecondHeader extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='row-flex'>
                    <Dropdown content={"ALL_CATEGORIES"}/>
                    <p className='margin-right-16px'>Door</p>
                    <p className='margin-right-16px'>Window</p>
                    <p className='margin-right-16px'>Beams</p>
                    <p className='margin-right-16px'>Columns</p>
                    <p className='margin-right-16px'>Wall Panels</p>
                    <p className='margin-right-16px'>Slabs</p>
                    <p className='margin-right-16px'>Bricks</p>
                    <p className='margin-right-16px'>Recycled Aggregates</p>
                </div>
            </React.Fragment>
        )
    }
}

export default SecondHeader;