import { useState } from 'react';
import ag101 from '../assets/ag101.png';
import ag102 from '../assets/ag102.png';
import ag103 from '../assets/ag103.png';
import ag104 from '../assets/ag104.png';
import ag105 from '../assets/ag105.png';
import ag106 from '../assets/ag106.png';
import classes from "./ImageScrollAg.module.css";

const ImgScroll = (props) => {

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
      
        <input type="radio" name="radio-btn" id={classes.raAg1} checked={count===1}/>
        <input type="radio" name="radio-btn" id={classes.raAg2} checked={count===2}/>
        <input type="radio" name="radio-btn" id={classes.raAg3} checked={count===3}/>
        <input type="radio" name="radio-btn" id={classes.raAg4} checked={count===4}/>
        <input type="radio" name="radio-btn" id={classes.raAg5} checked={count===5}/>
        <input type="radio" name="radio-btn" id={classes.raAg6} checked={count===6}/>
    
        <div class={classes.slide + ' '+ classes.first}>
          <img src={ag101} alt=""/>
        </div>
        <div class={classes.slide}>
          <img src={ag102} alt=""/>
        </div>
        <div class={classes.slide}>
          <img src={ag103} alt=""/>
        </div>
        <div class={classes.slide}>
          <img src={ag104} alt=""/>
        </div>
        <div class={classes.slide}>
          <img src={ag105} alt=""/>
        </div>
        <div class={classes.slide}>
          <img src={ag106} alt=""/>
        </div>

      </div>

      <div class={classes.navigation_manual}>
        <label for={classes.raAg1} class={classes.manual_btn} onClick={setOne} style={styleOne}></label>
        <label for={classes.raAg2} class={classes.manual_btn} onClick={setTwo}  style={styleTwo}></label>
        <label for={classes.raAg3} class={classes.manual_btn} onClick={setThree} style={styleThree}></label>
        <label for={classes.raAg4} class={classes.manual_btn} onClick={setFour} style={styleFour}></label>
        <label for={classes.raAg5} class={classes.manual_btn} onClick={setFive} style={styleFive}></label>
        <label for={classes.raAg6} class={classes.manual_btn} onClick={setSix} style={styleSix}></label>
       
      </div>
      <div class={classes.scrollbtn}>
      <div onClick={leftClick}>&#10094;</div>
      <div onClick={rightClick}>&#10095;</div>
      </div>

    </div>  

  </div>

  );
};

export default ImgScroll;
