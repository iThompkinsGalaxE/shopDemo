import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import DrawerMenu from './Header/DrawerMenu'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            drawerDisplay: 'none'
        }
    }

    render(){
        return(
            <div className=".App-header" style={styles.header}>
                <DrawerMenu 
                    display={this.state.drawerDisplay}
                    toggleDisplay={() => this.setState({drawerDisplay: 'none'})}
                />
                <div style={styles.headerItem}>
                    <span style={{float: 'left'}} onClick={() =>{
                        this.setState({drawerDisplay: 'flex'})
                    }}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>
                <div style={styles.headerItem}>
                    <span style={{float: 'right'}}><FontAwesomeIcon icon={faShoppingCart} /></span>
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
}