const cache = {}

module.exports = (step) => {
    if (step < 0) return 0
    if (step === 0) return 1

    if (cache[step]) return cache[step]
    
    cache[step] = waysToCoverSteps(step - 1) + waysToCoverSteps(step - 2) + waysToCoverSteps(step - 3)

    return cache[step]
    
}
