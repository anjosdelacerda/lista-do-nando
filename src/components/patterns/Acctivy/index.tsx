import React from "react";
import { ActivityType } from "../../../types/activity.type";
import moment from "moment";

type ActivityProps = React.ComponentProps<"li"> & ActivityType 
const Activity = ({id, ownerId, activity, status, date, ...props}: ActivityProps) =>{

    return(
        <li {...props} key={id} id={ownerId} >
            <h3>{activity}</h3>
            <div className="activity__details">
                <span>{moment(date).format("D-MMM-YY")}</span>
                <span>{status === false? "!" : "&radic;"}</span>
            </div>
        </li>
    )
}

export default Activity