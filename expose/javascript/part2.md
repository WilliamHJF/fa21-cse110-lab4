1. It will print out the value of i which is 3 at line 12. The size of the discounted array is 3, so the for loop will run 3 times and each time it runs, the value i will increase 1, so the value of i would be 3 when the for loop is completed. Since the variable i is with the var keyword, it can be accessed anywhere inside the function it is defined in as the value of i will still be printed out as 3 even though the print statement is outside of the for loop block. 
   
2. It will print out the value of discountedPrice which is 150 at line 13. The for loop will run 3 times and each time it runs, the value of discountedPrice will be updated. In the last loop, discountedPrice will change to 150 (prices[3] * (1 - 0.5) = 150). Since the variable discountedPrice is with the var keyword, it can be also accessed outside of the for loop block. Hence, while printing out the value of it, it will still show as 150. 
   
3. It will print out the value of finalPrice which is 150 at line 13. Each time the for loop runs, the value of finalPrice will be updated. In the last loop, finalPrice will change to 150 (150 * 100 / 100 = 150). Since the variable finalPrice is with the var keyword, it can be also accessed outside of the for loop block. Hence, while printing out the value of it, it will still show as 150. 
   
4. It will return an discounted array with the values of 50, 100, and 150. Each time for loop runs, the value of finalPrice will be pushed into the discounted array. Through calculation, thoses values are 100 * 0.5 = 50, 200 * 0.5 = 100, 300 * 0.5 = 150.
   
5. Error becasue the variable i is defined with the keyword let within the for loop block which means it is only accessed within this block. The console statement is not within the for loop block, so it will cause an error if we try printing out the value i. 
   
6. Error becasue the variable discountedPrice is defined with the keyword let within the for loop block which means it is only accessed within this block. The console statement is not within the for loop block, so it will cause an error if we try printing out the value of discountedPrice. 
   
7. It will print out the value of finalPrice which is 150 at line 14. Although the variable finalPrice is defined with the keyword let, the define statement and the console statement are within the same block which means the variable is also accessed in the console statement and can be successfully printed out. 
   
8. It will return an discounted array with the values of 50, 100, and 150. Although the variable discounted is defined with the keyword let, the define statement is within the function and not other block which means the variable is accessed in the whole function and can be successfully returned.
   
9.  Error becasue the variable i is defined with the keyword let within the for loop block which means it is only accessed within this block. The console statement is not within the for loop block, so it will cause an error if we try printing out the value i.
    
10. It will print out the value of length which is 3 at line 12. The variable length is defined with the keyword const which means it can not be reassigend. In the whole function, length has been never reassigned, so it won't cause any error and the value can be successfully printed out. 
    
11. It will return an discounted array with the values of 50, 100, and 150. Although the variable discounted is defined with the keywod const, it has been never reassigned as it won't cause any error and the array can be successfully returned. 
    
12. Given the above Object: 
    A. Accessing the value of the name property in the student object: student.name
    B. Accessing the value of the Grad Year property in the student object: student["Grad year"]
    C. Calling the function for the greeting property in the student object: student.greeting()
    D. Accessing the name property of the object in the Favorite Teacher property in student: student["Favorite Teacher"].name
    E. Access the first index in the array of the courseLoad property of the student object: student.courseLoad[0]

13. Arithmetic:
    A. ‘3’ + 2 = '32' since integer 2 maps to its exact string representation
    B. '3' - 2 = 1 since string '3' maps to its integer representation and then minus 2, we get 3-2=1
    C. 3 + null = 3 since null maps to 0, we get 3 + 0 = 3
    D. '3' + null = '3null' since null maps to its exact string representation
    E. true + 3 = 4 since true maps to 1, we get 1 + 3 = 4
    F. false + null = 0 since false and null both maps to 0, we get 0 + 0 = 0
    G. '3' + undefined = '3undefined' since undefined will map to its exact string representation
    H. '3' - undefined = NaN since string '3' maps to its integer and undefined maps to NaN, minusing an NaN still gets an NaN

14. Comparison:
    A. ‘2’ > 1 = true since string '2' becomes an integer number 2 and 2 > 1, it is true. 
    B. ‘2’ < ‘12’ = false since the first character of string '2' is greater than the first character of string '12'.
    C. 2 == ‘2’ = true since string '2' converts its values to number 2. 
    D. 2 === ‘2’ = false since === is for type check and these two values have different, it is false.
    E. true == 2 = false since true maps to 1, it is false
    F. true === Boolean(2) = true since Boolean(2) maps to true type, it is true

15. Explain the difference between the == and === operators.
    == is for a non-strict check and === is for a strict check which means both tests will compare values, but === checks the equality without type conversion and == checks regardless of the data type of the variables as it won't compare their datatype. 

17. The function modifyArray is called with the parameters array = [1,2,3] and callback = doSomething. In the function, we use a for loop. In each for loop , we read each values in the array, get the new values by calling the function of callback which multiples the value by two, and then push the new values into the newArr which we create at first. After the for loop, we return newArr which stores the values [2,4,6]. Hence, the result will be an array with values [2,4,6].

19. 1 4 3 2
