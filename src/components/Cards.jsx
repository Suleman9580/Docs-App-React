import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} 
    whileDrag={{scale: 1.1}}
    dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
    dragElastic = {0.1}
    className='flex-shrink-0 relative w-48 h-60 rounded-[25px] bg-zinc-900/90 text-white px-4 py-4 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='leading-tight text-sm mt-5 font-semibold'>{data.desc} </p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between py-3 px-4 mb-3'>
                <h5> {data.fileSize} </h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoIosClose size='1.4em' color='#fff'/> : <IoDownloadOutline size='.9em' color='#fff' />}      
                </span>
            </div>
            {data.tag.isOpen && (
                    <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )}
        </div>
    </motion.div>
  )
}

export default Cards