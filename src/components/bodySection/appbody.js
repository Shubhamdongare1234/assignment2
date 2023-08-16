import FooterSection from '../FooterSection/FooterSection';
import HeaderSection from '../Header/HeaderSection';
import BodySection from '../MiddleSection/BodySection';
import classes from './appbody.module.css';

const AppBody=()=>{
    return(
        <div className={classes.sections}>
            <HeaderSection></HeaderSection>
            <BodySection></BodySection>
            <FooterSection></FooterSection>
        </div>
    );
};
export default AppBody;