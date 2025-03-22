import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigation } from "@react-navigation/native";

const SaalAndroon = () => {
  const [name, setName] = useState("");
  const [masjidName, setMasjidName] = useState("");
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [tashkeel, setTashkeel] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!name || !masjidName || !year || !time || !tashkeel) {
      Alert.alert(
        "\u063A\u0644\u0637\u06CC",
        "\u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645 \u062A\u0645\u0627\u0645 \u0641\u06CC\u0644\u0688\u0632 \u06A9\u0648 \u0645\u06A9\u0645\u0644 \u06A9\u0631\u06CC\u06BA\u06CC\u06BA\u06CC\u06BA\u06CC\u06BA\u06CC\u06BA\u06BA۔"
      );
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

      Alert.alert(
        "\u06A9\u0627\u0645\u06CC\u0627\u0628\u06CC",
        "\u0688\u06CC\u0679\u0627 \u06A9\u0627\u0645\u06CC\u0627\u0628\u06CC \u0633\u06D2 \u0645\u062D\u0641\u0648\u0638 \u06A9\u0631 \u0644\u06CC\u0627 \u06AF\u06CC\u0627۔"
      );

      // Clear the fields
      setName("");
      setMasjidName("");
      setYear("");
      setTime("");
      setTashkeel("");
    } catch (error) {
      console.error("Error saving data to Database: ", error);
      Alert.alert(
        "\u063A\u0644\u0637\u06CC",
        "\u0688\u06CC\u0679\u0627 \u0645\u062D\u0641\u0648\u0638 \u06A9\u0631\u0646\u06D2 \u0645\u06CC\u06BA \u0645\u0633\u0626\u0644\u06C1 \u06C1\u0648\u0627۔"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>سال اندرون فارم</Text>

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

      {/* View Saal Androon Button */}
      <TouchableOpacity
        style={[styles.button, styles.viewButton]}
        onPress={() => navigation.navigate("ViewSaalAndroon")}
      >
        <Text style={styles.buttonText}>سال اندرون دیکھیں</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f9",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 40,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#D4E3F0",
    borderRadius: 12,
    shadowColor: "#34495E",
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
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#2ecc71",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#27ae60",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewButton: {
    backgroundColor: "#3498db",
  },
});

export default SaalAndroon;
