const percentageOfWorld1= function(population){
    return(population/7900)*100;
};
const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
const perc = percentageOfWorld1(populations[i]);
percentages2.push(perc);
}
console.log(percentages2);