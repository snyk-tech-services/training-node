function bestify(name) {
    return name + " is the best"
}


function figureOutWhatToSay(path) {
    return "I'm a catch all ! Looking for something "+ path.replace('/','') + '?'
}

module.exports = {
    bestify,
    figureOutWhatToSay
}