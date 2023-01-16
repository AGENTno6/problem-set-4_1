### Short Response Section
Answer short response questions directly in this markdown file. Answer questions in 2 - 3 sentences. Be sure to format your responses appropriately.

1. In the browser, what serves as the global object?

> In the browser, the window object serves as the global object.

2. In the Node.js environment, what serves as the global object?

> In the Node.js environment, the global object serves as the global object.

3. In the browser environment, what does the following log? **Why?**
      ```javascript
      a = 10;

      console.log(window.a);
      ```      

> In the browser environment, the following code should log the number 10. It should log the number 10 because the variable `a` is declared globally and I know this because it was declared without a keyword; therefore, when referencing the window object when calling the variable, it will log to the console, the value initialized with the identifier name "a" in the window object which is 10.

##### All following code snippets should be run in the browser environemnt: 

4. What does the following code log? **Why**?
      ```javascript
      var b = 100;

      console.log(window.b);
      ```

> In the browser environment, the following code should log the number 100. It should log the number 100 because the variable `b` is declared globally and I know this because it was declared with the `var` keyword; therefore, when referencing the window object when calling the variable, it will log to the console, the value initialized with the identifier name "b" in the window object which is 100.

5. What does the following code log? **Why**?
      ```javascript
      let c = 9;
      const d = 11;

      console.log(window.c);
      console.log(window.d);
      ```

> This code will return undefined being that both variables c and d are not globally declared variables. I know this because of the keywords, `let` and `const`, used to declare the variables. These variables have not been declared nor defined in the window object therefore when trying to reference this object in logging the variables to the console, it returns undefined.

6. What does the following code log? Why?
      ```javascript
      function func() {
        var x = 1;
      }

      func();

      console.log(x);
      ```

> This code snippet is going to log the number 1 to the console because the variable, x, is declared using the keyword `var`. This initialization is added to the global object as its property which is why regardless of scope, the console is able to log the value of x. 

7. What does the following code log? Explain the difference, if any, between this output and that of problem 6.
      ```javascript
      function func() {
        x = 1;
      }

      func();

      console.log(x);
      ```

> The following code will log the number 1 to the console because the variable, x, is declared without a keyword which means that it is being declared globally or in the global object as its property. This  is why regardless of scope, the console is able to log the value of x. There is no difference in output of the snippets in each problem.

8. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```

> This code will log the Window object. It will log the window object because the when the function is invoked, it's job is to execute returning the value of `this`. In the fourth line of code, the invocation of the function is stored in a variable, context. In the last line, the console is commanded to log the value of the variable, context. The value initialized with the variable, context, is the value of `this`, which when referring to the environment the code is being ran in,the browser; `this` refers to the window object.

9. What will the following code log? Explain the difference, if any, between this output and that of problem 8.
      ```javascript
      const obj = {
        func: function() {
          return this;
        },
      };

      let context = obj.func();

      console.log(context);
      ```

> The code logs the `func` object. The difference between the two code snippets are immense but important things to note are that the function, func in problem 8 is declared globally and the function, func, in question 9 is declared as a property of an object, obj. The value of `this` is the closest "parent" object and in regards to the use of `this` in question 9, the closest parent object is the function object in which the keyword is within.

10. What will the following code produce? **Why**? 
      ```javascript
      var x = 10;
      var y = 10;
      var z = {
        x: -10,
        y: -10,
      };

      function add() {
        return this.x + y;
      }

      z.add = add;

      console.log(add());
      console.log(z.add());
      ```

> This code produces the values 20 and 0 logged to the console. In the first three lines of this snippet, variables x and y are declared globally using the `var` keyword with values of 10. In the following line and object, z, is initialized with two properties, x and z which both hold values of -10. The function, `add` is then declared and is supposed return `this.x + y`. In the following line of code, the add function is called on the z object and in the final two lines of code, the console is commanded to log an invocation of the add function and then run the add function called on the z object. In return the console logs 20 when commanded, `console.log(add());` This is because the function is referring to the globally declared value of x and y. It is especially specified that the function is referring to the globally declared x and that of which within the z object because the `this` keyword is used. 
> The console logs 0 when commanded `console.log(z.add())` because when the add function is called on the z object; the function refers to the values within the closest parent object which is z. `this.x` evaluates to -10 and the function refers to the globally declared value of y which is 10. When adding -10 and 10, the answer is 0.