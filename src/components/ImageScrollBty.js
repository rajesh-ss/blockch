import beauty101 from '../assets/beauty101.png';
import beauty102 from '../assets/beauty102.png';
import beauty103 from '../assets/beauty103.png';
import beauty104 from '../assets/beauty104.png';
import beauty105 from '../assets/beauty105.png';
import beauty106 from '../assets/beauty106.png';
import "./ImageScrollBty.css";

const ImgScroll = (props) => {
  return (
  <div className='container'>
      <div class="slider">
      <div class="slides">
      
        <input type="radio" name="radio-btn" id="rb1"/>
        <input type="radio" name="radio-btn" id="rb2"/>
        <input type="radio" name="radio-btn" id="rb3"/>
        <input type="radio" name="radio-btn" id="rb4"/>
        <input type="radio" name="radio-btn" id="rb5"/>
        <input type="radio" name="radio-btn" id="rb6"/>
    
        <div class="slide first">
          <img src={beauty101} alt=""/>
        </div>
        <div class="slide">
          <img src={beauty102} alt=""/>
        </div>
        <div class="slide">
          <img src={beauty103} alt=""/>
        </div>
        <div class="slide">
          <img src={beauty104} alt=""/>
        </div>
        <div class="slide">
          <img src={beauty105} alt=""/>
        </div>
        <div class="slide">
          <img src={beauty106} alt=""/>
        </div>

      </div>

      <div class="navigation-manual">
        <label for="rb1" class="manual-btn"></label>
        <label for="rb2" class="manual-btn"></label>
        <label for="rb3" class="manual-btn"></label>
        <label for="rb4" class="manual-btn"></label>
        <label for="rb5" class="manual-btn"></label>
        <label for="rb6" class="manual-btn"></label>
      </div>
     
    </div>  

  </div>

  );
};

export default ImgScroll;
