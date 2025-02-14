import axios from "axios";
import { IAccount } from "src/type";

export const get = async (url: string): Promise<IAccount[]> => {
  try {
    const response = await axios.get(url);
    return response?.data?.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
    throw err;
  }
};
