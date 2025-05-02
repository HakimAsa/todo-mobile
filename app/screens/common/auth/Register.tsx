import { ScrollView } from 'react-native'
import * as Yup from 'yup'

import MainContainer, {
  KeyboardAvoidViewContainer,
  Row,
} from '@/app/components/containers'
import i18n from '@/app/i18n'
import TRN_KEYS from '@/translation/keys'
import IconHeader from '@/app/components/icons/IconHeader'
import TmForm, { TmFormField, TmSubmitButton } from '@/app/components/forms'
import TmText from '@/app/components/common/text/TmText'
import TmPressableText from '@/app/components/common/text/TmPressableText'
import AuthFooter from './AuthFooter'

const signupSchema = Yup.object({
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Mismatched passwords') //"Mismatched passwords" //Mots de passe incompatibles
    .required()
    .min(8), //add custom text for translation
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  username: Yup.string().min(3).required(),
})

type SignupFormValues = Yup.InferType<typeof signupSchema>

const initialValues: SignupFormValues = {
  confirmPassword: '',
  email: '',
  password: '',
  username: '',
}
export default function Register() {
  // register user api call
  const registerUser = async (values: any) => {
    const res = {}
    console.log(values)
  }
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
          <TmForm
            initialValues={initialValues}
            onSubmit={registerUser}
            validationSchema={signupSchema}
          >
            <TmFormField
              name="username"
              placeholder={i18n.t(TRN_KEYS.USERNAME)}
              iconName="account"
            />
            <TmFormField
              name="email"
              placeholder={i18n.t(TRN_KEYS.EMAIL)}
              iconName="email"
            />
            <TmFormField
              label={i18n.t(TRN_KEYS.PASSWORD)}
              name="password"
              placeholder="* * * * * * * *"
              iconName="lock"
            />
            <TmFormField
              name="confirmPassword"
              label={i18n.t(TRN_KEYS.CONFIRMPASSWORD)}
              placeholder="* * * * * * * *"
              iconName="lock"
            />
            {/* Submit button */}
            <TmSubmitButton title={i18n.t(TRN_KEYS.SIGNUP)} />
            <AuthFooter
              unlinkedText={TRN_KEYS.ALREADYHAVEANACCOUNT}
              linkedText={TRN_KEYS.LOGIN}
            />
          </TmForm>
        </ScrollView>
      </KeyboardAvoidViewContainer>
    </MainContainer>
  )
}
