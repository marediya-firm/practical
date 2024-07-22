// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../type";
import { routePath } from "../path/RoutesPath";
import { LoginScreen } from "../../screen/auth/login/Login";
import { CreateAccount } from "../../screen/auth/registration/CreateAccount";
import LandingHome from "../../screen/dashbord/LandingHome";

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routePath.LoginScreen}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={routePath.LoginScreen} component={LoginScreen} />
        <Stack.Screen
          name={routePath.CreateAccount}
          component={CreateAccount}
        />
        <Stack.Screen name={routePath.Home} component={LandingHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
