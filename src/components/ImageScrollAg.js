import ag101 from '../assets/ag101.png';
import ag102 from '../assets/ag102.png';
import ag103 from '../assets/ag103.png';
import ag104 from '../assets/ag104.png';
import ag105 from '../assets/ag105.png';
import ag106 from '../assets/ag106.png';
import "./ImageScrollAg.css";

const ImgScroll = (props) => {
  return (
  <div className='container'>
      <div class="slider">
      <div class="slides">
      
        <input type="radio" name="radio-btn" id="ra1"/>
        <input type="radio" name="radio-btn" id="ra2"/>
        <input type="radio" name="radio-btn" id="ra3"/>
        <input type="radio" name="radio-btn" id="ra4"/>
        <input type="radio" name="radio-btn" id="ra5"/>
        <input type="radio" name="radio-btn" id="ra6"/>
    
        <div class="slide first">
          <img src={ag101} alt=""/>
        </div>
        <div class="slide">
          <img src={ag102} alt=""/>
        </div>
        <div class="slide">
          <img src={ag103} alt=""/>
        </div>
        <div class="slide">
          <img src={ag104} alt=""/>
        </div>
        <div class="slide">
          <img src={ag105} alt=""/>
        </div>
        <div class="slide">
          <img src={ag106} alt=""/>
        </div>

      </div>

      <div class="navigation-manual">
        <label for="ra1" class="manual-btn"></label>
        <label for="ra2" class="manual-btn"></label>
        <label for="ra3" class="manual-btn"></label>
        <label for="ra4" class="manual-btn"></label>
        <label for="ra5" class="manual-btn"></label>
        <label for="ra6" class="manual-btn"></label>
      </div>
     
    </div>  

  </div>

  );
};

export default ImgScroll;
