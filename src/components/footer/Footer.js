import classes from './Footer.module.css';
import DefPtr from './DefPtr';
import Source from './Source';

const Footer = (props) =>{

    return(
    <div className={classes.ftrCont}>
        <DefPtr/>
        <Source/>
    </div>
    )
}

export default Footer;