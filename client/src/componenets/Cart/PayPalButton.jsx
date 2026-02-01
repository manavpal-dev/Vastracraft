import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js"

const PayPalButton = ({amount,onSuccess,onError}) => {
  console.log("PAYPAL AMOUNT:", amount);

  return (
   <PayPalScriptProvider 
      options={{"client-id":import.meta.env.VITE_PAYPAL_CLIENT_ID}}>

    <PayPalButtons style={{layout: "vertical"}}
   createOrder={(data, actions) => {
  const orderAmount = (Math.round(Number(amount) * 100) / 100).toFixed(2);

  console.log("PAYPAL FIXED AMOUNT:", orderAmount);

  return actions.order.create({
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: orderAmount,
        },
      },
    ],
  });
}}


    onApprove={(data,actions)=>{
      return actions.order.capture().then(onSuccess)
    }}
    onError={onError}
    />
    
   </PayPalScriptProvider>
  )
}

export default PayPalButton