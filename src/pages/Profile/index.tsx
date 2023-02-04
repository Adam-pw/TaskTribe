import { IonPage, IonContent, IonLabel, IonToggle } from "@ionic/react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import "./Profile.scss";

const Profile: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, _loading, _error] = useSignOut(auth);

  return (
    <IonPage>
      <IonContent className="profile_content">
        <div className="profile_top">
          <img className="profile_image1" src={user?.photoURL ?? ""} alt="" />

          <div className="profile_image">
            <div className="profile_main">
              <h6 className="bold">{user?.displayName}</h6>
              <div>
                <img className="" src="/assets/icon/20.svg" alt="" />
              </div>
            </div>
            <div className="profile_para">
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="profile_cads">
          <div className="profile_mains">
            <div className="profile_photu">
              <img alt="Silhouette of mountains" src="/assets/icon/27.svg" />
            </div>
            <div className="profile_labels">
              <div className="profile_position">
                <IonLabel className="profile_head">
                  <span>General Preferences</span>
                </IonLabel>
              </div>
            </div>
          </div>

          <div className="profile_mains">
            <div className="profile_photu">
              <img alt="Silhouette of mountains" src="/assets/icon/28.svg" />
            </div>
            <div className="profile_labels">
              <div className="profile_position">
                <IonLabel className="profile_head">
                  <span>Export data</span>
                </IonLabel>
              </div>
            </div>
          </div>

          <div className="profile_mains">
            <div className="profile_photu">
              <img alt="Silhouette of mountains" src="/assets/icon/29.svg" />
            </div>
            <div className="profile_labels">
              <div className="profile_positions">
                <IonLabel className="profile_head">
                  <span>Privacy</span>
                </IonLabel>
                <div className="profile_toggle">
                  <IonToggle slot="end"></IonToggle>
                </div>
              </div>
            </div>
          </div>
          {/* <button
            onClick={() => {
              signOut().then(() => {
                window.location.reload();
              });
            }}
          >
            logout
          </button> */}
          <div className="profile_mains">
            <div className="profile_photu">
              <img alt="Silhouette of mountains" src="/assets/icon/30.svg" />
            </div>
            <div className="profile_labels">
              <div className="profile_position">
                <IonLabel className="profile_head">
                  <span
                    onClick={() => {
                      signOut().then(() => {
                        window.location.reload();
                      });
                    }}
                  >
                    <Link to="/splashscreens">Logout</Link>
                  </span>
                </IonLabel>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
