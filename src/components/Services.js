import classes from './Services.module.css';
import mobVw from '../assets/mobVw.png';
import ServicesComp from './UI/ServicesComp';
import tmIcn from '../assets/Icon-Squares.png'
import drpIcn from '../assets/Icon-Bright.png';
import recIcn from '../assets/Icon-Contrast.png';
import crlIcn from '../assets/Icon-Signal.png';

const Services = (props) => {

    const demo = classes.contWid + ' ' + classes.outerCont;
    return (

        <
        div className = { classes.outerCont } >
        <
        img src = { mobVw }
        alt = 'imgMobVw' / >
        <
        div className = { demo } >
        <
        div className = { classes.insd } >
        <
        ServicesComp imgicn = { tmIcn }
        hd = 'Publish your journey'
        det = 'Share the entire products journey with consumers for them to take data driven decision' >
        < /ServicesComp> <
        ServicesComp imgicn = { drpIcn }
        hd = 'supply chain management'
        det = 'Identify and analyse suppliers across tiers to ensure sustainability standards are met,managed and enhanced' >
        < /ServicesComp> <
        /div> <
        div className = { classes.insd } >
        <
        ServicesComp imgicn = { recIcn }
        hd = 'Badges and certifications'
        det = 'They are like "virtual stickers" that are added to online products to call attention to special information about a product' >
        < /ServicesComp> <
        ServicesComp imgicn = { crlIcn }
        hd = 'Blockchain traceability certifications'
        det = 'Get foolproof verification of your data on a highly secured,reliable and stable Blockchain' >
        < /ServicesComp> <
        /div> <
        /div> <
        /div>
    );
}

export default Services;