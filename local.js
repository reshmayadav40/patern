function dis() {
    let rem = document.getElementById('rem')
    let para = document.getElementById('para')
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then((res) => res.json())
        .then((data) => {
            para.innerHTML = `Setup: ${data.setup}`
            rem.innerHTML = `Punchlin: ${data.punchline}`
            localStorage.setItem("data", JSON.stringify(data))
            console.log(data);
        })
        .catch(console.error)
}
document.getElementById('re').addEventListener('click', dis);