import Button from "../Button";
import classes from "./BurgerButton.module.css"
const BurgerButton = () => {
    return (
        <Button
            className={classes.button+' '+classes.ripple}
            onClick={() => console.error('click')}
        >
            <span className={"material-icons"}>menu</span>
        </Button>
    );
}
export default BurgerButton;