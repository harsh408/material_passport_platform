import React from 'react'
import styled from 'styled-components'

export default function Icons({className}){
    return <Icon className={className}/>
}

const Icon =styled.i`
    fonst-size:12px;
    margin-right:16px;
    color:black;
    cursor:pointer;

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`