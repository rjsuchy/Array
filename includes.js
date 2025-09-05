const Booklist = ["al quran", "Hadis book", "Siratunnabi","Machine learning" ];
console.log(Booklist.includes("javascript"));
console.log(Booklist.indexOf(99));

console.log(Booklist.includes("al quran"));
console.log(Booklist.indexOf("al quran"));

if (Booklist.includes("javascript")){
    console.log("No need to buy!");
}
    

else {
    console.log("No book found.Collect it");

}
    