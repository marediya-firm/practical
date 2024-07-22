import axios, { Axios, AxiosResponse, AxiosStatic } from "axios";
import { Alert } from "react-native";

export class ApiService {
  static async post<T>(
    url: string,
    body: T,
    setLoad: (() => void) | any
  ): Promise<AxiosResponse<any>> {
    try {
      setLoad(true);
      const data = await axios.post(url, body);
      console.log('data',data);
      
      setLoad(false);
      return data;
    } catch (error) {
      setLoad(false);
      Alert.alert("Something went wrong");
      return error as AxiosResponse;
    }
  }
}
