import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding:24
  },
  eventName:{
    color:'#fdfcfe',
    fontSize:24,
    fontWeight:'bold',
    marginTop:48
  },
  eventDate:{
    color:'#6b6b6b',
    fontSize:16
  },
  input:{
    flex:1,
    marginRight:12,
    backgroundColor:'#1f1e25',
    height:56,
    borderRadius:5,
    color:'#fdfcfe',
    padding:16,
    fontSize:16,
  },
  buttonText:{
    color:'#fdfcfe',
    fontSize:24,
  },
  button:{
    backgroundColor:'#31cf67',
    height:56,
    width:56,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
  },
  form:{
    width:'100%',
    flexDirection:'row',
    marginTop:36,
    marginBottom:42
  },
  emptyList:{
    color:'#fdfcfe',
    fontSize:16,
    textAlign:'center',
    marginTop:48
  }

});