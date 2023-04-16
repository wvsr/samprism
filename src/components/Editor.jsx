import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  toggleBgImage,
  changeDarkMode,
  changeLanguage,
} from '../features/editorSlice'
import LanguageSelect from './LanguageSelect'
import ToggleSwitch from './ToggleSwitch'
import ChangePadding from './ChangePadding'
import ExportButton from './ExportButton'
import EditorBackground from './EditorBackground'

function CodeFrame() {
  const language = useSelector((state) => state.editor.language)
  const [selectedLanguage, setSelectedLanguage] = useState(language)
  const [toggleIsBg, setToggleIsBg] = useState(false)
  const [toggleDarkMode, setToggleDarkMode] = useState(false)
  const dispatch = useDispatch()
  const frameNode = useSelector((state) => state.editor.frameNode)
  const isBg = useSelector((state) => state.editor.isBg)
  useEffect(() => {
    dispatch(toggleBgImage())
  }, [toggleIsBg])
  useEffect(() => {
    dispatch(changeDarkMode())
  }, [toggleDarkMode])
  useEffect(() => {
    dispatch(changeLanguage(selectedLanguage))
  }, [selectedLanguage])

  return (
    <div className='fixed bottom-0 left-0 w-full z-50'>
      <div className='max-w-4xl container mx-auto bg-gray-900 py-7 px-6 rounded-xl mb-10 border-solid border-[0.3px] border-gray-700 shadow-xl flex items-center gap-3'>
        <EditorBackground />
        <div>
          <p className='text-sm text-gray-400 mb-1.5'>Background</p>
          <ToggleSwitch
            title='background'
            enabled={toggleIsBg}
            setEnabled={setToggleIsBg}
          />
        </div>
        <div>
          <p className='text-sm text-gray-400 mb-1.5'>Dark Mode</p>
          <ToggleSwitch
            enabled={toggleDarkMode}
            setEnabled={setToggleDarkMode}
            title='dark mode'
          />
        </div>
        {/* <button
          type='button'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center'
        >
          <LoadingSvg />
          Export
        </button> */}
        <LanguageSelect
          setSelectedLanguage={setSelectedLanguage}
          selectedLanguage={selectedLanguage}
        />
        <ChangePadding />
        <ExportButton frameNode={frameNode} />
      </div>
    </div>
  )
}

export default CodeFrame
