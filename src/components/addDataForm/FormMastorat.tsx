import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigation } from "@react-navigation/native";


interface FormProps {
  heading: string;
  collectionName: string;
  screensNAme: string;
  
}

const FormMastorat: React.FC<FormProps> = ({
  heading,
  collectionName,
  screensNAme,
 
}) => {
  const [name, setName] = useState("");
  const [masjidName, setMasjidName] = useState("");
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [tashkeel, setTashkeel] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!name || !masjidName || !year || !time || !tashkeel) {
      Alert.alert("غلطی", "براہ کرم تمام فیلڈز کو مکمل کریں۔");
      return;
    }

    try {
      await addDoc(collection(db, collectionName), {
        name,
        masjidName,
        year,
        time,
        tashkeel,
        createdAt: new Date(),
      });

      Alert.alert("کامیابی", "ڈیٹا کامیابی سے محفوظ کر لیا گیا۔");

      setName("");
      setMasjidName("");
      setYear("");
      setTime("");
      setTashkeel("");
    } catch (error) {
      console.error("Error saving data: ", error);
      Alert.alert("غلطی", "ڈیٹا محفوظ کرنے میں مسئلہ ہوا۔");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formBox}>
          <Text style={styles.heading}>{heading}</Text>

          <TextInput
            style={styles.input}
            placeholder="محرم کا نام "
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
            placeholder="کونسے سال میں لگایا"
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="وقت کتنا لگایا"
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(screensNAme)}
          >
            <Text style={styles.buttonText}> ڈیٹا دیکھیں</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  formBox: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#218c74",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default FormMastorat;
