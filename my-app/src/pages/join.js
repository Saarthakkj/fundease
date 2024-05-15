import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/join.css';

function Join() {
    let navigate = useNavigate();
    const [name, setName] = useState(''); // Add a state variable for the name

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/dashboard/${name}`); // Include the name in the URL
    };

    return (
        <div className="join-form">
            <header className="App-header">
                <h1>Join</h1>
                <form className="join-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name of Organization" className="join-input" required />
                    <input type="email" placeholder="Email" className="join-input" required />
                    <input type="text" placeholder="Name" className="join-input" required onChange={e => setName(e.target.value)} /> {/* Update the name state variable when the input changes */}
                    <input type="password" placeholder="Password" className="join-input" required />
                    <button type="submit" className="App-button">Join</button>
                </form>
            </header>
        </div>
    );
}

export default Join;