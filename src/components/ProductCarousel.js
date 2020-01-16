import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css';

export default class ProductCarousel extends React.Component{
    
    render(){
        let imageLocations = [
            'https://ae01.alicdn.com/kf/HTB1DqcPX8WD3KVjSZFsq6AqkpXaZ/Disney-Pixar-Cars-Toys-Lightning-McQueen-Mack-Uncle-Truck-Action-Figure-Toy-Diecast-Model-Car-for.jpg',
            'https://ae01.alicdn.com/kf/HTB1SKQNX21G3KVjSZFkq6yK4XXa9/Disney-Pixar-Cars-Toys-Lightning-McQueen-Mack-Uncle-Truck-Action-Figure-Toy-Diecast-Model-Car-for.jpg',
            'https://ae01.alicdn.com/kf/HTB1t4sNX.KF3KVjSZFEq6xExFXaA/Disney-Pixar-Cars-Toys-Lightning-McQueen-Mack-Uncle-Truck-Action-Figure-Toy-Diecast-Model-Car-for.jpg',
            'https://ae01.alicdn.com/kf/HTB1jAIMX21H3KVjSZFBq6zSMXXal/Disney-Pixar-Cars-Toys-Lightning-McQueen-Mack-Uncle-Truck-Action-Figure-Toy-Diecast-Model-Car-for.jpg',
            'https://ae01.alicdn.com/kf/HTB1n3gTX8Kw3KVjSZFOq6yrDVXao/Disney-Pixar-Cars-Toys-Lightning-McQueen-Mack-Uncle-Truck-Action-Figure-Toy-Diecast-Model-Car-for.jpg',
        ]
        let testimonials = [
          'Rapid devilery, arrived to Austraila in just over 2 weeks... Truck plastic & as shown in picture... Very happy...',
        ]
        return(
            <div className="responsive-layout-carousel">
                <div className='w-100 h-100' style={{flex: 1,}}>
                    <CarouselComponent
                        imageLocations={imageLocations}
                    />
                </div>
                <div style={{flex: 1}}>
                    <div>
                        <InformationalComponent 
                          testimonials={testimonials}
                        />
                    </div>
                    <div>
                        <AddToCartButtonComponent 
                          addItemToCart={this.props.addItemToCart}
                        />
                    </div>
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
        <div className='mx-auto p-3'>
            <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}           
            >
                {imageLocations.map((inst, i)=>{
                    return(
                        <div key={i}>
                            <img alt='failed to load' src={inst} />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

//Want to make this a carousel as well. Imported Comp only supports images.
function InformationalComponent(props){
  let testimonials = props.testimonials
    return (
        <div className='mx-auto p-3'>
            {testimonials.map((inst, i) =>{
              return (
                <p key={'test-' + i}>
                  "{inst}"                
                </p>
              )
            })}
        </div>
    )
}
function AddToCartButtonComponent(props){

    return (
        <div>
            <div onClick={() => props.addItemToCart('Disney Car Model (#DSF45F5)')} id="addOneBtn" className='mx-auto' style={styles.button}>
                Add One
            </div>
        </div>
    )
}