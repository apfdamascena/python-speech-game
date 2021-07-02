export default function rename(path, wichlevel){
    let whereDoIWannaGo = "/game-page"
    let items = path.split('/')
    for(let i=2; i< items.length; i+=1){
        whereDoIWannaGo +=  '/'+ items[i]
    }
    whereDoIWannaGo += `/${wichlevel}`
    return whereDoIWannaGo;
}