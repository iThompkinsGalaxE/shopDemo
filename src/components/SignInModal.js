import React from 'react'

export default class SignInModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: 'ithompkins@galaxe.com',
            password: '!Foobar321',
        }
    }

    render(){
        return (
            <div style={styles.overlay}>
                <div 
                    style={styles.card}
                    className='mx-auto'
                >
                  <div style={styles.form} className='mx-auto mt-5'>
                    <h3>
                      Please Sign-in Before Continuing
                    </h3>
                    <input 
                        name='email'
                        placeholder="email"
                        value={this.state.email}
                        onChange={(ev) => this.setState({email: ev.target.value})}
                    />
                    <input
                        name='passsword'
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={(ev) => this.setState({password: ev.target.value})}
                    />
                    <div 
                      style={styles.button} 
                      className='mx-auto mt-4 pointer'
                      onClick={() => this.props.login(this.state.email, this.state.password)}
                    >
                      Sign-in
                    </div>
                    <div>
                      {this.props.loginError && "Failed to Sign in"}
                    </div>
                  </div>
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
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '75%',
      height: '50%',
      backgroundColor: 'white',
      borderRadius: '5px',
      marginTop: 70,
      border: '1px solid black',
      position: 'relative',
    },
    form: {
      padding: '100',
      width: '80%',
      top:"50%"
    },
    button: {
      borderRadius: '5px',
      backgroundColor: 'green',
      width: '50%',
      color: 'white',
      padding: '5px',
    },
}