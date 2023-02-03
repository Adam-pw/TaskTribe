import './FrameOne.scss';

const FrameOne: React.FC = () => (
  <>
    <div className="frameone_main">
      <div className="frameone_ellipse">
        <div className="frameone_card">
          <div className="frameone_card1">
            <div className="frameone_card1text">
              Change Your <div className="frameone_card1textcolor">habits</div>{' '}
              Change Your <div className="frameone_card1textcolor">life</div>
            </div>
            <div className="frameone_grid">
              <div className="frameone_grid1">
                <img
                  className="frameone_card1image"
                  src="assets/icon/9.svg"
                  alt="1"
                />
              </div>
              <div className="frameone_grid2">
                <img
                  className="frameone_card1image"
                  src="assets/icon/10.svg"
                  alt="1"
                />
              </div>
              <div className="frameone_grid3">
                <img
                  className="frameone_card1image"
                  src="assets/icon/11.svg"
                  alt="1"
                />
              </div>
              <div className="frameone_grid4">
                <img
                  className="frameone_card1image"
                  src="assets/icon/12.svg"
                  alt="1"
                />
              </div>
              <div className="frameone_grid5">
                {' '}
                <img
                  className="frameone_card1image"
                  src="assets/icon/13.svg"
                  alt="1"
                />
              </div>
            </div>
          </div>
          <div className="frameone_card2">
            <div className="frameone_card2text">
              Create healthy{' '}
              <div className="frameone_card2textcolor">habits</div>, one day at
              a time with{' '}
              <div className="frameone_card2textcolor">Habitician</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default FrameOne;
