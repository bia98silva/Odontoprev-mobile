import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

const AgendamentosScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleDateSelect = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
    Alert.alert("Data selecionada", `Você escolheu: ${day.dateString}`);
  };

  const confirmarAgendamento = () => {
    if (selectedDate) {
      Alert.alert("Agendamento Confirmado", `Seu agendamento foi marcado para ${selectedDate}`);
      navigation.goBack();
    } else {
      Alert.alert("Erro", "Por favor, selecione uma data antes de confirmar.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma data para agendar</Text>

      <Calendar
        onDayPress={handleDateSelect}
        markedDates={selectedDate ? { [selectedDate]: { selected: true, selectedColor: "blue" } } : {}}
        style={styles.calendar}
      />

      <View style={styles.buttonContainer}>
        <Button title="Confirmar Agendamento" onPress={confirmarAgendamento} />
        <Button title="Cancelar" color="red" onPress={() => navigation.goBack()} />
      </View>
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
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FFF", 
  },
  calendar: {
    width: '100%',    
    height: 350,      
  },
  buttonContainer: {
    width: '100%',  
    justifyContent: "center",  
    alignItems: "center",      
    marginTop: 20,
  },
});

export default AgendamentosScreen;
