import React from 'react'

export default function GreenRectangleBanner({text}) {
  return (
    <div class="pb-[1%] pt-[1%] bg-secondary w-[100%] mt-[4%]">
        <div class="flex justify-evenly content-center font-<K2D> text-2xl normal-case font-normal text-center pr-[1%] pl-[1%]">
            <div>{text}</div>
        </div>
    </div>
  )
}
