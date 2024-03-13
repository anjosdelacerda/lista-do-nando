import { v4 as uuid } from "uuid";
import Form from "../../Form";
import Input from "../../Input";
import Button from "../../Button";
import { ActivityType } from "../../../types/activity.type";
import { FormEvent } from "react";

type RegisterActivityFormProps = {
    setList: (arr:ActivityType[]) => void
}

const RegisterActivityForm = ({setList}: RegisterActivityFormProps) => {

    const registerActivity = (data: ActivityType) => {
       const localList = localStorage.getItem("listActivities")
       let listActivities: ActivityType[] = []
       if(localList){
        listActivities = listActivities.concat(JSON.parse(localList))
       }
       listActivities.push(data)
       setList(listActivities)
       localStorage.setItem("listActivities", JSON.stringify(listActivities))
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const loggedUser = localStorage.getItem("loggedUser")
        let user
        if(!loggedUser){
            alert("para criar atividades é necessário fazer o login")
        }else{
            user = JSON.parse(loggedUser)
        }

        const formData = new FormData(e.currentTarget)

        const values : {[key: string] : string} = {}

        formData.forEach((value, key)=>{
            values[key] = value.toString()
        })

        const newActivity: ActivityType = {
            id: uuid(),
            activity: values.activity,
            status: false,
            date: new Date(values.dataConclusao),
            ownerId: user.id
        }

        registerActivity(newActivity)
    }

    return(
        <Form onSubmit={submitHandler}>
            <Input type="text" name="activity" placeholder="tarefa" required />
            <Input type="date" name="dataConclusao" placeholder="data de conclusão" required />
            <Button type="submit">REGISTER</Button>
        </Form>
    )
}

export default RegisterActivityForm