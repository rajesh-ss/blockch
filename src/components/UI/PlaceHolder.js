import classes from './PlaceHolder.module.css';

const PlaceHolder = (props)=>{

    const cls = classes.plcHdr + ' ' + props.className ;
    return(
           <input type='text' className={cls} placeholder={props.plc}/>
    )
}

export default PlaceHolder;