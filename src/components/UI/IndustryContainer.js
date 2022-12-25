import classes from './IndustryContainer.module.css';

const IndustryContainer = (props) =>{

    return(<div className={classes.container+ ' ' +props.className  }>
{props.children}
    </div>)
}

export default IndustryContainer;