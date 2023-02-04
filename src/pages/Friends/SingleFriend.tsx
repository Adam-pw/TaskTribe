import { IonPage, IonContent, IonBackButton } from "@ionic/react";
import "./SingleFriend.scss";
import { RouteComponentProps } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../utils/firebase/user";
import { HabitInterface } from "../../interfaces/habits.interface";
import { getUserHabits } from "../../utils/firebase/habits";

interface SingleGroupPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const SingleFriend: React.FC<SingleGroupPageProps> = ({ match }) => {
  const [userData, setUserData] = useState({ photoURL: "", displayName: "" });
  const [habitData, setHabitData] = useState<Array<HabitInterface>>([]);

  useEffect(() => {
    getUserDetails(match.params.id).then((res: any) => {
      setUserData(res);
      console.log(res);
    });

    getUserHabits(match.params.id).then((res: any) => {
      setHabitData(res);
    });
  }, [match.params.id]);

  return (
    <IonPage>
      <IonContent>
        <div className="openfriends_headercard">
          <div className="openfriends_headercardback">
            <IonBackButton defaultHref="/friends"></IonBackButton>
          </div>
          <div className="openfriends_headercardback1"></div>
          <div>
            <img alt="sort" src="/assets/icon/15.svg" />
          </div>
          <div>
            <img alt="plus" src="/assets/icon/18.svg" />
          </div>
        </div>
        <div className="openfriends_profile">
          <img
            className="openfriends_profile1"
            alt="profile"
            src={userData.photoURL}
          />
        </div>
        <div className="openfriends_main">
          <div className="openfriends_card">
            <div className="bold">
              <h6>{userData.displayName}</h6>
            </div>
            <div>
              <img alt="profile" src="/assets/icon/21.svg" />
            </div>
          </div>
          <div className="openfriends_cardsub">
            Follows{" "}
            <div className="openfriends_cardsubcolor">
              {habitData.length} habits
            </div>{" "}
          </div>
          <div className="openfriends_cardline"></div>
        </div>
        {habitData.map((data: HabitInterface, index) => {
          return (
            <div className="openfriends_habit" key={index}>
              <div
                className="openfriends_habitline"
                style={{ background: data.color }}
              ></div>
              <div className="openfriends_habitsub">
                <div>{/* <img src="assets/icon/22.svg" alt="icon" /> */}</div>
                <p className="openfriends_habittex bold">{data.name}</p>
              </div>
              <div className="openfriends_habitimages">
                <img src="assets/icon/23.svg" alt="icon" />
                <img src="assets/icon/23.svg" alt="icon" />
                <img src="assets/icon/23.svg" alt="icon" />
                <img src="assets/icon/23.svg" alt="icon" />
                <img src="assets/icon/23.svg" alt="icon" />
              </div>
            </div>
          );
        })}
      </IonContent>
    </IonPage>
  );
};
export default SingleFriend;
