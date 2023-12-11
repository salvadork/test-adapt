import React, { useState, useEffect } from 'react'

function DateColorCalc  ()  {

const [firstDate, setFirstDate] = useState(new Date())
  const [secondDate, setSecondDate] = useState(new Date())
  const [dateDifference, setDateDifference] = useState('')
  const [lastDateChange, setLastDateChange] = useState('')

    const [bgColor, setBgColor] = useState('#ffffff')
    const [textColor, setTextColor] = useState('#000000')
    const [lastColorChange, setLastColorChange] = useState('')

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
        `Difference: ${years} years, ${months % 12} months, ${days % 30} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`
      )

      setLastDateChange(`Last Change: ${new Date().toLocaleString()}`)
    } else {
      setDateDifference('Invalid dates')
    }
  }

  const updateColors = () => {
    if (bgColor !== textColor) {
      document.body.style.backgroundColor = bgColor
      document.body.style.color = textColor

      setLastColorChange(`Last Change: ${new Date().toLocaleString()}`)
    }
      setLastColorChange('Background and text colors cannot be the same.')

  }

  return (
    <div>
      <h2>Date Calculator</h2>
      <form>
        <label>Date 1:</label>
        <input type="time" value={firstDate} onChange={(e) => setFirstDate(e.target.value)} />

        <label>Date 2:</label>
        <input type="tim" value={secondDate} onChange={(e) => setSecondDate(e.target.value)} />

        <p>{dateDifference}</p>
        <p>{lastDateChange}</p>
      </form>

    </div>
  )
}

export default DateColorCalc