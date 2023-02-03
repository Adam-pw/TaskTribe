import { IonPage, IonContent, IonSlide, IonSlides } from '@ionic/react';
import FrameOne from './FrameOne';
import FrameThree from './FrameThree';
import FrameTwo from './FrameTwo';

import './SplashScreens.scss';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const SplashScreen: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonSlides pager={true} className="ion" options={slideOpts}>
        <IonSlide>
          <FrameOne />
        </IonSlide>
        <IonSlide>
          <FrameTwo />
        </IonSlide>
        <IonSlide>
          <FrameThree />
        </IonSlide>
      </IonSlides>
    </IonContent>
  </IonPage>
);

export default SplashScreen;
