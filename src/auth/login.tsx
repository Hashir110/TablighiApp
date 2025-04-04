import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("غلطی", "براہ کرم تمام فیلڈز کو پُر کریں۔");
      return;
    }

    try {
      // Retrieve stored user credentials
      const storedEmail = await AsyncStorage.getItem("userEmail");
      const storedPassword = await AsyncStorage.getItem("userPassword");

      // Check if it's the admin
      if (email === "admin@gmail.com" && password === "admin123") {
        Alert.alert("لاگ ان کامیاب", "ایڈمن پینل میں خوش آمدید!");
        navigation.replace("AdminScreen");
        return;
      }

      // Check if the entered email & password match stored user data
      if (email === storedEmail && password === storedPassword) {
        Alert.alert("لاگ ان کامیاب", `خوش آمدید, ${email}!`);
        navigation.replace("Home");
      } else {
        Alert.alert("غلطی", "ای میل یا پاسورڈ غلط ہے۔");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("غلطی", "لاگ ان ناکام۔ دوبارہ کوشش کریں۔");
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}> لاگ ان</Text>
      <TextInput
        style={styles.input}
        placeholder="ای میل درج کریں"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="پاسورڈ درج کریں"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>لاگ ان کریں</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("SignUp")}>
        <Text style={styles.linkText}>اکاؤنٹ نہیں ہے؟ سائن اپ کریں</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#1a3b47",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#27ae60",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    textAlign: "center",
    color: "#2980b9",
    marginTop: 10,
    fontSize: 16,
  },
});

export default Login;
