import React, { useState, useEffect } from 'react';
import AndOrSwitch from './Switch';
import FilterQuery from './FilterQuery';
import { MdDelete } from 'react-icons/md';

interface Filter {
  combinator: string;
  filters: Array<Filter | FilterQuery>;
}

interface FilterQuery {
  field: string;
  condition: string;
  value: string;
}

interface Props {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const FilterGroup: React.FC<Props> = ({ filter, setFilter }) => {
  const [combinator, setCombinator] = useState<string>('AND');

  useEffect(() => {
    setFilter((prev) => {
      return { ...prev, combinator };
    });
  }, [combinator]);

  useEffect(() => {
    setFilter((prev) => {
      return { ...prev, filters: [] };
    });
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(filter), 'damm girl! you are a genius');
  }, [filter]);

  const addFilter = () => {
    setFilter((prev) => {
      return {
        ...prev,
        filters: [
          ...prev.filters,
          {
            field: 'Theme',
            condition: 'Equals',
            value: 'Offers',
          },
        ],
      };
    });
  };

  const removeFilter = (index: number) => {
    setFilter((prev) => {
      const updatedFilters = [...prev.filters];
      updatedFilters.splice(index, 1);
      return { ...prev, filters: updatedFilters };
    });
  };

  const addGroup = () => {
    console.log('add group');
  };

  return (
    <div className="flex flex-col max-h-[300px] overflow-y-scroll bg-group-background mx-8 p-2 rounded-md no-scrollbar">
      <div className="flex flex-row">
        <AndOrSwitch options={["AND", "OR"]} value={combinator} onChange={setCombinator} />
      </div>
    {filter?.filters && (
        <div className="flex flex-col">
          <div className="flex flex-col">
            {filter.filters.map((filter, index) => (
                // if the filter is a filter group then add a nested filter group    
               <div className="flex flex-row">
                        <FilterQuery setFilter={setFilter} index={index} /> 
                        <MdDelete color="white" onClick={()=>removeFilter(index)} className="my-auto pt-4 hover:cursor-pointer" size="60px">Remove</MdDelete></div>
                    
            ))}
            </div>
            <div className="flex flex-row my-4">
            <button 
            className="bg-button-background hover:bg-button-background-hover text-white font-bold py-2 px-4 rounded"
             onClick={addFilter}>+ Add Filter</button>
          </div>
        </div>
      )}
    </div>
    );
  };
  export default FilterGroup;