'use client'

import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";

export default function CommentSection() {

  const [comment,setComment] = useState('');
  const [add,setAdd] = useState<string[]>([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() =>{
    const saveComment = localStorage.getItem('add')
    if (saveComment){
      setAdd(JSON.parse(saveComment))
    }
  },[]);  
  
  //add comment
  const addComment = () => {

    if (comment.trim() !== ''){
      const updateComments = ([...add,comment]);
      setAdd(updateComments)
      setComment("");
      localStorage.setItem('add',JSON.stringify(updateComments))
    }
      
  }

  const deleteComment = (indexToDelete: number) => {
    const updatedComments = add.filter((_, index) => index !== indexToDelete);
    setAdd(updatedComments);
    localStorage.setItem('add', JSON.stringify(updatedComments));
  };

  return (

    <div className='mt-8 px-8 '>

      <h1 className='text-4xl text-teal-900 font-bold'>Comment Section</h1>

      <button className='text-teal-800 text-lg mt-4' onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>

      {showComments && (
      <div className='mt-4'>
        
         <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)}
          placeholder='Type your comments...' 
          rows={4}
          className='border border-teal-800 rounded w-1/3'/>
      
        <br/>
          <button onClick={addComment} 
           className='border px-4 py-2 rounded-xl bg-teal-600 text-white text-lg mt-4'>Add Comment</button>
      
       <div className='mt-6'>
         <h2 className='text-2xl text-teal-900 underline font-semibold'>
            Show All Comments
          </h2>
          {add.length === 0 ? (<p className='text-teal-950 mt-6'>No Comments yet.</p>):
          <ul className='mt-6 '>
          { 
            add.map((data,index) => (
               <li key={index}>{data}
               
               <button
                  onClick={() => deleteComment(index)}
                  className="ml-8 text-red-400 ">
                  <MdDelete size={20}/>
                </button>
               
               </li>
            ))
          }
          </ul>
          }
        </div>
      </div>
      )}
    </div>     
  )
};
