import React from 'react';
import logo from '../../assets/logo.svg';
import '../../App.css';
import axios from 'axios';

function Subscribe() {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
        console.log("hello")
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const result = await axios.post('http://localhost:5000/payment/orders');

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: 'rzp_test_HjCInN8zUoK8Xm', // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'Prateek kumar singh',
      description: 'Test Transaction',
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post('http://localhost:5000/payment/success', data);

        alert(result.data.msg);
      },
      prefill: {
        name: 'prateek',
        email: 'example@123.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Example Corporate Office',
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

//   <button className='App-link' onClick={displayRazorpay}>
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">E-Learning Services</h2>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <ul className="list-disc space-y-5 mb-6">
          <li><span className="font-semibold">Interactive Online Courses:</span> Engage with dynamic course content.</li>
          <li><span className="font-semibold">Expert Tutors:</span> Learn from industry professionals.</li>
          <li><span className="font-semibold">Flexible Scheduling:</span> Study at your own pace, anytime, anywhere.</li>
          <li><span className="font-semibold">Certification Programs:</span> Gain certificates to boost your career prospects.</li>
          <li><span className="font-semibold">Community Access:</span> Join a community of learners and experts.</li>
        </ul>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={displayRazorpay}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Subscribe;