import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const SathMahiny = () => {
  const [name, setName] = useState("");
  const [masjidName, setMasjidName] = useState("");
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [tashkeel, setTashkeel] = useState("");

  const handleSubmit = async () => {
    if (!name || !masjidName || !year || !time || !tashkeel) {
      Alert.alert("غلطی", "براہ کرم تمام فیلڈز کو مکمل کریں۔");
      return;
    }

    try {
      // Save to Firestore
      await addDoc(collection(db, "saalAndroon"), {
        name,
        masjidName,
        year,
        time,
        tashkeel,
        createdAt: new Date(), // Optionally add a timestamp
      });

      Alert.alert("کامیابی", "ڈیٹا کامیابی سے محفوظ کر لیا گیا۔");

      // Clear the fields
      setName("");
      setMasjidName("");
      setYear("");
      setTime("");
      setTashkeel("");
    } catch (error) {
      console.error("Error saving data to Database: ", error);
      Alert.alert("غلطی", "ڈیٹا محفوظ کرنے میں مسئلہ ہوا۔");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ساتھ مہینے فارم</Text>

      <TextInput
        style={styles.input}
        placeholder="نام"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="مسجد کا نام"
        value={masjidName}
        onChangeText={setMasjidName}
      />
      <TextInput
        style={styles.input}
        placeholder="سال"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="وقت"
        value={time}
        onChangeText={setTime}
      />
 <TextInput
              style={styles.input}
              placeholder="تشکیل"
              value={tashkeel}
              onChangeText={setTashkeel}
            />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>جمع کریں</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f9", // Light off-white background for a peaceful look
  },
  heading: {
    fontSize: 32, // Larger font size for the heading
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50", // Elegant dark color
    marginBottom: 40, // Increased margin for spacious layout
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#D4E3F0", // Light blue background for the heading
    borderRadius: 12, // Rounded corners
    shadowColor: "#34495E", // Subtle shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: "#fff", // White background for inputs
  },
  button: {
    backgroundColor: "#2ecc71", // Islamic green color for buttons
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#27ae60", // Shadow effect for the button
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18, // Slightly larger font size for better readability
    fontWeight: "bold",
  },
});

export default SathMahiny;
