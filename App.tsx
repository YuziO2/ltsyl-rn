import * as ScreenOrientation from 'expo-screen-orientation'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {
  Text,
  View,
  Image,
  Platform,
  StatusBar as RNStatusBar,
  NativeModules,
  TouchableOpacity,
} from 'react-native'

import Navigation from './components/Navigation'
import About from './components/about'

export default function App() {
  const [showAbout, setShowAbout] = useState(false)
  const [statusBarHeight, setStatusBarHeight] = useState(0)
  useEffect(() => {
    const setScreenOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT,
      )
    }

    setScreenOrientation()
    if (Platform.OS === 'ios') {
      NativeModules.StatusBarManager.getHeight((height: { height: number }) => {
        setStatusBarHeight(height.height)
      })
    } else if (Platform.OS === 'android') {
      setStatusBarHeight(RNStatusBar.currentHeight!)
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='auto' backgroundColor='red' />
      <View
        style={{
          height: 70,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: 'red',
          paddingTop: statusBarHeight,
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
        statusBarHeight={statusBarHeight}
      />
    </View>
  )
}
