import ImgScrollAg from './ImageScrollAg';
import IndustryTextComp from './UI/IndustryTextComp';
import IndustryContainer from './UI/IndustryContainer';

const IndustryAg = (props) =>{

    return(
        <IndustryContainer>
            <ImgScrollAg/>
            <IndustryTextComp 
            hed='Agriculture' 
            hedDes='Making Ethical and Sustainable claims you can trust'
            plc='Speak with our expert team'
            btnDet='Schedule a call'
            />
            
            </IndustryContainer>
    );  
}

export default IndustryAg;