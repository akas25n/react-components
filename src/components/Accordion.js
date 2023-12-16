import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


function Accordion({ items }){

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) =>{
        setExpandedIndex((currentExpnadedIndex) => {
            if(currentExpnadedIndex === nextIndex){
                setExpandedIndex(-1);
            }else{
                setExpandedIndex(nextIndex);
            }  
        }); 
    }

    const renderedItems = items.map((item, index) =>{
        const isExpnaded = index === expandedIndex;

        const icon = <span className="text-xl">{ isExpnaded ? <GoChevronDown /> : <GoChevronLeft /> }</span>
        return(
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpnaded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return (
        <div>
            <div className="border-x border-t rounded">{renderedItems}</div>
        </div>
    ); 
}
export default Accordion;