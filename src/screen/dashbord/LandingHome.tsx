// screens/HomeScreen.tsx
import React, { useCallback, useMemo } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { LandingHomeProps } from "./type";

export default function HomeScreen({ route, navigation }: LandingHomeProps) {
  const { user } = route?.params;

  /**
   * Memoise values not recalculated if not needed
   */
  const getGreeting = useMemo(() => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    else if (hours < 18) return "Good Afternoon";
    else return "Good Evening";
  }, []);

  const handleLogout = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{`${getGreeting}, Mr. ${user.firstName} ${user.lastName}`}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
