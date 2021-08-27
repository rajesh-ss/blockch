import classes from './Jorney.module.css';
import imgJr from '../assets/jrImg.png'
import Button from './UI/Button';

const Jorney = (props) => {

    return ( <
        div className = { classes.jrnCnt } >
        <
        div className = { classes.jrLf } >
        <
        h1 > Your Journey Retold < br / > With Transparency Via Digitally Verified Supply Chain Tracing < /h1>  <
        Button className = { classes.btn } > Schedule a call < /Button> <
        /div> <
        img alt = "loading"
        src = { imgJr }
        /> <
        /div>
    )
}

export default Jorney;