submit.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("title",title);
    console.log("desc",desc);
    let titlec = title.value
    console.log("titlec",titlec);
    let descc = desc.value
    console.log("descc",descc);
    localStorage.setItem("todo", JSON.stringify([titlec, descc]));
    console.log(e)
    title.value = ""
    desc.value = ""
  })
  
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML = ""
  })