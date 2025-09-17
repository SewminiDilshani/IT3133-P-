import {useState} from "react";
import Row from './Row';

function Table(params) {
    const [greet,setGreet] = useState("Hello React");
    const students = params.studata
    const [count,setCount] = useState(0);
    const [colour,setColour] = useState( 'rgb(243, 174, 224)'
    )
    return (
        <>
          <h1 style={{backgroundColor:colour}}>{greet}</h1>
          <button onClick={()=>{setGreet("Hello Students")}}>Change Heading</button>
          <br/>
          <h3>{count}</h3>
          <button onClick={()=>{setCount(count+1)}}>+</button>
          <button onClick={()=>{setCount(count-1)}}>-</button>
          <br/>
          <button onClick={()=>{setColour('rgb(174, 238, 243)'
    )}}>Change Colour</button>
          <table border = {1} cellSpacing = {0}>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Grade</td>
            </tr>

            {
                students.map(s =>
                    //<Row detail={s}/>
                    <Row id={s.id} name={s.name} grade={s.grade}/>
                )
            }
          </table>
        </>
    );
  }
  
  export default Table;