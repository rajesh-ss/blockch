import classes from './ServicesComp.module.css';



const ServicesComp = (props) => {

    return ( <
        div className = { classes.cnt } >
        <
        img src = { props.imgicn }
        alt = "loading" / >
        <
        h4 > { props.hd } < /h4> <
        p > { props.det } < /p> <
        /div>
    )
}

export default ServicesComp;