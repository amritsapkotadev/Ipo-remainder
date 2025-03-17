import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function JobSearchHome() {
  return (
    <View style={styles.container}>
      {/* Welcome Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Hello, Amrit Sapkota</Text>
        <Text style={styles.subtitle}>Find your dream job today!</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Search for job"  
          style={styles.inputFull} 
          placeholderTextColor="#444"
        />
        
        {/* Row for location and distance filters */}
        <View style={styles.row}>
          <TextInput 
            placeholder="City or Location"  
            style={styles.inputHalf} 
            placeholderTextColor="#444"
          />
          <TextInput 
            placeholder="Distance (e.g., 5 miles)"  
            style={styles.inputHalf} 
            placeholderTextColor="#444"
          />
        </View>

        {/* Search Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd", // Light blue for a fresh UI
    padding: 20,
  },
  header: {
    backgroundColor: "#0288d1", // Deep blue header
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginTop: 5,
  },
  searchContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  inputFull: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputHalf: {
    flex: 1,
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 5,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#007BFF",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
