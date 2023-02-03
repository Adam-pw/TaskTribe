import { IonPage, IonContent, IonBackButton } from '@ionic/react'
import './SingleFriend.scss'
import { RouteComponentProps } from 'react-router-dom'
import { useState } from 'react'

interface SingleGroupPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const SingleFriend: React.FC<SingleGroupPageProps> = ({ match }) => {
  const [userData, setUserData] = useState({ name: '', color: '', avatar: '' })

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
          <img className="openfriends_profile1" alt="profile" src={userData.avatar} />
        </div>
        <div className="openfriends_main">
          <div className="openfriends_card">
            <div className="bold">
              <h6>{userData.name}</h6>
            </div>
            <div>
              <img alt="profile" src="/assets/icon/21.svg" />
            </div>
          </div>
          <div className="openfriends_cardsub">
            You and {userData.name} have <div className="openfriends_cardsubcolor">5 habits</div> in common
          </div>
          <div className="openfriends_cardline"></div>
        </div>
        {[1, 2, 3, 4, 5].map((data, index) => {
          return (
            <div className="openfriends_habit" key={index}>
              <div className="openfriends_habitline"></div>
              <div className="openfriends_habitsub">
                <div>
                  <img src="assets/icon/22.svg" alt="icon" />
                </div>
                <p className="openfriends_habittex bold">Reading</p>
              </div>
              <div className="openfriends_habitimages">
                <img src="assets/icon/23.svg" alt="icon" />
                <img src="assets/icon/23.svg" alt="icon" />
                <img src="assets/icon/23.svg" alt="icon" />
                <img src="assets/icon/23.svg" alt="icon" />
                <img src="assets/icon/23.svg" alt="icon" />
              </div>
            </div>
          )
        })}
      </IonContent>
    </IonPage>
  )
}
export default SingleFriend
