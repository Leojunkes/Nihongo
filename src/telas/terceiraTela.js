import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View,Image, Text, TextInput, Button  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import shuffle from 'shuffle-array';
import perguntas from '../cadastros/cadKatakana';



export default function Katakana(props){
    const [perguntaAtual, setPerguntaAtual] = React.useState(0);
    const [pontosMostrar, setPontosMostrar] = useState(false);
    const [pontos, setPontos] = useState(0);
    const [resultadoText, setResultadotext] = useState("");

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
      let resultadoText="";
      if(pontos <=20){
        resultadoText="Oops, precisa melhorar!"
      }else if(pontos<=35){
        resultadoText="Boa! aprendendo hein, mas você pode mais..."
      }else{
        resultadoText="Parabéns, ótima pontuação!"
      }
      setResultadotext(resultadoText);


      }
      shuffle(perguntas);
    return(
        <View style={styles.container}>
          
      {pontosMostrar?(
      <View style={styles.pontos}>
          <Text style={styles.pontosTotal}>
            Seus pontos {pontos} de {perguntas.length}
          </Text>

          <View style={styles.containerResults}>
                <Text style={styles.resultText}>{resultadoText}</Text>
              </View>

              <View style={styles.containerOpcoes}>
                
                <TouchableOpacity style={styles.jogarNovamente} 
                    onPress={()=> {props.navigation.navigate('Home')}}>
                  <Text style={styles.textJogarNovamente}>Jogar Novamente</Text>
                </TouchableOpacity>
                
              </View>
          
      </View>
      ):(
        <>
        <View style={styles.pontosTotal1}>
      <Text style={styles.perguntaTot}>
        Pergunta{perguntaAtual +1}/{perguntas.length}
      </Text>
      </View>
          
    <Text style={styles.welcome}>KATAKANA</Text>
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
    resultText:{
      alignSelf:"center",
      margin:10,
      fontSize:22
    },
    textJogarNovamente:{
    
      padding:9,
      paddingTop:18,
      color:"lightgray"
    },
    containerOpcoes:{
      width:'37%',
      height:'20%',
      backgroundColor:"green",
      borderRadius:7,
      marginLeft:'34%',
      marginBottom:-35,
      marginTop:25
      
    },
  
    pontos:{
      height:260,
  width:'90%',
  marginTop:20,
  borderRadius:8,
  justifyContent:"center",
  backgroundColor:'#00fe7e',
      
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
    pontosTotal:{
      fontSize:30,
      display:'flex',
      marginTop:50,
      fontFamily:'ArchitectsDaughter_400Regular',
      color:'black',
      marginLeft:19,
      marginTop:15
    },
    respostaText:{
      height:50,
      width:60,
      justifyContent:"space-between",
      
    
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
    marginTop:20,
    height:45,
    fontSize:14,
    borderRadius:10,
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
    fontFamily:'ArchitectsDaughter_400Regular',
    }
    })