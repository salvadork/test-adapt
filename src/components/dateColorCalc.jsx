import React, { useState, useEffect } from 'react'

export default DateColorCalc = () =>  {

   const [firstDate, setFirstDate] = useState(new Date())
  const [secondDate, setSecondDate] = useState(new Date())
 


  useEffect(() => {
    checkDateDifference()
  }, [firstDate, secondDate])


 



  return (

  )
}

