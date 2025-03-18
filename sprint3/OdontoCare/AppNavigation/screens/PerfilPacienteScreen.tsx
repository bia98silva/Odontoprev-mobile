import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const PerfilPacienteScreen = () => {
  const navigation = useNavigation();
  const [pontos, setPontos] = useState(0);
  const [atividades, setAtividades] = useState({
    escovouCafe: false,
    escovouAlmoco: false,
    escovouJantar: false,
    marcouAvaliacao: false,
    realizouLimpeza: false,
  });

  const handleCheck = (campo: keyof typeof atividades) => {
    setAtividades((prev) => {
      const novoValor = !prev[campo];
      const novoPontos = novoValor ? pontos + 1 : pontos - 1;
      setPontos(novoPontos);
      return { ...prev, [campo]: novoValor };
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Paciente</Text>
      <Text style={styles.pontos}>Pontos: {pontos}</Text>

      <View style={styles.checkboxesContainer}>
        <Checkbox.Item 
          label="Escovou os dentes após o café da manhã" 
          status={atividades.escovouCafe ? "checked" : "unchecked"} 
          onPress={() => handleCheck("escovouCafe")}
          labelStyle={styles.checkboxLabel}  
        />
        <Checkbox.Item 
          label="Escovou os dentes após o almoço" 
          status={atividades.escovouAlmoco ? "checked" : "unchecked"} 
          onPress={() => handleCheck("escovouAlmoco")}
          labelStyle={styles.checkboxLabel}  
        />
        <Checkbox.Item 
          label="Escovou os dentes após o jantar" 
          status={atividades.escovouJantar ? "checked" : "unchecked"} 
          onPress={() => handleCheck("escovouJantar")}
          labelStyle={styles.checkboxLabel}  
        />
        <Checkbox.Item 
          label="Marcou uma avaliação dental" 
          status={atividades.marcouAvaliacao ? "checked" : "unchecked"} 
          onPress={() => handleCheck("marcouAvaliacao")}
          labelStyle={styles.checkboxLabel}  
        />
        <Checkbox.Item 
          label="Realizou limpeza dental" 
          status={atividades.realizouLimpeza ? "checked" : "unchecked"} 
          onPress={() => handleCheck("realizouLimpeza")}
          labelStyle={styles.checkboxLabel}  
        />
      </View>

      <Button title="Salvar e Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#003366",  
    justifyContent: "center",  
    alignItems: "center",      
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: '#FFF',  
  },
  pontos: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: '#FFF',  
  },
  checkboxesContainer: {
    width: '100%', 
    marginBottom: 20, 
  },
  checkboxLabel: {
    color: '#FFF',  
  },
});

export default PerfilPacienteScreen;
