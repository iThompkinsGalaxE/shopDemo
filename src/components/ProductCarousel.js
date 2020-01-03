import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css';

export default class ProductCarousel extends React.Component{
    
    render(){
        let imageLocations = [
            'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        ]
        return(
            <div>
                <div>
                    <CarouselComponent
                        imageLocations={imageLocations}
                    />
                </div>
                <div>
                    <InformationalComponent />
                </div>
                <div>
                    <AddToCartButtonComponent />
                </div>
            </div>
        )
    }
}

const styles = {
    button: {
        border: '1px solid blue',
        borderRadius: '10px',
        width: '25%',
    }
}

function CarouselComponent(props){
    let imageLocations = props.imageLocations
    return(
        <div>
            <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}           
            >
                {imageLocations.map((inst, i)=>{
                    return(
                        <div>
                            <img alt='failed to load' src={inst} />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
function InformationalComponent(){
    return (
        <div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book                
            </p>
        </div>
    )
}
function AddToCartButtonComponent(){
    return (
        <div>
            <div id="addOneBtn" className='mx-auto' style={styles.button}>
                Add One
            </div>
        </div>
    )
}