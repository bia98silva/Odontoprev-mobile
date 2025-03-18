import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FuncionalidadesScreen from './screens/FuncionalidadesScreen';
import AgendamentosScreen from './screens/AgendamentosScreen';
import AlertasScreen from './screens/AlertasScreen';
import PerfilPacienteScreen from './screens/PerfilPacienteScreen';
import LoginScreen from './screens/LoginScreen'; 


export type RootStackParamList = {
  Login: undefined;
  Funcionalidades: undefined;
  Agendamentos: undefined;
  BuscarClinicas: undefined;
  Alertas: undefined;
  PerfilPaciente: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        initialRouteName="Login"
        screenOptions={() => ({
          headerShown: false, 
        })}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Funcionalidades" component={FuncionalidadesScreen} />
        <Stack.Screen name="Agendamentos" component={AgendamentosScreen} />
        <Stack.Screen name="Alertas" component={AlertasScreen} />
        <Stack.Screen name="PerfilPaciente" component={PerfilPacienteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
