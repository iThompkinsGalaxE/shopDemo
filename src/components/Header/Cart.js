import React from 'react'
import Form from '../Checkout/Checkout'
import {StripeProvider, Elements} from 'react-stripe-elements';

export default class Cart extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      checkout: true,
    }
  }

  createOrder(){
    fetch('https://tfywy7qt3l.execute-api.us-east-2.amazonaws.com/production/orders', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        idToken: this.props.session.idToken
      },
      body: JSON.stringify({
        title: 'yabbadabba doo',
      }),
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  render(){
      return(
          <div style={{...styles.overlay, display: this.props.display}}>
              <div style={{width: '17%', height: '100%'}} onClick={() =>{
                  this.props.toggleDisplay()
              }}>
              </div>
                <div style={styles.menu}>
                  <div style={styles.menuHeader}>
                    <h4>
                      {(this.state.checkout ? "Checkout" : "Please Enter Card Info")}
                    </h4>
                  </div>
                  {this.state.checkout&& 
                  <div style={{overflow: 'hidden'}}>                
                    {this.props.itemsInCart.map((item, i) =>{
                      return (
                        <div key={'item-' + i} style={styles.item}>
                          <div style={{flex: 1}}>
                            {item}
                          </div>
                          <div style={{flex: 1}}>
                            X 1
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  }
                  {this.state.checkout&&             
                    <div style={styles.total}>
                      <div style={{flex: 1}}>TOTAL: </div>
                      <div style={{flex: 1}}>${this.props.itemsInCart.length * 9.99}</div>
                      <div onClick={() => this.createOrder()} style={{backgroundColor: 'green', color: 'white', borderRadius: '7px', padding: 7}}>PAY</div>
                    </div>
                  }
                  {!this.state.checkout&&
                    <div style={{width: '100%', height: '100%',}}>
                      <CheckoutComponent />
                    </div>
                  }
                </div>
      
          </div>
      )
  }
}


function CheckoutComponent(props){
  return(
   <StripeProvider apiKey="pk_test_nHXq5T4fLSgzqUMO58r0P4XB0090gYHB8M">
     <Elements>
      <Form />
     </Elements>
   </StripeProvider> 
  )
}

const styles = {
    overlay:{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
        zIndex: 10,
        flexDirection: 'row'
    },
    menu: {
        width: '83%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
        borderLeft: '1px dotted black',
    },
    menuHeader: {
      padding: 20,
      borderBottom: '1px solid black'
    },
    item:{
      padding: 10,
      borderBottom: '1px dotted black',
      display: 'flex',
      flexDirection: 'row'
    },
    total:{
      position: 'absolute',
      bottom: 10,
      borderTop: '1px solid black',
      width: '100%',
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      fontWeight: 'bold'
    }
}