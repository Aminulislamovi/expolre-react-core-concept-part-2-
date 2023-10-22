
import './App.css'
import Team from './Team';
import Counter from './counter';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }
 const handleClick2 =()=>{
  alert('button 2 clicked')
 }

  return (
    <>
      
      <h3>React core concepts -2</h3>
      <Friends></Friends>
      <Users></Users>

      <Team></Team>
     
    <Counter></Counter>
      <button onClick={handleClick}> click  me </button>
      <button onClick={handleClick2}>click</button>

      <button onClick={()=> alert('third button clicked')}> third</button>
      {/* vejailla */}
      <button onClick={()=> (3)}>four </button>
    </>
  )
}

export default App
