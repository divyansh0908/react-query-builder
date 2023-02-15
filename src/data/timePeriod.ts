export type TimePeriodData = {
    name: string;
    conditions: string[];
    inputTypes: string;
    dataType: string;
    defaultValues: {
      condition: string;
      initialValue: Date;
    };
  };
  
  export const timePeriodData: TimePeriodData = {
    name: "Time Period",
    conditions: [
      'Equals',
      'Does not equal',
      'Like',
      'Empty',
    ],
    inputTypes: "dateTime",
    dataType: "date",
    defaultValues: {
      "condition": "Equals",
      "initialValue": new Date()
    }
  };