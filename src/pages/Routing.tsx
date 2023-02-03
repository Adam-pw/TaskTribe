import {
  Redirect,
  Route,
  useHistory,
  RouteComponentProps,
} from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  home,
  people,
  personAdd,
  personCircle,
  pieChart,
} from "ionicons/icons";
import "./Routing.scss";

interface SingleGroupPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Routing: React.FC = () => {
  const history = useHistory();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="activity" href="/activity">
              <IonIcon icon={pieChart} />
              <IonLabel>Activity</IonLabel>
            </IonTabButton>
            <IonTabButton tab="friends" href="/friends">
              <IonIcon icon={personAdd} />
              <IonLabel>Friends</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Groups" href="/Groups">
              <IonIcon icon={people} />
              <IonLabel>Grooups</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personCircle} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default Routing;
