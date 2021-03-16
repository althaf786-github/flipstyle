import React from 'react';
import logo from './assets/logo.png';
import logos from './assets/logos.png';
import footer from './assets/footer.png';
import discovers from './assets/discovers.png';
import discoverss from './assets/discoverss.png';
import navbar from './assets/navbar.png';
import navbars from './assets/navbars.png';
import rewind from "./assets/rewind.png";
import rewinds from "./assets/rewinds.png";
import Covid199 from "./assets/Covid199.jpg";
import sellerstory from "./assets/seller story.jpg";
import sellerstorys from "./assets/seller storys.jpg";
import sellerstoryss from "./assets/seller storyss.jpg";
import bottomlinks from "./assets/bottomlinks.png";
import SocialFollow from "./SocialFollow";



function Header (){
    return( 

        <div  class="main"> 
    
            <div className="headerlogos" >
                <div className="medialogos">
                    <img src={logos} alt="logos" />
                </div>    
                <img src={navbars} alt="navbars" class="navimage"/>
                
            </div>
        
        <img src={sellerstorys} alt="sellerstory" class="image"/>
        <img src={sellerstoryss} alt="sellerstory" class="image"/>
        <img src={sellerstoryss} alt="sellerstory" class="image"/>
        
        <div class="wrapper">
         
        </div>
        <img src={Covid199} alt="covid19" class="image" style={{ padding: 10 }}/>
        <div class="wrapper">
         
        </div>
        
        
        <img src={rewinds} alt="rewind" class="image"/>
        
        
        <img src={discovers} alt="discover" class="image"/>
        <img src={discoverss} alt="discover" class="image"/>
        <hr/>
        
       
        </div>
       
        
    )
}

export default Header;