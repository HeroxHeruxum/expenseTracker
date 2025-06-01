import { useState } from "react";
import Button from "../Button";
import Collapsible from "../Collapsible";
import classes from "./BurgerButton.module.css"
const BurgerButton = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div>
            <Button
                className={classes.button + ' ' + classes.ripple}
                onClick={() => setOpen(!open)}
            >
                <span className={"material-icons"}>menu</span>
            </Button>
            <Collapsible open={open} >
                <a href="#test">Test</a>
                <a href="#test2">Test2</a>
                <a href="#test3">Test3</a>
                <a href="#test4">Test4</a>
                <a href="#test5">Test5</a>
            </Collapsible>
        </div>
    );
}
export default BurgerButton;