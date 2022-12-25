import ImgScrollDairy from "./ImgScrollDairy";
import IndustryTextComp from "./UI/IndustryTextComp";
import IndustryContainer from "./UI/IndustryContainer";
import classes from './IndustryDairy.module.css';

const IndustryDairy = (props) => {
  return (
    <IndustryContainer className={classes.changeimgFirst}>
       
      <IndustryTextComp
        hed="Dairy"
        hedDes="Blockchain technology can ensure reliable tracking of every single batch in milk chain"
        plc="Speak with our expert team"
        btnDet="Schedule a call"
      />
     <ImgScrollDairy className={props.className}/>
    </IndustryContainer>
  );
};

export default IndustryDairy;
