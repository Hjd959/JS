const companies = [
    { name: "A", category: "Finance", start: 1981, end: 2004 },
    { name: "B", category: "Retail", start: 1992, end: 2008 },
    { name: "C", category: "Auto", start: 1999, end: 2007 },
    { name: "D", category: "Retail", start: 1989, end: 2010 },
    { name: "F", category: "Technology", start: 2009, end: 2014 },
    { name: "G", category: "Finance", start: 1987, end: 2010 },
    { name: "H", category: "Auto", start: 1986, end: 1996 },
    { name: "I", category: "Technology", start: 2011, end: 2016 },
    { name: "J", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// sort  ******************************************************




//  ترتيب تدرجي من الاعلى الى الاقل  
// Sort High to Low
let sortArray = companies.sort((a, b) =>   b.start - a.start)
console.log(sortArray);



// sort the date
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);


// Sort ages


// from small to bige
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);


// from bigge to small 
 const sortAges2 = ages.sort((a, b) => b - a);
 console.log(sortAges2);






// forEach ******************************************************






// استدعاء من الداله القيمه المطلوبه فقط
// Call from the desired value function
const aarr = []
const com = companies.forEach(function (company) {
    aarr.push(company.name)
});
console.log(aarr);



companies.forEach(function (company) {
    console.log(company.name);
});








// filter ******************************************************

// استدعاء العمر اكبر من ٢١
// Get 21 and older
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// استدعاء الشركات التي تحمل نفس اسم cateegory
// Filter Retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);


// استدعاء الشركات التي تبدا من ١٩٨٠ الى ١٩٩٠
// Get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);


// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);


// map ******************************************************


// يعمل مصفوفه ويستدعي اسماء الشركات فقط
// Create array of company names
const companyNames = companies.map(function (company) {
    return company.name;
});
console.log(companyNames);



// يقارن بالمصفوفه اذا ما كان موجود يعطي قيمة خطا
const companyNames12 = companies.map(function (company) {
    return company.name === "Company One";
});
console.log(companyNames12);


// map the date
// ترتيب السنوات 
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);



// map Mtha
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);



// مجموع الاعمار
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce(function (total, age) {
    return total + age;
}, 0);
console.log(ageSum);


const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2);


// Get total years for all companies

const totalYears = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);

console.log(totalYears);


//const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);
