import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonCheckbox,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Login.scss";
import { auth } from "../../utils/firebase";
import { User } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if ((!user && !loading) || error) {
      history.push("/");
    }
  });

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

        <IonButton expand="block" className="login_btn">
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
