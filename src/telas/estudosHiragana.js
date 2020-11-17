import React from 'react';
import {ArchitectsDaughter_400Regular, useFonts} from '@expo-google-fonts/architects-daughter';
import {StyleSheet, View,Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import perguntas from '../cadastros/cadHiragana';
import xis from '../imagens/x.png';
import shuffle from 'shuffle-array';


export default function EstudosHiragana(props){
    let [fontsLoaded] = useFonts({
        ArchitectsDaughter_400Regular
    })

    const P = perguntas.map((p)=>
        <View style={s.containerQuestaoImg}>
            <Image style={s.imagensEstudoHira} source={p.questaoImg} />
            <Text style={s.textImgHira}>{p.questaoText}</Text>
        </View>
    )
    shuffle(perguntas)
    return(
        <View style={s.container}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Home')}}>
                <Image style={s.imgXis} source={xis} />
            </TouchableOpacity>
                <Text style={s.HiraganaText}>HIRAGANA</Text>
    <View style={s.containerImg}>{P}</View>
        
        </View>
    )
}
 
const s = StyleSheet.create({
    containerQuestaoImg:{
        marginTop:5
      },
      imagensEstudoHira:{
        width:44,
        height:44,
        marginLeft:10,
        marginTop:0,

      },
      textImgHira:{
        textAlign:"center",
        fontSize:17,
        color:'#141414',
        fontFamily:'ArchitectsDaughter_400Regular',

      },
      container:{
        height:60,
        backgroundColor:'#90ee90',
        flex: 1,
      },
      imgXis:{
        height:26,
        width:26,
        marginLeft:349,
        borderRadius:50,
        marginTop:2
      },
      HiraganaText:{
        fontSize:22,
        textAlign:"center",
        fontFamily:'ArchitectsDaughter_400Regular'

      },
      containerImg:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        backgroundColor:'#90ee90',
        marginTop:30
        
      }
})