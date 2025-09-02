//Destructuring Object

let user = {
    name: "rahul",
    age: 22,
    gender: "male",
    ismarried: false,
    isemployed: true,
    address: {
        name: "Rahul kumar",
        hno: 126,
        street: "flyover road",
        area: "banjara hills",
        city: "Hyderabad"
    }
}

let { name, age, gender, ismarried, address: { name: fullname, hno, street, area, city } } = user
console.log(name, age, fullname);

let education = {
    tength: 90,
    inter: 70,
    btech: 85,
    pg: 50,
    project: {
        internship: "Web Dev",
        task: "todo web app",
        timeperiod: "6 months"
    },
    job: {
        interviews: 5,
        finalround: 3,
        ctc: "3lpa"
    }
}

let {tenth,inter,btech,pg,project:{internship,task,timeperiod},job:{interviews,finalround,ctc}}= education
console.log(internship,task,ctc);

//arrays destructuring

let arr=[1,2,3,4,5,[{name1:"Vinod",age1:25,isemployed:false}],[{height:5,weight:60,ishealthy:true}]]
let [a,b,c,d,e,[{name1,age1,isemployed}],[{height,weight,ishealthy}]]=arr
console.log(arr);
console.log(c,age1,ishealthy);






