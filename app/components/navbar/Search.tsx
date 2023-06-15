'use client'

import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div
      className="
      border-[1px]
      w-full
      md:w-[400px]
      py-2
      rounded-full
      shadow-sm
      transition
      ease-in-out
      hover:shadow-md
      cursor-pointer
    "
    >
      <div
        className="
        flex
        flex-row
        items-center
        justify-between
      "
      >
        <div
          className="
          text-sm
          font-semibold
          px-6
          text-gray-500
        "
        >
          Takas ürününü arat...
        </div>

        <div
          className="
          text-sm
          pl-6
          pr-2
          text-gray-600
          flex
          flex-row
          items-center
          gap-3
        "
        >
          <div
            className="
            p-2
            bg-orange-500
            rounded-full
            text-white
          "
          >
            <BiSearch size={21} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
