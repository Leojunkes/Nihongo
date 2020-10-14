import img1 from '../imagens/hiraganaIMG/A1.png';
import img2 from '../imagens/hiraganaIMG/E1.png';
import img3 from '../imagens/hiraganaIMG/I.png';
import img4 from '../imagens/hiraganaIMG/CHI.png';
import img5 from '../imagens/hiraganaIMG/FU.png';
import img6 from '../imagens/hiraganaIMG/HA.png';
import img7 from '../imagens/hiraganaIMG/HE.png';
import img8 from '../imagens/hiraganaIMG/HI.png';
import img9 from '../imagens/hiraganaIMG/HO.png';
import img10 from'../imagens/hiraganaIMG/YU.png';
import img11 from '../imagens/hiraganaIMG/KA.png';
import img12 from '../imagens/hiraganaIMG/KE.png';
import img13 from '../imagens/hiraganaIMG/KI.png';
import img14 from '../imagens/hiraganaIMG/KO.png';
import img15 from '../imagens/hiraganaIMG/KU.png';
import img16 from '../imagens/hiraganaIMG/MA.png';
import img17 from '../imagens/hiraganaIMG/ME.png';
import img18 from '../imagens/hiraganaIMG/MI.png';
import img19 from '../imagens/hiraganaIMG/MO.png';
import img20 from '../imagens/hiraganaIMG/MU.png';
import img21 from '../imagens/hiraganaIMG/N.png';
import img22 from '../imagens/hiraganaIMG/NA.png';
import img23 from '../imagens/hiraganaIMG/NE.png';
import img24 from '../imagens/hiraganaIMG/NI.png';
import img25 from '../imagens/hiraganaIMG/NO.png';
import img26 from '../imagens/hiraganaIMG/NU.png';
import img27 from '../imagens/hiraganaIMG/O.png';
import img28 from '../imagens/hiraganaIMG/RA.png';
import img29 from '../imagens/hiraganaIMG/RE.png';
import img30 from '../imagens/hiraganaIMG/RI.png';
import img31 from '../imagens/hiraganaIMG/RO.png';
import img32 from '../imagens/hiraganaIMG/RU.png';
import img33 from '../imagens/hiraganaIMG/SA.png';
import img34 from '../imagens/hiraganaIMG/SE.png';
import img35 from '../imagens/hiraganaIMG/SHI.png';
import img36 from '../imagens/hiraganaIMG/SO.png';
import img37 from '../imagens/hiraganaIMG/SU.png';
import img38 from '../imagens/hiraganaIMG/TA.png';
import img39 from '../imagens/hiraganaIMG/TE.png';
import img40 from '../imagens/hiraganaIMG/TO.png';
import img41 from '../imagens/hiraganaIMG/TSU.png';
import img42 from '../imagens/hiraganaIMG/U.png';
import img43 from '../imagens/hiraganaIMG/WA.png';
import img44 from '../imagens/hiraganaIMG/WO.png';
import img45 from '../imagens/hiraganaIMG/YA.png';
import img46 from '../imagens/hiraganaIMG/YO.png';

