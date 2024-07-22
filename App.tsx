import { StyleSheet, View } from "react-native";
import React from "react";
import { RootNavigation } from "./src/routes/stack/AuthStack";
import { useAuthRequest } from "expo-auth-session/providers/google";
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <RootNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
