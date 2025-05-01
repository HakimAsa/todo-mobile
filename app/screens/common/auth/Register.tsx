import { ScrollView, Text } from 'react-native'
import React from 'react'
import MainContainer, {
  KeyboardAvoidViewContainer,
  ScrollableMainContainer,
} from '@/app/components/containers'
import TmTextInput from '@/app/components/inputs/TmTextInput'
import i18n from '@/app/i18n'
import TRN_KEYS from '@/translation/keys'
import IconHeader from '@/app/components/icons/IconHeader'

export default function Register() {
  return (
    <MainContainer>
      {/* Register form */}
      <KeyboardAvoidViewContainer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
        >
          <IconHeader name="account-plus" />
          {/* Registration fields */}
          <TmTextInput
            placeholder={i18n.t(TRN_KEYS.USERNAME)}
            iconName="account"
          />
          <TmTextInput
            placeholder={i18n.t(TRN_KEYS.EMAIL)}
            iconName="email"
          />
          <TmTextInput
            label={i18n.t(TRN_KEYS.PASSWORD)}
            placeholder="* * * * * * * *"
            iconName="lock"
          />
          <TmTextInput
            label={i18n.t(TRN_KEYS.CONFIRMPASSWORD)}
            placeholder="* * * * * * * *"
            iconName="lock"
          />
          {/* Submit button */}
        </ScrollView>
      </KeyboardAvoidViewContainer>
    </MainContainer>
  )
}
