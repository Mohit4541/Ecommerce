import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
   let  id  = useParams().id

  return (
    <div>Detail Page  </div>
  )
}

export default Detail