import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 2fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  line-height: 1.8;
  color: #fff;
  border-radius: 0px 10px 10px 0px;
  background: rgba(0, 0, 0, 0.8);
  padding-top:20px;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({showModal,setShowModal,image,description}) => {
    return (
        <>
            {showModal ?(
               <Background >
                   <ModalWrapper showModal={showModal}>
                    <ModalImg src={image}/>
                    <ModalContent>
                     <h1>{description}</h1>                         
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
