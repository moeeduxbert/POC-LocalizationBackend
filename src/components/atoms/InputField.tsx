import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

const InputField = ({title, value, onChangeText, secureTextEntry}) => {
  const {i18n} = useTranslation();
  const isRTL = i18n.language === 'ar'; // Check if language is Arabic

  return (
    <TextInput
      style={[styles.input, isRTL && styles.rtlInput]} // Apply RTL style if necessary
      placeholder={title}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      textAlign={isRTL ? 'right' : 'left'} // Set text alignment based on RTL
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 190,
    textAlign: 'left', // Default text alignment
  },
  rtlInput: {
    textAlign: 'right', // Text alignment for RTL
  },
});

export default InputField;
