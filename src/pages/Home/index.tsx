import { IonPage, IonHeader, IonContent, IonCheckbox } from "@ionic/react";
import { useRef, useState, useEffect } from "react";
import moment from "moment";
import FAB from "./FAB";
import "./Home.scss";
import { Link } from "react-router-dom";
import { PatchHabitModal } from "./PatchHabitModal";
import { useHistory } from "react-router";
import { HabitInterface } from "../../interfaces/habits.interface";
import { UserDataInterface } from "../../interfaces/users.interface";
import { User } from "@firebase/auth";
import { getUserDetails } from "../../utils/firebase/user";
import { getUserHabits } from "../../utils/firebase/habits";
import { auth } from "../../utils/firebase";

function Home() {
  const scrollRef = useRef<Array<HTMLDivElement | null>>([]);
  const groupRef = useRef<HTMLDivElement | null>(null);

  const history = useHistory();

  const [user, setUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState<UserDataInterface | null>(
    null
  );
  const [habits, setHabits] = useState<Array<HabitInterface>>([]);

  useEffect(() => {
    setUser(auth.currentUser);
    if (!user) {
      history.push("/splashscreens");
    }

    if (user)
      getUserDetails(user?.uid).then((res) => {
        setUserDetails(res);
      });

    if (userDetails?.habits)
      getUserHabits(userDetails?.habits).then((res) => {
        setHabits(res);
      });
  }, []);

  const getDatesInRange = (min: any, max: any) => {
    return Array((max - min) / 86400000)
      .fill(0)
      .map((_, i) => new Date(new Date().setDate(min.getDate() + i)));
  };

  const patchhabitModalRef = useRef<HTMLIonModalElement>(null);

  function dismiss(type: "habit" | "group") {
    if (type === "habit") patchhabitModalRef.current?.dismiss();
  }
  const [patch, setPatch] = useState(false);

  return (
    <IonPage>
      <IonHeader className="home-header">
        <h5 className="bold">
          Good Morning, <br /> {user.name} !
        </h5>
        <img src="/assets/sunrise 1.svg" alt="Sunrise" />
      </IonHeader>
      <IonContent>
        <div className="home-main">
          <div className="scroll-dates">
            <div className="heading">
              <h6 className="bold">Today</h6>
              <p>
                {new Date().toLocaleDateString("en-us", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <div className="scroll-container" ref={groupRef}>
                {getDatesInRange(
                  new Date(2023, 1, 1),
                  new Date(2023, 2, 2)
                ).map((data: Date, index) => {
                  return (
                    <>
                      {moment(data).week() === moment().week() ? (
                        <div
                          ref={(element) => {
                            scrollRef.current[index] = element;
                          }}
                          key={index}
                        >
                          <DateItem data={data} />
                        </div>
                      ) : (
                        <div key={index}>
                          <DateItem data={data} />
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="home-tasks">
              <div className="tasks">
                <span className="bold">Completed</span>
                <div className="tasks-container">
                  {habits.map((data: any, index) => {
                    return (
                      <div className="task" key={index}>
                        <Link to={`/home/ind/${data._id}`}>
                          <div
                            className="color-bar"
                            style={{
                              background: data.color,
                            }}
                          ></div>
                          <div className="habit">
                            <p>🧘🏽‍♂️</p>
                            <p>{data.name}</p>
                          </div>
                        </Link>
                        <div className="tick">
                          <IonCheckbox
                            checked={true}
                            slot="start"
                            onClick={() => setPatch(true)}
                          ></IonCheckbox>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="tasks">
                <span className="bold">Pending</span>
                <div className="tasks-container">
                  {habits.map((data: any, index) => {
                    return (
                      <>
                        <div className="task" key={index}>
                          <Link to={`/home/ind/${data._id}`}>
                            <div
                              className="color-bar"
                              style={{
                                background: data.color,
                              }}
                            ></div>
                            <div className="habit">
                              <p>👨🏻‍💻</p>
                              <p>{data.name}</p>
                            </div>
                          </Link>
                          <div
                            className="tick"
                            style={{
                              background: "var(--neutral-300)",
                            }}
                          >
                            <IonCheckbox
                              slot="start"
                              onClick={() => setPatch(true)}
                            ></IonCheckbox>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PatchHabitModal
          modalRef={patchhabitModalRef}
          modalTrigger={patch}
          setPatch={setPatch}
          dismiss={dismiss}
        />
        <div className="div-padding"></div>
      </IonContent>
      <FAB />
    </IonPage>
  );
}
export default Home;

function DateItem({ data }: { data: Date }) {
  return (
    <div className="scroll-item">
      <p>{data.toLocaleDateString("en-us", { weekday: "short" })}</p>
      {data.toLocaleDateString() === new Date().toLocaleDateString() ? (
        <div className="current-date">
          <p
            className="bold"
            style={{
              color: "var(--neutral-300)",
            }}
          >
            {data.toLocaleDateString("en-us", {
              day: "numeric",
            })}
          </p>
        </div>
      ) : (
        <p
          className="bold"
          style={{
            color: "var(--neutral-300)",
          }}
        >
          {data.toLocaleDateString("en-us", {
            day: "numeric",
          })}
        </p>
      )}
    </div>
  );
}
