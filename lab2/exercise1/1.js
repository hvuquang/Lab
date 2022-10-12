const date = new Date();

let n = date.toString();

const time = date.toLocaleTimeString();

const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

n = n.slice(0,3).trim();

switch(n) {
    case 'Mon':
        n = 'Monday';
        break;
    case 'Tue':
        n = 'Tuesday';
        break;
    case 'Wed':
        n = 'Wednesday';
        break;
    case 'Thu':
        n = 'Thursday';
        break;
    case 'Fri':
        n = 'Friday';
        break;
    case 'Sat':
        n = 'Saturday';
        break;
    case 'Sun':
        n = 'Sunday';
        break;
    default:
        break;
}

console.log(`Today is : ${n}`);

console.log(`Current time is : ${hour} PM : ${min} : ${sec} `);