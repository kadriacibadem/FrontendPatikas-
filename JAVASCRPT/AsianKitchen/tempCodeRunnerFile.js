 menu.forEach(function(item){
    const div = document.createElement("div")
    const img = document.createElement("img")
    div.classList.add("col-6","menu")
    img.classList.add("photo")
    img.src = item.img
    console.log(img.src)
    div.innerHTML = img.outerHTML

    row.appendChild(div)
 })