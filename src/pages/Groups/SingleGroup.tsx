import { IonPage, IonContent, IonBackButton, IonIcon } from "@ionic/react";
import {
  leafOutline,
  person,
  pulse,
  readerOutline,
  sunny,
  walk,
} from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getGroupDetails } from "../../utils/firebase/groups";
import { Addmember } from "./Addmember";
import "./SingleGroup.scss";

interface SingleGroupPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const SingleGroup: React.FC<SingleGroupPageProps> = ({ match }) => {
  const [groupData, setGroupData] = useState({ name: "", color: "" });

  const addMember = useRef<HTMLIonModalElement>(null);

  function dismiss(type: "habit" | "group") {
    if (type === "habit") addMember.current?.dismiss();
    else addMember.current?.dismiss();
  }

  useEffect(() => {
    getGroupDetails(match.params.id).then((res: any) => {
      if (res) setGroupData(res);
    });
  }, [match.params.id]);

  return (
    <IonPage>
      <IonContent>
        <div className="opengroups_headercardmain">
          <div
            className="opengroups_headercard"
            style={{ background: groupData.color }}
          >
            <div
              className="opengroups_headercardback"
              style={{ background: groupData.color }}
            >
              <IonBackButton defaultHref="/groups"></IonBackButton>
            </div>
            <div className="opengroups_headercardback1"></div>
            <div>
              <img alt="sort" src="/assets/icon/15.svg" />
            </div>
            <div id="add-member">
              <img alt="plus" src="/assets/icon/18.svg" />
            </div>
          </div>
        </div>
        <div
          className="opengroups_profile"
          style={{ background: groupData.color }}
        >
          <img
            className="opengroups_profile1"
            alt="profile"
            src="/assets/youth.svg"
          />
        </div>
        <div className="opengroups_main">
          <div className="opengroups_card">
            <div className="bold">
              <h6>{groupData.name}</h6>
            </div>
            <div>
              <img alt="profile" src="/assets/icon/21.svg" />
            </div>
          </div>
          <div className="opengroups_cardsub">
            <div className="opengroups_cardsub_glist">
              Groups <span className="opengroups_cardsub_glist_dot">.</span>
              <span className="opengroups_cardsub_glist_num">5</span>
              <IonIcon icon={person}></IonIcon>
            </div>
            <div className="opengroups_cardsub_glist">
              Habits <span className="opengroups_cardsub_glist_dot">.</span>
              <span className="opengroups_cardsub_glist_num">3</span>
              <IonIcon icon={leafOutline}></IonIcon>
            </div>
          </div>
          <div className="opengroups_cardline"></div>
        </div>

        <div className="opengroups_habits_o">
          <div className="opengroups_habits_i">
            {/* <Link to="/grpprogress"> */}
            <div>
              <button className="opengroups_habits_i_1">
                <IonIcon icon={pulse}></IonIcon>
                <div>GroupProgress</div>
              </button>
            </div>
            {/* </Link> */}
            {[
              ["Read", "readerOutline"],
              ["Run", "walk"],
              ["Meditate"],
              ["Gym"],
            ].map((d, i) => {
              return (
                <button className="opengroups_habits_i_1" key={i}>
                  <IonIcon icon={readerOutline}></IonIcon>
                  <div>{d[0]}</div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="opengroups_habits_title">
          <div className="opengroups_habits_title_wrapper">
            <div className="opengroups_habits_title_l">
              <span className="opengroups_habits_title_l_text">
                Leaderboard
              </span>
            </div>
            <div className="opengroups_habits_title_r">
              <ul className="opengroups_habits_title_r_l">
                <li>
                  <IonIcon icon={readerOutline}></IonIcon>
                </li>
                <li>
                  <IonIcon icon={walk}></IonIcon>
                </li>
                <li>
                  <IonIcon icon={sunny}></IonIcon>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {["JJ", "Adam", "Spandita", "Tarushi"].map((data, index) => {
          return (
            <div className="opengroups_habit" key={index}>
              <div className="opengroups_habit_wrapper">
                <div className="opengroups_habit_l">
                  <div
                    className="opengroups_habit_l_profile"
                    style={{
                      background: groupData.color,
                      width: "2rem",
                      height: "2rem",
                    }}
                  ></div>
                  <span className="opengroups_habit_l_text">{data}</span>
                </div>
                <div className="opengroups_habit_r">
                  <ul className="opengroups_habit_r_l">
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
        <Addmember
          modalRef={addMember}
          modalTrigger="add-member"
          dismiss={dismiss}
        />
      </IonContent>
    </IonPage>
  );
};
export default SingleGroup;
