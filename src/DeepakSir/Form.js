import React, { useState } from 'react'

const Form = () => {
    const [state,setState]=useState("");
    const [dataa,setDataa]=useState([]);
    const HandleClick=(e)=>{
        console.log(state)
        // alert("click")
        // setDataa([...dataa,state])
        dataa.push(state);
        setDataa(dataa);
        console.log(dataa)
        setState('');
    }
    const innputData=(e)=>{
        setState(e.target.value);
    }
    const DeleteItem=(index)=>{
        // console.log(index)
        dataa.pop(state);
        // setDataa(dataa);
    }
  return (
    <>
        <div>
            <label htmlFor="">Name</label>
            <input type="text"  placeholder='enter your name' onChange={innputData} />
            <button onClick={HandleClick}>add Note</button>
        </div>
        <div>
            <h1>Notes</h1>
            {
                dataa.map((e,index)=>{
                    return(
                        <div key={index}>
                            {e}  <button onClick={DeleteItem(index)}>delete</button><br />
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Form