import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/type";
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "LoginScreen"
>;

export type LoginProps = {
  navigation: LoginScreenNavigationProp;
};

type CreateAccountScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CreateAccount"
>;

export type CreateAccountProps = {
  navigation: CreateAccountScreenNavigationProp;
};

export type Cred = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  password: string;
};
