import React, { useRef, useState } from 'react'
import Cards from './Cards'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"}
        },
    ];
  return (
    <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-10 flexwrap-wrap p-5'>
      {data.map((item, index)=>(
        <Cards data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground