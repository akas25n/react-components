import Table from './Table';
import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function SortableTable(props){

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;

    const handleClick = (label) =>{

        if(sortBy && label !== sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        } else if(sortOrder === 'asc'){
            setSortOrder('dsc');
            setSortBy(label);
        } else if(sortOrder === 'dsc'){
            setSortOrder(null)
            setSortBy(null);
        }

    }

    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        }
        return{
            ...column,
            header: () => 
                <th className='cursor-pointer hover:bg-gray-100' 
                    onClick={() => handleClick(column.label)}>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
        }
    });

    // we only sort data if sortOrder && sortBy are not null
    // Make a copy of the 'data' prop
    // Find the correct sortValue function and use it for the sorting

    let sortedData = data;
    if(sortOrder && sortBy){
        const { sortValue } = config.find((column) => column.label === sortBy);
        
        sortedData = [...data].sort((a, b) =>{
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder;
            }else{
                return(valueA - valueB) * reverseOrder;
            }
        });
    }

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig}/>
        </div>
    );  
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return (
            <div className='mr-2'>
            <GoChevronUp />
            <GoChevronDown />
        </div>
        );
    }
    if(sortOrder === null){
        return <div className='mr-2'>
            <GoChevronUp />
            <GoChevronDown />
        </div>;
    }else if(sortOrder === 'asc'){
        return <div className='mr-2'> 
            <GoChevronUp />
        </div>;
    }else if(sortOrder === 'dsc'){
        return <div className='mr-2'>
            <GoChevronDown />
        </div>;
    }
}

export default SortableTable;