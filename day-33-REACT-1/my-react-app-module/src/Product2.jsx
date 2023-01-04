import React from "react"
import logo from './pngwing.com.png';
import zurag from './300x300-03.jpeg'
class Product2 extends React.Component {
    render() {
        return (
            <div className='item'>
                <div className="image thumbnail rounded">
                    <img src='pics/image-rose.png' className="thumbnail rounded" />
                </div>
                <div className="description-container">
                    <div class="card">
                        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"></img>
                        <div class="rest-card">
                            <div class="up">
                                <img src={logo}></img>
                                <p>55</p>
                            </div>

                            <p class="first-text">Haught or Naught</p>
                            <p>High-minded or absent-minded? You decide</p>
                            <div class='submitted'>
                                <p>Submitted by:</p>
                                <img src={zurag}></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Product2