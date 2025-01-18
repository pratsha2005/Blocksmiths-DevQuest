import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
  } from '@heroicons/react/20/solid'
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
  
  export default function PageHeading({heading}) {
    return (
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {heading}
          </h2>
        </div>
      </div>
    )
  }
  