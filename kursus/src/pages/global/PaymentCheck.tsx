import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

// https://react-mihkel-10-2024.web.app/payment?order_reference=6290289&payment_reference=ab6853a2a41c591960aea4d3d3269d9b49b2c2dcf5b2b485e7dfd3dd06584c4a

function PaymentCheck() {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState("");
 

  useEffect(() => {
    const paymentReference = searchParams.get('payment_reference');
    const url = `https://igw-demo.every-pay.com/api/v4/payments/${paymentReference}?api_username=${process.env.REACT_APP_EVERYPAY_USERNAME}&detailed=false`;
    const options = {method: 'GET', headers: {Authorization: process.env.REACT_APP_PAYMENT_AUTH || ""}};
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => setPaymentStatus(json.payment_state))
      .catch(err => console.error('error:' + err));
  }, [searchParams]);
  

  return (
    <div>
      <div>Order ref: {searchParams.get('order_reference')}</div>
      <div>Payment ref: {searchParams.get('payment_reference')}</div>
      {paymentStatus === "" && <div>Loading...</div>}
      {paymentStatus === "settled" && <div>Tellimus edukalt õnnestus!</div>}
      {paymentStatus !== "" && paymentStatus !== "settled" && <div>Kahjuks makse ei õnnestunud! Proovi uuesti! <Link to="/cart">Ostukorvi</Link></div>}
    </div>
  )
}

export default PaymentCheck