import './FrameTwo.scss';

const FrameTwo: React.FC = () => (
  <>
    <div className="frametwo_comp">
      <div className="frametwo_main">
        <div className="frametwo_card1">
          <div className="frametwo_card1text">
            Make <div className="frametwo_card1textcolor">streaks</div> with
            friends
          </div>
          <div className="frametwo_card1button">
            <div>
              <img src="assets/icon/1.svg" alt="1" />
            </div>
            <div className="frametwo_card1buttontext">Janmejay Joshi</div>
            <div>🔥12</div>
          </div>
          <div className="frametwo_card1button">
            <div>
              <img src="assets/icon/2.svg" alt="1" />
            </div>
            <div className="frametwo_card1buttontext">Satvik Kaurav</div>
            <div>🔥50</div>
          </div>
        </div>
        <div className="frametwo_card2">
          <div className="frametwo_card2text">
            Make <div className="frametwo_card2textcolor">groups</div> and
            compete
          </div>
          <div className="frametwo_card2button">
            <div>
              <img src="assets/icon/3.svg" alt="1" />
            </div>
            <div className="frametwo_card2buttontext">Reading group</div>
            <div>
              <img src="assets/icon/4.svg" alt="1" />
            </div>
          </div>
          <div className="frametwo_card2button">
            <div>
              <img src="assets/icon/3.svg" alt="1" />
            </div>
            <div className="frametwo_card2buttontext">Exercise group</div>
            <div>
              <img src="assets/icon/4.svg" alt="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default FrameTwo;
