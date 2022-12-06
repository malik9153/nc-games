import { useEffect, useState } from "react";
import '../App.css';
import { getReviews } from "../Api";
export const ReviewList = () => {

  const [itemList, setCardList] = useState([])


  useEffect(() => {
    getReviews().then((data) => {
      console.log(data)
      setCardList(data) 
    });
  }, []);


  const listItems = () => {
    return itemList.map((review) => {
      return (
        <ul className="List--item" key={review.items_id}>
          <h3>{review.item_name}</h3>
          <img></img>
          <img src={review.review_img_url} alt={`${review.title} image`} />
          <p>{review.title}</p>
          <p>{review.created_at}</p>
          <p>{review.category}</p>
          <p>{review.designer}</p>
       
          <button  ></button>
        </ul>
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


