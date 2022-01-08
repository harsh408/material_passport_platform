import React, {Component} from 'react';

import Dropdown from './dropdown'

class SecondHeader extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='row-flex'>
                    <Dropdown content={"ALL CATEGORIES"}/>
                    <p className='margin-right-16px text-color'>Door</p>
                    <p className='margin-right-16px text-color'>Window</p>
                    <p className='margin-right-16px text-color'>Beams</p>
                    <p className='margin-right-16px text-color'>Columns</p>
                    <p className='margin-right-16px text-color'>Wall Panels</p>
                    <p className='margin-right-16px text-color'>Slabs</p>
                    <p className='margin-right-16px text-color'>Bricks</p>
                    <p className='margin-right-16px text-color'>Recycled Aggregates</p>
                </div>
            </React.Fragment>
        )
    }
}

export default SecondHeader;