import classes from './BodySection.module.css';
const BodySection=()=>{
    return(
        <div className={classes.section}>
            <div className={classes.smallSection}>
                <h3>Marisa Lu</h3>
                <p>just now</p>
            </div>
            <h2>Coffee?.</h2>
            <p>Hey Jason,</p>
            <p>Was wondering id you'd be interested in meeting my team at
                Philz Coffee at 11 AM today. No pressure if you can't make it,
                although I think you guys would really get along! 
            </p>
            <p>Marisa</p>
        </div>
    )
}
export default BodySection;