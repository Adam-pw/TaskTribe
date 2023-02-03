import { IonPage, IonContent, IonBackButton, IonIcon } from '@ionic/react'
import { readerOutline, walk } from 'ionicons/icons'
import './GrpProgress.scss'
import 'react-calendar-heatmap/dist/styles.css'



export const data = {
  labels: ['Streak', 'Weekly progress', 'Montly progress', 'Failure'],
  datasets: [
    {
      label: 'Walk',
      data: [97, 87, 93, 87],
      backgroundColor: 'rgba(42,103,245,0.2)',
      borderColor: 'rgba(42,103,245, 1)',
      borderWidth: 1
    },
    {
      label: 'Run',
      data: [24, 53, 39, 72],
      backgroundColor: 'rgba(175,174,174, 0.2)',
      borderColor: 'rgba(175,174,174, 1)',
      borderWidth: 1
    }
  ]
}
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Bar Chart'
    }
  }
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Habits',
      data: ['45', '12', '78', '69', '32', '65'],
      backgroundColor: 'rgba(42,72,144,0.8)'
    }
  ]
}

const GrpProgress: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="Grpprog_headercard">
          <div className="Grpprog_headercardback">
            <IonBackButton defaultHref="/groups"></IonBackButton>
          </div>
          <div className="Grpprog_headercardback1"></div>
          <div>
            <img alt="sort" src="/assets/icon/15.svg" />
          </div>
          <div>
            <img alt="plus" src="/assets/icon/18.svg" />
          </div>
        </div>
        <div className="Grpprog_box">
          <div className="Grpprog_box_text">Run</div>
          <div className="Grpprog_box_icon">
            <IonIcon icon={walk} />
          </div>
        </div>
        <div className="Grp_overview">
          <div className="Grp_overview-1">
            <b>Overview</b>
          </div>
          <div className="Grp_overview-2">
          </div>
        </div>
        <div className="Grp_bar">
        </div>
        <div className="Grp_heat-map">        </div>
      </IonContent>
    </IonPage>
  )
}
export default GrpProgress
