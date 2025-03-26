import { Pressable, StyleSheet, PressableProps, View } from 'react-native'
import React from 'react'
import Colors from '@/app/config/colors'
import TmText from '../text/TmText'
import i18n from '@/app/i18n'

interface ButtonProps extends PressableProps {
  style?: any
  textStyle?: any
  title?: string
  children?: React.ReactNode
}

export default function TmButton({
  children,
  style,
  textStyle,
  title,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      {...props}
      style={[styles.button, style]}
    >
      {title ? (
        <TmText
          style={[
            { textTransform: 'uppercase', color: Colors.white },
            textStyle,
          ]}
        >
          {title || i18n.t('myBtton')}
        </TmText>
      ) : (
        <>{children}</>
      )}
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
    width: '100%',
    fontWeight: 'bold',
  },
})
