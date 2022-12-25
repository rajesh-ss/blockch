import cow101 from '../assets/cow101.png';
import cow102 from '../assets/cow102.png';
import cow103 from '../assets/cow103.png';
import cow104 from '../assets/cow104.png';
import cow105 from '../assets/cow105.png';
import cow106 from '../assets/cow106.png';
import classes from "./ImgScrollDairy.module.css";
import { useState } from 'react';

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
    
      <input type="radio" name="radio-btn" id={classes.raC1} checked={count===1}/>
      <input type="radio" name="radio-btn" id={classes.raC2} checked={count===2}/>
      <input type="radio" name="radio-btn" id={classes.raC3} checked={count===3}/>
      <input type="radio" name="radio-btn" id={classes.raC4} checked={count===4}/>
      <input type="radio" name="radio-btn" id={classes.raC5} checked={count===5}/>
      <input type="radio" name="radio-btn" id={classes.raC6} checked={count===6}/>
  
      <div class={classes.slide + ' '+  classes.first}>
        <img src={cow101} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={cow102} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={cow103} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={cow104} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={cow105} alt=""/>
      </div>
      <div class={classes.slide}>
        <img src={cow106} alt=""/>
      </div>

    </div>
    <div class={classes.navigation_manual}>
      <label for={classes.raC1} class={classes.manual_btn} onClick={setOne} style={styleOne}></label>
      <label for={classes.raC2} class={classes.manual_btn} onClick={setTwo}  style={styleTwo}></label>
      <label for={classes.raC3} class={classes.manual_btn} onClick={setThree} style={styleThree}></label>
      <label for={classes.raC4} class={classes.manual_btn} onClick={setFour} style={styleFour}></label>
      <label for={classes.raC5} class={classes.manual_btn} onClick={setFive} style={styleFive}></label>
      <label for={classes.raC6} class={classes.manual_btn} onClick={setSix} style={styleSix}></label>
     
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
