import React, { useState, useEffect } from 'react'

function DateColorCalc  ()  {

const currentTimeAndDate = new Date().toISOString().slice(0, 16)

const [firstDate, setFirstDate] = useState(currentTimeAndDate)
    const [secondDate, setSecondDate] = useState(currentTimeAndDate)
    const [dateDifference, setDateDifference] = useState('')
    const [previousDateChange, setPreviousDateChange] = useState('')

    const [bgColor, setBgColor] = useState('#ffffff')
    const [textColor, setTextColor] = useState('#000000')
    const [previousColorChange, setPreviousColorChange] = useState('')

  useEffect(() => {
    checkDateDiff()
  }, [firstDate, secondDate])

  useEffect(() => {
    updateColors()
  },[bgColor,textColor ])


  const checkDateDiff = () => {
    const firstDateObj = new Date(firstDate)
    const secondDateObj = new Date(secondDate)

    if (!isNaN(firstDateObj.getTime()) && !isNaN(secondDateObj.getTime())) {
      const difference = secondDateObj - firstDateObj

      const seconds = Math.floor(difference / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      const months = Math.floor(days / 30)
      const years = Math.floor(months / 12)

      setDateDifference(
        `Your time difference: 
         ${years} years, ${months % 12} months, ${days % 30} days, ${hours % 24} hours, ${minutes % 60} minutes and ${seconds % 60} seconds`
      )

      setPreviousDateChange(`Previous Change: ${new Date().toLocaleString()}`)
    } 
    else setDateDifference('Invalid dates')
    
  }

  const updateColors = () => {
    if (bgColor !== textColor) {
      document.body.style.backgroundColor = bgColor
      document.body.style.color = textColor

      setPreviousColorChange(`Last Change: ${new Date().toLocaleString()}`)
    }
    else setPreviousColorChange('Background and text colors cannot be the same.')

  }

  return (
    <div>
      <h1>Date Difference Calculator</h1>
      <form>
        <label>Date 1: </label>
        <input type="datetime-local" value={firstDate} onChange={(e) => setFirstDate(e.target.value)} />
        <br />
        <br/>
        <label>Date 2: </label>
        <input type="datetime-local" value={secondDate} onChange={(e) => setSecondDate(e.target.value)} />

        <p>{dateDifference}</p>
        <p>{previousDateChange}</p>
      </form>

      <h1> Page Color Picker</h1>
      <form>
        <label>Background Color: </label>
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value) } />
        <br />
        <br />
        <label>Text Color: </label>
        <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />

        <p>{previousColorChange}</p>
      </form>
    </div>
  )
}

export default DateColorCalc