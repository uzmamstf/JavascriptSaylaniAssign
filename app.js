//            chapter 1 Alerts

// 1. Write a script to greet your website visitor using JS alert box. 
//alert(" Welcome to our Website");

//2. Write a script to display following message on your web page: Error!please enter a valid password
//alert('Error! please enter a valid password');

// 3. Write a script to display following message on your web page: (Hint : Use line break) 
//alert('Welcome to JS land \nHappy Coding'); // br tag is not working for line break

//4. Write a script to display following messages in sequence: 
//alert('Welcome to JS land '); alert('Happy Coding');

//5. Generate the following message through browser’s developer console:
//console.log(alert('Hello...! i can run JS thorugh my web browser console'));
//                        CHAPT 1 END 

//       chapter 2 VARIABLES FOR STRINGS



// 1.Declare a variable called username.
// var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name. 
//var myName = "Uzma Mustafa" // PS: by mistake in form Uzma Uzma :D

//3. Write script to 
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message 
// c) Display the message in alert box.

//var message = "Hello World";
//alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
//var firstName = "Uzma";
//var lastName = "Mustafa";
//var contact = 033312777771;
//var age = 19;
//alert(firstName + "\n" + lastName + "\n" + contact + "\n" + age);

//5. Write a script to display the following alert using one JS variable:
// PIZZA
// PIZZ
// PIZ
// PI
// P
//alert("PIZZA" + "\n"+ "PIZZ"+ "\n"+"PIZ"+ "\n"+ "PI"+ "\n"+ "P" )


//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
//  var email;
//  email="uzmamstf@gmail.com";
//  alert ("My email address is " + email);

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”.
//var book;
//  book ="A SMARTER WAY TO LEARN JAVASCRIPT";
//  alert ("I am trying to learn javascript from book" + book);

//8. Write a script to display this"Yah i can write HTML content through JS" in browser through JS.
//document.write( "Yah i can write HTML content through JS");


//9. Store following string in a variable and show in alert and browser through JS 
//“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
// var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(design);
// document.write(design);

//               CHAPT 2 END 
//          CHAPTER # 3 VARIABLES FOR NUMBERS 

//1. Declare a variable called age & assign to it your age. Show your age in an alert box
//var age =23;
//alert(age);

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
//var N =10;
//document.write("You have visited this site " + N + " times"); 

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
//  var birthYear = 1996;
//  document.write("My birth year is " + birthYear + "<br>" + " Data type of my declared variable is Number")

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
// var vistorName = "John Doe";
// var productsTitle = "T-shirt";
// var productQuantity = 5;
// document.write( vistorName +" "+ "ordered" +" "+ productQuantity + " " + productsTitle + " on XYZ Clothing store." );

//                       chap 3 -- END --
//            CHAP # 4 VARIABLE NAMES: LEGAL & ILLEGAL 
//1. Declare 3 variables in one statement. 
// var userName,userContact,userData;

//2. Declare 5 legal & 5 illegal variable names. 
// Legal Variables
//var userAge, _apple , Example$ , my1Key, legalVar;
// Illegal Variables
//var USERNAME, 1apple , ex@mples , my Key, alert;

//3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________.   
//document.write("<h1>Rules for naming JS variables</h1>")
//document.write("Variable names can only contain letters, underscore, numbers and $: For example $my_1stVariable" + "<br>"+ "Variables must begin with a letter, $ or underscore. For example: $name, _name or name" + "<br>"+ "Variable names are case sensitive" +"<br>"+ "Variable names should not be JS keyword" );


//                         chap 4 -- END --
//                        chap 5 MATH EXPRESSIONS  

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 
// var num1 = 23;
// var num2 = 25;
// var add = num1 + num2;
// document.write("sum of " + num1 +" and "+ num2 +" is "+add);

//2. Repeat task1 for subtraction, multiplication, division & modulus. 
//subtraction
// var num1 = 23;
// var num2 = 25;
// var sub = num1 - num2;
// document.write("sub of " + num1 +" and "+ num2 +" is "+sub);


