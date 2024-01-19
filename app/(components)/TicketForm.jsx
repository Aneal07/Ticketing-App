"use client"

import React, {useState}from 'react'
import { useRouter } from 'next/navigation'


const TicketForm = () => {
const router = useRouter()

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({formData}),
        "content-type": "application/json"
      })

      if(!res.ok){
        throw new Error("Failed to create Ticket.")
      }

      router.refresh()
      router.push("/")
    }

    const startingTickeData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem",
    }

    const [formData, setFormData] = useState(startingTickeData)
  return (
    <div className='flex justify-center'>
      <form  className='flex flex-col gap-3 w-1/2 ' method='post' onSubmit={handleSubmit}>
        <h3>Create Your Ticket</h3>      
        <label>Title</label>
        <input
         type="text" 
         name="title"
         id="title" 
        onChange={handleChange} 
        required={true} 
        value={formData.title} />
        <label>description</label>
        <textarea
         name="description"
         id="description" 
        onChange={handleChange} 
        required={true} 
        value={formData.description}
        row="5"
        />

        <label>Category</label>
        <select 
        name="category" 
        value={formData.category} 
        onChange={handleChange}>
        <option value="Hardware Problem">Hardware Problem</option>
        <option value="Software Problem">Software Problem</option>
        <option value="Project Issue">Project Issue</option>
        <option value="Debugging">Debugging</option>
        </select>

        <label>Priority</label>
        <div>
          <label>1</label>
          <input 
          type="radio"
           id='priority-1'
            name="priority"
             onChange={handleChange}
              value={1} 
                checked={formData.priority == 1}
              />
          <label>2</label>
          <input 
          type="radio"
           id='priority-2'
            name="priority"
             onChange={handleChange}
              value={2} 
                checked={formData.priority == 2}
              />
          <label>3</label>
          <input 
          type="radio"
           id='priority-3'
            name="priority"
             onChange={handleChange}
              value={3} 
                checked={formData.priority == 3}
              />
          <label>4</label>
          <input 
          type="radio"
           id='priority-4'
            name="priority"
             onChange={handleChange}
              value={4} 
                checked={formData.priority == 4}
              />
          <label>5</label>
          <input 
          type="radio"
           id='priority-5'
            name="priority"
             onChange={handleChange}
              value={5} 
                checked={formData.priority == 5}
              />
              </div>
              <label>Progress</label>
              <input 
              type="range" 
               id='progress'
                name='progress'
                 value={formData.progress}
                  min="0" 
                  max="100"
                  onChange={handleChange}
                  />
                  <label>Status</label>
                  <select name="status"
                   value={formData.status} 
                   onChange={handleChange}>
                    <option value="not started">Not Started</option>
                    <option value=" started"> Started</option>
                    <option value="done">Done</option>
                   </select>
                   <input type="submit" className='btn' value="Create Ticket" />
        
        </form>
    </div>
  )
}

export default TicketForm
