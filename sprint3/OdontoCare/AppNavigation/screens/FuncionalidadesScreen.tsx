import React from 'react';
import { View, TouchableOpacity, Text, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Agendamentos: undefined;
  BuscarClinicas: undefined;
  Alertas: undefined;
  PerfilPaciente: undefined;
};

type FuncionalidadesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Agendamentos'>;

const FuncionalidadesScreen = () => {
  const navigation = useNavigation<FuncionalidadesScreenNavigationProp>();

  const handleNavigate = (screen: keyof RootStackParamList) => {
    try {
      navigation.navigate(screen);
    } catch (error: unknown) {
      if (error instanceof Error) {
        ToastAndroid.show('Erro ao abrir tela: ' + error.message, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Erro desconhecido ao abrir tela', ToastAndroid.SHORT);
      }
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#003366' }}>
    
      <TouchableOpacity
        onPress={() => handleNavigate('Agendamentos')}
        style={{ backgroundColor: '#007bff', padding: 15, marginBottom: 10, borderRadius: 10 }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Agendamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNavigate('Alertas')}
        style={{ backgroundColor: '#dc3545', padding: 15, marginBottom: 10, borderRadius: 10 }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Alertas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNavigate('PerfilPaciente')}
        style={{ backgroundColor: '#28a745', padding: 15, borderRadius: 10 }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Perfil do Paciente</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FuncionalidadesScreen;