const perguntas = [
  {
    questaoImg:img1,//A
    respostas: [
      {respostaTexto:'  A', isCorrect:true},
      {respostaTexto:'  B', isCorrect:false},
      {respostaTexto:'  O', isCorrect:false},
    ],
  },
  {
    questaoImg:img2,//E
    respostas: [
      {respostaTexto:'  A', isCorrect:false},
      {respostaTexto:'  E', isCorrect:true},
      {respostaTexto:'  I', isCorrect:false},
    ],

  },
  {
    questaoImg:img3,//i
    respostas: [
      {respostaTexto:'  I', isCorrect:true},
      {respostaTexto:'  C', isCorrect:false},
      {respostaTexto:'  G', isCorrect:false},
    ],
  },
  {
    questaoImg:img4,//CHI
    respostas: [
      {respostaTexto:' MO', isCorrect:false},
      {respostaTexto:'  K', isCorrect:false},
      {respostaTexto:'CHI', isCorrect:true},
    ],
  },
  {
    questaoImg:img5,//FU
    respostas: [
      {respostaTexto:' FU', isCorrect:true},
      {respostaTexto:' KA', isCorrect:false},
      {respostaTexto:'  F', isCorrect:false},
    ],
  } ,
  {
      questaoImg:img6,//HA
      respostas: [
        {respostaTexto:'  U', isCorrect:false},
        {respostaTexto:' HA', isCorrect:true},
        {respostaTexto:' PA', isCorrect:false},
      ],
    } ,     
    {
      questaoImg:img7,//HE
      respostas: [
        {respostaTexto:' HA', isCorrect:false},
        {respostaTexto:'  A', isCorrect:false},
        {respostaTexto:' HE', isCorrect:true},
      ],
    } ,     
    {
      questaoImg:img8,//HI
      respostas: [
        {respostaTexto:'  C', isCorrect:false},
        {respostaTexto:' HI', isCorrect:true},
        {respostaTexto:' PO', isCorrect:false},
      ],
    } ,     
    {
      questaoImg:img9,//HO
      respostas: [
        {respostaTexto:' HO', isCorrect:true},
        {respostaTexto:' KI', isCorrect:false},
        {respostaTexto:'  F', isCorrect:false},
      ],
    } ,     
    {
      questaoImg:img10,//YU
      respostas: [
        {respostaTexto:'  U', isCorrect:false},
        {respostaTexto:' YU', isCorrect:true},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img11,//Ka
      respostas: [
        {respostaTexto:' GA', isCorrect:false},
        {respostaTexto:' KA', isCorrect:true},
        {respostaTexto:'  P', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img12,//KE
      respostas: [
        {respostaTexto:' KE', isCorrect:true},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img13,//KI
      respostas: [
        {respostaTexto:' KU', isCorrect:false},
        {respostaTexto:' PE', isCorrect:false},
        {respostaTexto:' KI', isCorrect:true},
      ],
    } , 
    {
      questaoImg:img14,//KO
      respostas: [
        {respostaTexto:' KO', isCorrect:true},
        {respostaTexto:' GO', isCorrect:false},
        {respostaTexto:' BI', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img15,//KU
      respostas: [
        {respostaTexto:' KU', isCorrect:true},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } ,     
    {
      questaoImg:img16,//MA
      respostas: [
        {respostaTexto:'  U', isCorrect:false},
        {respostaTexto:' MA', isCorrect:true},
        {respostaTexto:' KA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img17,//ME
      respostas: [
        {respostaTexto:' GA', isCorrect:false},
        {respostaTexto:' ME', isCorrect:true},
        {respostaTexto:' KA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img18,//MI
      respostas: [
        {respostaTexto:' MI', isCorrect:true},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img19,//MO
      respostas: [
        {respostaTexto:' JI', isCorrect:false},
        {respostaTexto:' HI', isCorrect:false},
        {respostaTexto:' MO', isCorrect:true},
      ],
    } , 
    {
      questaoImg:img20,//MU
      respostas: [
        {respostaTexto:' MI', isCorrect:false},
        {respostaTexto:' MU', isCorrect:true},
        {respostaTexto:' KE', isCorrect:false},
      ],
    } ,  
    {
      questaoImg:img21,//N
      respostas: [
        {respostaTexto:' CA', isCorrect:false},
        {respostaTexto:'  N', isCorrect:true},
        {respostaTexto:' CI', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img22,//NA
      respostas: [
        {respostaTexto:' NA', isCorrect:true},
        {respostaTexto:' KO', isCorrect:false},
        {respostaTexto:' FU', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img23,//NE
      respostas: [
        {respostaTexto:' PO', isCorrect:false},
        {respostaTexto:'  O', isCorrect:false},
        {respostaTexto:' NE', isCorrect:true},
      ],
    } , 
    {
      questaoImg:img24,//NI
      respostas: [
        {respostaTexto:' GU', isCorrect:false},
        {respostaTexto:' NI', isCorrect:true},
        {respostaTexto:' BO', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img25,//NO
      respostas: [
        {respostaTexto:' NO', isCorrect:true},
        {respostaTexto:' HI', isCorrect:false},
        {respostaTexto:' DE', isCorrect:false},
      ],
    } ,   
    {
      questaoImg:img26,//NU
      respostas: [
        {respostaTexto:' CI', isCorrect:false},
        {respostaTexto:' NU', isCorrect:true},
        {respostaTexto:' BO', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img27,//O
      respostas: [
        {respostaTexto:'  O', isCorrect:true},
        {respostaTexto:' kU', isCorrect:false},
        {respostaTexto:' KO', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img28,//RA
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' RA', isCorrect:true},
        {respostaTexto:' BE', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img29,//RE
      respostas: [
        {respostaTexto:' PI', isCorrect:false},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' RE', isCorrect:true},
      ],
    } , 
    {
      questaoImg:img30,//RI
      respostas: [
        {respostaTexto:' RI', isCorrect:true},
        {respostaTexto:' HU', isCorrect:false},
        {respostaTexto:' CA', isCorrect:false},
      ],
    } ,   
    {
      questaoImg:img31,//RO
      respostas: [
        {respostaTexto:' KU', isCorrect:false},
        {respostaTexto:' RO', isCorrect:true},
        {respostaTexto:' JU', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img32,//RU
      respostas: [
        {respostaTexto:' RU', isCorrect:true},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img33,//SA
      respostas: [
        {respostaTexto:' HU', isCorrect:false},
        {respostaTexto:' SA', isCorrect:true},
        {respostaTexto:' BE', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img34,//SE
      respostas: [
        {respostaTexto:' PA', isCorrect:false},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' SE', isCorrect:true},
      ],
    } , 
    {
      questaoImg:img35,//SHI
      respostas: [
        {respostaTexto:' LO', isCorrect:false},
        {respostaTexto:'SHI', isCorrect:true},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img36,//SO
      respostas: [
        {respostaTexto:' LU', isCorrect:false},
        {respostaTexto:' SI', isCorrect:false},
        {respostaTexto:' SO', isCorrect:true},
      ],
    } , 
    {
      questaoImg:img37,//SU
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' SU', isCorrect:true},
        {respostaTexto:' CA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img38,//TA
      respostas: [
        {respostaTexto:' TA', isCorrect:true},
        {respostaTexto:' SI', isCorrect:false},
        {respostaTexto:' HA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img39,//TE
      respostas: [
        {respostaTexto:' TE', isCorrect:true},
        {respostaTexto:' LU', isCorrect:false},
        {respostaTexto:' JA', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img40,//TO
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' TO', isCorrect:true},
        {respostaTexto:' FE', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img41,//TSU
      respostas: [
        {respostaTexto:' LU', isCorrect:false},
        {respostaTexto:'TSU', isCorrect:true},
        {respostaTexto:' GE', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img42,//U
      respostas: [
        {respostaTexto:'  U', isCorrect:true},
        {respostaTexto:' TU', isCorrect:false},
        {respostaTexto:' KU', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img43,//WA
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' WA', isCorrect:true},
        {respostaTexto:' FE', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img44,//WO
      respostas: [
        {respostaTexto:' HI', isCorrect:false},
        {respostaTexto:' WO', isCorrect:true},
        {respostaTexto:' FO', isCorrect:false},
      ],
    } , 
    {
      questaoImg:img45,//YA
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' TO', isCorrect:false},
        {respostaTexto:' YA', isCorrect:true},
      ],
    } , 
    {
      questaoImg:img46,//YO
      respostas: [
        {respostaTexto:' YO', isCorrect:true},
        {respostaTexto:' TU', isCorrect:false},
        {respostaTexto:' JI', isCorrect:false},
      ],
    } , 
];
  
  


  export default perguntas;
    