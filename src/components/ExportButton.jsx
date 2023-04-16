import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { toPng, toSvg, toBlob } from 'html-to-image'
import { saveAs } from 'file-saver'
import UpArrow from '../assets/UpArrow'

function ExportButton({ frameNode }) {
  const downloadPng = async () => {
    const dataUrl = await toPng(frameNode, { pixelRatio: 2 })
    saveAs(dataUrl, 'my-image.png')
  }
  const copyFrame = async () => {
    const dataUrl = await toBlob(frameNode, { pixelRatio: 2 })
    navigator.clipboard.write([new ClipboardItem({ 'image/png': dataUrl })])
  }
  const downloadSvg = async () => {
    const dataUrl = await toSvg(frameNode)
    saveAs(dataUrl, 'my-image.svg')
  }
  return (
    <div className='flex'>
      <button
        type='button'
        onClick={downloadPng}
        class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg rounded-r-none text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center'
      >
        {/* <LoadingSvg /> */}
        Export
      </button>{' '}
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg rounded-l-none text-sm px-1 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center'>
            <UpArrow />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 -top-2 transform -translate-y-full w-56 origin-top-right mt-2 z-10 divide-y divide-gray-100 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-100 border border-gray-700'>
            <div className='px-1 py-1 '>
              {[
                ['Download Svg', downloadSvg],
                ['Copy Image', copyFrame],
              ].map((item) => {
                return (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-700 text-white' : 'text-gray-100'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={item[1]}
                      >
                        {item[0]}
                      </button>
                    )}
                  </Menu.Item>
                )
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ExportButton
