import axios from 'axios';

const DeleteTask=(taskId)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3001/todos/${taskId}`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
           
        })
    }
}

export default DeleteTask;