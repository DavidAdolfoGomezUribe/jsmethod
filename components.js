export const myTable = (data) =>{
 
//array

const tdbody = document.createElement("tdbody")
data.forEach(element => { 
    const tr = document.createElement("tr")
    const tdid = document.createElement("td")
    tdid.textContent = element.id

    const tdbtn = document.createElement("td")
    const btnedit = document.createElement("button")
    btnedit.textContent = "edit"
    const btnremove = document.createElement("button")      
    btnremove.textContent = "edit"

    tdbtn.append(btnedit,btnremove)
    
    tr.append(tdid,tdbtn)
    tdbody.append(tr)
});

console.log(tdbody)
return tdbody




}
