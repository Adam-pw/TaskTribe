import React, { useEffect, useRef, useState } from "react";

import {
  IonPage,
  IonHeader,
  IonContent,
  IonCard,
  IonAvatar,
  IonLabel,
} from "@ionic/react";
import { Link } from "react-router-dom";
import "./Friends.scss";
import { FriendModal } from "./FriendModel";
import { getAllUsers } from "../../utils/firebase/user";
import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

export default function Friends() {
  const friendModal = useRef<HTMLIonModalElement>(null);

  function dismiss(type: "habit" | "group") {
    if (type === "habit") friendModal.current?.dismiss();
    else friendModal.current?.dismiss();
  }

  const [users, setUsers] = useState<Array<User>>([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    getAllUsers().then((res: any) => {
      setUsers(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <IonPage>
        <IonHeader className="friends_header">
          <div className="friends_headermain bold">
            <div className="friends_headermaintext">
              <h5>Friends</h5>
            </div>
            <div>
              <img id="friends-model" alt="search" src="/assets/icon/16.svg" />
            </div>
            <div>
              <img id="open-friend" alt="sort" src="/assets/icon/41.svg" />
            </div>
          </div>
          <div className="friends_headermainsub">
            You have {users.length - 1} Friends
          </div>
          <div className="friends_headermainline"></div>
        </IonHeader>

        <IonContent>
          {user &&
            users.map((data: User, index) => {
              if (data.uid !== user.uid)
                return (
                  <Link to={`/friends/f/${data.uid}`} key={index}>
                    <IonCard className="friends_card">
                      <div className="friends_main">
                        <div className="friends_mainsub">
                          <IonAvatar className="friends_image">
                            <img alt="friend logo" src={data.photoURL ?? ""} />
                          </IonAvatar>
                          <div className="friends_text">{data.displayName}</div>
                        </div>
                        <div className="friends_mainsub2">
                          <IonLabel className="friends_text2">🔥17</IonLabel>
                          <IonLabel className="friends_arrow">
                            <img
                              className="friends_arrowimg"
                              alt="arrow"
                              src="/assets/icon/14.svg"
                            />
                          </IonLabel>
                        </div>
                      </div>
                    </IonCard>
                  </Link>
                );
              else return null;
            })}
          <div style={users.length===-1?{display:"inherit"}:{display:"none"}} className="tasks_text">Addup more Friends to see more</div>
        </IonContent>
      </IonPage>
      <FriendModal
        modalRef={friendModal}
        modalTrigger={"open-friend"}
        dismiss={dismiss}
      />
    </>
  );
}
