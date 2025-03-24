import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const handleLogout = () => {
    console.log("User logged out");
    navigation.replace("Login");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <MaterialIcons name="logout" size={20} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Men's Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>مردوں کے لیے</Text>
        {[
          { label: "سہ روزہ والے احباب", route: "Sehroza" },
          { label: "اجتماع", route: "Ijtima" },
          { label: "چِلّے والے احباب", route: "Chilla" },
          { label: "چار مہینے والے احباب", route: "CharMahinay" },
          { label: "سات مہینے بیرون والے احباب", route: "SathMahinay" },
          { label: "سال اندرون والے احباب", route: "SaalAndroon" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(item.route)}
          >
            <Text style={styles.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Women's Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>مستورات کے لیے</Text>
        {[
          { label: "۳ دن مستورات", route: "TeenDin" },
          { label: "۱۵ دن مستورات", route: "PandraDin" },
          { label: "۴۰ دن مستورات", route: "ChalisDin" },
          { label: "۳ مہینے مستورات", route: "TeenMahinayBeroon" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(item.route)}
          >
            <Text style={styles.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
    padding: 20,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#e74c3c",
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#c0392b",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  sectionContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#2c3e50",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#2980b9",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
