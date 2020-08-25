export default function getName(path: string){
    let amountOfParams = path.split('/')
    return amountOfParams[3];
} 