// var num1 = 23;
// var num2 = 25;
// var multiply = num1 * num2;
// document.write("multiplication of " + num1 +" and "+ num2 +" is "+multiply);

// division
// var num1 = 23;
// var num2 = 25;
// var division = num1 / num2;
// document.write("division of " + num1 +" and "+ num2 +" is "+division);

// modulus
// var num1 = 9;
// var num2 = 3;
// var modulus = num1 % num2;
// document.write("modulus of " + num1 +" and "+ num2 +" is "+modulus);

//3. Do the following using JS Mathematic Expressions 
//a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number. 
//d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable. 
//f. Show the value of variable in your browser like “Value after increment is: 6”. 
//g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable. 
//j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3. 
// l. Output : “The remainder is : 0”. 

//  var varDeclareTest;
//  document.write("Value after declaration is "+ varDeclareTest);
//  varDeclareTest = 10;
//  document.write( "<br>"+"Initial Value : "+ varDeclareTest);
//  varDeclareTest++;
//  document.write( "<br>"+" Value after increment is: "+ varDeclareTest);
//  varDeclareTest+=7;
//  document.write( "<br>"+" Value after addition of 7 is: "+ varDeclareTest);
//  varDeclareTest--;
//  document.write( "<br>"+" Value after decrement is: "+ varDeclareTest);
//  remainderVar = varDeclareTest % 3;
//  document.write( "<br>"+"Output: The remainder is: "+ remainderVar);

//4. Cost of one movie ticket is 600 PKR. 
//Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie
//  var movieTicketCost = 600;
//  var ticketCostOf5Movies = movieTicketCost * 5;
//  document.write("Total cost to buy 5 tickets to a movie is"+ticketCostOf5Movies+"PKR");

//5. Write a script to display multiplication table of any number in your browser.
// document.write("Table of 5"+"<br>");
// document.write(5 +"x"+ 1+"="+5*1+"<br>");
// document.write(5 +"x"+ 2+"="+5*2+"<br>");
// document.write(5 +"x"+ 3+"="+5*3+"<br>");
// document.write(5 +"x"+ 4+"="+5*4+"<br>");
// document.write(5 +"x"+ 5+"="+5*5+"<br>");
// document.write(5 +"x"+ 6+"="+5*6+"<br>");
// document.write(5 +"x"+ 7+"="+5*7+"<br>");
// document.write(5 +"x"+ 8+"="+5*8+"<br>");
// document.write(5 +"x"+ 9+"="+5*9+"<br>");
// document.write(5 +"x"+ 10+"="+5*10);

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
//a.  Store a Celsius temperature into a variable. 
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”. 
//  var celsiusTemperature = 28;
//  var celsiusConvertIntoFehrenheit = (celsiusTemperature-32)* 5/9;
//  document.write(celsiusTemperature+"oC is "+celsiusConvertIntoFehrenheit+"oF" +"<br>");

//  var FehrenheitTemperature = 28;
//  var FehrenheitConvertIntoCelsius = (FehrenheitTemperature* 5/9)+32;
//  document.write(FehrenheitTemperature+"oF is "+FehrenheitConvertIntoCelsius+"oC");

//7.Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables 
//  a. Price of item 1 
//  b. Price of item 2
//   c. Ordered quantity of item 1 
//   d. Ordered Quantity of item 2 
//   e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 
// var item1Price = 550;
// var item2Price = 899;
// var qunatityOrderedItem1= 5;
// var qunatityOrderedItem2= 2;
// var ShippingCharges = 200;
// var totaOfItem1 = item1Price * qunatityOrderedItem1;
// var totalOfItem2 = item2Price * qunatityOrderedItem2;
// var grandCart= totaOfItem1 + totalOfItem2  + ShippingCharges;
// document.write("Price of Item 1 is "+ item1Price+"<br>");
// document.write("Quantity of Item 1 is "+ qunatityOrderedItem1+"<br>");
// document.write("Price of Item 2 is "+ item2Price+"<br>");
// document.write("Quantity of Item 2 is "+ qunatityOrderedItem2+"<br>");
// document.write("Shipping Charges "+ShippingCharges+"<br>");
// document.write("Total cost of your order is "+grandCart);

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browse
// var totalMarks = 750;
// var marksObtained = 500;
// var percentage = marksObtained / totalMarks * 100;
// document.write("Total Marks: "+ totalMarks+"<br>");
// document.write("Obtained Marks "+ marksObtained+"<br>");
// document.write("percentage: "+ percentage+"%");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (
//Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
// var dollarsUS = 10;
// var saudiRiyals = 25;
// var pakRupeesUSConversion = dollarsUS * 104.80;
// var pakRupeesRiyalConversion = saudiRiyals * 28;
// document.write("Total Currency in PKR "+ (pakRupeesUSConversion + pakRupeesRiyalConversion));


