// return json data from any file path (asynchronous)... why did I write this in english?
async function getJSON(path) {
    const response = await fetch(path)
    return await response.json()
}