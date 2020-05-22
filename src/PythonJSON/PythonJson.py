import json

def makeObject(dataName):
    myObject = {}
    for names in dataName:
        with open("/Users/alexdamascena/Desktop/python-speech-game/src/PythonJSON/Data/"+names+".txt","r") as text:
            arrayText = text.read().split('\n')
            myObject[names] = arrayText
    return makeJSON(myObject)

def makeJSON(myObject):
    with open('dataJSON.json','w') as data:
        json.dump(myObject,data)

if __name__ == "__main__":
    dataName = ['FUNCTIONS','STRUCTURES','CLASSES','CONTROL FLOW']
    makeObject(dataName)
    
        
