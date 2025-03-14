import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../config/colors'
import TmText from './common/text/TmText'

interface LsProps {
  initialValues: object
  logo: boolean
}

export default function LanguageSelection({ initialValues, logo }: LsProps) {
  return (
    <View style={styles.container}>
      <TmText small>LanguageSelection</TmText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
