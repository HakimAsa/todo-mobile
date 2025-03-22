import { Pressable, StyleSheet, PressableProps, View } from 'react-native'
import React from 'react'
import Colors from '@/app/config/colors'
import TmText from '../text/TmText'
import i18n from '@/app/i18n'

interface ButtonProps extends PressableProps {
  style?: any
  textStyle?: any
  children: React.ReactNode | string
}

export default function TmButton({
  children,
  style,
  textStyle,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      {...props}
      style={[styles.button, style]}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <TmText style={textStyle}>{children || i18n.t('myBtton')}</TmText>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    height: 35,
    color: Colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 1, // for android shadows
    fontWeight: 'bold',
  },
})
