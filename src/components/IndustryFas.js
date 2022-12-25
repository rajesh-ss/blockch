
import ImgScrollFas from './ImageScrollFas';
import IndustryTextComp from './UI/IndustryTextComp';
import IndustryContainer from './UI/IndustryContainer';
import classes from './IndustryFas.module.css';

const IndustryFas = (props) =>{

    return(
        <IndustryContainer className={classes.changeimgFirst}>
            <IndustryTextComp 
            hed='Fashion' 
            hedDes='Making Ethical and Sustainable claims you can trust'
            plc='Speak with our expert team'
            btnDet='Schedule a call'
            />
            <ImgScrollFas/>
            </IndustryContainer>
    );
}

export default IndustryFas;