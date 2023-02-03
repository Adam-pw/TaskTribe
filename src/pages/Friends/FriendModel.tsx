import { IonContent, IonIcon, IonModal, IonSelectOption, IonSelect } from '@ionic/react'

import { close } from 'ionicons/icons'
import { Ref, SetStateAction, useState } from 'react'
// import './NewGroupModal.scss'

interface ModalProps {
  modalRef: Ref<HTMLIonModalElement>
  modalTrigger: string
  dismiss: (type: 'habit' | 'group') => void
}

export function FriendModal({ modalRef, modalTrigger, dismiss }: ModalProps) {
  const [custom, setCustom] = useState<Boolean>(false)

  const newDismiss = () => {
    dismiss('group')
    setCustom(false)
  }

  return (
    <IonModal
      id="new-group-modal"
      ref={modalRef}
      trigger={modalTrigger}
      breakpoints={[0.9]}
      initialBreakpoint={0.9}
    >
      <DefaultHabit dismiss={newDismiss} setCustom={setCustom} />
    </IonModal>
  )
}

function DefaultHabit({
  dismiss,
  setCustom
}: {
  dismiss: (type: 'habit' | 'group') => void
  setCustom: React.Dispatch<SetStateAction<Boolean>>
}) {
  return (
    <>
      <div className="habit-container">
        <div className="header">
          <span className="bold">Add New Friend</span>
          <button className="close-button" onClick={() => dismiss('habit')}>
            <IonIcon slot="icon-only" size="medium" icon={close}></IonIcon>
          </button>
        </div>
        <IonContent>
          <div style={{ marginTop: '16px' }} className="new-habit-form">
            <div className="description">
              <div className="description-icon">
                <img alt="pencil" src="./assets/icon/40.svg" />
              </div>
              <IonSelect placeholder="Select friends" multiple={true}>
                <IonSelectOption value="apples">Adam Pithenwala</IonSelectOption>
                <IonSelectOption value="oranges">Spandita Dwivwdi</IonSelectOption>
                <IonSelectOption value="bananas">Tarushi Jain</IonSelectOption>
              </IonSelect>
            </div>
          </div>
        </IonContent>
      </div>
      <div className="create-habit">
        <button className="new-button">Save</button>
      </div>
    </>
  )
}
