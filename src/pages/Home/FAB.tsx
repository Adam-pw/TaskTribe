import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';

import { add } from 'ionicons/icons';
import { useRef } from 'react';
import './FAB.scss';
import { NewHabitModal } from './NewHabitModal';
import { NewGroupModal } from './NewGroupModal';

export default function FAB() {
  const habitModalRef = useRef<HTMLIonModalElement>(null);
  const groupModalRef = useRef<HTMLIonModalElement>(null);

  function dismiss(type: 'habit' | 'group') {
    if (type === 'habit') habitModalRef.current?.dismiss();
    else groupModalRef.current?.dismiss();
  }

  return (
    <>
      <IonFab
        slot="fixed"
        style={{ position: 'fixed' }}
        vertical="bottom"
        horizontal="end"
      >
        <IonFabButton>
          <IonIcon icon={add} size="large"></IonIcon>
        </IonFabButton>
        <IonFabList side="top" class="list">
          <IonFabButton id="open-habit-modal">
            <span className="bold">New Habit</span>
            <img src="/assets/Leaf.svg" alt="New Habit" />
          </IonFabButton>
          <IonFabButton id="open-group-modal">
            <span className="bold">New Group</span>
            <img src="/assets/Group.svg" alt="New Group" />
          </IonFabButton>
        </IonFabList>
      </IonFab>
      <NewHabitModal
        modalRef={habitModalRef}
        modalTrigger={'open-habit-modal'}
        dismiss={dismiss}
      />
      <NewGroupModal
        modalRef={groupModalRef}
        modalTrigger={'open-group-modal'}
        dismiss={dismiss}
      />
    </>
  );
}
