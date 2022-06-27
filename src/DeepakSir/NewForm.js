import React, {  useState } from 'react'

const NewForm = () => {
    const[inputField,setinputField]=useState('');
    const [dataArray,SetdataArray]=useState([]);

   const HandleOnchange=(e)=>{
        setinputField(e.target.value);
    }

    const SubmitData=()=>{
        // console.log(inputField)
        dataArray.push(inputField);
        SetdataArray(dataArray);
        setinputField('')
    };
  
    const DeleteItem=(index)=>{
        // console.log("delete");
        // console.log(id)
        const updateData=dataArray.filter((e,id)=>{
            return index!==id;
        })
        SetdataArray(updateData);
    }
    const RemoveAll=()=>{
        SetdataArray([]);
    }
  return ( 
    <div className='box'>
        <div className='inner_box'>
        Name
        <input type="text" placeholder='Enter note' onChange={HandleOnchange} />
        <button className='TodoBtn' onClick={SubmitData}>Submit</button>
        
        <div>
            <h1>All notes</h1>
            <ul>
        {dataArray.map((item,index)=>{
                      
            return  (
                 <li  key={index}>
                    <span className='font_text'> {item}</span> <span>  <button className='close_btn' onClick={()=>DeleteItem(index)}>X</button></span>
                </li>
                )
    
           
        })}
        <button className='TodoBtn' onClick={RemoveAll}>Remove All</button>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default NewForm;