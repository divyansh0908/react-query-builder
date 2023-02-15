import React, {useState, useEffect} from "react";
import { data } from "../data";
import DropdownSelector from "./DropdownSelector";
import TextInput from "./TextInput";
import DateTimePicker from "./DateTimePicker";



interface Props {
    setFilter: any;
    index: number;
}

const FilterQuery: React.FC<Props> = ({ setFilter, index }) => {
    const [field, setField] = useState<any>("Theme");
    const dataObj = data[field];
    const [value, setValue] = useState<any>(data[field].defaultValues.initialValue );

    const [condition, setCondition] = useState<string>(() => {
        return data[field].defaultValues.condition;
    });

    useEffect(() => {
        setValue(data[field].defaultValues.initialValue);
        setCondition(data[field].defaultValues.condition);
    }, [field]);

    useEffect(() => {
        setFilter((prev: any) => {
            const currentFilter = prev.filters[index];
            const updatedFilter= { ...currentFilter, field, condition, value };
            const updatedFilters = [...prev.filters];
            updatedFilters[index] = updatedFilter;
            return { ...prev, filters: updatedFilters };
        });
    }, [field, condition, value]);

    return (
        <div className="flex flex-row my-2">
            <DropdownSelector options={Object.keys(data)} onChange={setField} value={field} title="Field" />
            <DropdownSelector options={data[field].conditions} onChange={setCondition} value={condition} title="Condition" />
            {data[field].inputTypes === "textInput" && (
                <TextInput value={value} onChange={setValue} title={"Criteria"} type={(data[field]?.dataType==="string")? "text":"number"}/>
            )}
            {data[field].inputTypes === "dropdown" && (
                <DropdownSelector options={data[field].inputValues} onChange={setValue} value={value} title="Criteria" />
            )}
            {data[field].inputTypes === "dateTime" && (
                <DateTimePicker date={value} setDate={setValue} title="Criteria" />
            )}
        </div>
    );
};

export default FilterQuery;
