import img1 from '../imagens/katakanaIMG/A.png';
import img2 from '../imagens/katakanaIMG/E.png';
import img3 from '../imagens/katakanaIMG/I.png';
import img4 from '../imagens/katakanaIMG/CHI.png';
import img5 from '../imagens/katakanaIMG/FU.png';
import img6 from '../imagens/katakanaIMG/HA.png';
import img7 from '../imagens/katakanaIMG/HE.png';
import img8 from '../imagens/katakanaIMG/HI.png';
import img9 from '../imagens/katakanaIMG/HO.png';
import img10 from'../imagens/katakanaIMG/YU.png';
import img11 from '../imagens/katakanaIMG/KA.png';
import img12 from '../imagens/katakanaIMG/KE.png';
import img13 from '../imagens/katakanaIMG/KI.png';
import img14 from '../imagens/katakanaIMG/KO.png';
import img15 from '../imagens/katakanaIMG/KU.png';
import img16 from '../imagens/katakanaIMG/MA.png';
import img17 from '../imagens/katakanaIMG/ME.png';
import img18 from '../imagens/katakanaIMG/MI.png';
import img19 from '../imagens/katakanaIMG/MO.png';
import img20 from '../imagens/katakanaIMG/MU.png';
import img21 from '../imagens/katakanaIMG/N.png';
import img22 from '../imagens/katakanaIMG/NA.png';
import img23 from '../imagens/katakanaIMG/NE.png';
import img24 from '../imagens/katakanaIMG/NI.png';
import img25 from '../imagens/katakanaIMG/NO.png';
import img26 from '../imagens/katakanaIMG/NU.png';
import img27 from '../imagens/katakanaIMG/O.png';
import img28 from '../imagens/katakanaIMG/RA.png';
import img29 from '../imagens/katakanaIMG/RE.png';
import img30 from '../imagens/katakanaIMG/RI.png';
import img31 from '../imagens/katakanaIMG/RO.png';
import img32 from '../imagens/katakanaIMG/RU.png';
import img33 from '../imagens/katakanaIMG/SA.png';
import img34 from '../imagens/katakanaIMG/SE.png';
import img35 from '../imagens/katakanaIMG/SHI.png';
import img36 from '../imagens/katakanaIMG/SO.png';
import img37 from '../imagens/katakanaIMG/SU.png';
import img38 from '../imagens/katakanaIMG/TA.png';
import img39 from '../imagens/katakanaIMG/TE.png';
import img40 from '../imagens/katakanaIMG/TO.png';
import img41 from '../imagens/katakanaIMG/TSU.png';
import img42 from '../imagens/katakanaIMG/U.png';
import img43 from '../imagens/katakanaIMG/WA.png';
import img44 from '../imagens/katakanaIMG/WO.png';
import img45 from '../imagens/katakanaIMG/YA.png';
import img46 from '../imagens/katakanaIMG/YO.png';

