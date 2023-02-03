import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.scss";

const Singup: React.FC = () => {
  const [name, setName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <div className="sign_head">
          <h5 className="bold">Create your</h5>{" "}
          <h5 className="bold" style={{ color: "var(--primary)" }}>
            account
          </h5>
        </div>

        <div className="sign_input">
          <IonItem className="sign-color" fill="outline">
            <IonLabel position="floating">Full name</IonLabel>
            <IonInput
              onIonInput={(e) => {
                setName(e.target.value?.toString());
              }}
              placeholder="Enter full name"
            ></IonInput>
          </IonItem>

          <IonItem className="sign-color" fill="outline">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              onIonInput={(e) => {
                setEmail(e.target.value?.toString());
              }}
              placeholder="Enter Email"
            ></IonInput>
          </IonItem>

          <IonItem className="sign-color" fill="outline">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              onIonInput={(e) => {
                setPassword(e.target.value?.toString());
              }}
              placeholder="Enter Password"
            ></IonInput>
          </IonItem>
        </div>

        <IonButton expand="block" className="sign_btn">
          <span className="bold">Create account</span>
        </IonButton>

        <div className="sign_sub">
          <p className="bold">Already have an account? </p>{" "}
          <p
            className="bold"
            style={{
              color: "var(--primary)",
              textDecoration: "underline",
            }}
          >
            <Link to="/login">Login</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Singup;
