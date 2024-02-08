import { Audio } from 'expo-av'
import React from 'react'
import { FlatList, TouchableOpacity, Text, View } from 'react-native'

export interface SoundData {
  name: string
  sound: any
}

// const soundData: SoundData[] = [
//   { name: '声音1', sound: require('../assets/wavs/si/191919.wav') },
//   { name: '声音2', sound: require('../assets/wavs/si/aa.wav') },
//   { name: '声音3', sound: require('../assets/wavs/si/191919.wav') },
//   // 添加更多声音数据...
// ]

const SoundTable = ({ soundData }: { soundData: SoundData[] }) => {
  const handlePlaySound = async (soundFile: any) => {
    const { sound } = await Audio.Sound.createAsync(soundFile)
    sound.playAsync()
  }

  const renderItem = ({ item }: { item: SoundData }) => {
    return (
      <TouchableOpacity onPress={() => handlePlaySound(item.sound)}>
        <Text style={{ fontSize: 20, padding: 15 }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={soundData}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: 'lightgray' }} />
      )}
      style={{ width: '100%' }}
    />
  )
}

export default SoundTable
