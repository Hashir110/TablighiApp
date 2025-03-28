import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Ensure you have installed @expo/vector-icons

const Home = ({ navigation }) => {
  const screens = [
    { name: "ViewSaalAndroon", label: "سال اندرون" },
    { name: "view7MahinayBeroon", label: "7 مہینے بیرون" },
    { name: "viewCharMahinay", label: "4 مہینے" },
    { name: "viewChilla", label: "چلہ" },
    { name: "viewIjtima", label: " اجتماع" },

    { name: "viewSehroza", label: "سہ روزہ" },
    { name: "viewTeenDin", label: "3 دن مستورات" },
    { name: "viewPandraDin", label: "۱۵ دن مستورات" },
    { name: "viewChalisDin", label: "چلہ دن مستورات" },
    { name: "viewTeenMahinay", label: "۳ مہینے مستورات" },
  ];

  // Logout function (Implement actual logout logic)
  const handleLogout = () => {
    console.log("User logged out");
    navigation.replace("Login"); // Redirect to login screen
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa", padding: 16 }}>
      {/* Logout Button */}
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          position: "absolute",
          top: 25,
          right: 13,
          flexDirection: "row",
          alignItems: "center",
          padding: 8,
          backgroundColor: "red",
          borderRadius: 8,
        }}
      >
        <MaterialIcons name="logout" size={20} color="white" />
        <Text style={{ color: "white", marginRight: 5, fontWeight: "bold" }}>
          لاگ آوٹ
        </Text>
      </TouchableOpacity>

      {/* Heading */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
          marginTop: 60,
        }}
      >
        دیکھے وقت لگیں ہووے احباب
      </Text>

      {/* Cards Section */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {screens.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.name)}
            style={{
              backgroundColor: "white",
              padding: 16,
              marginVertical: 8,
              borderRadius: 8,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
