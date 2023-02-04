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
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");

  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  const [signInWithEmailAndPassword, _u, _l, _e] =
    useSignInWithEmailAndPassword(auth);

  const [disabled, setDisabled] = useState<boolean>(false);
  useEffect(() => {
    if ((!user && !loading) || error) {
      // history.push("/");
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
              type="password"
              onIonInput={(e) => {
                setPassword(e.target.value?.toString());
              }}
              placeholder="Enter Password"
            ></IonInput>
          </IonItem>
        </div>

        <IonButton
          expand="block"
          className="login_btn"
          style={{backgroundColor: disabled ?"#00008B":""}}
          onClick={(e) => {
            e.preventDefault();
            setDisabled(true);
            if (email && password)
              signInWithEmailAndPassword(email, password).then((res) => {
                if (res?.user) history.push("/");
                console.log(res);
              })
              .finally(()=>{
                setDisabled(false)
              })
          }}
        >
          <span className="bold">
            {!disabled ? "Log In" : "Logging In"}{" "}
          </span>
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
