const displayAll = async () => {
    try {
        let res = await axios.get("http://localhost:3000/posts");
        let users = res.data.users:
        let ul = document.querySelector("ul");
        ul.innerHTML = "";
        users.forEach(user => {
            let li = document.createElement("li");
            li.innerText = user.name;
            ul.appendChild(li);
        })
            debugger;
    } catch (error) {
        console.log(error);
    }
}

listPeople();