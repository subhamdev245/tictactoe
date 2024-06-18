import React, { useEffect }  from 'react'
import CircleSVG from '../assets/CircleSVG'
import Square from './Square'
import { useState } from 'react'
import { calculateWinner } from '../utils/utils'

const Tictactoe = ({handleClick,turns,setisWinner,setplayAgain,first,setfirst,setwinner,settie}) => {
    
    useEffect(()=>{
        let answer = calculateWinner(first)
        if (answer) {
            setwinner(answer)
            setisWinner();
            setplayAgain();
            
        }
        else {
            const allDefined = first.every(item => item !== undefined);
            if (allDefined) {
                setplayAgain();
                settie(true)
            }
        }
    },[first])




    let newarr = Array.from(new Array(9))
    const pushArray =(index)=>{
    
        newarr = [...first]
        let value = turns?"X":"0"
        newarr[index] = value
        setfirst(newarr)
        
        
        
    }
  return (
    <div className='grid grid-cols-3  gap-5'>
        {first.map((e,index)=>{
        return (
            <div key={index} onClick={()=>{
                if (first[index]=== undefined) {
                    handleClick(),
                    pushArray(index) 
                }
                else {

                }
            }}  >
                <>
                <Square  value={e}  />
                    
                </>
            </div>
        )
    })}
    </div>
  )
}

export default Tictactoe