import classes from './HwCmp.module.css';

const HwCmp = (props) => {

    return ( <
        div className = { classes.hwCnt } >
        <
        img src = { props.imgIcn }
        alt = "loading" / >
        <
        h4 > { props.hwt } < /h4> <
        p > { props.hwd } < /p> <
        /div>
    );
}

export default HwCmp;