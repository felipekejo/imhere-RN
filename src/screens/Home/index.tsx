import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {

  // const participants = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ivy", "Jack"]

  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState('');

  function handleAddParticipant(){
    if(participants.includes(newParticipant)){
    return Alert.alert('Participant already added');
    
    }
    setParticipants([...participants, newParticipant]);
    setNewParticipant('');
  }

  function handleRemoveParticipant(name: string){
    Alert.alert('Remove Participant', `Do you want to remove ${name}?`,[
      
      {
        text:'Yes',
        onPress:()=>setParticipants(participants.filter(participant=>participant!==name))
      },
      {
        text:'No',
        style:'cancel',
        onPress:()=> {return Alert.alert('Participant not removed')}
      }
    
    ] )
    
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
          onChangeText={setNewParticipant}
          value={newParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant} >
          <Text style={styles.buttonText}>
          +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={(item)=>item}
        renderItem={({item})=>(
          <Participant name={item} onRemove={()=>handleRemoveParticipant(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyList}>No participants yet</Text>}
      />



    </View>
  );
}