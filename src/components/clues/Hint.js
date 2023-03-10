const Hint = async (hint_id) => {

try {
  const resp = await fetch("/user_hints", {
    method: 'POST', 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({hint_id})
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
  
export default Hint