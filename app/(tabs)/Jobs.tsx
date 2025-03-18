import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React from 'react';
import { Search, Mic } from 'lucide-react-native'; // Import the icons

// Sample job data with salary and working hours
const sampleJobs = [
  { id: '1', title: 'Software Engineer', company: 'TechCorp', location: 'New York, NY', salary: '$120,000/year', workingHours: '40 hours/week' },
  { id: '2', title: 'Product Manager', company: 'InnovateX', location: 'San Francisco, CA', salary: '$100,000/year', workingHours: '40 hours/week' },
  { id: '3', title: 'Data Analyst', company: 'DataWorks', location: 'Chicago, IL', salary: '$90,000/year', workingHours: '35 hours/week' },
  { id: '4', title: 'UX Designer', company: 'DesignFlow', location: 'Austin, TX', salary: '$95,000/year', workingHours: '40 hours/week' },
  { id: '5', title: 'Backend Developer', company: 'WebTech', location: 'Remote', salary: '$110,000/year', workingHours: '40 hours/week' },
  { id: '6', title: 'Full Stack Developer', company: 'CodeLabs', location: 'Seattle, WA', salary: '$115,000/year', workingHours: '40 hours/week' },
  { id: '7', title: 'Project Manager', company: 'ManageIt', location: 'Boston, MA', salary: '$105,000/year', workingHours: '40 hours/week' },
  { id: '8', title: 'Frontend Developer', company: 'PixelSoft', location: 'Los Angeles, CA', salary: '$95,000/year', workingHours: '40 hours/week' },
  { id: '9', title: 'HR Manager', company: 'PeopleFirst', location: 'Dallas, TX', salary: '$85,000/year', workingHours: '40 hours/week' },
  { id: '10', title: 'Marketing Specialist', company: 'BrandUp', location: 'Miami, FL', salary: '$80,000/year', workingHours: '40 hours/week' },
];

const Jobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <Search size={24} color="#444" style={styles.iconLeft} /> {/* Search Icon */}
          <TextInput 
            placeholder="Search for job"
            placeholderTextColor="#888"
            style={styles.inputFull}
          />
          <Mic size={24} color="#444" style={styles.iconRight} /> {/* Mic Icon */}
        </View>
      </View>
      
      {/* Sample Job List */}
      <FlatList
        data={sampleJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobItem}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text> 
            <Text style={styles.jobLocation}>{item.location}</Text>
            <View style={styles.jobbasicdetails}>

            
            <Text style={styles.jobSalary}>{item.salary}</Text> {/* Display salary */}
            <Text style={styles.jobWorkingHours}>{item.workingHours}</Text> {/* Display working hours */}
              </View>
            
          </View>
        )}
      />
    </View>
  );
};

export default Jobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7", // Light background color
    padding: 20,
  },
  header: {
    backgroundColor: "white",
    padding: 25,
    marginTop: 30,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 4, 
    elevation: 5,  // Shadow for iOS and Android
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    height: 50,
  },
  inputFull: {
    flex: 1,
    height: 50,
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#333",
  },
  iconLeft: {
    marginRight: 15,
  },
  iconRight: {
    marginLeft: 15,
  },
  jobItem: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    width: '100%', 
    borderColor: '#ddd',
    shadowColor: '#000', 
    shadowOffset: { width : 0, height: 2 }, 
    shadowOpacity: 0.15, 
    shadowRadius: 5, 
    elevation: 3,  // Shadow effect for job items
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#333",
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  jobLocation: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  jobSalary: {
    fontSize: 16,
    color: 'green', // Green for salary
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobWorkingHours: {
    fontSize: 14,
    color: 'black', // Orange for working hours
  },
  jobbasicdetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
