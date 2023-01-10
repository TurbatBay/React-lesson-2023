import products from "./Seed"
import React from "react"
import { useState } from "react";
import { Rating } from "react-simple-star-rating"
//class-r hiisen n !!! thing is this.props.title geh heregtei 
// class Product extends React.Component {
//     render(){
function ProductFunc(props) {

    const [votes, setVotes] = useState(props.votes)
    const [stars, setStars] = useState(props.stars)

    function handleUpVote(props) {
        setVotes(votes + 1)
        if (stars > 5) {
            setStars(0)

        }else{
            setStars(stars + 1)
            
        } 
        console.log(stars)




    }

    return (
        <div className='item'>
            <div className="image thumbnail rounded" >
                <img src={props.productImageUrl} className="thumbnail rounded" />
            </div>
            <div className="description-container">
                <div className="description">
                    <p className="id-p">{props.id}</p>
                    <button onClick={() => {
                        handleUpVote(props);
                    }}>Click me </button>
                    <p className="vote-p">{votes}</p>
                    <p className="title-p"> {props.title}</p>
                    <p className="desc-p">{props.description}</p>
                    <div className="Submit">
                        <p>Submitted by:</p>
                        <img src={props.submitterAvatarUrl} alt="" className="profile" />
                        
                    </div>
                   
                    <Rating 
                        initialValue={stars}
                    />

                </div>

            </div>
        </div>
    )
}
// }

export default ProductFunc;