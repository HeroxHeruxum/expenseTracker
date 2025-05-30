import { CSSProperties, ReactElement } from "react"

type ButtonProps = {
    readonly onClick: () => void;
    readonly className?: string;
    readonly style?: CSSProperties;
}

const Button = (props: React.PropsWithChildren<ButtonProps>): ReactElement => {
    return (
        <button
            style={props.style}
            className={props.className}
            onClick={() => props.onClick()}
        >
            {props.children}
        </button>
    );
}
export default Button;