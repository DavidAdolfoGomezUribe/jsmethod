
// export const findex = function name(params) {}

export const find = async()=>{
    
    const url = new URL("https://6734e08c5995834c8a9133af.mockapi.io/")
    url.pathname += "informacion"

    const response = await fetch(url.toString(),{method:"get"})
    
    return await response.json();



}
export const search = async (id)=>{

    const url = new URL("https://6734e08c5995834c8a9133af.mockapi.io/")
    url.pathname += `informacion/${id}`
    const response = await fetch(url.toString(),{method:"get"})
    
    return await response.json();

}

export const save = async(data)=>{
    const url = new URL("https://6734e08c5995834c8a9133af.mockapi.io/")
    const headers = new Headers();
    headers.set("Content-Type","application/json")
    
    url.pathname += `informacion/`
    
    
    const config = {
        method:"post",
        headers,
        body:JSON.stringify(data)}
    
    const response = await fetch(url.toString(),config)
    
    return await response.json();

}


export const edit = async(data)=>{

    const {id} = data;
    if(typeof id === "undefined") return "No se envio el id";
    data.updateAt = Math.floor(Date.now() / 1000);
    delete data.id;
    const url = new URL("https://6734e08c5995834c8a9133af.mockapi.io/")
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    url.pathname += `informacion/${id}`
    const config = {
        method: "put",
        headers,
        body: JSON.stringify(data)
    }
    const response = await (await fetch(url.toString(), config)).json();
    response.updateAt = new Date(response.updateAt * 1000);
    return response;
}


export const remove  = async()=>{

}