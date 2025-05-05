import React from 'react'

export default function GreenRectangleBanner({text}) {
  return (
    <div className="pb-[1%] pt-[1%] bg-secondary w-[100%] mt-[4%]">
        <div className="flex justify-evenly content-center text-[2.8vh] leading-8 normal-case font-normal text-center pr-[1%] pl-[1%]">
            <div>{text}</div>
        </div>
    </div>
  )
}
