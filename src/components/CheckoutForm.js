// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';
//
// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);
//
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const card = elements.getElement(CardElement);
//
//         if (!stripe || !elements) {
//             return;
//         }
//
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card,
//         });
//
//         if (error) {
//             setError(error.message);
//         } else {
//             setError(null);
//
//             // Send paymentMethod.id to your server (you can use axios for this)
//             const response = await axios.post('/api/payment_intent', {
//                 payment_method: paymentMethod.id,
//             });
//
//             const { client_secret } = response.data;
//
//             const confirmResult = await stripe.confirmCardPayment(client_secret);
//             if (confirmResult.error) {
//                 setError(confirmResult.error.message);
//             } else {
//                 setSuccess(true);
//             }
//         }
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             <Button type="submit" disabled={!stripe} variant="primary" className="mt-3">
//                 Pay
//             </Button>
//             {error && <div className="mt-3 text-danger">{error}</div>}
//             {success && <div className="mt-3 text-success">Payment successful!</div>}
//         </form>
//     );
// };
//
// export default CheckoutForm;
