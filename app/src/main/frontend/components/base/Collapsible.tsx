import React from "react";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import classes from "./Collapsible.module.css"

type CollapsibleProps = {
    readonly open: boolean;
};
//toDo add tests
const mapChildToCollapsibleEntry = (child: ReactNode | undefined): ReactElement | null | (ReactElement | null)[] => {
    if (child && Array.isArray(child)) {
        return child.flatMap((childElement) => mapChildToCollapsibleEntry(childElement));
    }
    if (child && React.isValidElement(child)) {
        return <div className={classes.collapsible_child}>
            {child}
        </div>
    } else {
        return null;
    }
}


const Collapsible = (props: PropsWithChildren<CollapsibleProps>): ReactElement | null | (ReactElement | null)[] => {
    return props.open ?
        <div className={classes.container}>
            {mapChildToCollapsibleEntry(props.children)}
        </div> : []
}


export default Collapsible;