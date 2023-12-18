import React from 'react';
import Button from '../components/Button';
import {GoBell, GoDatabase} from 'react-icons/go';

function ButtonPage(){

    const handleClick = () =>{
        console.log('Click!!');
    }

    const handleMouseOver = () => {
        console.log('Mouse over!!');
    }

    return (
        <div>
            <h1>App</h1>
            <div>
                <Button primary rounded onClick={handleClick} className="mb-5">Click me!!</Button>
            </div>
            <div>
                <Button  danger onMouseOver ={handleMouseOver} className="mb-5">
                    <GoBell />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button secondary rounded className="mb-5">Hide Ads!</Button>
            </div>
            <div>
                <Button success>
                    <GoDatabase />
                    Click here!
                </Button>
            </div>
        </div>
    );
    
}

export default ButtonPage;