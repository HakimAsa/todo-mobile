import { Pressable } from 'react-native'

import TmText from './TmText'
import Colors from '@/config/colors'

export default function TmPressableText({ ...props }) {
  const { children } = props
  return (
    <Pressable {...props}>
      <TmText
        style={{
          color: Colors.primary,
          textDecorationLine: 'underline',
          fontWeight: '700',
        }}
      >
        {children}
      </TmText>
    </Pressable>
  )
}
