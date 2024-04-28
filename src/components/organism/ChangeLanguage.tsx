import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

const ChangeLanguagePage = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('Change Language')}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLanguage('en')}>
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLanguage('esp')}>
        <Text style={styles.buttonText}>Español</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLanguage('ar')}>
        <Text style={styles.buttonText}>العربية</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLanguage('fr')}>
        <Text style={styles.buttonText}>Français</Text>
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
    backgroundColor: '#fff', // Adjust background color as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ChangeLanguagePage;
