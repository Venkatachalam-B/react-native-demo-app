import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Custominput from '../../components/Custominput';
import Custombutton from '../../components/Custombutton';
import {useForm} from 'react-hook-form';
const EMAIL_REGEX = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSignUpPressed = () => {
    console.warn('heelo');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.signUp}>Sign Up</Text>
      <Text style={styles.text}> Sign up to continue</Text>

      <Custominput
        placeholder="First Name"
        control={control}
        name="firstname"
        rules={{
          required: 'First Name is required',
          minLength: {
            value: 3,
            message: 'First Name should be at least 3 characters long',
          },
          maxLength: {
            value: 24,
            message: 'First Name should be max 24 characters long',
          },
        }}
      />
      <Custominput placeholder="Last Name" name="lastname" control={control} />
      <Custominput
        placeholder="Email"
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
      />
      <Custominput
        placeholder="Username"
        control={control}
        name="username"
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be at least 3 characters long',
          },
          maxLength: {
            value: 24,
            message: 'Username should be max 24 characters long',
          },
        }}
      />
      <Custominput
        placeholder="Password"
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be at least 8 characters long',
          },
        }}
        secureTextEntry={true}
      />
      <Custombutton text="Sign Up" onPress={handleSubmit(onSignUpPressed)} />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: '100%',
    padding: 20,
    paddingBottom: 100,
  },
  signUp: {
    color: '#1E90FF',
    flex: 0.25,
    fontWeight: 'bold',
    fontSize: 40,
    paddingTop: '30%',
    paddingLeft: 3,
  },
  text: {
    color: 'grey',
    flex: 0.15,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default SignUpScreen;
