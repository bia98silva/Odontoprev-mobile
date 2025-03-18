import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AlertasScreen = () => {
  const navigation = useNavigation();
  
  const alertas = [
    "Consulta agendada para amanhã às 10:00",
    "É importante fazer uma limpeza a cada 6 meses",
    "A sua consulta foi confirmada com o Dr. Silva",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Alertas</Text>

        <FlatList
          data={alertas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.alertText}>{item}</Text>}
          ListEmptyComponent={<Text style={styles.errorText}>Nenhum alerta disponível.</Text>}
          contentContainerStyle={styles.flatListContainer} 
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366", 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  innerContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    width: '100%',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,  
  },
  alertText: {
    backgroundColor: "#FFF",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    width: '100%',  
    textAlign: "left",  
    flexWrap: 'wrap',  
    elevation: 3,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#003366",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  flatListContainer: {
    flexGrow: 1, 
    justifyContent: "center", 
    paddingBottom: 100, 
  },
});

export default AlertasScreen;
