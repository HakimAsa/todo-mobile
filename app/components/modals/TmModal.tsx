import { Modal } from 'react-native'

import { commonProps } from '@/TmProps'

export default function TmModal({ children, ...props }: commonProps) {
  return <Modal {...props}>{children}</Modal>
}
