import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonCheckbox,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Login.scss";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const history = useHistory();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const loginUser = () => {
    if (email && password) {
      signInWithEmailAndPassword(email, password);
    }

    if (user) {
      history.replace("/");
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="login_head">
          <h5 className="bold">Welcome</h5>{" "}
          <h5 className="bold" style={{ color: "var(--primary)" }}>
            back
          </h5>
        </div>

        <div className="login_input">
          <IonItem className="login-color" fill="outline">
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              type="text"
              onIonInput={(e) => {
                setEmail(e.target.value?.toString());
              }}
              placeholder="Enter username"
            ></IonInput>
          </IonItem>

          <IonItem className="login-color" fill="outline">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="text"
              onIonInput={(e) => {
                setPassword(e.target.value?.toString());
              }}
              placeholder="Enter Password"
            ></IonInput>
          </IonItem>
        </div>

        <IonButton expand="block" className="login_btn" onClick={loginUser}>
          <span className="bold">Login</span>
        </IonButton>

        <div className="login_last">
          <div className="login_check">
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>
              <p style={{ color: "var(--neutral-100)" }}>Remember me</p>
            </IonLabel>
          </div>

          <div className="login_forgot">
            <p style={{ color: "var(--primary)" }}>Forgot Password?</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
