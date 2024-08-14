import React, { useState } from 'react';
import OrderDetails from './OrderDetails';
import TrackOrder from './TrackOrder';
import FAQ from './FAQ';
import CustomerCare from './CustomerCare';
import RefundDeclined from './RefundDeclined';
import productData from './productData'; 
import './Chatbot.css';
import botavatar from './image/botavatar.jpg';
import useravatar from './image/useravatar.jpg';
import send from './image/Vector.png';
import back from './image/Vector1.png';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            text: (
<div className="container1">
          <p>Hello, how may I help you?</p>
          <div className="button-group">
            <div className="button-row">
              <button className="chatbot-button" onClick={() => handleClick('Order Details')}>Order Details</button>
              <button className="chatbot-button" onClick={() => handleClick('Track Order')}>Track Order</button>
            </div>
            <div className="button-row">
              <button className="chatbot-button" onClick={() => handleClick('FAQ')}>FAQ</button>
              <button className="chatbot-button" onClick={() => handleClick('Customer Care')}>Customer Care</button>
            </div>
            <div className="button-row">
              <button className="chatbot-button" onClick={() => handleClick('Refund Declined')}><p className='p1'>Refund Declined</p></button>
              <button className="chatbot-button" onClick={() => handleClick('Find Products')}>Find Products</button>
            </div>
          </div>
        </div>

            ),
            sender: "bot"
        }
    ]);

    const [inputText, setInputText] = useState('');
    const [waitingForOrderNumber, setWaitingForOrderNumber] = useState(false);
    const [waitingForResponse, setWaitingForResponse] = useState(false);
    const [waitingForContactInfo, setWaitingForContactInfo] = useState(false);
    const [waitingForProductName, setWaitingForProductName] = useState(false);
    const [currentAction, setCurrentAction] = useState(''); 

    const handleUserMessage = (text) => {
        setMessages(prevMessages => [...prevMessages, { text, sender: "user" }]);
        setInputText('');
    };

    const handleBotResponse = (Component, props = {}) => {
        setMessages(prevMessages => [...prevMessages, { text: <Component {...props} />, sender: "bot" }]);
    };

    const handleClick = (action) => {
        handleUserMessage(action);
        setCurrentAction(action); 

        
        setWaitingForOrderNumber(false);
        setWaitingForResponse(false);
        setWaitingForContactInfo(false);
        setWaitingForProductName(false);

        if (['Order Details', 'Track Order'].includes(action)) {
            setWaitingForOrderNumber(true);
            setMessages(prevMessages => [
                ...prevMessages,
                { text: "Please provide your order number.", sender: "bot" }
            ]);
        } else if (action === 'Find Products') {
            setWaitingForProductName(true);
            setMessages(prevMessages => [
                ...prevMessages,
                { text: "Find Product by entering the product name.", sender: "bot" }
            ]);
        } else {
            switch (action) {
                case 'FAQ':
                    handleBotResponse(FAQ);
                    break;
                case 'Customer Care':
                    handleBotResponse(CustomerCare);
                    break;
                case 'Refund Declined':
                    handleBotResponse(RefundDeclined);
                    break;
                default:
                    break;
            }
        }
    };

    const handleSendMessage = () => {
        if (inputText.trim()) {
            handleUserMessage(inputText);

            if (waitingForOrderNumber) {
                setWaitingForOrderNumber(false);
                if (currentAction === 'Order Details') {
                    handleBotResponse(OrderDetails, { orderNumber: inputText.trim() });
                } else if (currentAction === 'Track Order') {
                    handleTrackOrderResponse(inputText.trim());
                }
                setWaitingForResponse(true);
            } else if (waitingForResponse) {
                handleOrderResponse(inputText.trim().toLowerCase());
            } else if (waitingForContactInfo) {
                handleContactInfo(inputText.trim());
            } else if (waitingForProductName) {
                handleProductSearch(inputText.trim().toLowerCase());
            }
        }
    };

    const handleTrackOrderResponse = (orderNumber) => {
        handleBotResponse(TrackOrder, { orderNumber });
    };

    const handleOrderResponse = (response) => {
        setWaitingForResponse(false);
        if (response === 'yes') {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: "Great! How would you like to receive updates about your order?\n\nSMS\nEmail\n\nPlease provide your [phone number/email address] so we can send you the updates.", sender: "bot" }
            ]);
            setWaitingForContactInfo(true);
        } else if (response === 'no') {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: "OK, Is there anything else I can help you with?", sender: "bot" }
            ]);
        }
    };

    const handleContactInfo = (contactInfo) => {
        setWaitingForContactInfo(false);
        setMessages(prevMessages => [
            ...prevMessages,
            { text: `Thank you! We will send updates about your order to ${contactInfo}.\n\nIf you have any other questions or need further assistance, feel free to ask. Have a great day!`, sender: "bot" }
        ]);
    };

    const handleProductSearch = (productName) => {
        setWaitingForProductName(false); 
        const matchedProducts = productData.filter(product =>
            product.name.toLowerCase().includes(productName)
        );

        if (matchedProducts.length > 0) {
            setMessages(prevMessages => [
                ...prevMessages,
                ...matchedProducts.map(product => ({
                    text: (
                        <div className="product-container">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <p><strong>{product.name}</strong></p>
                            <p>Price: {product.price}</p>
                        </div>
                    ),
                    sender: "bot"
                }))
            ]);
        } else {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: `Sorry, no products were found matching "${productName}".`, sender: "bot" }
            ]);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <div className="chatbot-header-back" onClick={() => alert('Back button clicked')}>
                    <img src={back} alt="Back" />
                </div>
                <img src={botavatar} alt="Bot Avatar" className="chatbot-header-avatar" />
                <span className="chatbot-header-text">Myntra</span>
            </div>
            <div className="chatbot-body">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message-container ${message.sender === "bot" ? "bot-container" : "user-container"}`}
                    >
                        {message.sender === "bot" ? (
                            <>
                                <img src={botavatar} alt="Bot Avatar" className="chatbot-avatar" />
                                <div className="bot-message">{message.text}</div>
                            </>
                        ) : (
                            <>
                                <div className="user-message">{message.text}</div>
                                <img src={useravatar} alt="User Avatar" className="user-avatar" />
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    className="chat-input"
                    placeholder="Type your message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button className="chatbot-button1" onClick={handleSendMessage}>
                    <img src={send} alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
