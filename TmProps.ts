import { NavigationProp } from '@react-navigation/native'
import React from 'react'

export default interface TmProps {
  navigation: NavigationProp<any, any>
  children?: React.ReactNode
}
