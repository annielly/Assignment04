////STEP 1
//function favorite() {
//    "use strict";
//    var favMovies = ["movie1", "movie2", "movie3", "movie4", "movie5"];
//    console.log(favMovies[1]);
//}
//
////STEP 2
//function topMovies() {
//    "use strict";
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    window.console.log(movies[0]);
//}
//
////STEP 3
//function topMovies() {
//    "use strict";
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    movies[5] = "movie6";
//    window.console.log(movies.length);
//}
//
////STEP 4
//function litMovie() {
//    "use strict";
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    delete movies[0];
//    window.console.log(movies);
//}
//
////STEP 5
//function forMovie() {
//    "use strict";
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    movies[5] = "movie6";
//    movies[6] = "movie7";
//    for (var i = 0; i < movies.length; i++) {
//        console.log(movies[i]);
//    }
//}
//
////STEP 6
//function forInMovie() {
//    "use strict";
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    movies[5] = "movie6";
//    movies[6] = "movie7";
//    for (var i in movies) {
//        console.log(movies[i]);
//    }
//}
//
////STEP 7
//function displayMovie() {
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    movies[5] = "movie6";
//    movies[6] = "movie7";
//    for (var i in movies) {
//        movies.sort();
//        console.log(movies[i]);
//    }
//}
//
////STEP 8
//function regretMovie() {
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    movies[5] = "movie6";
//    movies[6] = "movie7";
//    var leastFavMovies = ["worst1", "worst2", "worst3"]
//    console.log("\nMovies I Like:\n ");
//    for (var i in movies) {
//        console.log(movies[i]);
//    }
//    console.log("...");
//    console.log("\nMovies I Don't Like:\n ");
//    for (var i in leastFavMovies) {
//        console.log(leastFavMovies[i]);
//    }
//}
//////STEP 9
////function concatMovie() {
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    movies[5] = "movie6";
//    movies[6] = "movie7";
//    var leastFavMovies = ["worst1", "worst2", "worst3"]
//    movies = movies.concat(leastFavMovies);
//    movies.sort();
//    console.log(movies.reverse());
//}
//
////STEP 10
//function concatMovieTwo() {
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    movies[5] = "movie6";
//    movies[6] = "movie7";
//    var leastFavMovies = ["worst1", "worst2", "worst3"]
//    movies = movies.concat(leastFavMovies);
//    movies.sort();
//    console.log(movies.pop());
//}
//
////STEP 11
//function concatMovieThree() {
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    movies[5] = "movie6";
//    movies[6] = "movie7";
//    var leastFavMovies = ["worst1", "worst2", "worst3"]
//    movies = movies.concat(leastFavMovies);
//    movies.sort();
//    console.log(movies.shift());
//}
//
////STEP 12
//function movieIndices() {
//    var movies = [];
//    movies[0] = "movie1";
//    movies[1] = "movie2";
//    movies[2] = "movie3";
//    movies[3] = "movie4";
//    movies[4] = "movie5";
//    movies[5] = "movie6";
//    movies[6] = "movie7";
//    var leastFavMovies = ["worst1", "worst2", "worst3"]
//    movies = movies.concat(leastFavMovies);
//    movies.sort();
//    movies[(movies.indexOf("worst1"))] = "movie10";
//    movies[(movies.indexOf("worst2"))] = "movie11";
//    movies[(movies.indexOf("worst3"))] = "movie12";
//    console.log(movies);
//}

////STEP 16


//STEP 13

function employment() {
    "use strict";
    var employee1 = {"employeeId": 1, "name": "Stacy", "title": "CEO", "department": "Upstairs", "currentEmployee": 1};
    var employee2 = {"employeeId": 2, "name": "Jack", "title": "SOS", "deparment": "Downstairs", "currentEmployee": 1};
    var employees = {employee1;  employee2};
    console.log(employees["employee2"]["name"]);
}

//STEP 14
function employmentLoop() {
    "use strict";    
    var employee1 = {"employeeId": 1, "name": "Stacy", "title": "CEO", "department": "Upstairs", "currentEmployee": 1};
    var employee2 = {"employeeId": 2, "name": "Jack", "title": "SOS", "deparment": "Downstairs", "currentEmployee": 1};
    var employees = {employee1,  employee2};
    for (var i in employees) {
	   console.log(employees[i]["name"])
    }
}

//STEP 15

function employmentFalse() {
    var employee1 = {"employeeId": 1, "name": "Stacy", "title": "CEO", "department": "Upstairs", "currentEmployee": 1};
    var employee2 = {"employeeId": 2, "name": "Jack", "title": "SOS", "deparment": "Downstairs", "currentEmployee": };
    var employee3 = {"employeeId": 3, "name": "xxx", "title": "None", "department": "none", "notActiveEmployee": 0};
    var employees = {employee1,  employee2};
    for (var i in employees) {
        if (employees[i]["currentEmployee"]) {
            console.log(employees[i]["name"])
        }
    }
}


//STEP 17

function employeeList() {
    var employees = [
        "Zak",
        "Jessica",
        "Mark",
        "Fred",
        "Sally"
    ]
    function showEmployee(arrEmployees) {
        console.log("Employees:\n ");
        for (var i = 0; i < arrEmployees.length; i++) {
            console.log(arrEmployees[i]);
        }
    }
    showEmployee(employees);
}


//STEP 18

var value = [58, '', 'abcd', true, null, false, 0];
function filter(value) {
    for (var i = 0; i < value.length; i++) {
        var item = value[i];
        if (item == false || item == null || item == 0 || item == "") {
            value.splice(i, i);
        }
    }
    console.log(value);
}


//STEP 19

//STEP 20
