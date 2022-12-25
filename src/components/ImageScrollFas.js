import fas101 from '../assets/fas101.png';
import fas102 from '../assets/fas102.png';
import fas103 from '../assets/fas103.png';
import fas104 from '../assets/fas104.png';
import fas105 from '../assets/fas105.png';
import fas106 from '../assets/fas106.png';
import classes from "./ImageScrollFas.module.css";
import { useState } from 'react';

const ImgScrollFas = (props) => {

  const [count, setCount] = useState(1);
  let styleOne = {" border": "2px solid #fff",
    "padding":" 5px",
   " border-radius": "10px",
    "cursor":" pointer",
    "transition": "1s",}
    let styleTwo = {" border": "2px solid #fff",
    "padding":" 5px",
   " border-radius": "10px",
    "cursor":" pointer",
    "transition": "1s",}
    let styleThree = {" border": "2px solid #fff",
    "padding":" 5px",
   " border-radius": "10px",
    "cursor":" pointer",
    "transition": "1s",}
    let styleFour = {" border": "2px solid #fff",
    "padding":" 5px",
   " border-radius": "10px",
    "cursor":" pointer",
    "transition": "1s",}
    let styleFive = {" border": "2px solid #fff",
    "padding":" 5px",
   " border-radius": "10px",
    "cursor":" pointer",
    "transition": "1s",}
    let styleSix = {" border": "2px solid #fff",
    "padding":" 5px",
   " border-radius": "10px",
    "cursor":" pointer",
    "transition": "1s",}

  const rightClick = (event)=>{
    setCount((prevState)=>{
        if(prevState===6){
          return 1;
        }
        else{
          return prevState+1;
        }
    })
  }

  const leftClick = (event) =>{
    setCount((prevState)=>{
      if(prevState=== 1){
        return 6
      }
      else{
        return prevState-1;
      }
    })
  }

  const setOne = ()=>{
    setCount(1);
  }
  const setTwo = ()=>{
    setCount(2);
  }
  const setThree = ()=>{
    setCount(3);
  }
  const setFour = ()=>{
    setCount(4);
  }
  const setFive = ()=>{
    setCount(5);
  }
  const setSix = ()=>{
    setCount(6);
  }
 
  if(count===1){
    styleOne = {
      ...styleOne,
      "opacity":" 0.8",
      "background":" #fff",
    }
  }
  
  else if(count==2){
    styleTwo = {
      ...styleTwo,
      "opacity":" 0.8",
      "background":" #fff",
    }
  }

  else if(count==3){
    styleThree = {
      ...styleThree,
      "opacity":" 0.8",
      "background":" #fff",
    }
  }
  else if(count==4){
    styleFour = {
      ...styleFour,
      "opacity":" .8",
      "background":" #fff",
    }
  }
  
  else if(count==5){
    styleFive = {
      ...styleFive,
      "opacity":" 0.8",
      "background":" #fff",
    }
    }

    else if(count===6){
      styleSix = {
        ...styleSix,
        "opacity":" 0.8",
        "background":" #fff",
      }
    }
  

  return (
    <div className={classes.container}>
    <div class={classes.slider}>
    <div class={classes.slides}>
    
      <input type="radio" name="radio-btn" id={classes.raF1} checked={count===1}/>
      <input type="radio" name="radio-btn" id={classes.raF2} checked={count===2}/>
      <input type="radio" name="radio-btn" id={classes.raF3} checked={count===3}/>
      <input type="radio" name="radio-btn" id={classes.raF4} checked={count===4}/>
      <input type="radio" name="radio-btn" id={classes.raF5} checked={count===5}/>
      <input type="radio" name="radio-btn" id={classes.raF6} checked={count===6}/>
  
      <div class={classes.slide + ' '+  classes.first}>
        <img src={fas101} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={fas102} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={fas103} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={fas104} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={fas105} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={fas106} alt=""/>
      </div>

    </div>
    <div class={classes.navigation_manual}>
      <label for={classes.raF1} class={classes.manual_btn} onClick={setOne} style={styleOne}></label>
      <label for={classes.raF2} class={classes.manual_btn} onClick={setTwo}  style={styleTwo}></label>
      <label for={classes.raF3} class={classes.manual_btn} onClick={setThree} style={styleThree}></label>
      <label for={classes.raF4} class={classes.manual_btn} onClick={setFour} style={styleFour}></label>
      <label for={classes.raF5} class={classes.manual_btn} onClick={setFive} style={styleFive}></label>
      <label for={classes.raF6} class={classes.manual_btn} onClick={setSix} style={styleSix}></label>
     
    </div>
    <div class={classes.scrollbtn}>
    <div onClick={leftClick}>&#10094;</div>
    <div onClick={rightClick}>&#10095;</div>
    </div>
   
  </div>  

</div>


  );
};

export default ImgScrollFas;
