import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/telas/home';
import Katakana from './src/telas/terceiraTela';
import Hiragana from './src/telas/segundaTela';


const Stack = createStackNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hiragana" component={Hiragana} />
        <Stack.Screen name="Katakana" component={Katakana} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;