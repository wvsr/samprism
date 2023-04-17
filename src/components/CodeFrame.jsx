import React, { useRef, useState, useEffect } from 'react'
import Prism from 'prismjs'
import { useSelector, useDispatch } from 'react-redux'
import { setFrameNode } from '../features/editorSlice'

import 'prismjs/components/prism-ada'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javadoclike'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-clojure'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-lisp'
// import 'prismjs/components/prism-php'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-scala'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-elixir'
import 'prismjs/components/prism-powershell'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-objectivec'
import 'prismjs/components/prism-toml'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-erlang'
import 'prismjs/components/prism-lua'
import 'prismjs/components/prism-julia'
import 'prismjs/components/prism-matlab'
import 'prismjs/components/prism-perl'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-haskell'
import 'prismjs/components/prism-javascript'
// import 'prismjs/themes/prism-funky.css'

// inspired from https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/

function Editor() {
  const inputRef = useRef(null)
  const frameRef = useRef(null)
  const framePadding = useSelector((state) => state.editor.padding)
  const frameBg = useSelector((state) => state.editor.bgColor)
  const isBg = useSelector((state) => state.editor.isBg)
  const fontSize = useSelector((state) => state.editor.fontSize)
  const darkMode = useSelector((state) => state.editor.darkMode)
  const language = useSelector((state) => state.editor.language)
  const dispatch = useDispatch()
  const frameStyles = {
    padding: isBg ? `${framePadding}px` : 0,
    background: isBg ? frameBg : 'none',
  }
  console.log(frameStyles)
  useEffect(() => {
    Prism.highlightAll()
    dispatch(setFrameNode(frameRef.current))
  }, [])
  useEffect(() => {
    let result_element = document.querySelector('#highlighting-content')
    Prism.highlightElement(result_element)
  }, [language])

  const onCodeChange = (text) => {
    let result_element = document.querySelector('#highlighting-content')
    // Handle final newlines (see article)
    if (text[text.length - 1] == '\n') {
      text += ' '
    }
    // Update code
    result_element.innerHTML = text
      .replace(new RegExp('&', 'g'), '&amp;')
      .replace(new RegExp('<', 'g'), '&lt;') /* Global RegExp */
    // Syntax Highlight
    Prism.highlightElement(result_element)
  }

  function sync_scroll(element) {
    /* Scroll result to scroll coords of event - sync with textarea */
    let result_element = document.querySelector('#highlighting')
    // Get and set x and y
    result_element.scrollTop = element.scrollTop
    result_element.scrollLeft = element.scrollLeft
  }

  function check_tab(element, event) {
    let code = element.value
    if (event.key == 'Tab') {
      /* Tab key pressed */
      event.preventDefault() // stop normal
      let before_tab = code.slice(0, element.selectionStart) // text before tab
      let after_tab = code.slice(element.selectionEnd, element.value.length) // text after tab
      let cursor_pos = element.selectionStart + 1 // where cursor moves after tab - moving forward by 1 char to after tab
      element.value = before_tab + '\t' + after_tab // add tab char
      // move cursor
      element.selectionStart = cursor_pos
      element.selectionEnd = cursor_pos
      onCodeChange(element.value) // Update text to include indent
      sync_scroll(element)
    }
  }
  return (
    <div className='flex justify-center mt-28 mb-60' id='codeframe'>
      <div
        className='relative border-[0.2px] border-gray-700 inline-block  m-0 transition-[padding] duration-500'
        style={frameStyles}
        ref={frameRef}
      >
        <div className='w-auto'>
          <div
            className={`relative min-w-[420px] max-w-[920px] transition-all duration-100`}
            style={{ fontSize: fontSize }}
          >
            <div
              className={`border-none shadow-xl flex min-h-[120px] flex-col items-stretch pt-[10px] rounded-lg ${
                darkMode ? 'bg-[#342b3f]' : 'bg-[#c6c6c6]'
              }`}
            >
              <div
                className='grid h-6 items-center px-4 gap-3'
                style={{ gridTemplateColumns: '45px 1fr 45px' }}
              >
                <div className='flex gap-2'>
                  <div
                    className={`w-3 h-3 rounded-md ${
                      darkMode ? 'bg-[hsla(0,0%,100%,.2)]' : 'bg-gray-400'
                    }`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-md ${
                      darkMode ? 'bg-[hsla(0,0%,100%,.2)]' : 'bg-gray-400'
                    }`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-md ${
                      darkMode ? 'bg-[hsla(0,0%,100%,.2)]' : 'bg-gray-400'
                    }`}
                  ></div>
                </div>
                <div
                  className='relative h-4 text-[hsla(0,0%,100%,.3] text-[12px] font-medium leading-3 text-center'
                  style={{ letterSpacing: '-2rem' }}
                >
                  <input
                    type='text'
                    className='absolute border-none m-0 bg-transparent text-[hsla(0,0%,100%,.6)] font-medium inset-0 leading-3 text-center outline-none'
                    style={{ letterSpacing: '.32px' }}
                    spellCheck='false'
                    tabIndex={-1}
                  />
                </div>
              </div>
              <div
                className='grid w-full'
                style={{
                  gridTemplate: '1fr/1fr',
                  padding: '16px 16px 21px 16px',
                }}
              >
                <textarea
                  name=''
                  tabIndex={-1}
                  id='codetextbox'
                  autoCorrect='false'
                  spellCheck='false'
                  autoCapitalize='off'
                  onInput={() => {
                    onCodeChange(inputRef.current.value)
                    sync_scroll(inputRef.current)
                  }}
                  ref={inputRef}
                  onScroll={() => sync_scroll(inputRef.current)}
                  onKeyDown={(event) => check_tab(inputRef.current, event)}
                  className={`z-50 border-none bg-transparent outline-none resize-none m-0   font-medium  ${
                    darkMode ? 'caret-white' : 'caret-black text-black'
                  } scrollbar-hide`}
                  style={{
                    WebkitTextFillColor: 'transparent',
                    textSizeAdjust: 'none',
                    gridColumn: '1/1',
                    gridRow: '1/1',
                    lineHeight: '22.5px',
                  }}
                />
                <div
                  id='textdiv'
                  className={`m-0 leading-[22.5px] font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                  style={{
                    fontVariantLigatures: 'none',
                    gridColumn: '1/1',
                    gridRow: '1/1',
                    tabSize: 2,
                  }}
                >
                  <pre
                    aria-hidden='true'
                    id='highlighting'
                    className='scrollbar-hide'
                  >
                    <code
                      className={`language-${language}`}
                      id='highlighting-content'
                    ></code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
