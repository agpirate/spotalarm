import React from 'react';
import Button from '../../components/widgets/Buttons';
import './Home.css';

const Home: React.FC = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="home-page">
            <h2>Welcome to My React App</h2>
            <Button label="Click Me" onClick={handleClick} />
        </div>
    );
};

export default Home;
