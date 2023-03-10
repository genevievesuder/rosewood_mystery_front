const Npc4 = () => {

const dialogue = ["Hello there.", "...", "May I help you, child?", "...", "...", "...", "I just love this book. It's about exploring the great unknown.", "...", "...", "...", "I wish I could go on an adventure.. but it's too late for me now. Don't waste your youth, young one.","...","...", "It's nice to see you again.","Are you enjoying the library?", "There are many worlds within these walls.","...","...","Oh how I wish I would have done more with my life...", "I wish I could go to Paris.", "Paris is the city of lights, you know.", "...", "...", "...", "May I help you?"];

let greeting = dialogue[Math.floor(Math.random()*dialogue.length)];

  return (      
      <div>
        <div className="npc-name-box">
          <p className="npc-name">Ms. Warren</p>
        </div>
        <div className="dialogue-box">
        <p className="dialogue">{greeting}</p>
        </div>
        <div className="home-container">
          <img className="npc1" src={process.env.PUBLIC_URL+"/npcol.png"} alt="an old woman sits and reads a book"/>
        </div>
      </div>
  )
}

export default Npc4