import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Heading for Men */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>مردوں کے لیے</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Sehroza")}
        >
          <Text style={styles.buttonText}>سہ روزہ والے احباب</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Ijtima")}
        >
          <Text style={styles.buttonText}>اجتماع</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Chilla")}
        >
          <Text style={styles.buttonText}>چِلّے والے احباب</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CharMahinay")}
        >
          <Text style={styles.buttonText}>چار مہینے والے احباب</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SathMahinay")}
        >
          <Text style={styles.buttonText}>سات مہینے بیرون والے احباب</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SaalAndroon")}
        >
          <Text style={styles.buttonText}>سال اندرون والے احباب</Text>
        </TouchableOpacity>
      </View>

      {/* Heading for Women */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>مستورات کے لیے</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TeenDin")}
        >
          <Text style={styles.buttonText}>۳ دن مستورات</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PandraDin")}
        >
          <Text style={styles.buttonText}>۱۵ دن مستورات</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChalisDin")}
        >
          <Text style={styles.buttonText}>۴۰ دن مستورات</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TeenMahinayBeroon")}
        >
          <Text style={styles.buttonText}>۳ مہینے مستورات</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: "#D4E3F0",
    borderRadius: 8,
    shadowColor: "#34495E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
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
});

export default Home;
