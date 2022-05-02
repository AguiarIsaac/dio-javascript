const ARRAY = [30, 30, 40, 5, 223, 2049, 3034, 5]

function uniqueLement(array) {
    const NEW_ARRAY = new Set(array)
    return NEW_ARRAY
}

uniqueLement(ARRAY)
