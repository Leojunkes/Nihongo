import * as React from 'react';
import {StyleSheet, View, Text, Button  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ArchitectsDaughter_400Regular, useFonts} from '@expo-google-fonts/architects-daughter';



export default function Home(props){
    let [fontsLoaded] = useFonts({
        ArchitectsDaughter_400Regular,
      });

    return(
        <View style={styles.container}>
            <Text style={styles.nomeAppText}>NIHONGO</Text>
            
        <Text style={styles.welcome}>Escolha qual alfabeto você quer aprender hoje : </Text>
        <View style={styles.containerButton}>
           
           <TouchableOpacity style={styles.button} 
           onPress={()=> {props.navigation.navigate('Hiragana')}} 
           
           >
                <Text style={styles.textHira}>Hiragana</Text>
           </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={()=> {props.navigation.navigate('Katakana')}}> 
            <Text style={styles.textHira}>Katakana</Text>
                
                
            </TouchableOpacity>
            
        </View>
        
        
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
    marginTop:0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90ee90',
    flex:1,
    padding:0
},
nomeAppText:{
fontSize:45,
fontFamily:'ArchitectsDaughter_400Regular',
marginBottom:20,

},
textHira:{
    
    fontSize:24,
    fontWeight:"bold",
},
    containerButton:{
        flexDirection:'row',
        marginTop:40,
        justifyContent:"space-between",
        
    },
    welcome:{
        fontSize:25,
        textAlign:'center',
        margin:30,  
    
    },
    button:{

        height:150,
        width:150,
        backgroundColor:'#00fe7e',
        borderRadius:8,
        padding:24,
        justifyContent:"center",
        margin:10,
        

    },
    opcoes:{
        justifyContent:'space-between',

    },
    
})

