import { IonPage, IonContent, IonBackButton, IonIcon } from '@ionic/react'
import { readerOutline, walk } from 'ionicons/icons'
import { Link } from "react-router-dom";
import './GrpProgress.scss'
// import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

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
            <Radar redraw className="Grp_overview-2-chart" data={data} />
          </div>
        </div>
        <div className="Grp_bar">
          <Bar width={100} height={100} options={options} data={data1} />
        </div>
        <div className="Grp_heat-map">
          {/* <CalendarHeatmap
            startDate={new Date('2022-01-01')}
            endDate={new Date('2022-06-31')}
            values={[
              { date: '2022-01-01', count: 12 },
              { date: '2022-01-22', count: 122 },
              { date: '2022-01-30', count: 38 }
              // ...and so on
            ]}
          /> */}
        </div>
      </IonContent>
    </IonPage>
  )
}
export default GrpProgress
