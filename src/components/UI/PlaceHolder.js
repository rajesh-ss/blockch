import classes from './PlaceHolder.module.css';

const PlaceHolder = (props)=>{

    const cls = props.className +' '+ classes.plcHdr;
    return(
           <input type='text' className={cls} placeholder={props.plc}/>
    )
}

export default PlaceHolder;