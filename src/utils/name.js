export default function getName(path){
    let amountOfParams = path.split('/')
    return amountOfParams[3];
} 