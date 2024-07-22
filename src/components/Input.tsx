import {
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  Text,
} from "react-native";
import React, { useState } from "react";

export type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  isError: boolean;
  errorMessage: string;
  secureTextEntry?: boolean;
  iStyle?: StyleProp<TextStyle>;
  keyboardType?: "default" | "phone-pad";
  maxLength?: number;
};
export const Input = (props: InputProps) => {
  const { iStyle = {}, isError, errorMessage } = props;
  const [isFocus, setIsFocus] = useState(false);
  return (
    <React.Fragment>
      <TextInput
        onFocus={() => isFocus && setIsFocus(true)}
        {...props}
        style={[styles.input, iStyle]}
      />
      {isError && props.value?.length > 0 && (
        <Text style={{ color: "red", left: 2 }}>{errorMessage}</Text>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 12,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});
