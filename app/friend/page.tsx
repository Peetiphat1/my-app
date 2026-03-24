import {URL} from "./constant"
import ListFriend from "./ListFriend"


export default async function Friend() {

    const data = await fetchFriend()
    if(!data){
        return<p className="text-red-600 font-extrabold text-3xl">Fetch Error</p>
    }

    return <ListFriend data={data}/>
    
}

 async function fetchFriend() {
    try {
        return await(await fetch(URL)).json()
    } catch {
        return null
    }
}

