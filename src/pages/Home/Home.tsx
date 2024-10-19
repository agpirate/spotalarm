import React from 'react';
import Button from '../../components/widgets/Button';
// import './Home.css';

const Home: React.FC = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div >
            <h2>Welcome to My React App</h2>
            <Button label="Click Me" onClick={handleClick} />
        </div>
    );
};

export default Home;
