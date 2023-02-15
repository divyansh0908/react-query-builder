export type LanguageData = {
    
        name: string,
        conditions: string[],
        inputTypes: string,
        dataType: string,
        defaultValues: {
            condition: string,
            initialValue: string
        }
    }
export const languageData: LanguageData = {
    "name": "Language",
    "conditions": [
        'Equals',
        'Does not equal',
        'Like',
        'Not like',
        'Is Empty',
        'Is',
        'Is not'
    ],
    "inputTypes": "textInput",
    "dataType": "string",
    defaultValues: {
        "condition": "Equals",
        "initialValue": ""
    }
}