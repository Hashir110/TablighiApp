import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login"); 
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>خوش آمدید</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff", 
  },
  text: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
});

export default SplashScreen;
