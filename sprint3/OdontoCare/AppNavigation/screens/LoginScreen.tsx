import React, { useState } from 'react';
import { 
  View, TextInput, Text, TouchableOpacity, ActivityIndicator, 
  Alert, Image, StyleSheet 
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Funcionalidades: undefined;
};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Funcionalidades'); 
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo2.png')} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#FFF"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#FFF"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#FFF" style={styles.loader} />}

      <Text style={styles.registerText}>Ainda não tem uma conta? Cadastre-se</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007AFF', 
  },
  logoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: 10,
    padding: 10, 
    marginBottom: 20, 
  },
  logo: {
    width: 120,  
    height: 120, 
    resizeMode: 'contain', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 5, 
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#FFF', 
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#003366', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
  registerText: {
    color: '#FFF', 
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
