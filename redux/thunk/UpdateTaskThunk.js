import axios from 'axios';

const UpdateTask=(taskId,data)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:3001/todos/${taskId}`,data)
        .then((res)=>{
            return res.data
        }).then((data)=>{
           
        })
    }
}

export default UpdateTask;