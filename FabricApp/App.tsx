import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
import RTNImageComponent from 'fabric-image-view/js/ImageComponentNativeComponent';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Login from './LoginPage';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [result,setResult] = useState(0)

  return (
    <NavigationContainer>
    <SafeAreaView style={[backgroundStyle,{flex:1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
         
          <RTNImageComponent
          style={{with:100,height:100}}
          image={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          />

          <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNCalculator.add(3, 7);
          setResult(value)
          console.log({value})
        }}
      />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          
        </View>
      </ScrollView>
      <RTNCenteredText
          style={{height:25,width:'100%',position:'absolute',bottom:8,}}
          text={`JIJU VV${result}`}
          />
    </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
