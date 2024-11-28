import React from 'react'

function Payment(props) {
  function pay() {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      "account_name": "EUR3D1",
      "nonce": "1657a" + new Date() + Math.random()*9999999,
      "timestamp": new Date(),
      "amount": props.sum,
      "order_reference": Math.ceil(Math.random()*9999999),
      "customer_url": "https://react-mihkel-10-2024.web.app/payment",
      "api_username": process.env.REACT_APP_EVERYPAY_USERNAME
    };
    const paymentHeaders = {
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json"
    };

    fetch(url, {method: "POST", body: JSON.stringify(paymentBody), headers: paymentHeaders})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link);
  }

  return (
    <button onClick={pay}>Pay</button>
  )
}

export default Payment