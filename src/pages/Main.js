import Players from "../components/Players.comp" 
import img_logo from '../assets/images/logo-bxh.png';
import img_title from '../assets/images/title-bxh.png';    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";


const Main = () => {
    library.add(faHouseChimney);
    return(
        <div className="bxh-main"> 
            <div className="bxh-container">
                <div className="bxh-nav-header"> 
                    <div className="bxh-logo-iconhome">
                        <img className="bxh-logo" src={img_logo} alt="" width="250" height="250"/> 
                        <div className="bxh-icon-home">
                            <FontAwesomeIcon icon={faHouseChimney} />
                        </div>
                        
                    </div>
                    <div className="bxh-title">
                        <img className="bxh-title" src={img_title} alt="" width="250" height="250"/>
                    </div>
                </div>
                
                <Players /> 
            </div>
        </div>
    )
}

export default Main