var shuffle = require('shuffle-array'),
  perguntas = [
  {
    questaoText:'A',
    questaoImg:img1,//A
    respostas: [
      {respostaTexto:'  A', isCorrect:true},
      {respostaTexto:'  B', isCorrect:false},
      {respostaTexto:'  O', isCorrect:false},
    ],
  },
  {
    questaoText:'E',
    questaoImg:img2,//E
    respostas: [
      {respostaTexto:'  A', isCorrect:false},
      {respostaTexto:'  E', isCorrect:true},
      {respostaTexto:'  I', isCorrect:false},
    ],

  },
  {
    questaoText:'I',
    questaoImg:img3,//i
    respostas: [
      {respostaTexto:'  I', isCorrect:true},
      {respostaTexto:'  C', isCorrect:false},
      {respostaTexto:'  G', isCorrect:false},
    ],
  },
  {
    questaoText:'CHI',
    questaoImg:img4,//CHI
    respostas: [
      {respostaTexto:'  Y', isCorrect:false},
      {respostaTexto:'  K', isCorrect:false},
      {respostaTexto:'CHI', isCorrect:true},
    ],
  },
  {
    questaoText:'FU',
    questaoImg:img5,//FU
    respostas: [
      {respostaTexto:' FU', isCorrect:true},
      {respostaTexto:'  A', isCorrect:false},
      {respostaTexto:'  F', isCorrect:false},
    ],
  } ,
  {
      questaoText:'HA',
      questaoImg:img6,//HA
      respostas: [
        {respostaTexto:'  U', isCorrect:false},
        {respostaTexto:' HA', isCorrect:true},
        {respostaTexto:' PA', isCorrect:false},
      ],
    } ,     
  {
     questaoText:'HE',
      questaoImg:img7,//HE
      respostas: [
        {respostaTexto:' HA', isCorrect:false},
        {respostaTexto:'  A', isCorrect:false},
        {respostaTexto:' HE', isCorrect:true},
      ],
    } ,     
  {
      questaoText:'HI',
      questaoImg:img8,//HI
      respostas: [
        {respostaTexto:'  C', isCorrect:false},
        {respostaTexto:' HI', isCorrect:true},
        {respostaTexto:' PO', isCorrect:false},
      ],
    } ,     
  {
  questaoText:'HO',
      questaoImg:img9,//HO
      respostas: [
        {respostaTexto:' HO', isCorrect:true},
        {respostaTexto:'  A', isCorrect:false},
        {respostaTexto:'  F', isCorrect:false},
      ],
    } ,     
  {
  questaoText:'YU',  
      questaoImg:img10,//YU
      respostas: [
        {respostaTexto:'  U', isCorrect:false},
        {respostaTexto:' YU', isCorrect:true},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'KA',  
      questaoImg:img11,//Ka
      respostas: [
        {respostaTexto:' GA', isCorrect:false},
        {respostaTexto:' KA', isCorrect:true},
        {respostaTexto:'  P', isCorrect:false},
      ],
    } , 
  {
  questaoText:'KE',
      questaoImg:img12,//KE
      respostas: [
        {respostaTexto:' KE', isCorrect:true},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'KI',  
      questaoImg:img13,//KI
      respostas: [
        {respostaTexto:' KU', isCorrect:false},
        {respostaTexto:' PE', isCorrect:false},
        {respostaTexto:' KI', isCorrect:true},
      ],
    } , 
  {
  questaoText:'KO', 
      questaoImg:img14,//KO
      respostas: [
        {respostaTexto:' KO', isCorrect:true},
        {respostaTexto:' GO', isCorrect:false},
        {respostaTexto:' BI', isCorrect:false},
      ],
    } , 
  {
  questaoText:'KU',
      questaoImg:img15,//KU
      respostas: [
        {respostaTexto:' KU', isCorrect:true},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } ,     
  {
  questaoText:'MA',  
      questaoImg:img16,//MA
      respostas: [
        {respostaTexto:'  U', isCorrect:false},
        {respostaTexto:' MA', isCorrect:true},
        {respostaTexto:' KA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'ME', 
      questaoImg:img17,//ME
      respostas: [
        {respostaTexto:' GA', isCorrect:false},
        {respostaTexto:' ME', isCorrect:true},
        {respostaTexto:' KA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'MI',
      questaoImg:img18,//MI
      respostas: [
        {respostaTexto:' MI', isCorrect:true},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'MO', 
      questaoImg:img19,//MO
      respostas: [
        {respostaTexto:' JI', isCorrect:false},
        {respostaTexto:' HI', isCorrect:false},
        {respostaTexto:' MO', isCorrect:true},
      ],
    } , 
  {
  questaoText:'MU',  
      questaoImg:img20,//MU
      respostas: [
        {respostaTexto:' MI', isCorrect:false},
        {respostaTexto:' MU', isCorrect:true},
        {respostaTexto:' KE', isCorrect:false},
      ],
    } ,  
  
  
  {
      questaoText:'N',
      questaoImg:img21,//N
      respostas: [
        {respostaTexto:' KA', isCorrect:false},
        {respostaTexto:'  N', isCorrect:true},
        {respostaTexto:' CI', isCorrect:false},
      ],
    } , 
  {
  questaoText:'NA',  
      questaoImg:img22,//NA
      respostas: [
        {respostaTexto:' NA', isCorrect:true},
        {respostaTexto:' KO', isCorrect:false},
        {respostaTexto:' FU', isCorrect:false},
      ],
    } , 
  {
  questaoText:'NE',  
      questaoImg:img23,//NE
      respostas: [
        {respostaTexto:' PO', isCorrect:false},
        {respostaTexto:'  O', isCorrect:false},
        {respostaTexto:' NE', isCorrect:true},
      ],
    } , 
  {
  questaoText:'NI',  
      questaoImg:img24,//NI
      respostas: [
        {respostaTexto:' GU', isCorrect:false},
        {respostaTexto:' NI', isCorrect:true},
        {respostaTexto:' BO', isCorrect:false},
      ],
    } , 
  {
  questaoText:'NO', 
      questaoImg:img25,//NO
      respostas: [
        {respostaTexto:' NO', isCorrect:true},
        {respostaTexto:' HI', isCorrect:false},
        {respostaTexto:' DE', isCorrect:false},
      ],
    } ,   
  {
  questaoText:'NU',  
      questaoImg:img26,//NU
      respostas: [
        {respostaTexto:' CI', isCorrect:false},
        {respostaTexto:' NU', isCorrect:true},
        {respostaTexto:' BO', isCorrect:false},
      ],
    } , 
  
 
  {
      questaoText:'O',
      questaoImg:img27,//O
      respostas: [
        {respostaTexto:' O', isCorrect:true},
        {respostaTexto:' CU', isCorrect:false},
        {respostaTexto:' KO', isCorrect:false},
      ],
    } , 
  {
  questaoText:'RA',  
      questaoImg:img28,//RA
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' RA', isCorrect:true},
        {respostaTexto:' BE', isCorrect:false},
      ],
    } , 
  {
      questaoText:'RE',  
      questaoImg:img29,//RE
      respostas: [
        {respostaTexto:' PI', isCorrect:false},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' RE', isCorrect:true},
      ],
    } , 
  {
  questaoText:'RI',  
      questaoImg:img30,//RI
      respostas: [
        {respostaTexto:' RI', isCorrect:true},
        {respostaTexto:' HU', isCorrect:false},
        {respostaTexto:' CA', isCorrect:false},
      ],
    } ,   
  {
  questaoText:'RO',  
      questaoImg:img31,//RO
      respostas: [
        {respostaTexto:' KU', isCorrect:false},
        {respostaTexto:' RO', isCorrect:true},
        {respostaTexto:' JU', isCorrect:false},
      ],
    } , 
  {
  questaoText:'RU',  
      questaoImg:img32,//RU
      respostas: [
        {respostaTexto:' RU', isCorrect:true},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'SA',  
      questaoImg:img33,//SA
      respostas: [
        {respostaTexto:' HU', isCorrect:false},
        {respostaTexto:' SA', isCorrect:true},
        {respostaTexto:' BE', isCorrect:false},
      ],
    } , 
  {
  questaoText:'SE',  
      questaoImg:img34,//SE
      respostas: [
        {respostaTexto:' PA', isCorrect:false},
        {respostaTexto:' HO', isCorrect:false},
        {respostaTexto:' SE', isCorrect:true},
      ],
    } , 
  {
  questaoText:'SHI',  
      questaoImg:img35,//SHI
      respostas: [
        {respostaTexto:' LO', isCorrect:false},
        {respostaTexto:' SHI', isCorrect:true},
        {respostaTexto:' BA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'SO', 
      questaoImg:img36,//SO
      respostas: [
        {respostaTexto:' LU', isCorrect:false},
        {respostaTexto:' SI', isCorrect:false},
        {respostaTexto:' SO', isCorrect:true},
      ],
    } , 
  {
  questaoText:'SU',  
      questaoImg:img37,//SU
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' SU', isCorrect:true},
        {respostaTexto:' CA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'TA',  
      questaoImg:img38,//TA
      respostas: [
        {respostaTexto:' TA', isCorrect:true},
        {respostaTexto:' SI', isCorrect:false},
        {respostaTexto:' HA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'TE', 
      questaoImg:img39,//TE
      respostas: [
        {respostaTexto:' TE', isCorrect:true},
        {respostaTexto:' LU', isCorrect:false},
        {respostaTexto:' JA', isCorrect:false},
      ],
    } , 
  {
  questaoText:'TO',  
      questaoImg:img40,//TO
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' TO', isCorrect:true},
        {respostaTexto:' FE', isCorrect:false},
      ],
    } , 
  {
  questaoText:'TSU',  
      questaoImg:img41,//TSU
      respostas: [
        {respostaTexto:' LU', isCorrect:false},
        {respostaTexto:'TSU', isCorrect:true},
        {respostaTexto:' GE', isCorrect:false},
      ],
    } , 
  
 
  {
    questaoText:'U',
      questaoImg:img42,//U
      respostas: [
        {respostaTexto:'  U', isCorrect:true},
        {respostaTexto:' TU', isCorrect:false},
        {respostaTexto:' KU', isCorrect:false},
      ],
    } , 
  {
  questaoText:'WA',  
      questaoImg:img43,//WA
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' WA', isCorrect:true},
        {respostaTexto:' FE', isCorrect:false},
      ],
    } , 
  {
  questaoText:'WO', 
      questaoImg:img44,//WO
      respostas: [
        {respostaTexto:' HI', isCorrect:false},
        {respostaTexto:' WO', isCorrect:true},
        {respostaTexto:' FO', isCorrect:false},
      ],
    } , 
  {
  questaoText:'YA',  
      questaoImg:img45,//YA
      respostas: [
        {respostaTexto:' LI', isCorrect:false},
        {respostaTexto:' TO', isCorrect:false},
        {respostaTexto:' YA', isCorrect:true},
      ],
    } , 
  {
  questaoText:'YO',  
      questaoImg:img46,//YO
      respostas: [
        {respostaTexto:' YO', isCorrect:true},
        {respostaTexto:' TU', isCorrect:false},
        {respostaTexto:' JI', isCorrect:false},
      ],
    } , 
];
  
shuffle(perguntas);
  


  export default perguntas;
    