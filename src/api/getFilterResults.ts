import axios from "axios";


export async function getFilterResults(filter:any) {
    console.log("filter");
    let data=null;
    let err = null;
    const apiURL = "http://localhost:8080/api/filter";
    const response = await axios.post(apiURL, filter);
    
    try {
        data = response.data;
    }
    catch (error) {
        err = error;
    }
    return { data, err };

}

