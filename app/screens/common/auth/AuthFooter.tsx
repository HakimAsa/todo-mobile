import { Row } from '@/app/components/containers'
import TmText from '@/app/components/common/text/TmText'
import i18n from '@/app/i18n'
import TmPressableText from '@/app/components/common/text/TmPressableText'

export default function AuthFooter({
  linkedText,
  unlinkedText,
}: {
  linkedText: string
  unlinkedText: string
}) {
  return (
    <Row
      gap={5}
      style={{ marginVertical: 25, justifyContent: 'center' }}
    >
      <TmText style={{ color: '#575757' }}>{i18n.t(unlinkedText)}</TmText>
      <TmPressableText onPress={() => alert('ok')}>
        {i18n.t(linkedText)}
      </TmPressableText>
    </Row>
  )
}