//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a.Add 5
// b.Multiply by 10
// c.Divide the result by 2
// Perform all calculations in a single expression

// var number = 15;
// document.write((number + 5)*10 / 2);

//11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values
// Output them to the screen like so: “They are either NN or NN years old”. 

// var currentYear = 2020;
// var birthYear = 1996;
// var Century1st = 100 - 96;
// var century2nd = 100 -80;
// var age = Century1st + century2nd;
// document.write("They are " + age+ " years old");





//  12. The Geometrizer: Calculate properties of a circle. 
//  a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and 
// output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

// var radius = 20;
// var pi = 3.142
// var circumference = 2* pi* radius;
// document.write("Radius of a circle is " +  radius + "<br>");
// document.write("The circumference is: "+ circumference + "<br>");
// var area = (pi * (radius*2));
// document.write("The area is: "+ area);


//13. The Lifetime Supply Calculator:
// Ever wonder how much a “lifetime supply” of your favorite snack is ? Wonder no more.
// a.Store your favorite snack into a variable
// b.Store your current age into a variable.
// c.Store a maximum age into a variable.
// d.Store an estimated amount per day(as a number).
// e.Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// document.write("<h1>The Lifetime Supply Calculator </h1>")
// var snack = "toast";
// var myCurrentAge = 24;
// var myMaxAge = 60;
// var myLeftAge= myMaxAge - myCurrentAge;
// var perDayAmountOfSnacks = 3;
// var totalDaysInAYear = 365;
// var perDayTillLive = (myLeftAge * (perDayAmountOfSnacks * totalDaysInAYear));
// document.write("Favorite Snack: "+ snack+ "<br>")
// document.write("Current age: "+ myCurrentAge+ "<br>")
// document.write("Estimated max age: "+ myMaxAge+ "<br>")
// document.write("Age Left as per Calculation: "+ myLeftAge+ "<br>")
// document.write("Amount of snacks per day: "+ perDayAmountOfSnacks+ "<br>")
// document.write("You will need " + perDayTillLive +" "+ snack + " to last you until the ripe old age of " + myMaxAge); 


//                                      CHAPTER 4 END

//                             CHAPTER 6 TO 9 MATHS EXPRESSION

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// document.write("Result:"+ "<br>");
// var num= 10;
// document.write("The value of num is: "+num+ "<br>");
// document.write("---------------------------------------"+ "<br>");
// ++num;
// document.write("Now The value of ++num is: "+num+ "<br>");
// num++;
// document.write("Now The value of num++ is: "+num+ "<br>");
// --num;
// document.write("Now The value of --num is: "+num+ "<br>");
// num--;
// document.write("Now The value of num-- is: "+num+ "<br>");


// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--; 

// var a = 2, b = 1;
// var result = (--a - --b) + (++b + b--);
// --a;
// document.write(a+ "<br>");
// --a - --b;
// document.write(a+ "<br>");
// (--a - --b) + ++b;
// document.write(a+ "<br>");
// (--a - --b) + (++b + b--); 
// document.write("a is: "+ a+ "<br>");
// document.write("b is: "+ b+ "<br>");
// document.write("result is: "+ result);                  


//3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Please enter your name", "");

document.write("Hello " + userName + "!");
