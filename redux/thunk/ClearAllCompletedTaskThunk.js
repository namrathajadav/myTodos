import axios from 'axios';

const ClearAllCompletedTask=()=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/todos`)
        .then((res)=>{
            return res.data
        }).then((data)=>{
            var loadedTasks=[];
            for(let i in data){
                if(data[i].taskStatus=='Completed'){
                loadedTasks.push(data[i])
                }
            }
            for(let i in loadedTasks){
                   axios.delete(`http://localhost:3001/todos/${loadedTasks[i].id}`)
            }
           
        })
    }
}

export default ClearAllCompletedTask;