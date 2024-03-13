import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { UserType } from "../../types/user.type"
import { FormEvent } from "react"
import { v4 as uuid } from "uuid"
import findUser from "../../utils/findUser"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const registerUser = (user: UserType) =>{
        const localList = localStorage.getItem("listUser")
        let listUser: UserType[] = []
        if(localList){
            listUser = listUser.concat(JSON.parse(localList))
        }
        listUser.push(user)
        localStorage.setItem("listUser", JSON.stringify(listUser))
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const values: {[key: string]:string} = {}

        formData.forEach((value,key)=>{
            values[key] = value.toString()
        })

        const emailAlreadyExists = findUser(values.email)

        if(!emailAlreadyExists){
            const data: UserType = {
                id: uuid(),
                name: values.name,
                email: values.email,
                dataNascimento: new Date(values.dataNascimento),
                password: values.password
            }
            registerUser(data)
            alert(`Parabéns ${data.name}, você foi cadastrado com sucesso e já pode efetuar o login`)
            navigate("/login")
        }else{
            alert(`O e-mail ${emailAlreadyExists.email} já esta cadastrado no nosso banco`)
        }
    }

    return(
        <div className="register">
            <Form className="register__form" onSubmit={submitHandler}>
                <Input className="register__form__input" type="text" name="name" placeholder="nome" required />
                <Input className="register__form__input" type="email" name="email" placeholder="e-mail" required />
                <Input className="register__form__input" type="date" name="dataNascimento" placeholder="data de nascimento" required />
                <Input className="register__form__input" type="password" name="password" placeholder="senha" required />
                <Button className="register__form__button" type="submit">Register </Button>
            </Form>
        </div>
    )
}

export default Register