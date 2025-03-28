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

const Signup = ({ navigation }) => {
    const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("غلطی", "براہ کرم تمام فیلڈز کو پُر کریں۔");
      return;
    }

    try {
      // Save user data locally
            await AsyncStorage.setItem("userEmail", fullName);

      await AsyncStorage.setItem("userEmail", email);
      await AsyncStorage.setItem("userPassword", password);

      Alert.alert("رجسٹریشن کامیاب", "اب آپ لاگ ان کر سکتے ہیں!");

      // Navigate to login screen
      navigation.navigate("Login");
setFullName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Signup Error:", error);
      Alert.alert("غلطی", "رجسٹریشن میں مسئلہ آیا، دوبارہ کوشش کریں۔");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> سائن اپ</Text>
      <TextInput
        style={styles.input}
        placeholder="پورا نام درج کریں"
        value={fullName}
        onChangeText={setFullName}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>سائن اپ کریں</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("Login")}>
        <Text style={styles.linkText}>پہلے ہی اکاؤنٹ ہے؟ لاگ ان کریں</Text>
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

export default Signup;
