import { IonPage, IonHeader, IonLabel, IonContent } from '@ionic/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../utils/feathers/auth'
import { getGroups } from '../../utils/feathers/groups'
import './Groups.scss'

const Groups: React.FC = () => {
  const [user, setUser] = useState({ _id: '', name: '', email: '', avatar: '' })
  const [groups, setGroups] = useState([])

  useEffect(() => {
    getUser().then((res) => {
      setUser(res)
    })
    getGroups(user._id).then((res) => {
      setGroups(res.data)
    })
  })

  return (
    <IonPage>
      <IonHeader className="Groups_header">
        <div className="Groups_headermain bold">
          <div className="Groups_headermaintext">
            <h5>Groups</h5>
          </div>
          <div>
            <img alt="filter" src="/assets/icon/17.svg" />
          </div>
        </div>
        <div className="Groups_headermainsub">You have {groups.length} Groups</div>
        <div className="Groups_headermainline"></div>
      </IonHeader>
      <IonContent className="groups_content">
        {groups.map((data: any, index) => {
          return (
            <Link to={`/groups/g/${data._id}`} key={index}>
              <div className="groups_main">
                <div style={{ background: `${data.color}` }} className="groups_icon">
                  {/* <img alt="Silhouette of mountains" src="/assets/101.png" /> */}
                </div>
                <div className="groups_labels">
                  <div className="groups_position">
                    <IonLabel>
                      <span className="bold">{data.name}</span>
                    </IonLabel>
                    <div className="groups_headsub">
                      <img className="groups_posi" alt="position" src="/assets/icon/26.svg" />
                      <IonLabel className="groups_no">
                        <span className="bold">1</span>
                      </IonLabel>
                    </div>
                  </div>
                  <div className="groups_participants">
                    <IonLabel className="groups_head1">Group . 6 </IonLabel>
                    <img className="groups_person" alt="person" src="/assets/icon/19.svg" />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </IonContent>
    </IonPage>
  )
}

export default Groups
