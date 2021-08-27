import classes from './Source.module.css';
import logoImg from '../../assets/logo.png'
const Source = (props) => {
    return <div className = { classes.srCnt } >

        <
        div className = { classes.logo } > < img src = { logoImg }
    alt = "logo" / > < /div>         <
        ul className = { classes.ftln } >
        <
        li > < a href = "/" > Services < /a></li >
        <
        li > < a href = "/" > Industry < /a></li >
        <
        li > < a href = "/" > About < /a></li >
        <
        li > < a href = "/" > Contact Us < /a></li >
        <
        /ul> <
        p > 2021 traceable.io < /p> <
        /div>
}

export default Source;