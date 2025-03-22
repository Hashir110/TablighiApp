import React from "react";
import { View, Text, ScrollView } from "react-native";

const AdminScreen = () => {
  const cardData = [
    "User Management",
    "Event Approvals",
    "Job Listings",
    "Analytics",
    "Reports",
    "Payments",
    "Settings",
    "Notifications",
    "Feedback",
    "Support",
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa", padding: 16 }}>
      {/* Heading */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Admin Panel
      </Text>

      {/* Cards Section */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {cardData.map((item, index) => (
          <View
            key={index}
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
            <Text style={{ fontSize: 18, fontWeight: "500" }}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AdminScreen;
