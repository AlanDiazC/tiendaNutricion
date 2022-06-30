import React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useState } from 'react';
import "bootswatch/dist/darkly/bootstrap.min.css"
import './App.css';
import carrito from './carrito_lista';

const stripePromise = loadStripe('pk_test_51LFUKGCoLzwrMqAu4TufElAimzxZgRIx5kfafppHQAX4lhEBWg3eIpfsvD6i8dd7f8XWK9QipezVxHKbQhbA4Slz00P3yNQx2e')

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const {productos} = carrito;

  const totalCost = () =>{
    let sum = 0;
    productos.map( (producto)=>{
      sum += producto.price * producto.amount;
      return sum;
    }) 
    return parseInt(sum);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });
    setLoading(true);
    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post('http://localhost:3001/api/checkout', {
          id,
          amount: totalCost() * 100
        })
        console.log(data);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error)
      }
      setLoading(false);
    }
  }

  return <form onSubmit={handleSubmit} className="card card-body">

    <img src="https://www.entrenamiento.com/wp-content/uploads/2018/01/suplemento-proteina-en-polvo.jpg" alt="Shokomilk" className='img-fluid' />
    <h3 className='text-center my-2'>Precio total del carrito: ${totalCost().toString()}</h3>
    <div className='form-group mt-3'>
      <CardElement className='form-control' />
    </div>
    <button className='btn btn-success mt-2' disabled={!stripe}>
      {loading ? (
        <div className="spinner-border text-light" role='status'>
          <span className="sr-only"></span>
        </div>
      ) : ("Pagar")}
    </button>
  </form>
}

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default App;
