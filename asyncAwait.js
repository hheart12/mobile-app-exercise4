const ambilDataUser = async () => {
    let users = await fetch ("https://regres.in/api/users");
    users = await response.json ();
    console.log(users);
};

ambilDataUser();