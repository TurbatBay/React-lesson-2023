
import { useEffect } from "react";
import { useState } from "react";
import { Rating }from 'react-simple-star-rating'

export default function Product(props) {
  const [stars, setStars] = useState(props.stars)

  function handDownVote(){
    setStars(stars - 1)
  }
  function handleUpVote (props){
  

    if (stars > 5) {
      setStars(0)
    } else {
      setStars(stars + 1)
    }
    console.log(stars)
    // console.log(props.id)
    // let newProducts = []
    // const foundProduct = products.map(product => {
    //   console.log(typeof product.votes)
    //   if(product.id === props.id) {
    //     product.votes = product.votes + 1;
    //   }
    //   return product
    // })
    // console.log(foundProduct)


  }
  return (
    <div className="item">
      <div className="image">
        <img src={props.productImageUrl} />
      </div>
    
      <div className="middle aligned content">
        <div className="header">
          <a
            onClick={()=> props.onVote(props.id)}
          >
            <i className="large caret up icon" />
          </a>
          {props.votes}
        </div>
        <div className="description">
          <a href={props.url}>{props.title}</a>
          <p>{props.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={props.submitterAvatarUrl} />
        </div>
        <Rating
          initialValue={stars}
        />
      </div>
    </div>
  );
}
