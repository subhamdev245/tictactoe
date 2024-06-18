import React from 'react'

const Square = ({value}) => {

 let classList = "bg-[#2F363F] w-[100px] h-[100px] text-center text-2xl p-8 text-white"
  return (
    <div className={value ? classList+' cursor-not-allowed' : classList+' cursor-pointer'}>
        {value}
    </div>
  )
}

export default Square