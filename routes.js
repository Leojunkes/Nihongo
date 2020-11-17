import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/telas/home';
import Katakana from './src/telas/terceiraTela';
import Hiragana from './src/telas/segundaTela';
import EstudosKatakana from './src/telas/estudosKatakana';
import EstudosHiragana from './src/telas/estudosHiragana';


const Stack = createStackNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hiragana" component={Hiragana} />
        <Stack.Screen name="Katakana" component={Katakana} />
        <Stack.Screen name="EstudosHira" component={EstudosHiragana} />
        <Stack.Screen name="EstudosKata" component={EstudosKatakana} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;