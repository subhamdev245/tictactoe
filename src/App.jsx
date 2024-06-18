import React, { useState } from 'react'
import Tictactoe from './comp/Tictactoe'


const App = () => {
  const [turns, setturns] = useState(true)
  const [isWinner, setisWinner] = useState(false);
  const [playAgain, setplayAgain] = useState(false);
  const [first, setfirst] = useState(Array.from(new Array(9)))
  const [winner,setwinner] = useState()
  const [tie,settie] = useState(false)

  const handleClick = () => {
    setturns((prev) => !prev)
  }
  return (
    <div className='bg-[#758AA2] h-screen  fixed w-screen '>
      <div className='flex justify-center items-center text-2xl  font-bold font-serif mt-3    '>Tic - Tac - Toe</div>
      <div className='flex justify-around items-center mt-10 text-center text-white text-2xl font-mono uppercase'>
        {turns ? "x" : "0"} turns
      </div>
      <div className='flex justify-around items-center mt-10 text-center text-2xl text-red-700 uppercase p-2'>
        {tie?"It is a Tie":isWinner ? `WINNER Is ${winner}  ` : ""}
      </div>
      <div className='flex justify-around items-center mt-10 text-center'>
        {playAgain ? <button onClick={()=>{
          
          setplayAgain(false)
          setfirst(Array.from(new Array(9)))
          setisWinner(false)
          setturns(true)
          settie(false)
          setwinner()
        }}

          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Play Again
        </button> : ""}
      </div>
      <div className='flex justify-center items-center mt-10 '>
        <Tictactoe handleClick={handleClick} turns={turns} setisWinner={() => {
          setisWinner((prev) => !prev)
        }}
          setplayAgain={() => {
            
            setplayAgain((prev) => !prev)
          }} 
          first ={first} 
          setfirst = {setfirst}
          winner = {winner}
          setwinner = {setwinner}
          settie = {settie}
        />
      </div>


    </div>
  )
}

export default App