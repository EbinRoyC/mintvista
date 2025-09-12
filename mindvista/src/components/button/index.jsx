import React from 'react'

const index = ({btnname='button',className, type,onClick}) => {
  return (
    <button onClick={onClick} type={type} className= { ` ${className} px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm `}>
        {btnname}
    </button>
  )
}

export default index
