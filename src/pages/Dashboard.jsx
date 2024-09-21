import Calender from "./Calender";
import Weather from "./Weather";
import News from "./News";
import TaskManager from "./TaskManager";
import "./Dashboard.css"

const Dashboard=()=>{
    return(
        <div>
            <div className="dash">
                <h1>Dashboard</h1>
            </div>
            <div>
                <div className="sec1">
                <Weather></Weather>
                <Calender></Calender>
                </div>
                
                <div className="sec2">
                <News></News>
                <TaskManager></TaskManager>
                </div>
                

            </div>
        </div>
    )
}

export default Dashboard;