import { useState } from 'react';
import './App.css';
import Box from './component/Box'



const choice = {
  rock: {
    name: "Rock",
    img: "./img/rock.png",
  },
  paper: {
    name: "Paper",
    img: "./img/paper.png"
  },
  scissors: {
    name: "scissors",
    img: "./img/scissors.png"
  }
}

function App() {
  const [userSelector, setUserSelector] = useState(null);

  const play =(userChoice) => {
    console.log("userSelector", userChoice)
    setUserSelector(choice[userChoice])
    
  }
  return (
    <div>
      <div className='main'>
        <Box title='You' value={userSelector} />
        <Box title='Computer' value={userSelector} />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
