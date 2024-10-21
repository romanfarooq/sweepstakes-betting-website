import React from 'react'

function CustomizeableButton({icon, label, onClick}) {
  return (
    <div>
        <button onClick={onClick} className="flex gap-2 items-center px-3 py-1 bg-indigo-500 text-white rounded">
            {icon}
            <span>{label}</span>
        </button>
    </div>
  )
}

export default CustomizeableButton