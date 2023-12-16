import React from 'react';
import Accordion from '../components/Accordion';

function AccordionPage(){


    const items = [
        {
            id: 'hgjk',
            label: 'Can i use React in my project?',
            content: 'You can use React in your any project. You can use React in your any project. You can use React in your any project.'
        },
        {
            id: 'gggh',
            label: 'Can i use JS in my project?',
            content: 'You can use JS in your any project. You can use JS in your any project. You can use React in your any project.'

        },
        {
            id: 'hgjgk',
            label: 'Can i use Java in my project?',
            content: 'You can use Java in your any project. You can use Java in your any project. You can use React in your any project.'

        },
    ];
 return <Accordion items={items}/>
    
}

export default AccordionPage;