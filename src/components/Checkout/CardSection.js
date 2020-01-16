import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <CardElement style={
          {
          base: {
            fontSize: '20px',
            color: '#424770',
            display: 'flex',
            flexDirection: 'row',
            fontFamily: 'Open Sans, sans-serif',
            letterSpacing: '0.025em',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#c23d4b',
          },
        }} 
        />
      </div>
    );
  }
}

export default CardSection;