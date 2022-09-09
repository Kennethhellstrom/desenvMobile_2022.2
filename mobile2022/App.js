import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, ImageBackground,Button } from 'react-native';



const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  return (
    
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

          <View style={styles.loginContainer}>
          <Text style={styles.logo}>PROJETO</Text>
          <StatusBar style="auto" />
          <TextInput style={styles.input} placeholder="Login"></TextInput>  
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha"></TextInput>   
          <Button title="Entrar" style={styles.buttonLogin}  accessibilityLabel="Learn more about this purple button"></Button>         
          </View>
          
        </ImageBackground>        
      </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

 


  loginContainer:{
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    width: 200,
    
  },

 



  logo:{
    fontSize:50,
    color:'#fff',
    alignSelf:'center',
    textAlign:'center',
    fontWeight:'bold',
  },

  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor:'#A0A0A0',
    width: 160,
    alignSelf: "center",
    opacity: 0.9,
    color:'#fff',
    marginBottom:10,
    
  },

  buttonLogin:{
    width: 100,
    color:"#76d1ea",
    position:'absolute'
  },

  
  image: {
    flex: 1,
    justifyContent: "center",
  },


});
