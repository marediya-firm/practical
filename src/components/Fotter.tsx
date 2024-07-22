import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Google from "expo-auth-session/providers/google";

export const Footer = () => {
  const [_, __, prompt] = Google.useAuthRequest({
    androidClientId:
      "8613659292-r4m05d92u8qccgn5dphggm7621tg6hrs.apps.googleusercontent.com",
    scopes: ["profile", "email", "phone"],
  });

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.iconButton,
          {
            backgroundColor: "#db4437",
          },
        ]}
        // redirection done not working because it dev environments
        onPress={() => prompt()}
      >
        <Icon name="google" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconButton, { backgroundColor: "black" }]}
      >
        <Icon name="apple" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconButton, { backgroundColor: "#3b5998" }]}
      >
        <Icon name="facebook" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  iconButton: {
    marginHorizontal: 10,
    paddingHorizontal: 12,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
