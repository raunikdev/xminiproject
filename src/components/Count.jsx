import './css/Count.css'
import { useState } from 'react';
function Count(props){
    const[Skill,setSkill] = useState(props.skills);
    function add(){
        setSkill(Skill+1);
    }
    function minus(){
        if(Skill>0){
        setSkill(Skill-1);
        }
        else{
            alert("NOpe can't be negative")
        }
    }
    return(
        <>
            <div className="box">
                <img src={props.image} className='pic'/>
                <div className="details">
                    <p>{props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>No. of Skills Gained: </p>
                    <div className="counter">
                        <h3>{Skill}</h3>
                        <button onClick={add}>+</button>
                        <button onClick={minus}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Count;