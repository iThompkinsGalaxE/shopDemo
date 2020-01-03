import React from 'react'

export default class DrawerMenu extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div style={{...styles.overlay, display: this.props.display}}>
                <div style={styles.menu}>
                    <div>
                        Drawer Menu Nav Items
                    </div>
                </div>
                <div style={{width: '17%', height: '100%'}} onClick={() =>{
                    this.props.toggleDisplay()
                }}>

                </div>
            </div>
        )
    }
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
    }
}