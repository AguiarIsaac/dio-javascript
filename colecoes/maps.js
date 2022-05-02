const myMap = new Map();

myMap.set('Isaac', 'Admin')
myMap.set('Aguiar', 'Temp')
myMap.set('Pereira', 'Admin')
myMap.set('Chica', 'USER')
myMap.set('tyfany', 'SUDO')

function getAdmins(map) {
    let admins = []

    for([key, value] of map) {
        if( value === 'Admin') {
            admins.push(key)
        }
    }

    return admins
}

console.log(getAdmins(myMap))
