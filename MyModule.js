let count =0;


const inc =() => ++count;
const dec =() => -- count;

const getCount = () => count;
const name = "Alex";
module.exports = {
    inc,
    dec,
    getCount,
    name


}


//module.exports = "Alex";