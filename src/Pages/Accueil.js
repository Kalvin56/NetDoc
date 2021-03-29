import medical from "../Assets/medical.json";
import Lottie from 'react-lottie-player'

function Accueil() {
    return (
      <div>
        <div className="block-accueil flex">
          <div className="content">
            <div className="flex-between">
              <div className="block-accueil-left">
                <p className="title-accueil">NetDoc</p>
                <p className="slogan">Site de prise de rendez-vous en ligne</p>
                <p>
                  <Lottie
                    loop
                    animationData={medical}
                    play
                  />
                </p>
              </div>
              <div className="block-accueil-right flex-end">
                <p>lol</p>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
    
export default Accueil;