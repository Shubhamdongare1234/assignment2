import classes from './FooterSection.module.css';
const FooterSection=()=>{
    return(
        <div className={classes.section}>
            <div className={classes.buttonSection}>
                <button>Reply</button>
                <button>Forward</button>
                <button>Delete</button>

            </div>
            <p>more actions</p>

        </div>
    )
}
export default FooterSection;