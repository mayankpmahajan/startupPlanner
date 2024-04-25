import React from 'react'
import '../css/Home.css'

const Home = () => {
  return (
    <div class = "container">
        <div class = "textContainer">
            <div class = 'titleContainer'>
                <h1 class = "title1">START UP?</h1>
                <h1 class = "title2">START <span class ="orange">NOW</span></h1>
            </div>
            <div class = "description">
              Elon Musk's bakery startup would blend cutting-edge technology with artisanal craftsmanship, offering sustainably sourced ingredients and innovative baking techniques. From automated ovens to eco-friendly packaging, the mission would be to redefine bakery excellence, delivering exceptional taste while minimizing environmental impact. 
            </div>
            <div class = "buttonContainer">
              <button class = "newFounderButton">
                <p>New Founder</p>
              </button>

              <button class = "existingFounderButton">
              <p>Existing Founder</p>
              </button>
            </div>
        </div>
        <div class = "muskContainer">
          <div class = "elonMusk">

          </div>

        </div>
    </div>
  )
}

export default Home
