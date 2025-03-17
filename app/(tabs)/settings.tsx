import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Button, TouchableOpacity, Image } from "react-native";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const handleSave = () => {
    console.log("Settings saved!");
  };

  const handleChangePassword = () => {
    console.log("Change Password pressed");
  };

  const handleFaceIdSetup = () => {
    console.log("Face ID Setup pressed");
  };

  const handleDeleteAccount = () => {
    console.log("Delete Account pressed");
  };

  return (
    <View style={styles.container}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} // Placeholder image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>

      {/* Settings Title */}
      <Text style={styles.title}>Settings</Text>

      {/* Additional Settings */}
      <View style={styles.additionalSettings}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode((prevState) => !prevState)}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={() => setIsNotificationsEnabled((prevState) => !prevState)}
          />
        </View>

        {/* Change Password */}
        <TouchableOpacity style={styles.settingOption} onPress={handleChangePassword}>
          <Text style={styles.settingItemHeading}>Change Password</Text>
          <Text style={styles.settingItemSubheading}>Change your login password</Text>
        </TouchableOpacity>

        {/* Face ID Setup */}
        <TouchableOpacity style={styles.settingOption} onPress={handleFaceIdSetup}>
          <Text style={styles.settingItemHeading}>Face ID Setup for Login</Text>
          <Text style={styles.settingItemSubheading}>Enable Face ID for login</Text>
        </TouchableOpacity>

        {/* Delete Account */}
        <TouchableOpacity style={styles.settingOption} onPress={handleDeleteAccount}>
          <Text style={styles.settingItemHeading}>Delete Account</Text>
          <Text style={styles.settingItemSubheading}>Delete this account permanently</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Section */}
      <View style={styles.logoutSection}>
        <Text style={styles.logoutText}>Logout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  profileCard: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 30,
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 16,
    color: "#666",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
    color: "#333",
  },
  settingItemHeading: {
    fontSize: 20,
    color: "#333",
    marginBottom: 5,
    fontWeight: "bold",
  },
  settingItemSubheading: {
    fontSize: 15,
    color: "#666",
  },
  additionalSettings: {
    marginTop: 30,
  },
  settingOption: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  logoutSection: {
    marginTop: 30,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#007BFF",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Settings;
