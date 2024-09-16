// Register.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {

        // Trigger form validation when name, 
        // email, or password changes
        validateForm();
    }, [name, email,mobileNumber, password]);

    const validateForm = () => {
        let errors = {};

        // Validate name field
        if (!name) {
            errors.name = 'Name is required.';
        }
        //Validate email field
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }
        if(!mobileNumber){
          errors.mobileNumber = 'Mobile Number is required.';
        } else if (mobileNumber.length < 10 || mobileNumber.length > 10){
          errors.mobileNumber = 'Mobile Number must be 10 digits.';
        }
        // Validate password field
        if (!password) {
            errors.password = 'Password is required.';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }
        // Set the errors and update form validity
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

  const handleRegister = () => {
    if (isFormValid) {
      // Form is valid, perform the submission logic
      console.log('Form submitted successfully!');
      // Register the user in Firebase
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registered successfully!");
        navigation.navigate('Login');
      })
      .catch((error) => {
        alert(error.message);
      });
      } else {
        // Form is invalid, display error messages
        console.log('Form has errors. Please correct them.');
      }
    };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      {errors.name ? (
          <Text style={styles.error}>{errors.name}</Text>) : null}
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      {errors.mobileNumber ? (
          <Text style={styles.error}>{errors.mobileNumber}</Text>) : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email ? (
          <Text style={styles.error}>{errors.email}</Text>) : null}
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password ? (
          <Text style={styles.error}>{errors.password}</Text>) : null}
      <Button title="Register" onPress={handleRegister} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  link: {
    marginTop: 20,
    color: 'blue',
  },
  error: {
    color: 'red',
    fontSize: 20,
    marginBottom: 12,
  },
});

export default Register;
