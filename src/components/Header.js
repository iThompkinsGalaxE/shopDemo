import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import DrawerMenu from './Header/DrawerMenu'
import Cart from './Header/Cart'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          drawerDisplay: 'none',
          cartDisplay: 'none'
        }
    }

    render(){
        return(
            <div className=".App-header" style={styles.header}>
                <DrawerMenu 
                    display={this.state.drawerDisplay}
                    toggleDisplay={() => this.setState({drawerDisplay: 'none'})}
                />
                <Cart 
                    display={this.state.cartDisplay}
                    toggleDisplay={() => this.setState({cartDisplay: 'none'})} 
                    itemsInCart={this.props.itemsInCart}
                    session={this.props.session}
                />
                <div style={styles.headerItem}>
                    <span className='p-2' style={{float: 'left'}} onClick={() =>{
                        this.setState({drawerDisplay: 'flex'})
                    }}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>
                <div style={styles.headerItem}>
                  
                    <span className='p-2' style={{float: 'right'}} onClick={() => {
                        this.setState({cartDisplay: 'flex'})
                    }}>
                      {(this.props.itemsInCart.length > 0) && <span style={styles.cartNotif}>
                        {this.props.itemsInCart.length}
                      </span>}
                      <FontAwesomeIcon icon={faShoppingCart} />
                      </span>
                </div>
            </div>
        )
    }
}

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid black',
    },
    headerItem: {
        flex: 1,
    },
    cartNotif:{
      backgroundColor: 'red',
      borderRadius: '200px',
      paddingLeft: 7,
      paddingRight: 7,
      color: 'white',
    }
}