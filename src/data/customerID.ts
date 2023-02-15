export type CustomerIDData = {
    name: string,
    conditions: string[],
    inputTypes: string,
    dataType: string,
    defaultValues: {
        condition: string,
        initialValue: string
    }
}
export const customerIDData: CustomerIDData = {
    name: "Customer ID",
    conditions: [
        'Equals',
        'Does not equal',
        'Like',
        'Not like',
        'Is Empty',
        'Is',
        'Is not'
    ],
    inputTypes: "textInput",
    dataType: "number",
    defaultValues: {
        condition: "Equals",
        initialValue: ""
    },
};