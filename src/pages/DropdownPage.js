import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage(){

    const [value, setValue] = useState(null);

    const handleSelection = (option) => {
        setValue(option);
    }

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'},
    ];
   return <Dropdown options={ options } value={value} onChange={handleSelection}/> 
}

export default DropdownPage;