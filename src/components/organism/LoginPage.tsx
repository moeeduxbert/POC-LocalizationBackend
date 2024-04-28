import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoginForm from '../molecules/LoginForm';

const LoginPage = () => {
  const handleLogin = formData => {
    console.log('Login form data:', formData);
  };

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginPage;
