import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/app/config/colors'
import Logo from '@/app/components/common/image/Logo'
import TmText from '@/app/components/common/text/TmText'
import TmButton from '@/app/components/common/button/TmButton'

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
      <View style={styles.buttonView}>
        <TmButton title="Login" />
        <TmButton
          title="Register"
          style={{ backgroundColor: Colors.primary1, marginTop: 10 }}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonView: {
    padding: 20,
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  welcomeText: {
    color: Colors.primary,
    fontStyle: 'italic',
    fontWeight: 900,
  },
})
