import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("غلطی", "براہ کرم تمام فیلڈز کو پُر کریں.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      Alert.alert("لاگ ان کامیاب", `خوش آمدید, ${user.email}!`);

      setEmail("");
      setPassword("");

      // Check for admin credentials
      if (email === "admin@gmail.com" && password === "admin123") {
        navigation.replace("AdminScreen");
      } else {
        navigation.replace("Home");
      }
    } catch (error) {
      console.error(error);
      let errorMessage = "لاگ ان ناکام۔ برائے مہربانی دوبارہ کوشش کریں۔";

      if (error.code === "auth/user-not-found") {
        errorMessage = "صارف موجود نہیں ہے۔";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "پاسورڈ غلط ہے۔";
      }

      Alert.alert("غلطی", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> محمدی مسجد ٥٣</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
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
    fontFamily: "AlQalamQuran",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    fontFamily: "AlQalamQuran",
    fontSize: 16,
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
    fontFamily: "AlQalamQuran",
  },
});

export default Login;
