
const Clue = async (clue_id) => {

try {
  const resp = await fetch("/user_clues", {
    method: 'POST', 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({clue_id})
  })
    if (resp.status === 201){
      const data = await resp.json()
      return data
    } else {
      const data = await resp.json()
      return data.errors
    }
} catch (error) {
  alert(error)
}

  }
  
export default Clue