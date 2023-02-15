import { utilitySymbols } from "./utilitySymbols";

export const jsonToString = (json: { combinator: string; filters: any }): string => {
  const combinator = json.combinator;
  const filterArray = json.filters;
  let string = "";
  if (filterArray.length > 0) {
    const lastElement = filterArray[filterArray.length - 1];
    const lastElementString =
      "field." + lastElement.field + " " + utilitySymbols[lastElement.condition.toLowerCase()] + " " + lastElement.value;
    if (filterArray.length === 1) {
      string = lastElementString;
    } else {
      filterArray.slice(0, filterArray.length - 1).forEach((element:any) => {
        string +=
          "field." +
          element.field +
          " " +
          utilitySymbols[element.condition.toLowerCase()] +
          " " +
          element.value +
          " " +
          utilitySymbols[combinator.toLowerCase()] +
          " ";
      });
      string += lastElementString;
    }
  }

  console.log(string, "string");
  return string;
};
