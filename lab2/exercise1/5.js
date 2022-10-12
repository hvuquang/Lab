const fs = require('fs')
const user = {
    id: 1,
    name: 'Vũ Quang Huy',
    age: 20
}
const data = JSON.stringify(user)
fs.writeFile('user.json', data, err => {
    if (err) {
        throw err;
    }
    console.log('JSON data is saved.')
})
fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    const user = JSON.parse(data.toString())
    console.log(user);
})