import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {

  const participants = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ivy", "Jack"]

  function handleAddParticipant(){
    console.log('Add Participant');
  }

  function handleRemoveParticipant(name: string){
    console.log(`Remove the participant ${name}`);
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

      {participants.map((participant, index)=>(
         <Participant key={index} name={participant} onRemove={()=>handleRemoveParticipant(participant)}/>
      ))}



    </View>
  );
}