import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  function handleAddParticipant(){
    console.log('Add Participant');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder='Participant Name'
          placeholderTextColor='#6b6b6b'
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant} >
          <Text style={styles.buttonText}>
          +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}