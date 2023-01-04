import products from "./Seed"
import React from "react"
//class-r hiisen n !!! thing is this.props.title geh heregtei 
class Product extends React.Component {
    render(){
// function ProductFunc (props){
    return (
        <div className='item'>
                <div className="image thumbnail rounded">
                    <img src={this.props.productImageUrl} className="thumbnail rounded" />
                </div>
                <div className="description-container">
                    <div className="description">
                        <p className="id-p">{this.props.id}</p>
                        <p className="title-p"> {this.props.title}</p>
                        <p className="desc-p">{this.props.description}</p>
                        <div className="Submit">
                            <p>Submitted by:</p>
                            <img src={this.props.submitterAvatarUrl} alt="" className="profile" />

                        </div>


                    </div>

                </div>
            </div>
    )
    }
}

export default Product;