import { Image } from 'react-native'

export default function Logo({ height = 50, width = 50 }) {
  return (
    <Image
      source={require('../../../../assets/images/logo.png')}
      style={{ width, height, borderRadius: width * 0.5, marginTop: 10 }}
    />
  )
}
