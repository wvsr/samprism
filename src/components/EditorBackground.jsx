import React, { useState, Fragment, useEffect } from 'react'
import { Popover, Transition, Tab } from '@headlessui/react'
import { gredients } from '../data/gredients.js'
import { colors } from '../data/colors.js'
import { changeBgColor } from '../features/editorSlice.js'
import { useSelector, useDispatch } from 'react-redux'
function EditorBackground() {
  const dispatch = useDispatch()
  const bgColor = useSelector((state) => state.editor.bgColor)
  const Gredients = () => {
    return (
      <div className='flex gap-2 flex-wrap'>
        {gredients.map((i) => (
          <div
            className='w-[115px] h-20 rounded-lg cursor-pointer'
            style={{ background: `linear-gradient(to right, ${i.join(', ')})` }}
            onClick={() =>
              dispatch(
                changeBgColor(`linear-gradient(to right, ${i.join(', ')})`)
              )
            }
          ></div>
        ))}
      </div>
    )
  }

  const Colors = () => {
    return (
      <div className='flex gap-2 flex-wrap'>
        <label
          htmlFor='color'
          className='w-[115px] h-20 rounded-lg cursor-pointer flex justify-center items-center text-lg font-bold'
        >
          Custom color
        </label>
        <input
          id='color'
          className='hidden absolute'
          type='color'
          onChange={(e) => dispatch(changeBgColor(e.target.value))}
          value={'#ddd'}
          placeholder='sami'
        />
        {colors.map((i) => (
          <div
            className='w-[115px] h-20 rounded-lg cursor-pointer'
            style={{ background: i }}
            onClick={() => dispatch(changeBgColor(i))}
          ></div>
        ))}
      </div>
    )
  }
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      dispatch(changeBgColor(`url(${reader.result})`))
    }
    reader.readAsDataURL(file)
  }

  const CustomImage = () => {
    return (
      <div
        className='w-64 h-64 rounded-lg bg-center bg-cover'
        onDragOver={(event) => event.preventDefault()}
        onDragEnter={(event) => event.preventDefault()}
      >
        <input type='file' onChange={handleFileUpload} />
      </div>
    )
  }
  const tabs = [
    { name: 'Color', content: <Colors /> },
    { name: 'Gradient', content: <Gredients /> },
    { name: 'Image', content: <CustomImage /> },
  ]
  return (
    <div className='relative'>
      <p className='text-sm text-gray-400 mb-1.5'>Change Background</p>
      <Popover className='relative' title='Chnage frame background'>
        {({ open }) => (
          <>
            <Popover.Button
              className='px-8 py-5 rounded-lg'
              style={{ background: bgColor }}
            ></Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel
                className='
            absolute z-10 mt-3 mb-10 w-screen max-w-sm px-4
            transform -translate-x-1/2
            bottom-full
            left-1/2
          '
              >
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 text-gray-200 border border-gray-700 '>
                  <div className=' p-3'>
                    <Tab.Group>
                      <Tab.List className='border-b border-gray-700'>
                        {tabs.map((tab, index) => (
                          <Tab
                            key={index}
                            className={({ selected }) =>
                              `py-2 px-4 font-bold text-sm ${
                                selected
                                  ? 'bg-gray-700 text-white'
                                  : 'text-gray-400 hover:text-gray-100'
                              }`
                            }
                          >
                            {tab.name}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels>
                        {tabs.map((tab, index) => (
                          <Tab.Panel
                            key={index}
                            className='p-4 max-h-64 overflow-y-auto'
                          >
                            {tab.content}
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default EditorBackground
