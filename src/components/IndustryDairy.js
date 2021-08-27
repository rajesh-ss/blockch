import ImgScroll from './ImgScroll';
import IndustryTextComp from './UI/IndustryTextComp';
import IndustryContainer from './UI/IndustryContainer';

const IndustryDairy = (props) => {

    return ( <
        IndustryContainer >
        <
        IndustryTextComp hed = 'Dairy'
        hedDes = 'Blockchain technology can ensure reliable tracking of every single batch in milk chain'
        plc = 'Speak with our expert team'
        btnDet = 'Schedule a call' /
        >
        <
        ImgScroll / >
        <
        /IndustryContainer>
    );
}

export default IndustryDairy;