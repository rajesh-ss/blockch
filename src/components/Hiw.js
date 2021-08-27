import classes from './Hiw.module.css';
import HwCmp from './UI/HwCmp';
import img1 from '../assets/Layer_5.png';
import img2 from '../assets/Layer_2.png';
import img3 from '../assets/Layer_7.png';
import img4 from '../assets/Layer_3.png';
import img5 from '../assets/Layer_4.png';
import img6 from '../assets/Layer_1.png';
import img7 from '../assets/Layer_6.png';

const Hiw = (props) =>{

    return(
        <div className={classes.hwcnt}>
            <HwCmp 
            imgIcn={img1} 
            hwt='Complex Supply Chains' 
            hwd='Production journeys, 
            especially when not limited to local resources, 
            can lead to very complex supply chains with information gaps'/>
           <HwCmp 
            imgIcn={img2} 
            hwt='No Data-based Sustainability Proof' 
            hwd='Sustainability often falls victim to
             greenWasting. A lot of brands do not resort 
             to proper certification to verify their product/service claims'/>
             <HwCmp 
            imgIcn={img3} 
            hwt='Brand-facing Products' 
            hwd='Manufacturing focus on building 
            impressive product pitches for brands 
            but in the process the authentic journey
            often gets lost '/>

            <HwCmp 
            imgIcn={img4} 
            hwt='No Trusted Verification Method' 
            hwd='There is no footproof, 
            trusted verification method in the market that 
            justifies business claims with complete transparency'/>

            <HwCmp 
            imgIcn={img5} 
            hwt='Lack of Audience Awareness' 
            hwd='The conscious-buying audience is still an evolving 
            race which is adapting itself to the new global lingo of
            better oriduct journeyw'/>  

            <HwCmp 
            imgIcn={img6} 
            hwt='No Plug-And_Play solution' 
            hwd='There is no plug and play solution 
            that tackles all logistic and journey impact challenges 
            through a unified seamless channel of communication'/>   

            <HwCmp 
            imgIcn={img7} 
            hwt='No Foolproof Sustainability Rating' 
            hwd='Most Sustainable ratings assess only
             selected parts of the product journey 
             instead of the details scenario, where the devil lies'/>     
        </div>
    );
}

export default Hiw;