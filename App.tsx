import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
  NativeModules,
  TouchableOpacity,
} from 'react-native'

import Navigation from './components/Navigation'
import About from './components/about'

export default function App() {
  const [showAbout, setShowAbout] = useState(false)

  let statusBarHeight = 0
  if (Platform.OS === 'ios') {
    NativeModules.StatusBarManager.getHeight((height: number) => {
      statusBarHeight = height
    })
  } else if (Platform.OS === 'android') {
    statusBarHeight = RNStatusBar.currentHeight!
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: statusBarHeight }}>
      <StatusBar style='auto' backgroundColor='red' />
      <View
        style={{
          height: 50,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: 'red',
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'yellow' }}>
          李田所语录-RN
        </Text>
        <TouchableOpacity
          onPress={() => {
            setShowAbout(true)
          }}
        >
          <Image
            source={require('./assets/i.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <Navigation />
      <About
        showAbout={showAbout}
        closeAbout={() => {
          setShowAbout(false)
        }}
      />
    </SafeAreaView>
  )
}
