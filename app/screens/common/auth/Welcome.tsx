import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/app/config/colors'
import Logo from '@/app/components/common/image/Logo'
import TmText from '@/app/components/common/text/TmText'
import TmButton from '@/app/components/common/button/TmButton'
import i18n from '@/app/i18n'

export default function Welcome() {
  return (
    <ImageBackground
      blurRadius={10}
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
          {i18n.t('tagLine')}
        </TmText>
      </View>
      <View style={styles.buttonView}>
        <TmButton
          title={i18n.t('login')}
          onPress={() => console.log('go and login')}
        />
        <TmButton
          title={i18n.t('register')}
          color="primary1"
          style={{ marginTop: 0 }}
          onPress={() => console.log('go and register')}
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
    fontSize: 25,
    fontWeight: '700',
    paddingVertical: 10,
  },
})
