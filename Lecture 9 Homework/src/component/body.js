function Body() {

    async function getUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("User not found");
  }

  return await response.json();
}
 
    return(
        <>
            
        </>
    )
}

export default Body;