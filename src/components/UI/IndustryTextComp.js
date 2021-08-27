import classes from './IndustryTextComp.module.css';
import Button from './Button';
import PlaceHolder from './PlaceHolder';


const IndustryTextComp = (props) => {

    return ( <
        div className = { classes.container } >
        <
        div className = { classes.conMid } >
        <
        p > { props.hed } < /p> <
        h1 > { props.hedDes } < /h1> <
        form >
        <
        PlaceHolder className = { classes.plce }
        plc = { props.plc } > < /PlaceHolder> <
        Button className = { classes.btn } > { props.btnDet } < /Button> <
        /form> <
        /div> <
        /div>
    )
}

export default IndustryTextComp;