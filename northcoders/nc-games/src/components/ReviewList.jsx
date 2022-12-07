import { useEffect, useState } from "react";
import '../App.css';
import { getReviews } from "../Api";
import {Modal} from "./Modal";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
  font-family:'Arial', sans-serif;
}
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
export const ReviewList = () => {

  const [itemList, setCardList] = useState([])
  const [showModal, setShowModal] =useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  useEffect(() => {
    getReviews().then((data) => {
      console.log(data)
      setCardList(data) 
    });
  }, []);
  
  const listItems = () => {
    return itemList.map((review) => {
      return (
        <div>
        <Container onClick={openModal}>
          <ul className="List--item" key={review.items_id}>
            <h3>{review.item_name}</h3>
            <img src={review.review_img_url} alt={`${review.title} image`} />
            <p>{review.title}</p>
            <p>{review.created_at}</p>
            <p>{review.category}</p>
            <p>{review.designer}</p>
          </ul></Container>
          <Modal
            itemList={itemList}
            setCardList={setCardList}
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <p>{review.title}</p>
            <p>{review.created_at}</p>
            <p>{review.category}</p>
            <p>{review.designer}</p>
            <GlobalStyle />
            
          </Modal>
          </div>
        
      );
    });
  };

  return (
    <section>
      <div>
        <ul>{listItems()}</ul>
      </div>
    </section>
  );
}


