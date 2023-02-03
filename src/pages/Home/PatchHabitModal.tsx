import {
  IonContent,
  IonIcon,
  IonModal,
} from '@ionic/react'

import { close } from 'ionicons/icons'
import React, { Ref, SetStateAction, useState } from 'react'
import './Habit.scss'

interface ModalProps {
  modalRef: Ref<HTMLIonModalElement>
  modalTrigger: boolean
  dismiss: (type: 'habit' | 'group') => void
  setPatch: React.Dispatch<React.SetStateAction<boolean>>
}

export function PatchHabitModal({ modalRef, modalTrigger, setPatch, dismiss }: ModalProps) {
  const [custom, setCustom] = useState<Boolean>(false)

  const newDismiss = () => {
    dismiss('habit')
    setCustom(false)
    setPatch(false)
  }

  return (
    <IonModal
      id="new-patchhabit-modal"
      ref={modalRef}
      isOpen={modalTrigger}
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
          <span className="bold">Enter Your Progress</span>
          <button className="close-button" onClick={() => dismiss('habit')}>
            <IonIcon slot="icon-only" size="medium" icon={close}></IonIcon>
          </button>
        </div>
        <IonContent>
          <div className="create-habit">
            <button className="new-button">Save</button>
          </div>
        </IonContent>
      </div>
    </>
  )
}
