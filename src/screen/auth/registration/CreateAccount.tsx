import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { CreateAccountProps, Cred } from "../type";
import Footer from "../../../components/Fotter";
import { Input } from "../../../components/Input";
import { ApiService } from "../../../service/Apiservices";

export const CreateAccount = ({ navigation }: CreateAccountProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const isValidInfo =
    firstName?.length <= 0 ||
    lastName.length <= 0 ||
    password.length <= 0 ||
    mobileNumber.length <= 0;

  const handleRegister = async () => {
    if (
      firstName.length < 1 ||
      lastName.length < 1 ||
      mobileNumber.length < 10 ||
      password.length < 6
    ) {
      setError(true);
    } else {
      const cred = {
        firstName,
        lastName,
        mobileNumber,
        password,
      };

      const response = await ApiService.post<Cred>(
        "api/register",
        cred,
        setLoading
      );

      if (response?.data?.error) {
        return Alert.alert(response?.data?.error);
      }
      navigation.reset({ index: 0, routes: [{ name: "LoginScreen" }] });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>Connect with your friends today!</Text>
      <Input
        placeholder="Enter Your First Name"
        value={firstName}
        onChangeText={setFirstName}
        errorMessage="Enter your valid first name"
        isError={isError && firstName.length <= 0}
      />
      <Input
        placeholder="Enter Your Last Name"
        value={lastName}
        onChangeText={setLastName}
        errorMessage="Enter your valid last name"
        isError={isError && lastName.length <= 0}
      />
      <Input
        errorMessage="Enter your valid phone number"
        placeholder="Enter Your Phone Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
        isError={isError && mobileNumber.length < 10}
      />
      <Input
        errorMessage="Password must be at least 8 characters"
        placeholder="Enter Your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        isError={isError && password.length < 8}
      />
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isValidInfo ? "#8ab0eb" : "#0e64d1" },
        ]}
        onPress={handleRegister}
        disabled={isValidInfo}
      >
        {loading ? (
          <ActivityIndicator color={"white"} />
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>
      <Footer />
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.footerText}>
          <Text style={{ color: "black" }}>Already have an account?</Text> Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 90,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  button: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#0e64d1",
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
  },
  socialButton: {
    backgroundColor: "#DDDDDD",
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    color: "#0000EE",
    marginTop: 12,
  },
  buttonRadius: {
    borderRadius: 5,
  },
  faceBook: {
    backgroundColor: "#3b5998",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
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
});
