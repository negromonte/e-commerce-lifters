import React, { useState } from 'react';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import './PaymentPage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', {
      cardNumber,
      cardholderName,
      expiryMonth,
      expiryYear,
      cvv,
    });
  };

  return (
    <>
      <Header />
      <Cart />
      {/* To Do: Mudar esse trecho de codigo para um componente unico */}
      <div className="container">
        <div className="payment-page-content">
          <div className="payment-page-item">
            <div className="payment-page-item-info">
              <div className="payment-page-header">
                <h2 className="payment-page-title">Your bag</h2>
              </div>
              <div className="payment-page-items">
                <div>
                  <h3 className="payment-page-item-title">Men winter jacket</h3>
                  <span className="payment-page-item-size">M</span>
                </div>
                <div className="payment-page-item-details">
                  <div className="payment-page-item-color" style={{ backgroundColor: 'blue' }}></div>
                  <p className="payment-page-item-price">$99</p>
                  <button className="payment-page-item-remove">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="payment-page-summary">
          <div className="payment-page-summary-total">
            <h3 className="payment-page-summary-title">Total:</h3>
            <p className="payment-page-summary-price">$999.99</p>
          </div>
          <form onSubmit={handleSubmit} className="payment-page-form">
            <div className="payment-page-form-field">
              <label htmlFor="cardNumber">Card number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 0"
                value={cardNumber}
                onChange={(event) => handleInputChange(event, setCardNumber)}
              />
            </div>
            <div className="payment-page-form-field">
              <label htmlFor="cardholderName">Cardholder Name</label>
              <input
                type="text"
                id="cardholderName"
                placeholder="RAM"
                value={cardholderName}
                onChange={(event) => handleInputChange(event, setCardholderName)}
              />
            </div>
            <div className="payment-page-form-field">
              <label htmlFor="expiryMonth">Expiry Month</label>
              <select
                id="expiryMonth"
                value={expiryMonth}
                onChange={(event) => handleInputChange(event, setExpiryMonth)}
              >
                <option value="">-</option>
                <option value="01">01</option>
                <option value="02">02</option>
                {/* ... Add remaining months */}
                <option value="12">12</option>
              </select>
            </div>
            <div className="payment-page-form-field">
              <label htmlFor="expiryYear">Expiry Year</label>
              <select
                id="expiryYear"
                value={expiryYear}
                onChange={(event) => handleInputChange(event, setExpiryYear)}
              >
                <option value="">-</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
            <div className="payment-page-form-field">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="-"
                value={cvv}
                onChange={(event) => handleInputChange(event, setCvv)}
              />
            </div>
            <div className="payment-page-form-checkbox">
              <input type="checkbox" id="acceptTerms" />
              <label htmlFor="acceptTerms">Aceitar todos os termos</label>
            </div>
            <button type="submit" className="payment-page-form-button">
              Checkout
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
