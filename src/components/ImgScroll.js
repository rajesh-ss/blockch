import cow101 from '../assets/cow101.png';
import cow102 from '../assets/cow102.png';
import cow103 from '../assets/cow103.png';
import cow104 from '../assets/cow104.png';
import cow105 from '../assets/cow105.png';
import cow106 from '../assets/cow106.png';
import "./ImageScroll.css";

const ImgScroll = (props) => {
  return (
  <div className='container'>
      <div class="slider">
      <div class="slides">
      
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
        <input type="radio" name="radio-btn" id="radio5"/>
        <input type="radio" name="radio-btn" id="radio6"/>
    
        <div class="slide first">
          <img src={cow101} alt=""/>
        </div>
        <div class="slide">
          <img src={cow102} alt=""/>
        </div>
        <div class="slide">
          <img src={cow103} alt=""/>
        </div>
        <div class="slide">
          <img src={cow104} alt=""/>
        </div>
        <div class="slide">
          <img src={cow105} alt=""/>
        </div>
        <div class="slide">
          <img src={cow106} alt=""/>
        </div>

      </div>

      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
        <label for="radio5" class="manual-btn"></label>
        <label for="radio6" class="manual-btn"></label>
      </div>
     
    </div>  

  </div>

  );
};

export default ImgScroll;
