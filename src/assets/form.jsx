import '../App.css'
import { useState } from 'react'

 export function Form () {
   const [title , setTitle] = useState("")
   const [priority , setPriority] = useState ()
   const [descrition , setDescription] = useState("")
   const [mark , setMark ] = useState (false)
    console.log(title, priority, descrition, mark);

const enviarTicket = () => (
    fetch("http://localhost:3000/ticket")
            .then((response) => response.json())
            .then((data) => {
                setTicket(data[0])
            })
 )
return (
    <form>
        <h1 className='Add'>Add Ticket</h1>
        <label className='Title'>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"  className='input1'></input>
        <label className='Priority'>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className='select'>
                <option value={1}>Easy</option>
                <option value={2}>Medium</option>
                <option value={3}>Hard</option>
            </select>
        <label className='Description'>Description</label>
        <input value={descrition} onChange={(e) => setDescription(e.target.value)} type="text" className='input2'></input>
        <label className='mark'>Mark as resolved</label>
        <input type='checkbox' value={mark} onChange={(e) => setMark(e.target.checked)} className='check'></input>
        <input type="submit" value="Submit"></input>
  </form>
)
}

