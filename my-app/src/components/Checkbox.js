import React from 'react'
import styled from 'styled-components'

const Checkbox = () => {
    return (
        <>
           <p>Choose from the below options:</p>
        <CheckboxContainer>
           <div>
                <input type="checkbox" id="precast-products" name="precast-products"/>
                <label for="precast-products">Precast Products</label>
            </div>
            <div>
                <input type="checkbox" id="steel-products" name="steel-products"/>
                <label for="steel-products">Steel Products</label>
            </div> 
            <div>
                <input type="checkbox" id="timber-products" name="timber-products"/>
                <label for="timber-products">Timber Products</label>
            </div> 
            <div>
                <input type="checkbox" id="earthen-products" name="earthen-products"/>
                <label for="earthen-products">Earthen Products</label>
            </div> 
        </CheckboxContainer>
        </>
        
    )
}

export default Checkbox

const CheckboxContainer = styled.div`
display: flex;
flex-wrap:wrap;
align-content: left;
width:150px;
`