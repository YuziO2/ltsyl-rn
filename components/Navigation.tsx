import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'

import SoundTable from './audioTable'
import { soundData } from '../assets/wavs/soundData'

const Tab = createMaterialTopTabNavigator()

const Menu = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'red' },
          tabBarLabelStyle: { color: 'yellow' },
          tabBarIndicatorStyle: { backgroundColor: 'yellow' },
        }}
        backBehavior='history'
      >
        <Tab.Screen
          name='四章'
          component={() => <SoundTable soundData={soundData.si} />}
        />
        <Tab.Screen
          name='空手部'
          component={() => <SoundTable soundData={soundData.kong} />}
        />
        <Tab.Screen
          name='独眼'
          component={() => <SoundTable soundData={soundData.du} />}
        />
        <Tab.Screen
          name='采访'
          component={() => <SoundTable soundData={soundData.cai} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Menu
