import { registerRootComponent } from "expo";
import { Platform } from "react-native";
import App from "./App";
import axios from "axios";
// Add your own ip address it local
axios.defaults.baseURL =
  Platform.OS === "android" ? "http://192.168.1.6:8080/" : "http://192.168.1.6:8080/";
registerRootComponent(App);
