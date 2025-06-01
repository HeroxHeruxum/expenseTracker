import { ReactElement } from "react";
import styles from "./HeaderStyles.module.css"
import BurgerButton from "./BurgerButton";
import Collapsible from "../Collapsible";


const Header = (): ReactElement => {
    return (
        <div className={styles.header}>
            <BurgerButton />
        </div>
    );
}
export default Header;