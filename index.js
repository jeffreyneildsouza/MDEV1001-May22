const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    db.run("CREATE TABLE Instructor(ID NUMBER, Name TEXT, Dept_name TEXT, Salary NUMBER)");
    db.run("INSERT INTO Instructor VALUES(10101, 'Srinivasan', 'Comp. Sci.', 65000)");
    db.run("INSERT INTO Instructor VALUES(12121, 'Wu', 'Finance', 90000)");
    db.run("INSERT INTO Instructor VALUES(15151, 'Mozart', 'Music', 90000)");
    db.run("INSERT INTO Instructor VALUES(22222, 'Einstien', 'Physics', 95000)");
    db.run("INSERT INTO Instructor VALUES(32343, 'El Said', 'History', 62000)");
    db.run("INSERT INTO Instructor VALUES(3456, 'Gold', 'Physics', 87000)");
    db.run("INSERT INTO Instructor VALUES(45565, 'Katz', 'Comp. Sci.', 75000)");
    db.run("INSERT INTO Instructor VALUES(58583, 'Califieri', 'History', 62000)");
    db.run("INSERT INTO Instructor VALUES(22222, 'Singh', 'Finance', 80000)");
    db.run("INSERT INTO Instructor VALUES(32343, 'Crick', 'Biology', 72000)");
    db.run("INSERT INTO Instructor VALUES(3456, 'Brandt', 'Comp. Sci.', 92000)");
    db.run("INSERT INTO Instructor VALUES(45565, 'Kim', 'Elec. Eng.', 80000)");

/*
//------------------------To get Complete table
    db.each("SELECT * FROM Instructor", function(err,row){
        console.log(row);
    });


//------------------------To get all names
    db.each("SELECT name FROM Instructor", function(err,row){
        console.log(row);
    });
 

 //------------------------To get all dpt_names with just the property 
    db.each("SELECT DISTINCT Dept_name FROM Instructor", function(err,row){
    console.log(row.Dept_name);
    });


    //------------------------To get all name where Saary > 70000 in COMPUTER SCI DEPT with just the property
    db.each("SELECT name FROM Instructor WHERE dept_name = 'Comp. Sci.' AND salary >70000", function(err,row){
        console.log(row);
    });
  
 
  let results = Array();
    db.each("SELECT name FROM Instructor WHERE dept_name = 'Comp. Sci.' AND salary >70000", function(err,row){
        results.push(row.Name);
    },

    function (err, count){
        let resultString = "";
        for(let i=0; i != result.length; ++i){
            if(i != count - 1){
                resultString +=result[i] + ", "
            }
            else
                resultString +=results[i];
        }

        console.log(resultString + " have a high salary");
    });

    //  Print th department name and the total salary spend for each department
    // History : 1000000 yearly

    let  depts = {};

    db.each("SELECT Dept_name, salary FROM Instructor", function(err,row){
        if(depts[row.Dept_name] === undefined)
            depts[row.Dept_name]=0;

            depts[row.Dept_name] += row.Salary;
    },function (err,count){
        console.log("History" + " : " +depts["History"] + " yearly");

    });

    
    */ 
    //  All Deptartments
    // History : 1000000 yearly
    // Cp. Sci. .....etc

    let  depts = {};

    db.each("SELECT Dept_name, salary FROM Instructor", function(err,row){
        if(depts[row.Dept_name] === undefined)
            depts[row.Dept_name]=0;

            depts[row.Dept_name] += row.Salary;
    },function (err,count){
        let keys = Object.keys(depts);

        for(let i = 0; i != keys.length; ++i){
            console.log(keys[i] + " : " +depts[keys[i]] + " yearly");
        }

    });

});