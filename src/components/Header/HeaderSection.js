import classes from './HeaderSection.module.css';
// import logo from './logo.svg';
import mic from '../../asset/mic.png';
import mail from '../../asset/email.png';
const HeaderSection=()=>{
    return(
        <div className={classes.sections}>
            <img src={mail} className={classes.logo}/>
            <h2>Coffee?.</h2>
            <p>Mail from Marisa Lu</p>
            <img src={mic} className={classes.icon}/>
        </div>
    );
};
export default HeaderSection;