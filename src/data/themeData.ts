export type ThemeData = {
    name: string,
    conditions: string[],
    inputTypes: string,
    dataType: string,
    inputValues: string[],
    defaultValues: {
        condition: string,
        initialValue: string
    }
}
export const themeData: ThemeData = {
    "name": "Subtheme",
    "conditions": [
        'Equals',
        'Does not equal',
        'Like',
        'Not like',
        'Is Empty',
        'Is',
        'Is not'
    ],
    "inputTypes": "dropdown",
    "dataType": "string",
    "inputValues": [
        "Offers",
        "Performance",
        "Platform",
        "Product Feedback"
    ],
    defaultValues: {
        "condition": "Equals",
        "initialValue": "Offers"
    }
}