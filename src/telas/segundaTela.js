import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View,Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import perguntas from '../cadastros/cadHiragana';
import {AppLoading} from 'expo';
import {ArchitectsDaughter_400Regular, useFonts} from '@expo-google-fonts/architects-daughter';
import shuffle from 'shuffle-array';
import xis from '../imagens/x.png';

export default function Hiragana(props) {
  let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular,
    
  });
        
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
        resultadoText="Oops, precisa melhorar! Volte no menu principal e escolha a opção Estudar"
      }else if(pontos<=35){
        resultadoText="Boa! aprendendo hein, mas você pode mais...Volte no menu principal e escolha a opção estudar"
      }else{
        resultadoText="Parabéns, ótima pontuação!"
      }
      setResultadotext(resultadoText);


      }
      shuffle(perguntas);
      
      return (
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
            <View style={styles.containerXis}>
                <TouchableOpacity onPress={()=> {props.navigation.navigate('Home')}}>
                <Image style={styles.imgXis} source={xis} />
                </TouchableOpacity>
            </View>


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
imgXis:{
  height:26,
  width:26,
  marginLeft:330,
  borderRadius:50,

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
  textJogarNovamente:{
    fontSize:14,
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
    marginTop:8
    
  },
  ButtonfinalPoint:{
    justifyContent:"flex-end",
    
    
  },
  button1:{
    height:20,
    width:20
  },
  resultText:{
    alignSelf:"center",
    margin:10,
    fontSize:22
  },

pontosTotal:{
  fontSize:30,
  display:'flex',
  fontFamily:'ArchitectsDaughter_400Regular',
  color:'black',
  marginLeft:19,
  marginTop:-20
  
  
},
pontos:{
  height:260,
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