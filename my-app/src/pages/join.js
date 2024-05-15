import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/App.css';

function Join() {
    let navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Here, you would typically handle data validation and sending data to a server
        // Assuming all is well, navigate to the Dashboard
        navigate('/dashboard');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Join</h1>
                <form className="join-form" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                    <input type="text" placeholder="Name of Organization" className="join-input" required />
                    <input type="email" placeholder="Email" className="join-input" required />
                    <input type="text" placeholder="Name" className="join-input" required />
                    <input type="password" placeholder="Password" className="join-input" required />
                    <button type="submit" className="App-button">Join</button>
                </form>
            </header>
        </div>
    );
}

export default Join;
