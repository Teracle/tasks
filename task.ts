interface Student{
    name: String;
    avgMark:Number;
}

interface Statistics{
    avgMark:number,
    highestMark:string;
    lowestMark:string;
}

function getStatistics(marks:Student[]) : Statistics {

    let lowest_mark, highest_mark;
    
    let avgBetween=(testMarks[0].avgMark+testMarks[1].avgMark)/2;  

    if(testMarks[0].avgMark>testMarks[1].avgMark)
    highest_mark=testMarks[0].name;

    else   
    highest_mark=testMarks[1].name;

    if(testMarks[0].avgMark<testMarks[1].avgMark) 
    lowest_mark=testMarks[0].name;
 
    else 
    lowest_mark=testMarks[1].name;

    return "avgMark: "+ avgBetween+ ', ' + 'highestMark: '+ highest_mark+ ', '+ "lowestMark: " + lowest_mark;
    
    
}

const testMarks=[{
    name: 'Vasya',
    avgMark:3.75
},{
    name:'Lena',
    avgMark:4.89
}]

console.log(getStatistics(testMarks));