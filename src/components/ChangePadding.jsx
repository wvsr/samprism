import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePadding } from '../features/editorSlice'
function ChangePadding() {
  const dispatch = useDispatch()
  const padding = useSelector((state) => state.editor.padding)
  return (
    <div>
      <p className='text-sm text-gray-400'>Paddign</p>
      <div className='flex gap-4'>
        {[16, 32, 64, 128].map((pad) => {
          return (
            <button
              title='change padding to 16px'
              className={`text-base ${
                padding == pad ? 'text-gray-200' : 'text-gray-400'
              }`}
              onClick={() => dispatch(changePadding(pad))}
            >
              {pad}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ChangePadding
