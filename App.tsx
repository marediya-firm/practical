import { StyleSheet, View } from "react-native";
import React from "react";
import { RootNavigation } from "./src/routes/stack/AuthStack";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <RootNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
