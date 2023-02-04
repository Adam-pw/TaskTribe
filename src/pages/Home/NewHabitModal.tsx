import {
  IonContent,
  IonIcon,
  IonInput,
  IonLabel,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from "@ionic/react";

import { close } from "ionicons/icons";
import { Ref, SetStateAction, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { createHabit } from "../../utils/firebase/habits";
import "./Habit.scss";

interface ModalProps {
  modalRef: Ref<HTMLIonModalElement>;
  modalTrigger: string;
  dismiss: (type: "habit" | "group") => void;
}

export function NewHabitModal({ modalRef, modalTrigger, dismiss }: ModalProps) {
  const [custom, setCustom] = useState<Boolean>(false);

  const newDismiss = () => {
    dismiss("habit");
    setCustom(false);
  };

  return (
    <IonModal
      id="new-habit-modal"
      ref={modalRef}
      trigger={modalTrigger}
      breakpoints={[0.9]}
      initialBreakpoint={0.9}
    >
      {custom ? (
        <CustomHabit dismiss={newDismiss} setCustom={setCustom} />
      ) : (
        <DefaultHabit dismiss={newDismiss} setCustom={setCustom} />
      )}
    </IonModal>
  );
}

function CustomHabit({
  dismiss,
  setCustom,
}: {
  dismiss: (type: "habit" | "group") => void;
  setCustom: React.Dispatch<SetStateAction<Boolean>>;
}) {
  const [name, setName] = useState<string>();
  const [description, setdescription] = useState<string>();
  const [color, setcolor] = useState<string>();
  const [type, setType] = useState<boolean>();
  const [target, settarget] = useState<number>();
  const [frequency, setFrequency] = useState<number>();
  const [unit, setUnit] = useState<string>();

  const [user, loading, error] = useAuthState(auth);

  const [nomeasure, setnomeasure] = useState(false);
  const [measure, setmeasure] = useState(false);
  
  const [disabled,setDisabled] = useState<boolean>(false)
  
  const NoMeasurable = () => {
    setnomeasure(true);
    setmeasure(false);
    setType(false);
  };

  const Measurable = () => {
    setmeasure(true);
    setnomeasure(false);
    setType(true);
  };

  return (
    <>
      <div className="habit-container">
        <div className="header">
          <span className="bold">Create Your Own</span>
          <button className="close-button" onClick={() => dismiss("habit")}>
            <IonIcon slot="icon-only" size="medium" icon={close}></IonIcon>
          </button>
        </div>
        <IonContent>
          <div className="new-habit-form">
            <div className="div-name">
              <div className="div-name-icon">
                <img alt="pencil" src="./assets/icon/31.svg" />
              </div>
              <IonInput
                className="div-name-text"
                placeholder="Enter text"
                onIonInput={(e) => {
                  setName(e.target.value?.toString());
                }}
              ></IonInput>
            </div>
            <div className="description">
              <div className="description-icon">
                <img alt="pencil" src="./assets/icon/32.svg" />
              </div>
              <IonInput
                className="description-text"
                placeholder="Description"
                onIonInput={(e) => {
                  setdescription(e.target.value?.toString());
                }}
              ></IonInput>
            </div>
            <div>
              <IonRadioGroup className="radio-button">
                <div className="radio-button-main">
                  <IonLabel>Measurable</IonLabel>
                  <IonRadio
                    onClick={Measurable}
                    slot="end"
                    value="grapes"
                  ></IonRadio>
                </div>
                <div className="radio-button-main">
                  <IonLabel>{"Yes/No"}</IonLabel>
                  <IonRadio
                    onClick={NoMeasurable}
                    slot="end"
                    value="strawberries"
                  ></IonRadio>
                </div>
              </IonRadioGroup>
            </div>
            {measure && (
              <>
                <div className="units">
                  <div className="units-mile">
                    <div className="units-mile-icon">
                      <img alt="pencil" src="./assets/icon/33.svg" />
                    </div>
                    <div className="units-mile-text">
                      <span>Unit</span>
                    </div>
                    <IonInput
                      className="units-mile-input"
                      placeholder="Measurable Unit"
                      onIonInput={(e) => {
                        setUnit(String(e.target.value?.toString()));
                      }}
                    />
                  </div>
                  <div className="units-mile">
                    <div className="units-mile-icon">
                      <img alt="pencil" src="./assets/icon/34.svg" />
                    </div>
                    <div className="units-mile-text">
                      <span>Target</span>
                    </div>
                    <IonInput
                      className="units-mile-input"
                      placeholder="Target Numbers"
                      type="number"
                      onIonInput={(e) => {
                        settarget(Number(e.target.value?.toString()));
                      }}
                    />
                  </div>
                </div>
                <div className="frequency">
                  <div className="frequency-icon">
                    <img alt="pencil" src="./assets/icon/35.svg" />
                  </div>
                  <span className="frequency-text-sub">Frequency</span>
                  <div className="frequency-text">
                    <IonInput
                      placeholder="Select frequency"
                      onIonInput={(e) => {
                        setFrequency(Number(e.target.value?.toString()));
                      }}
                    ></IonInput>
                  </div>
                </div>
                <div className="two">
                  <div className="color">
                    <div className="color-icon">
                      <img alt="pencil" src="./assets/icon/37.svg" />
                    </div>
                    <div className="color-text">
                      <IonSelect
                        placeholder="Color"
                        onIonChange={(e) => {
                          setcolor(e.target.value?.toString());
                        }}
                      >
                        <IonSelectOption value="red">Red</IonSelectOption>
                        <IonSelectOption value="green">Green</IonSelectOption>
                        <IonSelectOption value="blue">Blue</IonSelectOption>
                        <IonSelectOption value="yellow">Yellow</IonSelectOption>
                        <IonSelectOption value="orange">Orange</IonSelectOption>
                      </IonSelect>
                    </div>
                  </div>
                  <div className="icon">
                    <div className="icon-icon">
                      <img alt="pencil" src="./assets/icon/36.svg" />
                    </div>
                    <div className="icon-text">Icon</div>
                  </div>
                </div>
                <div className="reminder">
                  <div className="reminder-icon">
                    <img alt="pencil" src="./assets/icon/38.svg" />
                  </div>
                  <div className="reminder-text">Reminder</div>
                  <IonToggle></IonToggle>
                </div>
              </>
            )}
            {nomeasure && (
              <>
                <div className="frequency">
                  <div className="frequency-icon">
                    <img alt="pencil" src="./assets/icon/35.svg" />
                  </div>
                  <span className="frequency-text-sub">Frequency</span>
                  <div className="frequency-text">
                    <IonSelect placeholder="Select frequency">
                      <IonSelectOption value="apples">
                        Once a day
                      </IonSelectOption>
                      <IonSelectOption value="oranges">
                        Once a week
                      </IonSelectOption>
                    </IonSelect>
                  </div>
                </div>
                <div className="two">
                  <div className="color">
                    <div className="color-icon">
                      <img alt="pencil" src="./assets/icon/37.svg" />
                    </div>
                    <div className="color-text">
                      <IonSelect placeholder="Color">
                        <IonSelectOption value="red">Red</IonSelectOption>
                        <IonSelectOption value="green">Green</IonSelectOption>
                        <IonSelectOption value="blue">Blue</IonSelectOption>
                        <IonSelectOption value="yellow">Yellow</IonSelectOption>
                        <IonSelectOption value="orange">Orange</IonSelectOption>
                      </IonSelect>
                    </div>
                  </div>
                  <div className="icon">
                    <div className="icon-icon">
                      <img alt="pencil" src="./assets/icon/36.svg" />
                    </div>
                    <div className="icon-text">Icon</div>
                  </div>
                </div>
                <div className="reminder">
                  <div className="reminder-icon">
                    <img alt="pencil" src="./assets/icon/38.svg" />
                  </div>
                  <div className="reminder-text">Reminder</div>
                  <IonToggle></IonToggle>
                </div>
              </>
            )}
          </div>
          <div className="create-habit">
            <button
              className="new-button"
              style={{backgroundColor: disabled ?"#00008B":""}}
              onClick={(e) => {
                e.preventDefault();
                setDisabled(true);
                if (user && name && type)
                  createHabit(user, {
                    owner: user.uid,
                    name,
                    type,
                    description,
                    color,
                    target,
                    frequency,
                    unit,
                  }).then(() => dismiss("habit"));
              }}
            >
              {disabled ? "Saving" : "Save"} 
            </button>
          </div>
        </IonContent>
      </div>
    </>
  );
}

function DefaultHabit({
  dismiss,
  setCustom,
}: {
  dismiss: (type: "habit" | "group") => void;
  setCustom: React.Dispatch<SetStateAction<Boolean>>;
}) {
  
  return (
    <>
      <div className="habit-container">
        <div className="header">
          <span className="bold">New Habit</span>
          <button className="close-button" onClick={() => dismiss("habit")}>
            <IonIcon slot="icon-only" size="medium" icon={close}></IonIcon>
          </button>
        </div>
        <IonContent>
          <IonSearchbar showCancelButton="focus"></IonSearchbar>
          <div className="cards">
            <div
              className="card"
              style={{ background: "#A6BFFF", color: "#001A5E" }}
            >
              <span>Meditate</span>
              <img src="/assets/Habit_Characters/meditate.svg" alt="Meditate" />
            </div>
            <div
              className="card"
              style={{ background: "#FFB0B0", color: "#9D0000" }}
            >
              <span>Drink Water</span>
              <img src="/assets/Habit_Characters/Drink_Water.svg" alt="Drink" />
            </div>
            <div
              className="card"
              style={{ background: "#AEFFC5", color: "#2A653B" }}
            >
              <span>Read</span>
              <img src="/assets/Habit_Characters/Read.svg" alt="Read" />
            </div>
            <div
              className="card"
              style={{ background: "#FFB9F0", color: "#9D3586" }}
            >
              <span>Gym</span>
              <img src="/assets/Habit_Characters/Gym.svg" alt="Gym" />
            </div>
            <div
              className="card"
              style={{ background: "#FFF09F", color: "#AB9830" }}
            >
              <span>Run</span>
              <img src="/assets/Habit_Characters/Run.svg" alt="Run" />
            </div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </IonContent>
      </div>
      <div className="create-habit">
        <button className="new-button" onClick={() => setCustom(true)}>
          Create Your Own
        </button>
      </div>
    </>
  );
}
