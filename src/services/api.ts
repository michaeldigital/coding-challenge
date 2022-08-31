import axios from "axios";
import {Account} from "src/type";

export const get = async(url:string):Promise<Account[]> =>{

    try {
        const response = await axios.get(url);
        return response?.data?.data
    }
    catch(err){
        console.log(err.message)
        throw(err)
    }

}