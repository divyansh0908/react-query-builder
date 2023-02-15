import { ratingData, RatingData } from "./ratingData";
import { subthemeData, SubthemeData } from "./subthemeData";
import { themeData, ThemeData } from "./themeData";
import { timePeriodData, TimePeriodData } from "./timePeriod";
import {sourceData, SourceData} from "./sourceData";
import { languageData, LanguageData } from "./languageData";
import { customerIDData, CustomerIDData } from "./customerID";

export interface Data {
    "Theme": ThemeData;
    "Rating": RatingData;
    "Subtheme": SubthemeData;
    "Time Period": TimePeriodData;
    "Source": SourceData;
    "Language": LanguageData;
    "Customer ID": CustomerIDData;
}

export const data: any = {
    "Theme": themeData,
    "Rating": ratingData,
    "Subtheme": subthemeData,
    "Time Period": timePeriodData,
    "Source": sourceData,
    "Language": languageData,
    "Customer ID": customerIDData
};