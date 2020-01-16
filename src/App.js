import React from 'react';
import './App.css';

//Components
import Header from './components/Header'
import ProductCarousel from './components/ProductCarousel'
import SignInModal from './components/SignInModal'

//Xtra
import Amplify, { Auth } from 'aws-amplify';
import { connect } from 'react-redux'
import { logInFunc } from './actions'
import  * as CS  from './configureStore'

let { persistor } = CS.default()

Amplify.configure({
  Auth: {
    identityPoolId: '',
    region: 'us-east-2',
    userPoolId: 'us-east-2_B9yvSAGrP',
    userPoolWebClientId: '4r3scaeb87jusv3luii1e6hpg8',
  }
}) 

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loginError: false,
      itemsInCart: []
    }
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  async componentDidMount(){

  }

  handleSignIn(email, password){
    Auth.signIn(email, password)
    .then((user) => console.log(user))
    .catch((err) => console.log(err))
  }

  addItemToCart(item){
    this.setState({
      itemsInCart: [...this.state.itemsInCart, item]
    })
  }

  removeItemToCart(item){
    this.setState({
      itemsInCart: [...this.state.itemsInCart.filter((inst) => inst !== item)]
    })
  }   

  render(){
    console.log(this.props.stripe)
    return (
      <div className="App">
        {(this.props.auth.user == null) && <SignInModal login={(email, password) => this.props.login(email, password)} loginError={this.props.auth.error} />}
        <Header itemsInCart={this.state.itemsInCart}/>
        <ProductCarousel addItemToCart={(item) => this.addItemToCart(item)} />
      </div>
    );
  }
}

function MapStateToProps(state){
  return(
    {
     auth: state.authReducer
    }
  )
}

function MapDispatchToProps(dispatch){
  return(
    {
      login: (email, password) => dispatch(logInFunc(email, password))
    }
  )
}


export default connect(MapStateToProps, MapDispatchToProps)(App);