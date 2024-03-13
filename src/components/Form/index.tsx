type FormProps = React.ComponentProps<"form"> 


const Form = ({children, ...props}: FormProps) => {

    return(
        <form {...props}>{children}</form>
    )
}

export default Form