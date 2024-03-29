import React from "react";

type ButtonProps = React.ComponentProps<"button">

const Button = ({children, ...props}: ButtonProps) =>{
    return(
        <button {...props}>{children}</button>
    )
}


export default Button