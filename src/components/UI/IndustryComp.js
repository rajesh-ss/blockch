import classes from './IndustryComp.module.css'
import ImgScroll from '../ImgScroll';
import IndustryTextComp from './IndustryTextComp';
import IndustryContainer from './IndustryContainer';

const IndustryComp = (props) =>{

    return(
        <IndustryContainer>
            <IndustryTextComp 
            hed='Dairy' 
            hedDes='Making Ethical and Susteinable claims you can trust'
            plc='Speak with our expert team'
            btnDet='Schedule a call'
            />
            <ImgScroll></ImgScroll>
            </IndustryContainer>
    )
}

export default IndustryComp;