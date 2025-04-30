import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { TextProps, ViewProps } from 'react-native'

export default interface TmProps {
  navigation: NavigationProp<any, any>
  children?: React.ReactNode
}

export type commonProps = {
  style?: ViewProps['style']
  textStyle?: TextProps['style']
}
