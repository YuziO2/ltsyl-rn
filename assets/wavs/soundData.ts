import type { SoundData } from '../../components/audioTable'

export const soundData: Record<'si' | 'kong' | 'du' | 'cai', SoundData[]> = {
  si: [
    { name: 'ここ', sound: require('./si/koko.wav') },
    { name: '帰で、どそ', sound: require('./si/kaidedoso.wav') },
    { name: '悔いめて', sound: require('./si/kuimete.wav') },
    { name: 'まずうちさぁ', sound: require('./si/mazuuchisaa.wav') },
    { name: '屋上', sound: require('./si/uju.wav') },
    { name: 'てけない？', sound: require('./si/tekenai.wav') },
    { name: 'お待たせ', sound: require('./si/omatase.wav') },
    { name: 'わかでな', sound: require('./si/wakadena.wav') },
    { name: '仕方がないね', sound: require('./si/shikataganaine.wav') },
    { name: 'SEXY EROI', sound: require('./si/sexy eroi.wav') },
    { name: '大丈夫か？', sound: require('./si/daijobuka.wav') },
    { name: 'いいよ', sound: require('./si/iiyo.wav') },
    { name: '来いよ', sound: require('./si/koiyo.wav') },
    { name: '胸に', sound: require('./si/ni.wav') },
    { name: 'ファ？！', sound: require('./si/fa.wav') },
    { name: '怨', sound: require('./si/ou.wav') },
    { name: 'アウ', sound: require('./si/ao.wav') },
    { name: 'イキスギ', sound: require('./si/iki.wav') },
    { name: 'イクイクイクイク', sound: require('./si/191919.wav') },
    { name: 'アァ', sound: require('./si/aa.wav') },
    { name: 'アァァァァァァァァ', sound: require('./si/aaaaaaaa.wav') },
    { name: 'お前のことがきだ', sound: require('./si/omaenokotogasuki.wav') },
    { name: '悪いなよ', sound: require('./si/waruinayo.wav') },
  ],
  kong: [
    { name: 'アァァ疲', sound: require('./kong/aaa1.wav') },
    { name: '今は', sound: require('./kong/saikyowa.wav') },
    { name: 'XXぃますよ', sound: require('./kong/imasuyo.wav') },
    { name: '等我下', sound: require('./kong/homasu.wav') },
    { name: 'XXします', sound: require('./kong/xxxxshimasu.wav') },
    { name: 'ふぁつかれたもん', sound: require('./kong/aaa2.wav') },
    { name: '白菜かけますね', sound: require('./kong/hakusai.wav') },
    { name: '頭にいきますよ', sound: require('./kong/atama.wav') },
    { name: 'foo↑', sound: require('./kong/foo.wav') },
    { name: 'beer!beer!', sound: require('./kong/beer.wav') },
    {
      name: 'MURさ、夜中腹減んないすか？',
      sound: require('./kong/mur.wav'),
    },
    {
      name: 'この辺にぃうまいラーメン',
      sound: require('./kong/konoa.wav'),
    },
    { name: 'そですか？', sound: require('./kong/soudesuka.wav') },
    { name: 'じゃけん夜行きましょね', sound: require('./kong/jaken.wav') },
    { name: 'KMRさ', sound: require('./kong/kmrsa.wav') },
    { name: '見さけ', sound: require('./kong/misake.wav') },
    { name: '見るよほら', sound: require('./kong/miruyohora.wav') },
    { name: '逃げんなよ', sound: require('./kong/nigennayo.wav') },
    { name: 'ほらほら', sound: require('./kong/horahora.wav') },
    { name: 'ぬ', sound: require('./kong/nu.wav') },
    { name: 'いいね', sound: require('./kong/iine.wav') },
    { name: 'いいですか', sound: require('./kong/iidesuka.wav') },
    { name: 'そうねか', sound: require('./kong/souneka.wav') },
    { name: 'ひますよ', sound: require('./kong/himasuyo.wav') },
    { name: '本当は', sound: require('./kong/hondowa.wav') },
    { name: '気持いい', sound: require('./kong/kimochiii.wav') },
  ],
  du: [
    { name: 'emmmm', sound: require('./du/emmmm.wav') },
    { name: 'アァイキソウ', sound: require('./du/aikiso.wav') },
    { name: '気持いい', sound: require('./du/kimochiii.wav') },
    { name: 'Captured', sound: require('./du/captured.wav') },
    { name: 'Virtual SEX', sound: require('./du/virtual sex.wav') },
    { name: 'Emurated', sound: require('./du/emurated.wav') },
  ],
  cai: [
    { name: '24歳', sound: require('./cai/24sai.wav') },
    { name: '学生です', sound: require('./cai/gagusedesu.wav') },
    { name: 'いまないです', sound: require('./cai/imanaidesu.wav') },
    { name: '去年ですね', sound: require('./cai/kyonendesune.wav') },
    { name: 'そうですねぇ……', sound: require('./cai/soudesune.wav') },
    { name: '王道往く', sound: require('./cai/uduyuku.wav') },
    { name: 'pinkyですよねぇ', sound: require('./cai/pinkydesuyone.wav') },
    { name: 'ないです', sound: require('./cai/naidesu.wav') },
    { name: 'やりますねぇ', sound: require('./cai/yarimasune.wav') },
    { name: 'シュウ', sound: require('./cai/shuu.wav') },
    { name: 'で…でますよ', sound: require('./cai/dedemasuyo.wav') },
  ],
}
