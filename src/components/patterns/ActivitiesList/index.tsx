import React from "react";
import { ActivityType } from "../../../types/activity.type";
import Activity from "../Acctivy";


type ListProps = React.ComponentProps<"ul"> & {
    list:ActivityType[]
    
}

const ActivitiesList = ({list, ...props}:ListProps) =>{

    return(
        <ul {...props}>
            {
                list && list.length > 0? list.map((activity)=>(
                    <Activity 
                    id={activity.id}
                    status={activity.status}
                    date={activity.date}
                    activity={activity.activity}
                    ownerId={activity.ownerId} />
                )) : <li>Não há atividades registradas</li>
            }
        </ul>
    )
}

export default ActivitiesList