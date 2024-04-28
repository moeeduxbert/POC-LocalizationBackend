import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

const LoginForm = ({onSubmit}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {t} = useTranslation();
  const navigation = useNavigation();
  const handleLogin = () => {
    // Handle login logic
    onSubmit({username, password});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('login')}</Text>
      <InputField
        title={t('Username')}
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        title={t('Password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title={t('login')} onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Select Language')}>
        <Text style={{marginVertical: 10}}>{t('Change Language')}</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LoginForm;
