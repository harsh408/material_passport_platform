import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

const ModalContent = styled.div`
 display: flex;
 flex-direction: coloumn;
 justify-content: center;
 align-items: center;
 line-height:1.8;
 color: #fff;

 p {
     margin-bottin: 1rem;
 }

 button{
     padding: 10px 24px;
     background: #141414;
     color: #fff;
     border: none;
 }
 `;

const Background = styled.div`
    width:800px;
    height:500px;
    background: rgba(0,0,0,0.8);
    position:fixed;
    display:flex;
    justify-content:center;
    aligh-items:center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    backgound:#fff;
    color:#000;
    display:grid;
    grid-template-columns:1fr 1fr;
    position: relative;
    z-index:10;
    border-radius:10px;
`

const CloseModalButton = styled(MdClose)`
    cursor:pointer;
    position:absolute;
    top:20px;
    right:20px;
    width:32px;
    height:32px;
    padding:0;
    z-index:10;
    color:white;
`

const Modal = ({showModal,setShowModal,image,description}) => {
    return (
        <>
            {showModal ?(
               <Background >
                   <ModalWrapper showModal={showModal}>
                       <ModalContent>
                        </ModalContent>
                       <CloseModalButton 
                       aria-label='Close modal' 
                       onClick={()=> setShowModal(
                           prev => !prev
                       )}/>
                   </ModalWrapper>
               </Background>
            )
            :null}
        </>
    )
}

export default Modal
