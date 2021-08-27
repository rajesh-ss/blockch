import classes from './Subs.module.css';
import Button from '../UI/Button';
import PlaceHolder from '../UI/PlaceHolder';

const Subs = (props) => {
    return <div className = { classes.subCnt } >
        <
        p > Subscribe to receive our best posts once a month < /p> <
        div className = { classes.subsInf } >
        <
        PlaceHolder / >
        <
        Button className = { classes.sbsBtn } > Subscribe < /Button> <
        /div>            <
        /div>
}

export default Subs;