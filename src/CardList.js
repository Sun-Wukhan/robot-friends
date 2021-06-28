import React from 'react'
import Card from './Card'


const CardList = (props) => {
    
    // const robots = props.robots
    // const fake = props.fake
    const {robots } = props


    const renderCards = robots.map((robot) => 
        <Card id={robot.id} name={robot.name} username={robot.username} email={robot.email} />)

    return (
        <div>
            {renderCards}
      </div>
    ); 
}

export default CardList 