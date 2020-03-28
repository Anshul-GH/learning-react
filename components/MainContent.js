import React from "react"

function MainContent() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#ADD8E6" //light-blue
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#FFFF00" //yellow
    } else {
        timeOfDay = "night"
        styles.color = "#DA680F" //orange
    }

    const firstNane = 'Gildroy'
    const lastName = 'Lockhart'

    return (
    <h1>Good {timeOfDay}, Mr. {firstNane} {lastName}</h1>
    )
}

export default MainContent