export type RoutePath = {
  LoginScreen: "LoginScreen";
  CreateAccount: "CreateAccount";
  Home: "Home";
};

export type RootStackParamList = {
  CreateAccount: undefined;
  LoginScreen: undefined;
  // Home: { user: { firstName: string; lastName: string } };
};
