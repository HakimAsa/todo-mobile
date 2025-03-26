import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/app/config/colors'
import Logo from '@/app/components/common/image/Logo'
import TmText from '@/app/components/common/text/TmText'

export default function Welcome() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('@/assets/images/backgroundImage.png')}
    >
      <View style={styles.logoContainer}>
        <Logo
          width={100}
          height={100}
        />
        <TmText
          big
          style={styles.welcomeText}
        >
          Manage Your Tasks Efficiently
        </TmText>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: Colors.primary,
    height: 40,
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  registerButton: {
    backgroundColor: Colors.primary1,
    height: 40,
    width: '100%',
  },
  welcomeText: {
    color: Colors.primary,
    fontStyle: 'italic',
    fontWeight: 900,
  },
})
