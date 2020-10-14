import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View,Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import perguntas from '../cadastros/cadHiragana';
import {AppLoading} from 'expo';
import {ArchitectsDaughter_400Regular, useFonts} from '@expo-google-fonts/architects-daughter';




export default function Hiragana(props) {
  let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular,
    
  });
        
    const [perguntaAtual, setPerguntaAtual] = React.useState(0);
    const [pontosMostrar, setPontosMostrar] = useState(false);
    const [pontos, setPontos] = useState(0);

    const handleAnswerOptionClick  = (isCorrect) => {
        if(isCorrect){
          setPontos(pontos + 1)
        }
        const nextQuestion = perguntaAtual + 1;
          if(nextQuestion < perguntas.length){
            setPerguntaAtual(nextQuestion);
          }else{
            setPontosMostrar(true);
      }
      }

      
      return (
        <View style={styles.container}>
          
          {pontosMostrar?(
          <View style={styles.pontos}>
              <Text style={styles.pontosTotal}>
                Seus pontos {pontos} de {perguntas.length}
              </Text>
              
              </View>
            ):(
            <>
            <View style={styles.pontosTotal1}>
          <Text style={styles.perguntaTot}>
            Pergunta{perguntaAtual +1}/{perguntas.length}
          </Text>
          </View>
              
        <Text style={styles.welcome}>HIRAGANA</Text>
        <Image style={styles.ima1} source={perguntas[perguntaAtual].questaoImg}/>
        
        <Text style={styles.textEscolha}>Qual opção abaixo está correta?</Text>
        <View style={styles.opcoesButton}>
            {perguntas[perguntaAtual].respostas.map((respostas)=>(
              <TouchableOpacity style={styles.respostaText} onPress={()=>handleAnswerOptionClick(respostas.isCorrect)}>
                <Text style={styles.txtButton}>{respostas.respostaTexto}</Text>
                </TouchableOpacity>
        ))}
        
        </View>
          </>  
          )
            }   
          
    </View>
   
    
);

}

const styles = StyleSheet.create({
container:{
marginTop:-45,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f5fcff',
backgroundColor: '#90ee90',
marginBottom:0,
flex:1,
},
respostaText:{
  height:50,
  width:60,
  justifyContent:"space-between",
  

},
perguntaTot:{
  fontSize:23,
  color:'#000000',
  marginBottom:30,
  marginLeft:-190,
  flexDirection:"row",
  backgroundColor:'#60ca35',
  padding:4,
  paddingLeft: 5,
  borderRadius:7
  
  },
  ButtonfinalPoint:{
    justifyContent:"flex-end",
    
    
  },
  button1:{
    height:20,
    width:20
  },

pontosTotal:{
  fontSize:30,
  display:'flex',
  marginTop:50,
  fontWeight:"bold",
  
  color:'#393939'
  
},
pontos:{
  flexDirection:"row",
  justifyContent:"space-between",
  height:150,
  width:'90%',
  marginTop:20,
  borderRadius:8,
  justifyContent:"center",
  backgroundColor:'#00fe7e',
  
  
},


ima1:{
width:200,
height:200,
resizeMode:'contain',
borderRadius:10,
margin:40,
shadowOffset:{width:5, height:5},
shadowColor:'#000000'




},
textEscolha:{
marginBottom:35,
fontSize:19,
fontWeight:'700'
},

opcoesButton:{
flexDirection:"row",
justifyContent:"space-between",
width:'55%',
marginTop:20


},
txtButton:{
    borderWidth:1,
    padding:8,
    marginLeft:3,
    borderRadius:8,
    fontSize:20,
    fontWeight:'700',
    
    backgroundColor:'#00fe7e'
    
},


welcome:{
fontSize:35,
textAlign:'center',
margin:10,

fontFamily:'ArchitectsDaughter_400Regular'
}
})