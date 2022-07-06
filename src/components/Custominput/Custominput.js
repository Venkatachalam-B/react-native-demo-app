import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

const Custominput = ({
  control,
  placeholder,
  name,
  rules = {},
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              placeholder={placeholder}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              style={styles.input}></TextInput>
            {error && (
              <Text style={{color: 'red', alignSelf: 'stretch'}}>
                {error.message || 'error'}
              </Text>
            )}
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', width: '100%'},
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
export default Custominput;
