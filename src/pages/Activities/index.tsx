import RegisterActivityForm from "../../components/patterns/RegisterActivityForm"
import { useState, useEffect } from "react"
import { ActivityType } from "../../types/activity.type"
import ActivitiesList from "../../components/patterns/ActivitiesList"


const Activities = () =>{
    const [list, setList] = useState<ActivityType[]>([])
    // const localList = localStorage.getItem("listActivities")
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // const listActivities: ActivityType[] = localList? JSON.parse(localStorage.getItem("listActivities")|| "") : []
    
    useEffect(()=>{
        const localList = localStorage.getItem("listActivities")
        let listActivities: ActivityType[] = []
        if(localList){
            listActivities = listActivities.concat(JSON.parse(localList))
            setList(listActivities)
        }
        
    },[])

    return(
        <div className="activities">
        <RegisterActivityForm setList={setList} />
         <ActivitiesList list={list} />
        </div>
    )
}

export default Activities