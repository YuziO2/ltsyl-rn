import { StatusBar } from 'expo-status-bar'
import { ReactNode } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  Linking,
  Platform,
} from 'react-native'

const Link = ({ url, children }: { url: string; children: ReactNode }) => {
  return (
    <Text
      style={{ textDecorationLine: 'underline', color: 'cornflowerblue' }}
      onPress={() => {
        Linking.openURL(url)
      }}
    >
      {children}
    </Text>
  )
}

export default function About({
  showAbout,
  closeAbout,
  statusBarHeight,
}: {
  showAbout: boolean
  closeAbout: () => void
  statusBarHeight: number
}) {
  return (
    <Modal visible={showAbout} animationType='fade' onRequestClose={closeAbout}>
      <StatusBar style='auto' backgroundColor='red' />
      <View
        style={{
          backgroundColor: 'red',
          width: '100%',
          alignItems: 'center',
          paddingTop: Platform.OS === 'ios' ? statusBarHeight : 0,
        }}
      >
        <TouchableOpacity
          onPress={closeAbout}
          style={{
            position: 'absolute',
            left: 5,
            top: 5 + (Platform.OS === 'ios' ? statusBarHeight : 0),
          }}
        >
          <Image
            source={require('../assets/btnback.png')}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/icon.png')}
          style={{ width: 100, height: 100, marginTop: 20, marginBottom: 10 }}
        />
        <Text
          style={{
            color: 'yellow',
            fontSize: 50,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          李田所语录-RN
        </Text>
      </View>
      <ScrollView style={{ margin: 12, marginBottom: 0 }}>
        <Text style={{ fontSize: 18 }}>
          <Text>
            作者：
            <Link url='https://yuzi.dev'>
              <Text>YuziO2</Text>
            </Link>
            {'\n'}
          </Text>
          <Text>
            这事一个一个React
            Native练手项目，为的是解决原语录不兼容安卓14的问题【大嘘】，顺便提供一个一个理论上的iOS和网页版。
            {'\n'}
          </Text>
          <Text>素材部分采用了原作者的apk解包{'\n'}</Text>
          <Text>
            项目地址：
            <Link url='https://github.com/YuziO2/ltsyl-rn'>
              <Text>github.com/YuziO2/ltsyl-rn</Text>
            </Link>
          </Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 15,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
          <Text style={{ marginHorizontal: 10, color: 'gray' }}>
            以下是原作者的信息：
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
        </View>
        <Text style={{ fontSize: 18 }}>
          贴吧：
          <Link url='https://tieba.baidu.com/home/main?id=d98171e5ae81e99d99e887b4e8bf9c70933a'>
            <Text>宁靜致远</Text>
          </Link>
          {'\n'}
          B站：
          <Link url='https://m.bilibili.com/space/5935506'>
            <Text>宁靜致远</Text>
          </Link>
        </Text>
      </ScrollView>
    </Modal>
  )
}
