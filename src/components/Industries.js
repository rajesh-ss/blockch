import { Fragment } from 'react';
import classes from './Industries.module.css';
import IndustryAg from './IndustryAg';
import IndustryBeauty from './IndustryBeauty';
import IndustryDairy from './IndustryDairy';
import IndustryFas from './IndustryFas';
import agriIcon from '../assets/agri.png';
import fashionIcon from '../assets/fashion.png';
import dairyIcon from '../assets/dairy.png';
import makeupIcon from '../assets/makeup.png';
import { useState } from 'react';


const Industries = (props) =>{

  const [selectedOption, setOption] = useState('dairy');
  let btnPressedStyle = {
    'width':'5.875rem',
    'height':'5.875rem',
    'box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  };

  let defaultStyle = {
    'height': '4.625rem',
   ' width': '4.625rem',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'cursor': 'pointer',
    'background-color':'#FFF',
    
  }

  const changeToDairy = () =>{
    setOption('dairy');
  }
  const changeToAgri = () =>{
      setOption('agri');  
  }
  const changeToFashion = () =>{
      setOption('fashion'); 
  }
  const changeToMakeup = () =>{
      setOption('makeup');
  }



      
    return(
      <Fragment>
        <h1 className="ind"> Industries </h1> 
        <div className={classes.mobileDis}>
        <div className={classes.gridIcon}>
        <div 
        onClick={changeToDairy} 
        style={selectedOption=== 'dairy' ? btnPressedStyle: defaultStyle}
        >
        <img src={dairyIcon} alt=''></img></div>

        <div onClick={changeToMakeup}
          style={selectedOption=== 'makeup' ? btnPressedStyle: defaultStyle}
        >
        <img src={makeupIcon} alt=''></img></div>

        <div onClick={changeToFashion}
          style={selectedOption=== 'fashion' ? btnPressedStyle: defaultStyle}
        ><img src={fashionIcon} alt=''></img></div>

        <div onClick={changeToAgri}
        style={selectedOption=== 'agri' ? btnPressedStyle: defaultStyle}
        ><img src={agriIcon} alt=''></img></div>
        </div>
        {selectedOption === 'dairy' ? <IndustryDairy /> : 
        selectedOption === 'agri' ?   <IndustryAg />  :
        selectedOption === 'fashion' ?  <IndustryFas />:
        selectedOption === 'makeup' ? <IndustryBeauty />:
        <Fragment></Fragment>
        }
       
        </div>
        
      <div className={classes.cmm}>
      <IndustryDairy />
      <IndustryBeauty />
      <IndustryFas />
      <IndustryAg />
      </div >
      </Fragment>
      )
}

export default Industries;