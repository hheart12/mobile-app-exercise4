async function ambilDataUser() {
    const users = await axios.get("https://reqres.in/api/users");
    console.log(users.data);
  }
  
  ambilDataUser();