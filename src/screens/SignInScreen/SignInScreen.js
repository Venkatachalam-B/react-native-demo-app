import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import Custominput from '../../components/Custominput';
import Custombutton from '../../components/Custombutton';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {error},
  } = useForm();
  const onSignInPressed = data => {
    navigation.navigate('Tabs');
    console.log(data);
  };
  const onCreateAccount = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Login</Text>
      {/* <AntDesign name="windows" style={{color: 'red'}}></AntDesign> */}
      <Custominput
        control={control}
        name="username"
        placeholder="Username"
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'minimum 4 charracter should be needed',
          },
        }}
      />
      <Custominput
        name="password"
        control={control}
        placeholder="Password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'minimum 8 charracter should be needed',
          },
        }}
        onChange={() => {
          console.log(value);
        }}
        secureTextEntry={true}
      />

      <Custombutton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

      <Custombutton
        text="Don't have an account? Create account"
        onPress={onCreateAccount}
        type="TERTIARY"
        fgColor="grey"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    padding: 20,
  },
  heading: {
    paddingTop: '35%',
    color: '#1E90FF',
    fontWeight: 'bold',
    fontSize: 40,
    paddingLeft: 3,
  },
  text: {
    color: 'grey',
    flex: 0.5,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SignInScreen;
