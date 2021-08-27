import fas101 from '../assets/fas101.png';
import fas102 from '../assets/fas102.png';
import fas103 from '../assets/fas103.png';
import fas104 from '../assets/fas104.png';
import fas105 from '../assets/fas105.png';
import fas106 from '../assets/fas106.png';
import "./ImageScrollFas.css";

const ImgScrollFas = (props) => {
  return (
  <div className='container'>
      <div class="slider">
      <div class="slides">
      
        <input type="radio" name="radio-btn" id="rf1"/>
        <input type="radio" name="radio-btn" id="rf2"/>
        <input type="radio" name="radio-btn" id="rf3"/>
        <input type="radio" name="radio-btn" id="rf4"/>
        <input type="radio" name="radio-btn" id="rf5"/>
        <input type="radio" name="radio-btn" id="rf6"/>
    
        <div class="slide first">
          <img src={fas101} alt=""/>
        </div>
        <div class="slide">
          <img src={fas102} alt=""/>
        </div>
        <div class="slide">
          <img src={fas103} alt=""/>
        </div>
        <div class="slide">
          <img src={fas104} alt=""/>
        </div>
        <div class="slide">
          <img src={fas105} alt=""/>
        </div>
        <div class="slide">
          <img src={fas106} alt=""/>
        </div>

      </div>

      <div class="navigation-manual">
        <label for="rf1" class="manual-btn"></label>
        <label for="rf2" class="manual-btn"></label>
        <label for="rf3" class="manual-btn"></label>
        <label for="rf4" class="manual-btn"></label>
        <label for="rf5" class="manual-btn"></label>
        <label for="rf6" class="manual-btn"></label>
      </div>
     
    </div>  

  </div>

  );
};

export default ImgScrollFas;
