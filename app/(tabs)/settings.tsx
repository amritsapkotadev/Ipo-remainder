import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image, ScrollView } from "react-native";
import { ChevronDown, ChevronUp, LogOut, Key, Fingerprint, Trash2, Moon, Bell } from "lucide-react-native";

const ProfileScreen = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80" }}
            style={styles.profileImage}
          />
          <View style={styles.onlineIndicator} />
        </View>
        <Text style={styles.profileName}>Amrit Sapkota</Text>
        <Text style={styles.profileRole}>Junior developer</Text>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => setIsDetailsVisible(!isDetailsVisible)}
        >
          {isDetailsVisible ? (
            <ChevronUp size={24} color="#666" />
          ) : (
            <ChevronDown size={24} color="#666" />
          )}
        </TouchableOpacity>
      </View>

      {isDetailsVisible && (
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailValue}>john.doe@example.com</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date of Birth</Text>
            <Text style={styles.detailValue}>January 1, 1990 (31 years)</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Location</Text>
            <Text style={styles.detailValue}>San Francisco, CA</Text>
          </View>
        </View>
      )}

      <Text style={styles.sectionTitle}>Settings</Text>

      <View style={styles.settingsContainer}>
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Moon size={25} color="#666" />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#e0e0e0", true: "#007AFF" }}
            thumbColor="#fff"
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Bell size={25} color="#666" />
            <Text style={styles.settingText}>Notifications</Text>
          </View>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={setIsNotificationsEnabled}
            trackColor={{ false: "#e0e0e0", true: "#007AFF" }}
            thumbColor="#fff"
          />
        </View>

        <TouchableOpacity style={styles.settingButton}>
          <View style={styles.settingLeft}>
            <Key size={25} color="#666" />
            <Text style={styles.settingButtonText}>Change Password</Text>
          </View>
          <ChevronDown size={20} color="#666" style={{ transform: [{ rotate: "-90deg" }] }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <View style={styles.settingLeft}>
            <Fingerprint size={25} color="#666" />
            <Text style={styles.settingButtonText}>Face ID Setup</Text>
          </View>
          <ChevronDown size={20} color="#666" style={{ transform: [{ rotate: "-90deg" }] }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton}>
          <Trash2 size={20} color="#fff" />
          <Text style={styles.deleteButtonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <LogOut size={20} color="#FF3B30" />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  profileCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 24,
    margin: 16,
    marginTop: 44,  
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },
  onlineIndicator: {
    position: "absolute",
    right: 4,
    bottom: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#34C759",
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  arrowButton: {
    padding: 8,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  detailLabel: {
    fontSize: 16,
    color: "#666",
  },
  detailValue: {
    fontSize: 16,
    color: "#1c1c1e",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1c1c1e",
    marginLeft: 16,
    marginBottom: 16,
  },
  settingsContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  settingText: {
    fontSize: 16,
    color: "#1c1c1e",
  },
  settingButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingButtonText: {
    fontSize: 16,
    color: "#1c1c1e",
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    margin: 16,
    padding: 16,
    backgroundColor: "#FF3B30",
    borderRadius: 12,
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    margin: 16,
    marginTop: 8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF3B30",
  },
});

export default ProfileScreen;