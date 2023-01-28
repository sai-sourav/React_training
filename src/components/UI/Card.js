import "./Card.css";

const card = (props) => {
    const classes = 'Card ' + props.className;
    return(<div className={classes}>{props.children}</div>);
}

export default card;

