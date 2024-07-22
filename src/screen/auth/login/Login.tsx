import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Cred, LoginProps } from "../type";
import { appImages } from "../../../images";
import Footer from "../../../components/Fotter";
import { Input } from "../../../components/Input";
import { ApiService } from "../../../service/Apiservices";

export const LoginScreen = ({ navigation }: LoginProps) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle login button
  const handleLogin = async () => {
    if (mobileNumber.length < 9 || password.length < 8) {
      setError(true);
    } else {
      const response = await ApiService.post<
        Omit<Cred, "firstName" | "lastName">
      >(
        "api/login",
        {
          mobileNumber,
          password,
        },
        setLoading
      );
      if (response.data.success) {
        navigation.navigate("Home", {
          user: {
            firstName: response?.data?.data?.firstName,
            lastName: response?.data?.data?.lastName,
          },
        });
      }
      else if (response?.data?.error) {
        return Alert.alert(response?.data?.error);
      }
    }
  };

  // For the error message
  const isValidInfo = mobileNumber.length <= 0 && password.length <= 0;

  return (
    <View style={styles.container}>
      <Image
        source={appImages.equip9}
        style={{
          tintColor: "black",
          marginTop: 50,
          height: 120,
          width: 200,
          alignSelf: "center",
          marginBottom: 30,
        }}
      />
      <Text style={styles.title}>Hi, Welcome Back!</Text>
      <Input
        placeholder="Phone number"
        value={mobileNumber}
        onChangeText={(text) => {
          setMobileNumber(text), setError(false);
        }}
        keyboardType="phone-pad"
        maxLength={10}
        errorMessage="Enter your valid phone number"
        isError={isError || mobileNumber.length < 10}
      />
      <Input
        placeholder="Password"
        errorMessage="Password must be at least 8 characters"
        value={password}
        onChangeText={(text) => {
          setPassword(text), setError(false);
        }}
        secureTextEntry={true}
        isError={isError || password.length < 8}
      />

      <TouchableOpacity
        style={[
          styles.button,
          styles.buttonRadius,
          { backgroundColor: isValidInfo ? "#8ab0eb" : "#0e64d1" },
        ]}
        disabled={Boolean(isValidInfo)}
        onPress={handleLogin}
      >
        {loading ? (
          <ActivityIndicator color={"white"} />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.orText}>OR LOGIN WITH</Text>
      <Footer />

      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text style={styles.footerText}>
          <Text style={{ color: "black" }}>Don't have an account? </Text> Sign
          Up
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
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  rememberMeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: "#0000EE",
  },
  button: {
    marginTop: 12,
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
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: "white",
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
