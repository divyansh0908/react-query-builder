import React, {FC} from "react";

interface Props {
options: string[];
value: string;
onChange: (value: string) => void;
additionalClass?: string;
}

const Switch: FC<Props> = ({ options, value, onChange, additionalClass="" }) => {
    
return (
<div className={`flex flex-row justify-between rounded-md border-gray-400 ${additionalClass}`}>
<span
className={`px-4 py-2 rounded-l-md hover:cursor-pointer font-medium w-16 text-white ${ value === options[0] ? "bg-button-background" : "bg-[#404348]" }`}
onClick={() => onChange(options[0])}
>
{options[0]}
</span>
<span
className={`px-4 py-2 rounded-r-md hover:cursor-pointer w-16 text-white font-medium ${ value === options[1] ? "bg-button-background" : "bg-[#404348]" }`}
onClick={() => onChange(options[1])}
>
{options[1]}
</span>
</div>
);
};
export default Switch;