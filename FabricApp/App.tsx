/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
// import RTNCenteredText from 'rtn-calculator/'
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
import RTNImageComponent from 'fabric-image-view/js/ImageComponentNativeComponent';
import RTNSignatureCapture from 'rtn-signature-capture/js/SignatureCaptureNativeComponent';

// import SignatureCapture from 'react-native-signature-capture';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Login from './LoginPage';

const Home = () =>{
  return(<View style = {{flex:1,backgroundColor:'red'}}></View>)
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <RTNCenteredText
          style={{height:50}}
          text='JIJU VV'
          />
          <RTNImageComponent
          style={{with:100,height:100}}
          image={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          />
          <RTNSignatureCapture
          style={{flex: 1, width: '100%'}}
          onDragEvent={()=>{console.log("onDragEvent");
          }}
          onSaveEvent={()=>{console.log("onSaveEvent");
          }}
          backgroundColor="#ff00ff"
          strokeColor="#ffffff"
          minStrokeWidth={4}
          maxStrokeWidth={4}
          />
          <Login user={{name:"jihan",password:'vdvdx'}}/>

          {/* <SignatureCapture
            style={{flex: 1, width: '100%'}}
            onDragEvent={this._onDragEvent.bind(this)}
            onSaveEvent={this._onSaveEvent.bind(this)}
            backgroundColor="#ff00ff"
            strokeColor="#ffffff"
            minStrokeWidth={4}
            maxStrokeWidth={4}
          /> */}

          <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNCalculator.add(3, 7);
          console.log({value})
        }}
      />
          {/* <RTNCenteredText
      text="Hello World!"
      style={{width: '100%', height: 30}}
    /> */}
        {/* <Header /> */}

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          
        </View>
      </ScrollView>
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
