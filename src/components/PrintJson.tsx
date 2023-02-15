import React from "react";

interface Props {
  json: any;
}

const PrintJson: React.FC<Props> = ({ json }) => {
  return (
    <div className="bg-background-cross rounded-md text-gray-200 p-2 max-h-[200px] overflow-scroll no-scrollbar mx-8 self-center">
      <pre className="group w-3/4 font-medium rounded-sm px-4 py-2 text-start text-white hover:cursor-pointer">
        Results: {JSON.stringify(json, null, 2)}
      </pre>
    </div>
  );
};
export default PrintJson;
