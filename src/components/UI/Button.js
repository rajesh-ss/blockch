import classes from './Button.module.css';

const Button = props=>{
    
    const addCssProperty =  classes.button +' ' +props.className;
    return <button className={addCssProperty }>
        {props.children}
    </button>
}

export default Button;