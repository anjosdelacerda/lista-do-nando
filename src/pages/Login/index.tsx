import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormEvent } from "react";
import findUser from "../../utils/findUser";
import comparePassword from "../../utils/comparePassword";
import { UserLoginType, UserType } from "../../types/user.type";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate()
    const submitHandler = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const values: {[key: string]: string} = {}

        formData.forEach((value, key)=>{
            values[key] = value.toString()
        })

        const data: UserLoginType = {
            email: values.email,
            password: values.password
        }

        const user: UserType = findUser(data.email)

        if(!user){
            alert('E-mail ou senha estão incorretos')
        }

        const correctPassword = comparePassword(data, user)

        if(!correctPassword){
            alert('E-mail ou senha estão incorretos')
        }else{
            localStorage.setItem("loggedUser", JSON.stringify(user))
            navigate("/activities")
        }
    }

    return (
        <div className="login">
            <Form className="login__form" onSubmit={submitHandler}>
                <Input className="login__form__input" name="email" type="eamil" placeholder="e-mail" required />
                <Input className="login__form__input" name="password" type="password" placeholder="senha" required />
                <Button className="login__form__button" type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login