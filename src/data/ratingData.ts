export type RatingData = {
    
        name: string,
        conditions: string[],
        inputTypes: string,
        dataType: string,
        inputValues: number[],
        defaultValues: {
            condition: string,
            initialValue: number
        }
    }

export const ratingData: RatingData  = {
    "name": "Rating",
    "conditions": [
        'Equals',
        'Does not equal',
    ],
    "inputTypes": "dropdown",
    "dataType": "number",

    "inputValues": [
       1, 2, 3, 4, 5
    ],
    defaultValues: {
        "condition": "Equals",
        "initialValue": 1
    }
}
