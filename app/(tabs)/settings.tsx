import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Button, TouchableOpacity } from "react-native";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const handleSave = () => {
    // Logic to save the settings
    console.log("Settings saved!");
  };

  const handleChangePassword = () => {
    console.log("Change Password pressed");
    // Add navigation or functionality for changing password
  };

  const handleFaceIdSetup = () => {
    console.log("Face ID Setup pressed");
    // Add navigation or functionality for Face ID setup
  };

  const handleDeleteAccount = () => {
    console.log("Delete Account pressed");
    // Add functionality for deleting account
  };

  return (



    <View style={styles.container}>
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
       {/* Notifications Toggle */}
       <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() =>
            setIsNotificationsEnabled((prevState) => !prevState)
          }
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
       <View style={styles.logoutsection}> <Text style={styles.settingitemheading}> Logout</Text> </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
marginTop: 30,
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
  },
  logoutsection: {
    marginTop: 30,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#007BFF",
    color: "#fff",
    textAlign: "center",
  },
  settingitemheading: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

});

export default Settings;
