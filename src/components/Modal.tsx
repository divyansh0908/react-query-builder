import React, { useState, useEffect } from "react";
import FilterGroup from "./FilterGroup";
import { jsonToString } from "../utils/jsonToString";
import Switch from "./Switch";
import { getFilterResults } from "../api/getFilterResults";
import { dummyResponse } from "../utils/dumyresponse"

type ModalProps = {
  showToast: (arg0: boolean) => void;
  onClose: () => void;
  setJson: (arg0: any) => void;
};

const Modal: React.FC<ModalProps> = ({ showToast, onClose, setJson }) => {
  const [displayTooltip, setDisplayTooltip] = useState<string>("Click to Copy!");
  const [queryType, setQueryType] = useState<string>("string");
  const [query, setQuery] = useState<any>();
  const [stringQuery, setStringQuery] = useState<string>("");
  useEffect(() => {
    if (!query) return;
    setStringQuery(jsonToString(query));
    setDisplayTooltip("Click to Copy!");
  }, [query]);

  const copyToClipboard = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(stringQuery);
    setDisplayTooltip("Copied!");
  };

  const submitQuery = async () => {
    const { data, err } = await getFilterResults(query);
    if (err) {
      alert(err);
      // onClose();
      // return;
    }
    setJson(dummyResponse);
    onClose();
  };

  // if (!open) return null;

  return (
    <div
      className="w-2/3  flex flex-col mx-auto bg-modal-background pb-6 rounded-sm justify-center my-auto border border-gray-400 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="top-0 bg-theme-blue py-4 rounded-sm mb-12 ">
        <div className="flex flex-row px-8 justify-between">
          <h1 className="font-medium text-lg text-white">Build Your Query</h1>
          <div
            className="bg-background-cross text-white px-2 py-0 rounded-sm hover:cursor-pointer"
            onClick={onClose}
          >
            x
          </div>
        </div>
        <div
          className=" relative group flex flex-row px-8 my-2 "
          onClick={copyToClipboard}
        >
          {queryType === "string" && (
            <div className="bg-background-cross w-3/4 h-10 font-medium rounded-sm px-4 py-2 text-start overflow-y-hidden whitespace-nowrap overflow-x-scroll no-scrollbar text-white hover:cursor-pointer">
              Query: {stringQuery}
            </div>
          )}
          {queryType === "json" && (
            <pre className="group bg-background-cross w-3/4 max-h-[200px] overflow-scroll no-scrollbar font-medium rounded-sm px-4 py-2 text-start text-white hover:cursor-pointer">
              Query: {JSON.stringify(query, null, 2)}
            </pre>
          )}

          <Switch
            options={["string", "json"]}
            value={queryType}
            onChange={setQueryType}
            additionalClass={"mx-4 h-10"}
          />
          <span className="absolute  top-11 r-0 scale-0 rounded bg-gray-800 p-2 text-xs text-red-500 group-hover:scale-100 z-1000">
            {displayTooltip}
          </span>
        </div>
      </div>
      <div className="flex flex-col px-4">
        <FilterGroup filter={query} setFilter={setQuery} />
       
 <button
 className="bg-button-background w-[150px] m-2 hover:bg-button-background-hover text-white font-bold py-2 px-4 rounded"
 onClick={() => {
   showToast(true);
   setTimeout(() => {
     showToast(false);
   }, 2000);
 }}
>
 + Add Group
</button>
</div>

<div className="flex flex-row justify-between px-8 my-4">
<button
 className="bg-[#6D7175] text-white px-4 py-2 rounded-md hover:cursor-pointer"
 onClick={onClose}
>
 Cancel
</button>
<button
 className="bg-button-background text-white px-4 py-2 rounded-md hover:cursor-pointer"
 onClick={

   submitQuery}
>
 Finish
</button>
</div>
</div>
);
};
export default Modal;
