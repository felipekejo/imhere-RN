import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {

  const participants = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ivy", "Jack"]

  function handleAddParticipant(){
    if(participants.includes('Alice')){
    return Alert.alert('Participant already added');
    
    }

    console.log('Add Participant');
  }

  function handleRemoveParticipant(name: string){
    Alert.alert('Remove Participant', `Do you want to remove ${name}?`,[
      
      {
        text:'Yes',
        onPress:()=>Alert.alert('Participant removed')
      },
      {
        text:'No',
        style:'cancel'
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