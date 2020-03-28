import React from "react"

function MainContent() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    const firstNane = 'Gildroy'
    const lastName = 'Lockhart'

    return (
    <h1>Good {timeOfDay}, Mr. {firstNane} {lastName}</h1>
    )
}

export default MainContent