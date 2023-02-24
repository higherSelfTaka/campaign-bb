import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 rounded-[8px]
    bg-red-gradient font-poppins font-medium text-[18px] text-[#222222] outline-none ${styles}`}>
      Get Connected 

    </button>
  )
}

export default Button
