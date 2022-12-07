import React from "react";
import styled from "styled-components";

const Background = styled.div`
width:100%;
height:100%;
background: rgba(0,0,0,0.8);
position: flex;
justify-content:center;
align-items: center;`

const ModalWrapper = styled.div`
width:800px;
height:500px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background:#fff;
color:#000;
display:flex;
justify-content:center;
position:relative;
z-index:10;
border-radius:10px;`

export const Modal = ({ itemList, setcardList,showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <h1>hello</h1>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

