import Table from './Table';
import useSort from "../hooks/use-sort";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function SortableTable(props){

    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, handleSortClick} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        }
        return{
            ...column,
            header: () => 
                <th className='cursor-pointer hover:bg-gray-100' 
                    onClick={() => handleSortClick(column.label)}>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
        }
    });

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