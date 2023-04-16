import { Switch } from '@headlessui/react'

const ToggleSwitch = ({ enabled, setEnabled, title }) => {
  return (
    <Switch
      title={title || 'toogle'}
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-blue-900' : 'bg-blue-700'}
          relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span
        aria-hidden='true'
        className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  )
}

export default ToggleSwitch
