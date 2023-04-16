import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { languages } from '../data/languages'
import UpArrow from '../assets/UpArrow'

function LanguageSelect({ selectedLanguage, setSelectedLanguage }) {
  return (
    <div>
      <p className='text-sm text-gray-400 mb-1.5'>Languages</p>
      <Listbox
        value={selectedLanguage}
        onChange={setSelectedLanguage}
        className='min-w-[150px]'
      >
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-gray-800 border border-gray-700 py-2 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{selectedLanguage}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <UpArrow />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 text-gray-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm origin-top bottom-full'>
              {languages.map((lang, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-gray-700 text-gray-100' : 'text-gray-200'
                    }`
                  }
                  value={lang}
                >
                  {({ selectedLanguage }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selectedLanguage ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {lang}
                      </span>
                      {selectedLanguage ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-200'></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default LanguageSelect
