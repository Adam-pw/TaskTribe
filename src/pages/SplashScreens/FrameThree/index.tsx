import { IonButton } from '@ionic/react';
import './FrameThree.scss';

const FrameThree: React.FC = () => (
  <div className="framethree_comp">
    <div className="framethree_main">
      <div className="framethree_card1">
        <div className="framethree_card1text">
          Track your <div className="framethree_card1textcolor">patterns</div>
        </div>
        <div className="framethree_card1images">
          <img
            className="framethree_card1images1"
            src="assets/icon/5.svg"
            alt="1"
          />
          <img
            className="framethree_card1images1"
            src="assets/icon/6.svg"
            alt="1"
          />
        </div>
        <img
          className="framethree_card1images2"
          src="assets/icon/7.svg"
          alt="1"
        />
      </div>
      <div className="framethree_card2">
        <IonButton color="dark" href="/signup">
          <div className="framethree_card2main">
            <img
              className="framethree_card2images"
              src="assets/icon/8.svg"
              alt="1"
            />
            Login / SignUp
          </div>
        </IonButton>
      </div>
    </div>
  </div>
);
export default FrameThree;
