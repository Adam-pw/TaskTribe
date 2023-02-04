import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../utils/firebase";
import "./Signup.scss";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { setUserDetails } from "../../utils/firebase/user";
import gravatar from "gravatar";

const Singup: React.FC = () => {
  const [name, setName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const history = useHistory();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [disabled, setDisabled] = useState<boolean>(false);

  const signUp = async (e: any) => {
    e.preventDefault();
    setDisabled(true);
    if (email && password)
      createUserWithEmailAndPassword(email, password)
        .then((res) => {
          if (res?.user) {
            updateProfile(res?.user, {
              displayName: name,
              photoURL: gravatar.url(
                res.user.email ?? "",
                { s: "100", r: "x", d: "retro" },
                true
              ),
            }).finally(() => {
              setDisabled(false);
            });

            setUserDetails(res?.user, {
              habits: [],
              groups: [],
              friends: [],

              uid: res.user.uid,
              photoURL: gravatar.url(
                res.user.email ?? "",
                { s: "100", r: "x", d: "retro" },
                true
              ),
              displayName: name,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          history.push("/");
        });
  };

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
              type="password"
              placeholder="Enter Password"
            ></IonInput>
          </IonItem>
        </div>

        <IonButton
          expand="block"
          disabled={disabled}
          className="sign_btn"
          style={{ backgroundColor: disabled ? "#00008B" : "" }}
          onClick={(e) => signUp(e)}
        >
          <span className="bold">
            {!disabled ? "Create Account" : "Signing Up"}
          </span>
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
