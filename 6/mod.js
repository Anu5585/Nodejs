console.log("This is a Module");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
module.exports ={
     avg : average,
     name: "Annas",
     repo : "GitHub"
    
    }