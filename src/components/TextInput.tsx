import React from "react";

interface TextInputProps {
value: string;
onChange: (value: string) => void;
type?: "text" | "number" | "password";
title: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, type = "text", title }) => {
return (
<div className="text-start mx-4">
<p className="font-md text-white">{title}</p>
<input
type={type}
value={value}
onChange={(e) => onChange(e.target.value)}
className="bg-dropdown-bg rounded-md text-gray-200 p-2 h-10 max-h-32 self-center"
placeholder="Enter Criteria"
/>
</div>
);
}

export default TextInput;