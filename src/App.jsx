import { useState } from 'react'
import './App.css'
// import Welcome from './components/Welcome';
// import UserCard from './components/UserCard';
// import Likes from './components/Likes';
// import UserCard2 from './components/UserCard2';


// function App() {
//   return (
//     <div className= 'App'>
//       <Welcome name="John Doe" />
//       <UserCard name="Jane Smith" age={30} />
//       <Likes count={100} />
//       <UserCard2 name="Alice Johnson" age={25} />
//     </div>
    
//   );
// }

// export default App;


// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function login() {
//     alert(email);
//   }
//   return(
//     <div>
      
//       <input type="email" 
//       placeholder='Email'
//       onChange={(e)=> setEmail(e.target.value)}/>
      
//       <input type="password" 
//       placeholder='Password'
//       onChange={(e)=> setPassword(e.target.value)}/>
      
//       <button onClick={login}>
//         Login
//         </button>
    
//     </div>
//   );
// }

// export default App;

function App() {
  const[task, setTask] = useState('');
  const[tasks, setTasks] = useState([]);

  function addTask() {
    if(task === '') {
      alert('Please enter a task');
      return;
    }
    setTasks([...tasks, task]);

    setTask('');
  }
  
  function deleteTask(index) {
    const updatedTasks = tasks.filter((item, i) => i !== index);
    setTasks(updatedTasks);
  }

  return(
    <div className="container">
      <h1> To-Do List</h1>
      <input type= "text"
      placeholder='Enter a task'
      value={task}
      onChange={(e) => setTask(e.target.value)} />
      
      <button onClick={addTask}>
        Add Task
        </button>
    
     <div className="task-list">
      {
      tasks.map((item, index) => (
        <div className="task" key={index}>
          <p>{item}</p>
          <button onClick={() => deleteTask(index)}> delete </button>
          </div>
      ))
    }
      </div>
 </div>
  );
}

export default App;