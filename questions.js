export const questions = [
  {
    question: "What will be the outcome of the following code snippet?",
    image: "images/image1.png",
    answers: [
      { text: "0 1 2 3 4", correct: false },
      { text: "0 1 2 4", correct: true },
      { text: "1 2 3 4", correct: false },
      { text: "0 1 2 3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code snippet provided iterates through the numbers 0 to 4 using a for loop. During each iteration, it checks if the current value of i is equal to 3. If i is 3, the continue statement is executed, which skips the rest of the loop for that iteration. <br><br>As a result, the number 3 is not printed. For all other values of i, the code proceeds to print the value. Therefore, the output of the code will be the numbers 0, 1, 2, and 4, with the number 3 being skipped.",
    link: "https://www.geeksforgeeks.org/python-continue-statement/",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image2.png",
    answers: [
      { text: "2.5", correct: true },
      { text: "2", correct: false },
      { text: "2.0", correct: false },
      { text: "2.25", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code performs a division. The result is a floating point number, giving the output 2.5.",
    link: "https://www.geeksforgeeks.org/division-operators-in-python/",
  },
  {
    question: "What is the the output of the following code snippet?",
    image: "images/image3.png",
    answers: [
      { text: '"Python"', correct: false },
      { text: '"nohtyP"', correct: true },
      { text: '"nythoP"', correct: false },
      { text: "Error: invalid syntax", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code reverses the string 'Python' using slicing, resulting in 'nohtyP'.",
    link: "https://www.w3schools.com/python/gloss_python_string_slice.asp",
  },
  {
    question: "What is the correct way to define a tuple in Python?",
    answers: [
      { text: "tuple = (1,2,3)", correct: true },
      { text: "tuple = [1,2,3]", correct: false },
      { text: "tuple = {1,2,3}", correct: false },
      { text: 'tuple = "1,2,3"', correct: false },
    ],
    explanation:
      "Explanation:<br><br>Tuples in Python are defined using parentheses. <br><br>For example: tuple = (1,2,3)",
    link: "https://www.w3schools.com/python/python_tuples.asp",
  },
  {
    question: "Which of the following data types is mutable in Python?",
    answers: [
      { text: "String", correct: false },
      { text: "Tuple", correct: false },
      { text: "List", correct: true },
      { text: "Dictionary", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Lists in Python are mutable. They can be modified after they are created.",
    link: "https://runestone.academy/ns/books/published/py4e-int/lists/mutable.html",
  },
  {
    question:
      "What is the purpose of the 'else' clause in a Python 'if' statement?",
    answers: [
      { text: "It is executed if the 'if' condition is True.", correct: false },
      {
        text: "It is executed if any 'elif' condition is True.",
        correct: false,
      },
      {
        text: "It is executed if none of the 'if' or 'elif' conditions are True.",
        correct: true,
      },
      {
        text: "It is executed before the 'if' condition is checked.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'else' clause in an 'if' statement is executed if none of the preceding conditions ('if' or 'elif') are True.",
    link: "https://docs.python.org/3/reference/compound_stmts.html#else",
  },
  {
    question:
      "How can you open a file named 'example.txt' in Python for writing?",
    answers: [
      { text: "file = open('example.txt', 'r')", correct: false },
      { text: "file = open('example.txt', 'w')", correct: true },
      { text: "file = open('example.txt', 'a')", correct: false },
      { text: "file = open('example.txt', 'x')", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'w' mode opens the file for writing and truncates the file if it already exists",
    link: "https://www.w3schools.com/python/python_file_open.asp",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image4.png",
    answers: [
      { text: "[1,2,3,4,5]", correct: false },
      { text: "[2,4,6,8,10]", correct: false },
      { text: "[1,4,9,16,25]", correct: true },
      { text: "[5,4,3,2,1]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code squares each element in the list [1,2,3,4,5] and stores the results in a new list [1,4,9,16,25], using list comprehension.",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question:
      "How do you pass a variable number of arguments to a Python function?",
    answers: [
      { text: "Using a tuple", correct: false },
      { text: "Using a list", correct: false },
      { text: "Using the *args syntax", correct: true },
      { text: "Using the **kwargs syntax", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'args' and 'kwargs' parameters in Python functions are used to pass variable number of arguments to the function, for example: <br><br>def my_function(*args, **kwargs):",
    link: "https://www.freecodecamp.org/news/args-and-kwargs-in-python/",
  },
  {
    question: "In Python, what does the 'pass' statement do?",
    answers: [
      { text: "Terminates the program.", correct: false },
      { text: "Skips the current iteration in a loop.", correct: false },
      { text: "Raises an exception.", correct: false },
      { text: "Has no effect; it is a null operation.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'pass' statement is used to create a placeholder for future code.",
    link: "https://www.w3schools.com/python/ref_keyword_pass.asp",
  },
  {
    question: "What does the 'break' statement do in a loop?",
    answers: [
      {
        text: "Exits the loop and continues with the next iteration.",
        correct: true,
      },
      { text: "Exits the loop and terminates the program.", correct: false },
      {
        text: "Skips the current iteration and continues with the next one.",
        correct: false,
      },
      { text: "Has no effect on the loop.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'break' statement is used to exit a loop, for example, the 'break' statement is used to break out of the loop when a certain condition is met.",
    link: "https://www.tutorialspoint.com/python/python_break_statement.htm",
  },
  {
    question: "How can you check if a key is present in a Python dictionary?",
    answers: [
      { text: "Using the 'find' method", correct: false },
      { text: "Using the 'exists' keyword", correct: false },
      { text: "Using the 'in' keyword", correct: true },
      { text: "Using the 'has_key' method", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'in' keyword is used to check if a key is present in a dictionary, for example:<br><br>if 'key' in my_dict",
    link: "https://stackoverflow.com/questions/1602934/check-if-a-given-key-already-exists-in-a-dictionary",
  },
  {
    question:
      "What is the purpose of the 'finally' clause in a 'try-except-finally' block?",
    answers: [
      { text: "It is executed when an exception occurs.", correct: false },
      {
        text: "It is executed regardless of whether an exception occurs or not.",
        correct: true,
      },
      {
        text: "It is executed before the 'try' block is checked.",
        correct: false,
      },
      {
        text: "It is executed if the 'except' block is skipped.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'finally' clause is used to execute code, regardless of whether an exception occurs or not, for example:<br><br>try: print('Hello') <br>finally: print('World').",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "Which of the following is a correct way to import a module named 'example' in Python?",
    answers: [
      { text: "import example", correct: true },
      { text: "require example", correct: false },
      { text: "from example import module", correct: false },
      { text: "include example", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'import' statement is used to import a module.",
    link: "https://www.w3schools.com/python/python_modules.asp",
  },
  {
    question: "What is the purpose of the 'pop' method in Python lists?",
    answers: [
      { text: "Appends an element to the end of the list.", correct: false },
      { text: "Removes the last element from the list.", correct: false },
      { text: "Removes the element at a specific index.", correct: true },
      { text: "Retrieves the element at a specific index.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'pop' method removes the element at the specified index and returns it, for example: list.pop(0).",
    link: "https://www.w3schools.com/python/ref_list_pop.asp",
  },
  {
    question:
      "Which of the following is a correct way to open a file and automatically close it when done?",
    answers: [
      { text: "file = open('example.txt', 'r').close()", correct: false },
      { text: "with open('example.txt', 'r') as file:", correct: true },
      { text: "file = open('example.txt', 'r')file.close()", correct: false },
      { text: "open('example.txt', 'r').read()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'with' statement is used to open a file and automatically close it when done, for example:<br><br>with open('example.txt', 'r') as file:",
    link: "https://www.geeksforgeeks.org/with-statement-in-python/",
  },
  {
    question: "What is the purpose of the 'zip' function in Python?",
    answers: [
      { text: "Compresses files into a zip archive.", correct: false },
      { text: "Combines two or more lists into pairs.", correct: true },
      {
        text: "Creates a zip file containing the program code.",
        correct: false,
      },
      { text: "Unzips compressed files.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'zip' function combines two or more lists into pairs, for example:<br><br>zip(list1, list2).",
    link: "https://www.w3schools.com/python/ref_func_zip.asp",
  },
  {
    question:
      "Which of the following is a correct way to concatenate two strings in Python?",
    answers: [
      { text: 'str1="Hello"', correct: false },
      { text: 'str2="World"', correct: false },
      { text: "result = str1 + str2", correct: true },
      { text: "result = str1 - str2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'str1' and 'str2' variables are used to concatenate the strings, for example:<br><br>str1 = 'Hello'<br>str2 = 'World'<br>result = str1 + str2.",
    link: "https://www.w3schools.com/python/gloss_python_string_concatenation.asp",
  },
  {
    question: "What is the purpose of the 'lambda' keyword in Python?",
    answers: [
      { text: "Declares a variable with a fixed value.", correct: false },
      { text: "Defines an anonymous function.", correct: true },
      { text: "Creates a list comprehension.", correct: false },
      {
        text: "Specifies a constant in a mathematical expression.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'lambda' keyword is used to create an anonymous function, for example: lambda x: x + 1. It can be used as a shorthand for defining a function with only one line of code.",
    link: "https://www.w3schools.com/python/python_lambda.asp",
  },
  {
    question:
      "What does the term 'abstraction' mean in the context of object-oriented programming?",
    answers: [
      { text: "Exposing all internal details of an object.", correct: false },
      {
        text: "Hiding implementation details and exposing only essential features.",
        correct: true,
      },
      { text: "Creating objects without defining a class.", correct: false },
      { text: "Using abstract classes exclusively.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'abstraction' term means hiding implementation details and exposing only relevant features, for example: abstraction is used to create objects without defining a class.",
    link: "https://softwareengineering.stackexchange.com/questions/230401/confused-about-the-definition-of-abstraction-in-oop",
  },
  {
    question: "What is the role of the'__str__' method in Python classes?",
    answers: [
      { text: "To create a new instance of the class.", correct: false },
      { text: "To define a subclass.", correct: false },
      { text: "To access private attributes.", correct: false },
      {
        text: "To convert an object to a string representation.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The '__str__' method is used to convert an object to a string representation, for example: str(object). It is used to print the object's value when it is converted to a string.",
    link: "https://www.educative.io/answers/what-is-the-str-method-in-python",
  },
  {
    question:
      "How does the 'protected' access modifier in Python contribute to encapsulation?",
    answers: [
      {
        text: "It allows unrestricted access to attributes from outside the class.",
        correct: false,
      },
      {
        text: "It restricts access to attributes only within the same module.",
        correct: false,
      },
      {
        text: "It restricts access to attributes within the class and its subclasses.",
        correct: true,
      },
      {
        text: "It prohibits access to attributes within the class.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'protected' access modifier in Python allows access to attributes within the class and its subclasses, for example: protected attribute.",
    link: "https://www.geeksforgeeks.org/access-modifiers-in-python-public-private-and-protected/",
  },
  {
    question:
      "What is the primary purpose of the 'classmethod' decorator in Python?",
    answers: [
      { text: "To create a new instance of the class.", correct: false },
      { text: "To define a static method.", correct: false },
      { text: "To access class-specific data.", correct: true },
      { text: "To call a method from within another method.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'classmethod' decorator is used to create static methods in Python, for example:<br><br>@classmethod def static_method(cls, arg1, arg2): pass",
    link: "https://www.geeksforgeeks.org/classmethod-in-python/",
  },
  {
    question:
      "Why is multiple inheritance considered a complex feature in object-oriented programming?",
    answers: [
      { text: "It leads to code redundancy.", correct: false },
      { text: "It can result in the 'diamond problem'.", correct: true },
      { text: "It restricts code organization.", correct: false },
      { text: "It simplifies method resolution order.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The diamond problem is an ambiguity that arises in multiple inheritance when a class inherits from two classes that both inherit from a common base class. This creates a diamond-shaped hierarchy, leading to ambiguity about which inherited version of methods or properties from the base class the final class should use.",
    link: "https://stackoverflow.com/questions/225929/what-is-the-exact-problem-with-multiple-inheritance",
  },
  {
    question:
      "What is the primary purpose of encapsulation in object-oriented programming?",
    answers: [
      { text: "To simplify code and reduce redundancy.", correct: false },
      { text: "To achieve code reusability.", correct: false },
      {
        text: "To hide implementation details and protect data.",
        correct: true,
      },
      { text: "To facilitate communication between objects.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The primary purpose of encapsulation in object-oriented programming is to restrict direct access to an object's internal data and methods, thereby protecting the object's state and ensuring controlled interaction through defined interfaces. This promotes data integrity and abstraction by allowing internal implementation details to be hidden from the outside world.",
    link: "https://stackoverflow.com/questions/75715054/need-help-to-verify-own-interpretation-of-the-main-purpose-of-the-encapsulation",
  },
  {
    question:
      "In Python, what is the relationship between a subclass and a superclass?",
    answers: [
      { text: "A subclass is derived from a superclass.", correct: true },
      { text: "A superclass is a subset of a subclass.", correct: false },
      { text: "A subclass is equivalent to a superclass.", correct: false },
      { text: "A superclass inherits from a subclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, a subclass inherits attributes and methods from a superclass, allowing the subclass to extend or override the functionality of the superclass. This relationship enables code reuse and hierarchical organization of related classes.",
    link: "https://python-course.eu/oop/inheritance.php",
  },
  {
    question:
      "What is the purpose of polymorphism in object-oriented programming?",
    answers: [
      { text: "To organize code into modular units.", correct: false },
      { text: "To achieve code reusability.", correct: false },
      { text: "To allow objects to take on multiple forms.", correct: true },
      { text: "To enforce data hiding and protection.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Polymorphism is the ability of an object to take on multiple forms. It allows objects to have different behaviors or actions based on their data or state.",
    link: "https://stackoverflow.com/questions/1031273/what-is-polymorphism-what-is-it-for-and-how-is-it-used",
  },
  {
    question: "How does a class in Python differ from an object?",
    answers: [
      {
        text: "A class is a blueprint, and an object is an instance of a class.",
        correct: true,
      },
      { text: "A class is an instance of an object.", correct: false },
      {
        text: "A class and an object are interchangeable terms.",
        correct: false,
      },
      {
        text: "A class represents data, while an object represents behavior.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>In Python, a class is a blueprint for creating objects, defining their attributes and behaviors, while an object is an instance of a class, representing a specific entity with its unique state and behavior. Classes serve as templates for creating multiple objects with similar properties and methods.",
    link: "https://www.w3schools.com/python/python_classes.asp",
  },
  {
    question:
      "What keyword is used in Python to create a constructor in a class?",
    answers: [
      { text: "initialize", correct: false },
      { text: "construct", correct: false },
      { text: "__init__", correct: true },
      { text: "create", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The '__init__' method is used to initialize class variables, for example:<br><br>def __init__(self, arg1, arg2): pass",
    link: "https://www.geeksforgeeks.org/__init__-in-python/",
  },
  {
    question: "What is the purpose of the 'super()' function in Python?",
    answers: [
      { text: "To call the superclass constructor.", correct: true },
      { text: "To create a new object.", correct: false },
      { text: "To access private attributes.", correct: false },
      { text: "To define a subclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'super()' function is used to call the superclass constructor, for example: <br><br>super().__init__(arg1, arg2)",
    link: "https://www.w3schools.com/python/ref_func_super.asp",
  },
  {
    question:
      "How does the concept of abstraction relate to object-oriented programming?",
    answers: [
      {
        text: "Abstraction allows objects to be created without a class.",
        correct: false,
      },
      {
        text: "Abstraction involves hiding implementation details and exposing only relevant information.",
        correct: true,
      },
      { text: "Abstraction is used for code reusability.", correct: false },
      {
        text: "Abstraction is only applicable to procedural programming.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>In object-oriented programming, abstraction involves hiding the complex implementation details of objects and exposing only essential features or functionalities to the outside world. This simplifies the usage of objects, enhances code readability, and allows programmers to focus on the high-level structure and behavior of their systems.",
  },
  {
    question:
      "What is the significance of the 'self' parameter in Python class methods?",
    answers: [
      { text: "It denotes the class itself.", correct: false },
      { text: "It represents the superclass.", correct: false },
      {
        text: "It is used to create a new instance of the class.",
        correct: false,
      },
      {
        text: "It refers to the current instance of the class.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'self' parameter in Python class methods refers to the instance of the class itself, allowing methods to access and modify the object's attributes and methods. It enables object-oriented programming principles such as encapsulation and allows for the distinction between instance and class variables.",
    link: "https://www.geeksforgeeks.org/self-in-python-class/",
  },
  {
    question:
      "Which of the following best describes the 'is-a' relationship in object-oriented programming?",
    answers: [
      {
        text: "Objects of different types can be treated as objects of a common type.",
        correct: true,
      },
      {
        text: "Objects of the same type have different behaviors.",
        correct: false,
      },
      {
        text: "Objects can be created without defining a class.",
        correct: false,
      },
      { text: "Objects cannot inherit from each other.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'is-a' relationship in object-oriented programming refers to inheritance, where a subclass is said to 'be' a superclass, implying a hierarchical relationship between classes. It indicates that the subclass shares common characteristics and behaviors with the superclass and can be treated as an instance of the superclass.",
    link: "https://www.geeksforgeeks.org/implementation-of-composition-has-a-relation-in-python/",
  },
  {
    question: "What does the term 'method overloading' refer to in Python?",
    answers: [
      { text: "Calling a method from within another method.", correct: false },
      { text: "Creating multiple instances of a class.", correct: false },
      {
        text: "Defining multiple methods with the same name but different implementations in a class.",
        correct: true,
      },
      { text: "Overriding a method in a subclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, method overloading refers to defining multiple methods with the same name in a class, but with different parameters or argument types. This allows the same method name to behave differently based on the number or type of arguments passed to it.",
    link: "https://www.geeksforgeeks.org/python-method-overloading/",
  },
  {
    question:
      "How does encapsulation contribute to the principle of data protection in objectoriented programming?",
    answers: [
      {
        text: "Encapsulation makes data accessible to all classes.",
        correct: false,
      },
      {
        text: "Encapsulation allows data to be modified directly by external code.,",
        correct: false,
      },
      {
        text: "Encapsulation restricts access to data within a class.",
        correct: true,
      },
      {
        text: "Encapsulation has no impact on data protection.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>Encapsulation in object-oriented programming contributes to data protection by restricting direct access to an object's internal data, allowing access only through defined interfaces (methods). This prevents unauthorized modification or access to the object's state, enhancing data security and integrity.",
  },
  {
    question:
      "Inheritance in object-oriented programming is primarily used for:",
    answers: [
      { text: "Code organization and modularity.", correct: false },
      { text: "Achieving code reusability.", correct: true },
      { text: "Facilitating communication between objects.", correct: false },
      { text: "Enforcing encapsulation principles.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Inheritance in object-oriented programming is primarily used for code reuse and establishing hierarchical relationships between classes. It allows subclasses to inherit attributes and methods from a superclass, promoting modularity, extensibility, and abstraction in software design.",
    link: "https://www.w3schools.com/python/python_inheritance.asp",
  },
  {
    question: "What is the purpose of the 'del' statement in Python?",
    answers: [
      { text: "To delete a class definition.", correct: false },
      { text: "To remove an element from a list.", correct: false },
      { text: "To delete a variable or an object.", correct: true },
      { text: "To delete a method from a class.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'del' statement is used to delete a variable or an object, for example: <br><br> del variable_name.",
    link: "https://www.w3schools.com/python/ref_keyword_del.asp",
  },
  {
    question:
      "How does polymorphism contribute to code flexibility in object-oriented programming?",
    answers: [
      { text: "By enforcing strict data types.", correct: false },
      { text: "By allowing objects to take on multiple forms.", correct: true },
      {
        text: "By restricting method calls to the same class.",
        correct: false,
      },
      { text: "By preventing the use of inheritance.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Polymorphism in object-oriented programming contributes to code flexibility by allowing objects of different classes to be treated uniformly through a common interface. <br>This enables the same code to operate on different types of objects, promoting code reuse, modularity, and adaptability to changing requirements.",
  },
  {
    question:
      "Which keyword is used in Python to create a static method in a class?",
    answers: [
      { text: "staticmethod", correct: false },
      { text: "static", correct: false },
      { text: "@staticmethod", correct: true },
      { text: "methodstatic", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Static methods are methods that are not associated with a particular instance of a class. They are defined using the 'staticmethod' keyword in Python.",
    link: "https://www.geeksforgeeks.org/python-staticmethod-function/",
  },
  {
    question: "What is the purpose of the 'ord()' function in Python?",
    answers: [
      { text: "Converts a character to its Unicode code point", correct: true },
      { text: "Calculates the absolute value of a number", correct: false },
      {
        text: "Rounds a floating-point number to the nearest integer",
        correct: false,
      },
      { text: "Returns the maximum value in an iterable", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'ord()' function in Python converts a character to its Unicode code point. It returns the integer value of the character, for example: <br><br> ord('a') = 97",
    link: "https://www.w3schools.com/python/ref_func_ord.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image5.png",
    answers: [
      { text: "nohtyp", correct: true },
      { text: "p", correct: false },
      { text: "python", correct: false },
      { text: "ythonp", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code uses slicing with a step of -1 to reverse the string 'python', resulting in 'nohtyp'.",
    link: "https://www.w3schools.com/python/python_strings_slicing.asp",
  },
  {
    question:
      "Which method is used to remove the last element from a list in Python?",
    answers: [
      { text: "remove()", correct: false },
      { text: "delete()", correct: false },
      { text: "truncate()", correct: false },
      { text: "pop()", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'pop()' method is used to remove the last element from a list in Python, for example: <br><br> list.pop()",
    link: "https://www.w3schools.com/python/ref_list_pop.asp",
  },
  {
    question:
      "What data structure is best suited for implementing a LIFO (Last In, First Out) structure?",
    answers: [
      { text: "List", correct: false },
      { text: "Set", correct: false },
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A stack is designed to follow the LIFO principle, making it the most suitable data structure for such a scenario. It allows elements to be added and removed only from the top.",
    link: "https://realpython.com/queue-in-python/#stack-last-in-first-out-lifo",
  },
  {
    question:
      "Which built-in function in Python is used to find the length of a list?",
    answers: [
      { text: "size()", correct: false },
      { text: "count()", correct: false },
      { text: "length()", correct: false },
      { text: "len()", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'len()' function in Python is used to find the length of a list, for example: <br><br> len(list)",
    link: "https://www.w3schools.com/python/ref_func_len.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image6.png",
    answers: [
      { text: "[1, 4, 9, 16, 25]", correct: false },
      { text: "[4, 16]", correct: true },
      { text: "[1, 9, 25]", correct: false },
      { text: "[1, 4, 16]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The list comprehension squares only the even numbers from the original list, resulting in [4, 16].",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question:
      "In Python, which module is used for regular expression (RegEx) operations?",
    answers: [
      { text: "regex", correct: false },
      { text: "re", correct: true },
      { text: "regexpy", correct: false },
      { text: "reg", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 're' module in Python provides support for regular expressions (RegEx), allowing manipulation and searching of strings based on specific patterns.",
    link: "https://www.w3schools.com/python/python_regex.asp",
  },
  {
    question: "Which method is used to remove an element from a set in Python?",
    answers: [
      { text: "discard()", correct: true },
      { text: "remove()", correct: false },
      { text: "delete()", correct: false },
      { text: "pop()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'discard()' method is used to remove an element from a set in Python, for example: <br><br> set.discard(element)",
    link: "https://www.w3schools.com/python/ref_set_discard.asp",
  },
  {
    question: "What is the purpose of the 'zip()' function in Python?",
    answers: [
      { text: "To compress files and folders", correct: false },
      { text: "To create a ZIP archive of multiple files", correct: false },
      {
        text: "To combine multiple iterables into tuples of corresponding elements",
        correct: true,
      },
      { text: "To extract files from a ZIP archive", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'zip()' function in Python is used to combine multiple iterables into tuples of corresponding elements, for example: <br><br> zip(list1, list2, list3)",
    link: "https://www.w3schools.com/python/ref_func_zip.asp",
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    answers: [
      { text: "Tuple", correct: false },
      { text: "List", correct: true },
      { text: "String", correct: false },
      { text: "Set", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A list is a mutable data type in Python, which means it can be modified after it has been created.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question: "What is the purpose of the 'enumerate()' function in Python?",
    answers: [
      {
        text: "To iterate over two or more lists simultaneously",
        correct: false,
      },
      { text: "To create an enumerated list", correct: false },
      {
        text: "To get the index and value of items in an iterable",
        correct: true,
      },
      {
        text: "To count occurrences of a specific element in a list",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'enumerate()' function in Python is used to create an enumerated list, for example: <br><br> enumerate(list)",
    link: "https://www.w3schools.com/python/ref_func_enumerate.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image7.png",
    answers: [
      { text: "2", correct: false },
      { text: "3.0", correct: true },
      { text: "2.5", correct: false },
      { text: "15", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code calculates the average of the numbers by adding them up and dividing by the number of elements in the list. The result is 3.0.",
  },
  {
    question:
      "Which method is used to add an element to the end of a list in Python?",
    answers: [
      { text: "append()", correct: true },
      { text: "add()", correct: false },
      { text: "insert()", correct: false },
      { text: "extend()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'append()' method is used to add an element to the end of a list in Python, for example: <br><br> list.append(element)",
    link: "https://www.w3schools.com/python/ref_list_append.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image8.png",
    answers: [
      { text: "[2, 4]", correct: true },
      { text: "[1, 3, 5]", correct: false },
      { text: "[1, 2, 3, 4, 5]", correct: false },
      { text: "[4]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The filter() function is applied with a lambda function checking for even numbers, resulting in a list containing only the even numbers from the original list.",
    link: "https://www.w3schools.com/python/ref_func_filter.asp",
  },
  {
    question:
      "Which of the following is used to open a file in binary mode in Python?",
    answers: [
      { text: "'r'", correct: false },
      { text: "'b'", correct: true },
      { text: "'w'", correct: false },
      { text: "'a'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'open()' function in Python is used to open a file in binary mode, for example: <br><br> open(file, 'rb') for reading binary.",
    link: "https://www.w3schools.com/python/ref_func_open.asp",
  },
  {
    question:
      "What is the purpose of the 'setdefault()' method in a Python dictionary?",
    answers: [
      { text: "To set the default value for a key", correct: true },
      { text: "To check if a key exists in the dictionary", correct: false },
      { text: "To add a key-value pair to the dictionary", correct: false },
      { text: "To remove a key from the dictionary", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'setdefault()' method in Python is used to set the default value for a key, for example: <br><br> dictionary.setdefault(key, value)",
    link: "https://www.w3schools.com/python/ref_dictionary_setdefault.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image9.png",
    answers: [
      { text: "[1, 2, 3, 4, 5]", correct: false },
      { text: "[1, 4, 9, 16, 25]", correct: true },
      { text: "[2, 4, 6, 8, 10]", correct: false },
      { text: "[0, 1, 4, 9, 16]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'map()' function applies the lambda function to each element in the list, resulting in the square of each number.",
    link: "https://www.w3schools.com/python/ref_func_map.asp",
  },
  {
    question: "In Python, what does the 'join()' method do for strings?",
    answers: [
      { text: "Splits a string into a list of substrings", correct: false },
      {
        text: "Concatenates elements of a list into a single string",
        correct: true,
      },
      { text: "Reverses the characters in a string", correct: false },
      { text: "Removes leading and trailing whitespaces", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'join()' method in Python is used to concatenate elements of a list into a single string, for example: <br><br> string.join(list)",
    link: "https://www.w3schools.com/python/ref_string_join.asp",
  },
  {
    question:
      "What is the primary focus of the Tornado web framework in Python?",
    answers: [
      { text: "Data analysis", correct: false },
      { text: "Asynchronous web applications", correct: true },
      { text: "Machine learning", correct: false },
      { text: "Web scraping", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The Tornado web framework is used to develop web applications in Python, for example: <br><br> import tornado.web",
    link: "https://www.tornadoweb.org/",
  },
  {
    question:
      "What is the primary purpose of web development using frameworks like Flask or Django?",
    answers: [
      { text: "Creating 3D graphics", correct: false },
      { text: "Developing mobile applications", correct: false },
      { text: "Building web applications", correct: true },
      { text: "Analyzing big data", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The primary purpose of web development using frameworks like Flask or Django is to simplify and expedite the process of building web applications. These frameworks provide a structured and efficient way to handle common web development tasks such as routing, request handling, template rendering, and database interaction, allowing developers to focus on building application logic rather than reinventing the wheel for each project.",
    link: "https://www.djangoproject.com/",
  },
  {
    question: "Which Python library is commonly used for numerical computing?",
    answers: [
      { text: "TensorFlow", correct: false },
      { text: "Scikit-learn", correct: false },
      { text: "NumPy", correct: true },
      { text: "Matplotlib", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The NumPy library is used in Python for numerical computing, for example: <br><br> import numpy",
    link: "https://numpy.org/",
  },
  {
    question: "In the context of Python, what does CRUD operations refer to?",
    answers: [
      { text: "Cryptographic functions", correct: false },
      { text: "File manipulation operations", correct: false },
      { text: "Web scraping techniques", correct: false },
      {
        text: "Database operations (Create, Read, Update, Delete)",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>In the context of Python, CRUD operations refer to the basic operations performed on data in a persistent storage system, such as a database or file.",
    link: "https://en.wikipedia.org/wiki/Create,_read,_update_and_delete",
  },
  {
    question: "What is the primary purpose of the Pandas library in Python?",
    answers: [
      { text: "Game development", correct: false },
      { text: "Data analysis", correct: true },
      { text: "Web scraping", correct: false },
      { text: "Image processing", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The Pandas library is used in Python for data manipulation, for example: <br><br> import pandas",
    link: "https://pandas.pydata.org/",
  },
  {
    question:
      "Which library in Python is commonly used for data visualization?",
    answers: [
      { text: "Seaborn", correct: false },
      { text: "Scrapy", correct: false },
      { text: "NumPy", correct: false },
      { text: "Matplotlib", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The Matplotlib library is used in Python for data visualization, for example: <br><br> import matplotlib",
    link: "https://matplotlib.org/",
  },
  {
    question: "What is Flask in the context of web development?",
    answers: [
      { text: "A template engine", correct: false },
      { text: "A web framework", correct: true },
      { text: "A database management system", correct: false },
      { text: "A machine learning library", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the context of web development, Flask is a lightweight and extensible Python web framework that allows developers to build web applications quickly and easily. It provides tools and libraries for routing requests, handling HTTP methods, rendering templates, and more, making it suitable for building both simple and complex web applications.",
    link: "https://flask.palletsprojects.com/en/1.1.x/",
  },
  {
    question:
      "Which of the following statements is true regarding database connectivity in Python?",
    answers: [
      { text: "Python cannot connect to databases", correct: false },
      {
        text: "Database connectivity is limited to specific versions of Python",
        correct: false,
      },
      {
        text: "Python can integrate with databases for executing CRUD operations",
        correct: true,
      },
      {
        text: "Database connectivity is only possible with MySQL",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>Python can connect to databases, for example: <br><br> import mysql.connector",
    link: "https://www.w3schools.com/python/python_mysql_connect.asp",
  },
  {
    question: "What does NumPy primarily focus on?",
    answers: [
      { text: "Natural language processing", correct: false },
      { text: "Numerical computing", correct: true },
      { text: "Network programming", correct: false },
      { text: "Neural network development", correct: false },
    ],
    explanation:
      "Explanation:<br><br>NumPy primarily focuses on providing support for numerical computing in Python, offering powerful tools for creating, manipulating, and operating on large arrays and matrices of numeric data efficiently.",
    link: "https://numpy.org/",
  },
  {
    question:
      "Which of the following is a key benefit of using web development frameworks like Django?",
    answers: [
      { text: "Increased development time", correct: false },
      { text: "Reduced code complexity", correct: true },
      { text: "Limited scalability", correct: false },
      { text: "Dependency on specific browsers", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Frameworks like Django provide pre-built components, such as authentication, routing, and database handling, which streamline the development process, reduce repetitive tasks, and enable developers to build web applications more quickly and efficiently.",
    link: "https://www.djangoproject.com/",
  },
  {
    question: "What is the role of Matplotlib in Python?",
    answers: [
      { text: "Database management", correct: false },
      { text: "Data analysis", correct: false },
      { text: "Data visualization", correct: true },
      { text: "Machine learning", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The role of Matplotlib in Python is to provide data visualization capabilities, allowing users to create high-quality plots, charts, and graphs to explore and communicate data effectively.",
    link: "https://matplotlib.org/",
  },
  {
    question:
      "In the context of Python, what is the purpose of the Scikit-learn library?",
    answers: [
      { text: "Web development", correct: false },
      { text: "Machine learning", correct: true },
      { text: "Data analysis", correct: false },
      { text: "Network programming", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The Scikit-learn library is used in Python for machine learning, for example: <br><br> import sklearn",
    link: "https://scikit-learn.org/",
  },
  {
    question:
      "Which library in Python is commonly used for creating interactive visualizations?",
    answers: [
      { text: "Seaborn", correct: false },
      { text: "NumPy", correct: false },
      { text: "Plotly", correct: true },
      { text: "Matplotlib", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The Plotly library is used in Python for creating interactive visualizations, for example: <br><br> import plotly",
    link: "https://plotly.com/python/",
  },
  {
    question: "What is the primary purpose of the Seaborn library in Python?",
    answers: [
      { text: "Statistical data visualization", correct: true },
      { text: "Natural language processing", correct: false },
      { text: "Web development", correct: false },
      { text: "Database management", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The Seaborn library is used in Python for statistical data visualization, for example: <br><br> import seaborn",
    link: "https://seaborn.pydata.org/",
  },
  {
    question:
      "Which of the following is a lightweight web framework in Python?",
    answers: [
      { text: "Django", correct: false },
      { text: "Flask", correct: true },
      { text: "Pyramid", correct: false },
      { text: "Tornado", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Flask is a lightweight web framework in Python, for example: <br><br> import flask",
    link: "https://flask.palletsprojects.com/en/1.1.x/",
  },
  {
    question: "What role does SQLAlchemy play in Python?",
    answers: [
      { text: "Web scraping", correct: false },
      { text: "Data analysis", correct: false },
      { text: "Database connectivity", correct: true },
      { text: "Machine learning", correct: false },
    ],
    explanation:
      "Explanation:<br><br>SQLAlchemy is a Python SQL toolkit and Object-Relational Mapping (ORM) library that provides a way to interact with databases using Python objects.",
    link: "https://www.sqlalchemy.org/",
  },
  {
    question: "Which Python library is commonly used for web scraping?",
    answers: [
      { text: "BeautifulSoup", correct: true },
      { text: "Requests", correct: false },
      { text: "SQLAlchemy", correct: false },
      { text: "TensorFlow", correct: false },
    ],
    explanation:
      "Explanation:<br><br> Beautiful Soup is a powerful library for extracting data from HTML and XML files, making it popular for scraping data from websites. It provides convenient methods for navigating and searching HTML/XML documents, allowing users to extract specific information from web pages easily.",
    link: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
  },
  {
    question:
      "Which of the following is NOT a benefit of using web development frameworks like Flask?",
    answers: [
      { text: "Rapid development", correct: false },
      { text: "Code organization", correct: false },
      { text: "Limited flexibility", correct: true },
      { text: "Built-in security features", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Limited flexibility is not a benefit of using web development frameworks like Flask because such frameworks aim to provide structure and conventions to streamline development, rather than allowing unrestricted freedom in implementation.",
    link: "https://www.djangoproject.com/",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image10.png",
    answers: [
      { text: "Result: 5 Finally block", correct: true },
      { text: "Result: 5", correct: false },
      { text: "Division by zero Finally block", correct: false },
      { text: "Division by zero", correct: false },
    ],
    explanation: `Explanation:<br><br>When the function divide(10, 2) is called, it first enters the try block, where it attempts to divide 10 by 2. Since dividing by 2 is a valid operation and does not result in a ZeroDivisionError, the division succeeds, and the result, 5.0, is stored in the variable result.<br><br>Next, because no exception occurred, the except block is skipped entirely. The code then proceeds to the else block, which is executed because the try block completed successfully. In the else block, the function prints the message "Result: " followed by the value of result, which is 5.0.<br><br>Finally, the finally block is executed. This block runs regardless of whether an exception occurred or not. It prints the message "Finally block".`,
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question:
      "What is the purpose of constructors in object-oriented programming?",
    answers: [
      { text: "To provide access modifiers to class members.", correct: false },
      { text: "To provide access modifiers to class members.", correct: false },
      { text: "To define static methods.", correct: false },
      { text: "To create objects of a class.", correct: true },
    ],
    explanation:
      "Explanation:<br><br> Constructors are used to initialize objects of a class. They are called when an object is created.",
    link: "https://www.geeksforgeeks.org/constructors-in-python/",
  },
  {
    question: "Inheritance is a concept in OOP that involves:",
    answers: [
      { text: "Redefining existing methods.", correct: false },
      { text: "Hiding class implementation details.", correct: false },
      { text: "Creating a new class from an existing class.", correct: true },
      { text: "Restricting access to class members.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> Inheritance allows a new class to inherit properties and behaviors from an existing class, creating a hierarchy of classes.",
    link: "https://www.geeksforgeeks.org/inheritance-in-python/",
  },
  {
    question:
      "Which of the following statements about polymorphism is correct?",
    answers: [
      {
        text: "Polymorphism allows objects of different classes to be treated as objects of a common base class.",
        correct: true,
      },
      {
        text: "Polymorphism allows a class to hide its implementation details.",
        correct: false,
      },
      {
        text: "Polymorphism is achieved only through class inheritance.",
        correct: false,
      },
      {
        text: "Polymorphism is used to define static methods.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br> Polymorphism allows objects of different classes to be treated as objects of a common base class, enabling code to be written more generically.",
    link: "https://www.geeksforgeeks.org/polymorphism-in-python/",
  },
  {
    question:
      "What does the 'try-except' block in Python's exception handling do?",
    answers: [
      {
        text: "It ensures a block of code is executed repeatedly.",
        correct: false,
      },
      { text: "It allows you to define custom exceptions.", correct: false },
      {
        text: "It handles exceptions by catching and handling errors.",
        correct: true,
      },
      {
        text: "It defines a context manager for file operations.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br> The 'try-except' block is used to catch and handle exceptions that may occur withing a specific block of code.",
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question:
      "Which of the following is NOT a benefit of using context managers with the 'with' statement in Python?",
    answers: [
      { text: "Automatic resource management.", correct: false },
      { text: "Improved exception handling.", correct: false },
      { text: "Cleaner and more readable code.", correct: false },
      { text: "Simplified regular expression matching.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Context managers with the 'with' statement are used for automatic resource management and improved exception handling, but they are not directly related to regular expression matching.",
    link: "https://realpython.com/python-with-statement/#using-the-python-with-statement",
  },
  {
    question: "What is the purpose of regular expressions in Python?",
    answers: [
      { text: "To perform arithmetic calculations.", correct: false },
      { text: "To manipulate image files.", correct: false },
      {
        text: "To match and manipulate strings based on patterns.",
        correct: true,
      },
      { text: "To manage networking operations.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> Regular expressions are used to match and manipulate strings based on patterns, which are used in various programming languages.",
    link: "https://docs.python.org/3/library/re.html",
  },
  {
    question:
      "Which file mode is used to open a file for both reading and writing in binary format?",
    answers: [
      { text: "'r'", correct: false },
      { text: "'w'", correct: false },
      { text: "'a'", correct: false },
      { text: "'rb+'", correct: true },
    ],
    explanation:
      "Explanation:<br><br> The 'rb+' mode is used to open a file for both reading and writing in binary format.",
    link: "https://stackoverflow.com/questions/15746954/what-is-the-difference-between-rb-and-rb-modes-in-file-objects",
  },
  {
    question: "What does the 'super' keyword do in Python?",
    answers: [
      { text: "It accesses private class members.", correct: false },
      {
        text: "It refers to the parent class of a derived class.",
        correct: true,
      },
      { text: "It defines a static method in a class.", correct: false },
      { text: "It is used to manage exception handling.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> The 'super' keyword is used to refer to the parent class of a derived class, allowing access to its methods and attributes.",
    link: "https://www.geeksforgeeks.org/python-super/",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image11.png",
    answers: [
      { text: "Class A", correct: false },
      { text: "Class B", correct: true },
      { text: "This code will produce an error.", correct: false },
      { text: "No output will be displayed.", correct: false },
    ],
    explanation:
      `Explanation:<br><br>In the provided code, two classes, A and B, are defined. Class B is a subclass of class A, meaning that it inherits from A. Both classes have a method named show.<br><br>The show method in class A is designed to print "Class A", while the show method in class B is designed to print "Class B". When an instance of class B is created and assigned to the variable obj, the show method is called on obj using obj.show().<br><br>Because obj is an instance of class B, the show method in class B is invoked instead of the one in class A. This is an example of method overriding, where the method in the subclass (B) overrides the method with the same name in the superclass (A). As a result, the output of the code is "Class B".`,
    link: "https://www.programiz.com/python-programming/inheritance",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image12.png",
    answers: [
      { text: "Zero Division Error", correct: false },
      { text: "Other Error", correct: false },
      { text: "No Error", correct: false },
      { text: "Zero Division Error Finally block", correct: true },
    ],
    explanation:
      `Explanation:<br><br>When the code is executed, it first enters the try block, where it attempts to divide 10 by 0 with the statement num = 10 / 0. Since dividing by zero is not allowed in Python, this operation raises a ZeroDivisionError.<br><br>Once the ZeroDivisionError occurs, the program immediately jumps to the corresponding except ZeroDivisionError block. This block handles the error by printing the message "Zero Division Error". Since the error has been handled by this specific except block, the subsequent generic except block is not executed.<br><br>The else block is designed to run only if no exceptions occur in the try block. However, because an exception did occur, the else block is skipped and does not execute.<br><br>Finally, the finally block is executed regardless of whether an exception was raised or not. This block prints the message "Finally block".`,
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question: "What is the purpose of the 'raise' keyword in Python?",
    answers: [
      { text: "It is used to define custom exceptions.", correct: true },
      { text: "It is used to declare static methods.", correct: false },
      {
        text: "It is used to create new instances of a class.",
        correct: false,
      },
      { text: "It is used to handle file operations.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> The 'raise' keyword is used to define custom exceptions.",
    link: "https://www.w3schools.com/python/gloss_python_raise.asp",
  },
  {
    question:
      "Which of the following statements about context managers is true?",
    answers: [
      {
        text: "Context managers are used to perform mathematical calculations.",
        correct: false,
      },
      {
        text: "Context managers are used to create GUI elements",
        correct: false,
      },
      {
        text: "Context managers ensure proper resource management using the 'with' statement.",
        correct: true,
      },
      {
        text: "Context managers are used to define inheritance hierarchies.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br> Context managers are used to ensure proper resource management using the 'with' statement.",
    link: "https://realpython.com/python-with-statement/#using-the-python-with-statement",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image13.png",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "This code will produce an error.", correct: false },
      { text: "None", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the given code snippet, a Parent class is defined with an __init__ method that sets an attribute value to 0. A Child class inherits from Parent and has its own __init__ method.<br><br Inside this method, super().__init__() is called to invoke the Parent class's __init__, which initializes self.value to 0.>Following this, self.value is updated to 1 in the Child class's __init__ method.<br><br>When an instance of the Child class is created and stored in the variable obj, the __init__ method of Child is executed. This method first sets self.value to 0 through the parent class's __init__ method and then updates it to 1.<br><br>Therefore, when print(obj.value) is executed, it prints 1 because that is the final value assigned to the value attribute of the Child instance.",
    link: "https://www.programiz.com/python-programming/inheritance",
  },
  {
    question: "In Python, what is the purpose of the 'pass' statement?",
    answers: [
      { text: "It defines a new class.", correct: false },
      { text: "It is used for code commenting.", correct: false },
      { text: "It is used to create loops.", correct: false },
      { text: "It represents a placeholder for future code.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The purpose of the 'pass* statement is to act as a placeholder in the code where a statement is syntactically required but no action is needed. It allows the code to be syntactically complete without performing any operation, often used in stubs for future code or in loops and conditional statements where logic is yet to be implemented.",
    link: "https://www.programiz.com/python-programming/pass-statement",
  },
  {
    question:
      "Which of the following is true about binary file handling in Python?",
    answers: [
      {
        text: "Binary file handling is not supported in Python.",
        correct: false,
      },
      { text: "Binary files can only be read in binary mode.", correct: false },
      {
        text: "Binary files can be read and written using binary mode.",
        correct: true,
      },
      {
        text: "Binary files can only be read using text mode.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>Binary files can be read and written in Python using the binary mode ('b') with the open() function. This mode allows you to handle file data as raw bytes, preserving the exact byte values without any encoding or decoding.",
    link: "https://www.geeksforgeeks.org/file-handling-python/",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image14.png",
    answers: [
      { text: "[ ]", correct: false },
      { text: "['user@example.com']", correct: true },
      { text: "['email']", correct: false },
      { text: "['Hello']", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The regular expression the email adress 'user@example.com' in the given text.",
    link: "https://docs.python.org/3/library/re.html",
  },
  {
    question:
      "Which of the following is NOT a characteristic of object-oriented programming?",
    answers: [
      { text: "Encapsulation", correct: false },
      { text: "Inheritance", correct: false },
      { text: "Functional programming", correct: true },
      { text: "Polymorphism", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Functional programming is a programming paradigm that is distinct from object-oriented programming.",
    link: "https://en.wikipedia.org/wiki/Functional_programming",
  },
  {
    question:
      "What is the purpose of the 'finally' block in exception handling?",
    answers: [
      { text: "It is used to raise custom exceptions.", correct: false },
      {
        text: "It contains code that always executes, whether an exception is raised or not.",
        correct: true,
      },
      { text: "It is used to define exception classes.", correct: false },
      { text: "It is used to suppress exceptions.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> The 'finally' block in exception handling is used to execute code, whether an exception is raised or not.",
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question: "What is the purpose of the __init__ method in a Python class?",
    answers: [
      { text: "It initializes the class attributes.", correct: true },
      {
        text: "It defines the main entry point of the program.",
        correct: false,
      },
      { text: "It imports external modules.", correct: false },
      { text: "It defines the class's superclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> The __init__ method is used to initialize the class attributes of a class when an object of the class is created.",
    link: "https://www.geeksforgeeks.org/__init__-in-python/",
  },
  {
    question: "Functions in Python allow you to:",
    answers: [
      { text: "Execute a block of code only once.", correct: false },
      { text: "Perform arithmetic operations.", correct: false },
      { text: "Group code into reusable blocks.", correct: true },
      { text: "Automatically import modules.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Functions in Python are used to group code into reusable block that can be called upon when needed.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the purpose of the 'return' statement in a function?",
    answers: [
      { text: "It terminates the function.", correct: false },
      { text: "It defines the function's parameters.", correct: false },
      { text: "It specifies the function's name.", correct: false },
      { text: "It provides a value back to the caller.", correct: true },
    ],
    explanation:
      "Explanation:<br><br> The 'return' statement in a function is used to return a value back to the caller of the function.",
    link: "https://www.geeksforgeeks.org/python-return-statement/",
  },
  {
    question:
      "Which of the following statements is true about modules in Python?",
    answers: [
      { text: "Modules are not reusable pieces of code.", correct: false },
      {
        text: "A module can only contain functions, not variables.",
        correct: false,
      },
      { text: "Modules can be organized into packages.", correct: true },
      {
        text: "Modules are only used for graphical user interfaces.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>Modules can be organized into packages, which helps in better organization and structuring of code.",
    link: "https://www.geeksforgeeks.org/modules-in-python/",
  },
  {
    question: "What does the 'with' statement do in Python?",
    answers: [
      { text: "It defines a new variable.", correct: false },
      { text: "It creates aloop.", correct: false },
      { text: "It defines a function.", correct: false },
      {
        text: "It manages resources and ensures proper cleanup.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br> The 'with' statement in Python is used to manage resources and ensure proper cleanup after a block of code is executed.",
    link: "https://www.geeksforgeeks.org/with-statement-in-python/",
  },
  {
    question:
      "Which of the following is true regarding exception handling in Python?",
    answers: [
      { text: "Exceptions should never be caught.", correct: false },
      {
        text: "try-except blocks are used to handle exceptions.",
        correct: true,
      },
      {
        text: "Exceptions can only be raised by the operating system.",
        correct: false,
      },
      {
        text: "All exceptions can be handled using a single 'except' block.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>try-except blocks are used to handle exceptions in Python, allowing you to handle errors in your code.",
    link: "https://www.geeksforgeeks.org/exception-handling-in-python/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image15.png",
    answers: [
      { text: "5.0", correct: true },
      { text: "Error: Division by zero", correct: false },
      { text: "0", correct: false },
      { text: "2.0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code successfully divides 10 by 2, resulting in 5.0 .",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "Which OOP concept allows a class to inherit attributes and methods from another class?",
    answers: [
      { text: "Encapsulation", correct: false },
      { text: "Abstraction", correct: false },
      { text: "Inheritance", correct: true },
      { text: "Polymorphism", correct: false },
    ],
    explanation:
      "Explanation:<br><br> Inheritance allows a class to inherit attributes and methods from another class.",
    link: "https://www.geeksforgeeks.org/inheritance-in-python/",
  },
  {
    question:
      "What is the purpose of encapsulation in object-oriented programming?",
    answers: [
      {
        text: "To hide sensitive data from unauthorized access",
        correct: true,
      },
      { text: "To create new instances of a class", correct: false },
      { text: "To establish a relationship between classes", correct: false },
      { text: "To define the structure of a class", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Encapsulation is used to hide the implementation details of a class from the outside world.",
    link: "https://stackoverflow.com/questions/75715054/need-help-to-verify-own-interpretation-of-the-main-purpose-of-the-encapsulation",
  },
  {
    question:
      "In Python, a class can have multiple methods with the same name but different parameters. This is known as:",
    answers: [
      { text: "Method overriding", correct: false },
      { text: "Method overloading", correct: true },
      { text: "Method encapsulation", correct: false },
      { text: "Method abstraction", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Method overloading is used to create multiple methods with the same name but different parameters in a class.",
    link: "https://www.geeksforgeeks.org/method-overloading-in-python/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image16.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "Both A and B", correct: false },
      { text: "Error: Cannot instantiate B", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The class 'B' inherits from class 'A' and overrides the 'show' method to print 'B'. When 'obj.show()' is called, 'B' is printed.",
  },
  {
    question: "Which statement is true about file handling in Python?",
    answers: [
      { text: "Files can only be read, not written.", correct: false },
      {
        text: "The 'open' function is only used to create new files.",
        correct: false,
      },
      {
        text: "Files must be explicitly closed after reading or writing.",
        correct: true,
      },
      {
        text: "Files are automatically closed when the program terminates.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'with' statement in Python is used to manage resources and ensure proper cleanup after a block of code is executed.",
    link: "https://www.geeksforgeeks.org/file-handling-python/",
  },
  {
    question: "What is the purpose of the 'super' function in Python?",
    answers: [
      { text: "It imports external modules.", correct: false },
      { text: "It returns the superclass of a class.", correct: false },
      { text: "It calls a method from the superclass.", correct: true },
      { text: "It generates random numbers.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'super' function in Python is used to access the superclass of a class.",
    link: "https://www.w3schools.com/python/ref_func_super.asp",
  },
  {
    question:
      "What does the term 'polymorphism' mean in object-oriented programming?",
    answers: [
      {
        text: "The ability of a class to inherit from multiple superclasses.",
        correct: false,
      },
      {
        text: "The practice of hiding sensitive data from unauthorized access.",
        correct: false,
      },
      {
        text: "The ability of a class to override methods from its superclass.",
        correct: false,
      },
      {
        text: "The ability of different classes to be treated as instances of the same class.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>Polymorphism allows different classes to be treated as instances of the same class, enabling more flexible and generic code.",
    link: "https://www.geeksforgeeks.org/polymorphism-in-python/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image17.png",
    answers: [
      { text: "3.14, 4", correct: true },
      { text: "4, 3.14", correct: false },
      { text: "3.14, 3.14", correct: false },
      { text: "4, 4", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The list contains instances of both Circle and Square classes. The overridden 'area' methods are called for each instance, resulting in the output of 3.14 and 4.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "In Python, which module is used to work with dates and times?",
    answers: [
      { text: "datetime", correct: true },
      { text: "time", correct: false },
      { text: "dateutils", correct: false },
      { text: "datetimeutils", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'datetime' module in Python is used to work with dates and times.",
    link: "https://www.w3schools.com/python/python_datetime.asp",
  },
  {
    question:
      "What is the purpose of the 'finally' block in a try-except statement?",
    answers: [
      { text: "It is executed when an exception is raised.", correct: false },
      {
        text: "It is executed after the 'try' block, regardless of an exception.",
        correct: true,
      },
      { text: "It defines the list of exceptions to catch.", correct: false },
      { text: "It is used to skip the execution of code.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'finally' block is executed after the 'try' block, regardless of an exception being raised.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question: "What is the purpose of the 'raise' statement in Python?",
    answers: [
      { text: "To terminate the program.", correct: false },
      { text: "To raise a new exception.", correct: true },
      { text: "To ignore an existing exception.", correct: false },
      { text: "To call a method from a superclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'raise' statement in Python is used to raise an exception.",
    link: "https://www.w3schools.com/python/python_raise.asp",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image18.png",
    answers: [
      { text: "3", correct: false },
      { text: "6", correct: false },
      { text: "9", correct: true },
      { text: "27", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The default value of 'n' is 2, so 'power(3)' calculates 3^2 = 9.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question:
      "Which of the following is an advantage of using object-oriented programming (OOP)?",
    answers: [
      { text: "Decreased code reusability", correct: false },
      { text: "Reduced modularity and organization", correct: false },
      { text: "Increased maintenance complexity", correct: false },
      { text: "Improved code readability and reusability", correct: true },
    ],
    explanation:
      "Explanation:<br><br>OOP improves code readability, reusability and organization by allowing you to model real-world concepts of objects.",
    link: "https://www.w3schools.com/python/python_oop.asp",
  },
  {
    question:
      "Which of the following is NOT part of the Python Standard Library?",
    answers: [
      { text: "pandas", correct: true },
      { text: "NumPy", correct: false },
      { text: "os", correct: false },
      { text: "math", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'pandas' module in Python is used for data manipulation and analysis.",
    link: "https://pandas.pydata.org/",
  },
  {
    question: "What is the primary purpose of NumPy arrays?",
    answers: [
      { text: "Displaying plots", correct: false },
      { text: "Handling text data", correct: false },
      { text: "Storing and manipulating numerical data", correct: true },
      { text: "Defining classes", correct: false },
    ],
    explanation:
      "Explanation:<br><br>NumPy arrays are used to store and manipulate numerical data.",
    link: "https://numpy.org/",
  },
  {
    question:
      "Which library is commonly used for data visualization in Python?",
    answers: [
      { text: "NumPy", correct: false },
      { text: "pandas", correct: false },
      { text: "matplotlib", correct: true },
      { text: "mathplotlib", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'matplotlib' library in Python is used for data visualization.",
    link: "https://matplotlib.org/",
  },
  {
    question: "How are pandas Series different from pandas DataFrames?",
    answers: [
      {
        text: "Series can hold only numerical data, while DataFrames can hold any data type.",
        correct: false,
      },
      {
        text: "Series are one-dimensional, while DataFrames are two-dimensional.",
        correct: true,
      },
      {
        text: "Series are mutable, while DataFrames are immutable.",
        correct: false,
      },
      {
        text: "Series are faster for data manipulation compared to DataFrames.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>Pandas Series are one-dimensional, while pandas DataFrames are two-dimensional.",
    link: "https://pandas.pydata.org/",
  },
  {
    question:
      "What function can be used to remove duplicate values from a pandas DataFrame?",
    answers: [
      { text: "'drop_duplicates()'", correct: true },
      { text: "'remove_duplicates()'", correct: false },
      { text: "'delete_duplicates()'", correct: false },
      { text: "'clean_duplicates()'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'drop_duplicates()' function is used to remove duplicate values from a pandas DataFrame.",
    link: "https://www.geeksforgeeks.org/python-pandas-dataframe-drop_duplicates/",
  },
  {
    question:
      "When customizing plot appearance in matplotlib, which function is used to set the title of a plot?",
    answers: [
      { text: "'plot_title()'", correct: false },
      { text: "'set_title()'", correct: false },
      { text: "'title()'", correct: false },
      { text: "'set_plot_title()'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'set_title()' function is used to set the title of a plot.",
    link: "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.set_title.html",
  },
  {
    question: "Which NumPy function is used to calculate the mean of an array?",
    answers: [
      { text: "'mean()'", correct: true },
      { text: "'average()'", correct: false },
      { text: "'median()'", correct: false },
      { text: "'mode()'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'mean()' function is used to calculate the mean of an array.",
    link: "https://numpy.org/doc/stable/reference/generated/numpy.mean.html",
  },
  {
    question:
      "What is the purpose of data cleaning in the context of data analysis?",
    answers: [
      {
        text: "To make the data look more visually appealing.",
        correct: false,
      },
      { text: "To remove all missing values from the dataset", correct: false },
      {
        text: "To transform the data into a different data type.",
        correct: false,
      },
      {
        text: "To ensure the data is accurate, consistent, and ready for analysis.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>Data cleaning is the process of removing or correcting errors in data.",
    link: "https://en.wikipedia.org/wiki/Data_cleaning",
  },
  {
    question:
      "In pandas, which function is used to filter rows based on a condition?",
    answers: [
      { text: "'filter_rows()'", correct: false },
      { text: "'select_rows()'", correct: false },
      { text: "'query()'", correct: true },
      { text: "'filte()'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'query()' function is used to filter rows based on a condition.",
    link: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.query.html",
  },
  {
    question:
      "Which library is suitable for performing complex mathematical operations in Python?",
    answers: [
      { text: "matplotlib", correct: false },
      { text: "NumPy", correct: true },
      { text: "pandas", correct: false },
      { text: "math", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'NumPy' library in Python is suitable for performing complex mathematical operations.",
    link: "https://numpy.org/",
  },
  {
    question: "What is the purpose of the 'reshape()' function in NumPy?",
    answers: [
      {
        text: "To create a new array by combining two existing arrays.",
        correct: false,
      },
      {
        text: "To change the number of dimensions of an array.",
        correct: true,
      },
      { text: "To modify the data type of array elements.", correct: false },
      { text: "To change the order of elements in an array.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'reshape()' function in NumPy is used to change the number of dimensions of an array.",
    link: "https://numpy.org/doc/stable/reference/generated/numpy.reshape.html",
  },
  {
    question:
      "Which method is used to read a CSV file into a pandas DataFrame?",
    answers: [
      { text: "'read_csv_file()'", correct: false },
      { text: "'load_csv()'", correct: false },
      { text: "'read_csv()'", correct: true },
      { text: "'import_csv()'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'read_csv()' method is used to read a CSV file into a pandas DataFrame.",
    link: "https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html",
  },
  {
    question:
      "In matplotlib, which type of plot is suitable for displaying the distribution of a single numerical variable?",
    answers: [
      { text: "Scatter plot", correct: false },
      { text: "Histogram", correct: true },
      { text: "Line plot", correct: false },
      { text: "Bar plot", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'Histogram' type of plot is suitable for displaying the distribution of a single numerical variable.",
    link: "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html",
  },
  {
    question: "What does the 'loc[ ]' function do in pandas?",
    answers: [
      { text: "It locates the pandas library on the system.", correct: false },
      {
        text: "lt selects rows and columns from a DataFrame using labels.",
        correct: true,
      },
      {
        text: "It calculates the logarithm of the data in a DataFrame.",
        correct: false,
      },
      { text: "It loads an external file into a DataFrame.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'loc[ ]' function in pandas is used to select rows and columns from a DataFrame using labels.",
    link: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.loc.html",
  },
  {
    question:
      "Which of the following is a valid method for handling missing data in pandas?",
    answers: [
      { text: "Removing all rows with missing data", correct: false },
      {
        text: "Replacing missing data with the mean of the entire dataset",
        correct: false,
      },
      {
        text: "Replacing missing data with the median of the column",
        correct: false,
      },
      { text: "All of the above", correct: true },
    ],
    explanation:
      "Explanation:<br><br>All the mentioned methods are valid approaches for handling missing data in pandas, depending on the context and the nature of the data.",
    link: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html",
  },
  {
    question:
      "What does the 'xticks()' function in matplotlib allow you to do?",
    answers: [
      { text: "Add tick marks to the y-axis of a plot.", correct: false },
      {
        text: "Customize the appearance of the x-axis tick labels.",
        correct: true,
      },
      {
        text: "Rotate the x-axis labels for better readability.",
        correct: false,
      },
      {
        text: "Set the range of values displayed on the x-axis.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'xticks()' function in matplotlib allows you to add tick marks to the x-axis of a plot.",
    link: "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.xticks.html",
  },
  {
    question:
      "Which of the following is true about the 'describe()' function in pandas?",
    answers: [
      {
        text: "It displays a summary of basic statistics for each column in a DataFrame.",
        correct: true,
      },
      {
        text: "It generates a detailed description of the data, including outliers",
        correct: false,
      },
      {
        text: "It calculates the correlation matrix of the DataFrame.",
        correct: false,
      },
      { text: "It only works with numerical data.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'describe()' function in pandas displays a summary of basic statistics for each column in a DataFrame.",
    link: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html",
  },
  {
    question: "What is the purpose of the 'scatter()' function in matplotlib?",
    answers: [
      {
        text: "To create a scatter plot to show the relationship between two numerical variables.",
        correct: true,
      },
      { text: "To generate random scatter points on a plot.", correct: false },
      {
        text: "To add a scatter of points on top of an existing plot.",
        correct: false,
      },
      { text: "To create a 3D scatter plot.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The scatter() function in Matplotlib creates scatter plots by displaying individual data points as markers based on their x and y coordinates. It is used to visualize the relationship between two continuous variables, highlighting patterns or correlations in the data.",
    link: "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.scatter.html",
  },
  {
    question:
      "Which of the following methods is used to sort a pandas DataFrame by column values?",
    answers: [
      { text: "'sort()'", correct: false },
      { text: "'sort_values()'", correct: true },
      { text: "'arrange()'", correct: false },
      { text: "'order()'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'sort_values()' method is used to sort a pandas DataFrame by column values.",
    link: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html",
  },
  {
    question: "How can you add a legend to a plot created using matplotlib?",
    answers: [
      { text: "'add_legend()'", correct: false },
      { text: "'legend()'", correct: true },
      { text: "'create_legend()'", correct: false },
      { text: "'show_legend()'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'legend()' function in matplotlib is used to add a legend to a plot created using matplotlib.",
    link: "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.legend.html",
  },
  {
    question:
      "When integrating multiple modules and libraries in a Python project, what is the purpose of virtual environments?",
    answers: [
      {
        text: "To simulate real-world scenarios for testing purposes.",
        correct: false,
      },
      {
        text: "To create isolated environments for different project versions.",
        correct: true,
      },
      {
        text: "To provide graphical user interfaces for the project.",
        correct: false,
      },
      { text: "To automatically generate code documentation.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'virtualenv' module in Python is used to create isolated environments for different project versions.",
    link: "https://docs.python.org/3/library/virtualenv.html",
  },
  {
    question:
      "Which data structure is ideal for storing a collection of unique elements?",
    answers: [
      { text: "List", correct: false },
      { text: "Tuple", correct: false },
      { text: "Set", correct: true },
      { text: "Dictionary", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'set' data structure is ideal for storing a collection of unique elements.",
    link: "https://realpython.com/python-set/",
  },
  {
    question: "What is a major difference between a stack and a queue?",
    answers: [
      { text: "Stacks follow LIFO, while queues follow FIFO.", correct: true },
      { text: "Stacks follow FIFO, while queues follow LIFO.", correct: false },
      { text: "Stacks and queues both follow LIFO.", correct: false },
      { text: "Stacks and queues both follow FIFO.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'stack' data structure follows LIFO (Last In First Out) and the 'queue' data structure follows FIFO (First In First Out).",
    link: "https://realpython.com/queue-in-python/",
  },
  {
    question: "Which of the following is an immutable data type in Python?",
    answers: [
      { text: "List", correct: false },
      { text: "Set", correct: false },
      { text: "Dictionary", correct: false },
      { text: "Tuple", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'tuple' data type is an immutable data type in Python.",
    link: "https://realpython.com/python-tuples/",
  },
  {
    question: "What is the purpose of a generator expression in Python?",
    answers: [
      { text: "To create a new generator object.", correct: false },
      { text: "To build complex data structures.", correct: false },
      { text: "To generate a sequence of values lazily.", correct: true },
      { text: "To create a list comprehensions.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'generator expression' is used to create a new generator object.",
    link: "https://realpython.com/python-generator-expressions/",
  },
  {
    question:
      "When making HTTP requests using the 'requests' library, which HTTP method is used to retrieve data?",
    answers: [
      { text: "GET", correct: true },
      { text: "POST", correct: false },
      { text: "PUT", correct: false },
      { text: "DELETE", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'GET' HTTP method is used to retrieve data from a server.",
    link: "https://realpython.com/python-requests/",
  },
  {
    question:
      "What is the primary advantage of using a frozenset over a regular set in Python?",
    answers: [
      {
        text: "Frozensets support more efficient element insertion.",
        correct: false,
      },
      { text: "Frozensets have better hashing capabilities.", correct: false },
      {
        text: "Frozensets are immutable and can be used as dictionary keys.",
        correct: true,
      },
      { text: "Frozensets have a smaller memory footprint.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'frozenset' data type is an immutable data type in Python.",
    link: "https://realpython.com/python-frozensets/",
  },
  {
    question:
      "Which of the following is NOT an advantage of using version control systems like Git?",
    answers: [
      { text: "Collaboration among team members.", correct: false },
      { text: "Tracking changes and version history.", correct: false },
      { text: "Ensuring 100% bug-free code.", correct: true },
      { text: "Facilitating code review and merging.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'Git' version control system is used to track changes and version history.",
    link: "https://realpython.com/python-git-version-control/",
  },
  {
    question: "What is the purpose of a debugger in programming?",
    answers: [
      { text: "To write and execute test cases.", correct: false },
      {
        text: "To automatically fix syntax errors in the code.",
        correct: false,
      },
      {
        text: "To analyze and troubleshoot code during execution.",
        correct: true,
      },
      { text: "To format the code for better readability.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'debugger' is used to write and execute test cases.",
    link: "https://realpython.com/python-debugging/",
  },
  {
    question:
      "Which of the following best describes the role of a command-line interface (CLI) in a software project?",
    answers: [
      {
        text: "It enables users to interact with the project through graphical elements.",
        correct: false,
      },
      {
        text: "It provides a visual representation of data structures.",
        correct: false,
      },
      {
        text: "It allows users to input commands and receive text-based responses.",
        correct: true,
      },
      {
        text: "It automatically tests the project's codebase for errors.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'command-line interface' is used to enable users to interact with the project through graphical elements.",
    link: "https://realpython.com/python-command-line-interface/",
  },
  {
    question: "What is the primary purpose of a comprehension in Python?",
    answers: [
      { text: "To generate a sequence of numbers.", correct: false },
      {
        text: "To simplify the process of creating complex data structures.",
        correct: true,
      },
      {
        text: "To perform mathematical calculations efficiently.",
        correct: false,
      },
      {
        text: "To create user-friendly command-line interfaces.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'comprehension' is used to simplify the process of creating complex data structures.",
    link: "https://realpython.com/python-list-comprehension/",
  },
  {
    question:
      "Which data structure is used for mapping keys to values in Python?",
    answers: [
      { text: "List", correct: false },
      { text: "Tuple", correct: false },
      { text: "Set", correct: false },
      { text: "Dictionary", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'dictionary' data type is used for mapping keys to values in Python.",
    link: "https://realpython.com/python-dictionaries/",
  },
  {
    question:
      "What is the purpose of parsing JSON responses when working with APIs?",
    answers: [
      { text: "To convert JSON data into a string format.", correct: false },
      { text: "To create complex data structures.", correct: false },
      {
        text: "To convert JSON data into a dictionary-like format.",
        correct: true,
      },
      {
        text: "To remove unnecessary whitespace from JSON data.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'JSON' data type is used for parsing JSON responses when working with APIs.",
    link: "https://realpython.com/python-json/",
  },
  {
    question:
      "In the context of testing, what does the term 'test coverage' refer to?",
    answers: [
      {
        text: "The extent to which code is tested using unit tests.",
        correct: true,
      },
      {
        text: "The percentage of automated tests in the project.",
        correct: false,
      },
      { text: "The number of bugs found during testing.", correct: false },
      { text: "The duration of time spent on testing.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'test coverage' refers to the extent to which code is tested using unit tests.",
    link: "https://realpython.com/python-unit-testing/",
  },
  {
    question:
      "What is the primary purpose of an API (Application Programming Interface)?",
    answers: [
      {
        text: "To provide a graphical user interface for the application.",
        correct: false,
      },
      {
        text: "To define the interaction between different software components.",
        correct: true,
      },
      { text: "To optimize the code execution process.", correct: false },
      {
        text: "To design user-friendly documentation for the project.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'API' is used to provide a graphical user interface for the application.",
    link: "https://realpython.com/python-api/",
  },
  {
    question:
      "Which of the following is a characteristic of a deque (double-ended queue)?",
    answers: [
      { text: "It only supports insertion from the front.", correct: false },
      {
        text: "It follows the Last-In-First-Out (LIFO) order.",
        correct: false,
      },
      {
        text: "It supports constant-time insertion and deletion from both ends.",
        correct: true,
      },
      { text: "It cannot be used to implement a stack.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'deque' data type is used for a double-ended queue.",
    link: "https://realpython.com/python-deque/",
  },
  {
    question:
      "What is the primary advantage of using generator expressions over list comprehensions?",
    answers: [
      { text: "Generator expressions consume less memory.", correct: true },
      {
        text: "Generator expressions allow more complex filtering.",
        correct: false,
      },
      {
        text: "Generator expressions can be used with any data type.",
        correct: false,
      },
      { text: "Generator expressions execute faster.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'generator expression' is used to consume less memory.",
    link: "https://peps.python.org/pep-0289/",
  },
  {
    question:
      "In the context of a software project, what is the purpose of project planning and organization?",
    answers: [
      { text: "To create complex algorithms and functions.", correct: false },
      { text: "To write documentation for the project.", correct: false },
      {
        text: "To outline the project's scope, goals, and timeline.",
        correct: true,
      },
      {
        text: "To design a visually appealing user interface.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'project planning and organization' is used to outline the project's scope, goals, and timeline.",
    link: "https://realpython.com/python-project-planning/",
  },
  {
    question: "What is the role of a RESTful API in web services?",
    answers: [
      { text: "To create visually appealing user interfaces.", correct: false },
      { text: "To manage version control of the project.", correct: false },
      {
        text: "To define a set of principles for secure coding.",
        correct: false,
      },
      {
        text: "To provide a standardized way for clients to interact with the server.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>A RESTful API (Representational State Transfer API) in web services provides a standardized way for applications to communicate over HTTP by exposing endpoints that allow CRUD (Create, Read, Update, Delete) operations on resources. It simplifies the interaction between clients and servers by adhering to REST principles, making web services scalable and easy to integrate.",
    link: "https://realpython.com/python-rest-api/",
  },
  {
    question:
      "Consider the following code snippet. Which of the variables will contain False?",
    image: "images/image19.png",
    answers: [
      { text: "w", correct: false },
      { text: "x", correct: true },
      { text: "y", correct: false },
      { text: "z", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'x' variable will contain False, because the list is basically empty.",
    link: "https://realpython.com/python-empty-list/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image20.png",
    answers: [
      { text: "2", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>insert() inserts an item at a given position. The first argument is the index of the element before which to insert. insert(0, 1) inserts 1 before index 0 (at the front of the list). The del keyword deletes the given object: in this case x[1].The sum() function adds the items of a list (or a different iterable) and returns the sum.",
    link: "https://www.w3schools.com/python/ref_list_insert.asp",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image21.png",
    answers: [
      { text: "3", correct: false },
      { text: "None", correct: false },
      { text: "1", correct: false },
      { text: "4", correct: true },
      { text: "2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The operator precedence of the addition operator is higher than the operator precedence of the multiply and assign operator. That means the addition takes place before the multiplication.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image22.png",
    answers: [
      { text: "['Peter', 'Wellert']", correct: false },
      { text: "['Peter', 404, 3.03, 'Wellert', 33.3]", correct: false },
      { text: "None of the above", correct: false },
      { text: "[404, 3.03]", correct: true },
    ],
    explanation:
      "Explanation:<br><br>You have a list of five elements of various data types. [1:3] slices inclusive the first index and exclusive the third index. Meaning it slices the first and second index.",
    link: "https://www.w3schools.com/python/ref_list_slice.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image23.png",
    answers: [
      { text: "Hello" + "\n" + "Hello" + "\n" + "Hello", correct: false },
      { text: "Hello" + "\n" + "Hello", correct: false },
      { text: "An infinite loop", correct: true },
      {
        text: "Hello" + "\n" + "Hello" + "\n" + "Hello" + "\n" + "Hello",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The incrementation of num needs to be inside of the while loop. Otherwise the condition num > 0 will never be False.",
    link: "https://www.w3schools.com/python/python_while_loops.asp",
  },
  {
    question:
      "What is the expected output of the following code if the user enters 2 and 4?",
    image: "images/image24.png",
    answers: [
      { text: "4", correct: false },
      { text: "2", correct: false },
      { text: "6", correct: false },
      { text: "24", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The input() function returns a string. Therefore a string concatenation takes place and the result is the string 24.",
    link: "https://www.w3schools.com/python/ref_func_input.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image25.png",
    answers: [
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>There are three operators at work here. Of them the NOT operator has the highest precedence, followed by the AND operator. The OR operator has the lowest precedence.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question:
      "An operator able to check whether two values are not equal is coded as:",
    answers: [
      { text: "< >", correct: false },
      { text: "not ==", correct: false },
      { text: "=/=", correct: false },
      { text: "! =", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python the not equal to operator is != . Other languages have <> or =/= as not equal to operators.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image26.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "23", correct: true },
      { text: "100", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The object variable id does not get changed by the initialisation of the local variable id in the __init__() method. They are two different entities.",
    link: "https://www.w3schools.com/python/python_classes.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image27.png",
    answers: [
      { text: "2 1 2", correct: false },
      { text: "1 2 2", correct: false },
      { text: "1 1 2", correct: true },
      { text: "1 2 1", correct: false },
    ],
    explanation: "Explanation:<br><br>This one is simple: x, y, z = 1, 1, 2",
    link: "https://www.w3schools.com/python/python_tuples.asp",
  },
  {
    question: "Which module in Python supports regular expressions?",
    answers: [
      { text: "regex", correct: false },
      { text: "re", correct: true },
      { text: "pyregex", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Python's re module supports regular expressions.",
    link: "https://www.w3schools.com/python/python_regex.asp",
  },
  {
    question:
      "You want to check, whether the variable obj contains an object of the class A. Which of the following statements can you use?",
    answers: [
      { text: "A.isinstance(obj)", correct: false },
      { text: "obj.isinstance(A)", correct: false },
      { text: "isinstance(A, obj)", correct: false },
      { text: "isinstance(obj, A)", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The isinstance() function returns True if the specified object is of the specified type, otherwise False.",
    link: "https://www.w3schools.com/python/ref_func_isinstance.asp",
  },
  {
    question: "How many elements does the L list contain?",
    image: "images/image28.png",
    answers: [
      { text: "three", correct: false },
      { text: "two", correct: false },
      { text: "one", correct: false },
      { text: "zero", correct: true },
    ],
    explanation:
      "Explanation:<br><br>range(-1, -2) has no element and therefore the list L will be empty.",
    link: "https://www.w3schools.com/python/python_lists_loop.asp",
  },
  {
    question:
      "Knowing that a function named randint() resides in the module named random choose the proper way to import it:",
    answers: [
      { text: "from randint import random", correct: false },
      { text: "import randint", correct: false },
      { text: "from random import randint", correct: true },
      { text: "import randint from random", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The module name is random. You have to write the module first. And you import from a module. from the module random you want to import the method randint.",
    link: "https://www.w3schools.com/python/module_random.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image29.png",
    answers: [
      { text: "It outputs None.", correct: false },
      {
        text: "The code is erroneous and will raise an exception.",
        correct: false,
      },
      { text: "It outputs False.", correct: true },
      { text: "It outputs True.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>text_1 and text_2 are two different objects, therefore they are not equal.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image30.png",
    answers: [
      { text: "0", correct: false },
      { text: "0.0", correct: false },
      { text: "0.4", correct: false },
      { text: "0.2", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The operators here come from two different groups: The group 'Multiplication, Division, Floor division, Modulus' has a higher precedence than the group 'Addition, Subtraction'. <br><br>Therefore the order of operations here is: //  →  /  →  +",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image31.png",
    answers: [
      { text: "[ 1, 4 ]", correct: false },
      { text: "[ 4, 3 ]", correct: true },
      { text: "[ 1, 3, 4 ]", correct: false },
      { text: "[ 1, 3 ]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A list is mutable. When you assign it to a different variable, you create a reference of the same object. If afterwards you change one of them, the other one is changed too.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question:
      "Which of the following commands can be used to read n characters from a file?",
    answers: [
      { text: "file.read(n)", correct: true },
      { text: "n = file .read()", correct: false },
      { text: "n = file.readline()", correct: false },
      { text: "file.readline(n)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The read() method reads the entire file and returns it as a string. The readline() method reads only one line of the file and returns it as a string.",
    link: "https://www.w3schools.com/python/ref_file_read.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image32.png",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "True", correct: false },
      { text: "False", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The mathematical constant e is 2.718281828459045. It is true that is not 16.0 like math.pow(2, 4). The integer value of True is 1",
    link: "https://www.w3schools.com/python/python_math.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image33.png",
    answers: [
      { text: "7777777", correct: false },
      { text: "The code is erroneous.", correct: true },
      { text: "49", correct: false },
      { text: "77", correct: false },
    ],
    explanation:
      "Explanation:<br><br>It is not possible to multiply strings like that.",
    link: "https://www.geeksforgeeks.org/create-multiple-copies-of-a-string-in-python-by-using-multiplication-operator/",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image34.png",
    answers: [
      { text: "2 1", correct: true },
      { text: "1 2", correct: false },
      { text: "1 1", correct: false },
      { text: "2 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Integer is an immutable data type. The values get copied from one variable to another. In the end x and y changed their values.",
    link: "https://www.w3schools.com/python/gloss_python_assignment_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image35.png",
    answers: [
      { text: "3 42", correct: true },
      { text: "The code is erroneous.", correct: false },
      { text: "3 1", correct: false },
      { text: "1 1", correct: false },
      { text: "1 42", correct: false },
    ],
    explanation:
      "Explanation:<br><br>This question is about argument passing:<br><br> It is a big difference whether you pass a mutable or an immutable data type. The immutable integer in x gets copied to p1 and the change of p1 does not affect x. The mutable list in y gets referenced to p2 and the change of p2 affects y.",
    link: "https://www.w3schools.com/python/gloss_python_function_arguments.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image36.png",
    answers: [
      { text: "[ 3, 5, 20, 5, 25, 1, 3 ]", correct: true },
      { text: "[ 1, 3, 4, 5, 20, 5, 25 ]", correct: false },
      { text: "[ 1, 3, 3, 4, 5, 5, 20, 25 ]", correct: false },
      { text: "[ 3, 4, 5, 20, 5, 25, 1, 3 ]", correct: false },
      { text: "[ 3, 1, 25, 5, 20, 5, 4 ]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>list.pop([i]) -> The index is optional. If the index is given, pop() removes and returns the element at the given index. The default index is -1 Meaning that the last index is removed and returned. Here the index 1 gets removed: the number 4.",
    link: "https://www.w3schools.com/python/ref_list_pop.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image37.png",
    answers: [
      { text: "2019/Nov/27 11:27:22", correct: false },
      { text: "2019/11/27 11:27:22", correct: false },
      { text: "19/November/27 11:27:22", correct: true },
      { text: "19/11/27 11:27:22", correct: false },
    ],
    explanation:
      "Explanation:<br><br>'%y' = year, <br>'%B' = month fully written, <br>'%d' = day, <br>'%H' = hour, <br>'%M' = minute, <br>'%S' = second. <br><br>The format is '2019/Nov/27 11:27:22'.",
    link: "https://www.w3schools.com/python/python_datetime.asp",
  },
  {
    question:
      "What would you insert instead ??? so that the program checks for even numbers?",
    image: "images/image38.png",
    answers: [
      { text: "x % 1 == 2", correct: false },
      { text: "x % 'even' == True", correct: false },
      { text: "x % x == 0", correct: false },
      { text: "x % 2 == 0", correct: true },
      { text: "x % 2 == 1", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Every number that is divided by two and does not leave a rest is even.",
    link: "https://www.geeksforgeeks.org/what-is-a-modulo-operator-in-python/",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image39.png",
    answers: [
      { text: "[ 8, 9 ]", correct: false },
      { text: "[ 1, 2]", correct: false },
      { text: "[ 1, 2, 3 ]", correct: false },
      { text: "[ 1, 3, 5, 7, 9 ]", correct: true },
    ],
    explanation:
      "Explanation:<br><br>a[::2] is the slicing operation, where:<br>The first colon : specifies the start index (default is the beginning of the list).<br>The second colon : specifies the end index (default is the end of the list).<br>The 2 after the second colon is the step, meaning it selects every second element.<br><br>So, a[::2] selects every second element starting from the first element.",
    link: "https://www.w3schools.com/python/ref_list_slice.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image40.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The backslash is the character to escape another character. Here the backslash escapes the following single quote character. Together they are one character.",
    link: "https://www.w3schools.com/python/python_strings_escape.asp",
  },
  {
    question:
      "What is the default return value for a function that does not explicitly return any value?",
    answers: [
      { text: "void", correct: false },
      { text: "int", correct: false },
      { text: "public", correct: false },
      { text: "None", correct: true },
      { text: "Null", correct: false },
    ],
    explanation:
      "Explanation:<br><br>None is the default return value for a function that does not explicitly return any value.",
    link: "https://www.w3schools.com/python/gloss_python_function_return_value.asp",
  },
  {
    question:
      "You want to write a code snippet to read the total data from a text file and print it to the monitor. What snippet would you insert in the line indicated below:",
    image: "images/image41.png",
    answers: [
      { text: "data = file.load()", correct: false },
      { text: "data = file.readline()", correct: false },
      { text: "data = file.read()", correct: true },
      { text: "data = file.readlines()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>data = file.read() reads the entire contents of the file and stores it in a string variable called data.",
    link: "https://www.w3schools.com/python/ref_file_read.asp",
  },
  {
    question:
      "Which method is used to break the connection between the file handle and a physical file?",
    answers: [
      { text: "disconnect()", correct: false },
      { text: "shutup()", correct: false },
      { text: "lock()", correct: false },
      { text: "close()", correct: true },
    ],
    explanation:
      "Explanation:<br><br>close() closes the file handle and releases the file.",
    link: "https://www.w3schools.com/python/ref_file_close.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image42.png",
    answers: [
      { text: "1*1*1", correct: true },
      { text: "The code is erroneous.", correct: false },
      { text: "x y z", correct: false },
      { text: "1 1 1", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The print() function has a sep parameter which stands for separator. The default value of the sep parameter is a space character. You can change it to anything you want.",
    link: "https://www.w3schools.com/python/ref_func_print.asp",
  },
  {
    question: "What value will be assigned to the x variable?",
    image: "images/image43.png",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "1", correct: false },
      { text: "0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value assigned to the variable x will be True. This is because the expression y > z and z < y evaluates to True (7 > 3 and 3 < 7), and with the logical OR (or), the entire expression becomes True.",
    link: "https://www.w3schools.com/python/gloss_python_logical_operators.asp",
  },
  {
    question:
      "The value thirty point eleven times ten raised to the power of nine should be written as:",
    answers: [
      { text: "30.11E9.0", correct: false },
      { text: "30E11.9", correct: false },
      { text: "30.11E9", correct: true },
      { text: "30.11*10^9", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value 'thirty point eleven times ten raised to the power of nine' should be written as 30.11e9 in scientific notation.",
    link: "https://en.wikipedia.org/wiki/Scientific_notation#E_notation",
  },
  {
    question:
      "What is the output of the following program if the user enters 'kangaroo' at the first prompt and '0' at the second prompt?",
    image: "images/image44.png",
    answers: [
      { text: "Wrong value.", correct: false },
      { text: "Do not divide by zero!", correct: false },
      { text: "4.0", correct: true },
      { text: "Error.Error.Error.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The length of kangaroo is 8 and the length of 0 is 1, so 1 * 2 -> 2, leading to 8 / 2 -> 4.0 .",
    link: "https://www.w3schools.com/python/ref_func_len.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image45.png",
    answers: [
      { text: "23" + "\n" + "42", correct: true },
      { text: "23", correct: false },
      { text: "42", correct: false },
      { text: "42" + "\n" + "23", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The function will try to execute print(23) and succeed. The finally block always gets executed.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "Which of the following for loops would output the below number pattern?",
    image: "images/image46.png",
    answers: [
      {
        text: "for i in range(1, 6)" + "\n" + "print(i, i, i, i, i)",
        correct: false,
      },
      {
        text: "for i in range(1, 6):" + "\n" + "print(str(i) *5 )",
        correct: true,
      },
      {
        text: "for i in range(0, 5):" + "\n" + "print(str(i) * 5)",
        correct: false,
      },
      {
        text: "for i in range(1, 5)" + "\n" + "print(str(i) * 5)",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The code snippet prints each number from 1 to 5, five times in a row on separate lines. This is achieved by converting the number to a string and repeating it five times using the multiplication operator *.",
    link: "https://www.w3schools.com/python/python_for_loops.asp",
  },
  {
    question:
      "You develop a Python application for your company. You have the following code. Which of the following expressions is equivalent to the expression in the function?",
    image: "images/image47.png",
    answers: [
      { text: "(a + b ) * ( c - d )", correct: false },
      { text: "A + ( ( b * c ) - d )", correct: false },
      { text: "(a + (b * c ) ) - d", correct: true },
      { text: "None of the above", correct: false },
    ],
    explanation:
      "Explanation:<br><br>This question is about operator precedence: <br><br>The multiplication operator has the highest precedence and is therefore executed first. That leaves the addition operator and the subtraction  operator. They both are from the same group and therefore have the same precedence. That group has a left-to-right associativity. <br><br>The addition operator is on the left and is therefore  executed next. And the last one to be executed is the subtraction operator.",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image48.png",
    answers: [
      { text: "1 3", correct: false },
      { text: "3 2", correct: true },
      { text: "The code is erroneous.", correct: false },
      { text: "3 3", correct: false },
      { text: "2 3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The output would be 3 2 because x is set to 2 + 1, and y is incremented by 1 from its initial value of 1.",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image49.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "False", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "True", correct: true },
    ],
    explanation:
      "Explanation:<br><br>C is a subclass of A. <br>C is a grandchild of A, so to speak.<br>B is a subclass of A<br>C is a subclass of B<br>And therefore C is a subclass of A",
    link: "https://www.w3schools.com/python/ref_func_issubclass.asp",
  },
  {
    question:
      "Which of the following expressions evaluates to True and raises no exception? <br><br>(Choose two)",
    answers: [
      { text: "10 != '1' + '0'", correct: true },
      { text: "'AI' * 2 != 2 * 'AI'", correct: false },
      { text: "'9' * 3 > '9' * 9", correct: false },
      { text: "'9' * 1 < 1 * 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The expression '10 != '1' + '0' evaluates to True, since the integer 10 is not equal to the string '10'.<br><br>The expression '9' * 3 > '9' * 9 evaluates to False, because we got 999 on the left side and 999999999 on the right side.<br><br>The expression '9' * 1 < 1 * 2 evaluates to False, because we got 9 on the left side and 2 on the right side.<br><br> The expression 'AI' * 2 != 2 * 'AI' evaluates to False, since both sides are equal.",
  },
  {
    question: "What is the correct command to shuffle the following list?",
    image: "images/image50.png",
    answers: [
      { text: "shuffle(people)", correct: false },
      { text: "people.shuffle( )", correct: false },
      { text: "random.shuffle(people)", correct: true },
      { text: "random.shuffleList(people)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The shuffle() function in Python is used to shuffle the elements of a list. Only usable when imported from the random module.",
    link: "https://www.w3schools.com/python/ref_random_shuffle.asp",
  },
  {
    question: "The 0o prefix means that the number after it is denoted as:",
    answers: [
      { text: "binary", correct: false },
      { text: "octal", correct: true },
      { text: "decimal", correct: false },
      { text: "hexadecimal", correct: false },
    ],

    explanation:
      "Explanation:<br><br>The 0o prefix in Python denotes that the number following it is written in octal (base-8) notation. Example:<br>- 0o10 in octal represents the decimal number 8.<br>- 0o77 in octal represents the decimal number 63.<br><br>The 0o prefix allows Python to distinguish octal numbers from decimal or other bases.",
    link: "https://exercism.org/tracks/python/concepts/binary-octal-hexadecimal",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image51.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "1", correct: true },
      { text: "None", correct: false },
      { text: "2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>This is a conditional expression. 1 % 2 is 1 and therefore not equal to 0. The condition is True and the inner func() function call returns 1. That 1 is passed to the outer function which will also return 1.",
  },
  {
    question:
      "What is the expected output of the following code?<br><br>print(list('hello'))",
    answers: [
      { text: "['h', 'e', 'l', 'l', 'o']", correct: true },
      { text: "[h, e, l, l, o]", correct: false },
      { text: "['h' 'e' 'l' 'l' 'o']", correct: false },
      { text: "hello", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A string is a sequence of characters and works very fine with the list() function. The result is a list of strings, in which every character is a string of its own.",
    link: "https://www.w3schools.com/python/ref_func_list.asp",
  },
  {
    question:
      "The system that allows you to diagnose input/output errors in Python is called:",
    answers: [
      { text: "error_number", correct: false },
      { text: "error_string", correct: false },
      { text: "errno", correct: false },
      { text: "errcode", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The errno module is used to get the error number of an exception. The errcode module is used to get the error code of an exception.",
    link: "https://www.oreilly.com/library/view/python-standard-library/0596000960/ch02s12.html",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image52.png",
    answers: [
      { text: "17", correct: false },
      { text: "8.5", correct: false },
      { text: "8", correct: false },
      { text: "17.5", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The operators here come from three different groups:<br>'Exponent' ** has the highest precedence. Followed by 'Multiplication, Division, Floor division, Modulus'.<br><br>'Addition, Subtraction' has the lowest precedence.<br><br>Therefore the order of operations here is:  **  →  /  →  //  →  +",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question:
      "The part of your code where you think an exception may occur should be placed inside:",
    answers: [
      { text: "the try: block", correct: true },
      { text: "the except: block", correct: false },
      { text: "the exception: block", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The try: block is used to check if an exception is raised. The except: block is used to handle the exception.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image53.png",
    answers: [
      { text: "7", correct: false },
      { text: "7.0", correct: false },
      { text: "8", correct: false },
      { text: "8.0", correct: true },
      { text: "9", correct: false },
      { text: "9.0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The operators here come from three different groups:<br>'Exponent' ** has the highest precedence. Followed by 'Multiplication, Division, Floor division, Modulus'.<br>'Addition, Subtraction' has the lowest precedence.<br><br>Therefore the order of operations here is:  **   →  //  →  *  →  /  →   %  →   +",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image54.png",
    answers: [
      { text: "3 1", correct: true },
      { text: "1 3", correct: false },
      { text: "1 1", correct: false },
      { text: "3 3", correct: false },
      { text: "3" + "\n" + "1", correct: false },
      { text: "1" + "\n" + "3", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The first print (inside func()) prints 3 (with a trailing space). The second print (outside func()) prints 1. So the output prints 3 followed by a space and then 1.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "The statement<br><br>assert x == 0<br><br>...",
    answers: [
      { text: "is erroneous.", correct: false },
      { text: "has no effect.", correct: false },
      { text: "will stop the program if x is equal to 0", correct: false },
      { text: "will stop the program if x is not equal to 0", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The statement assert x == 0 checks if x is equal to 0. If it's not, it raises an AssertionError, helping to catch bugs or unexpected states during development.",
    link: "https://www.w3schools.com/python/ref_keyword_assert.asp",
  },
  {
    question:
      "What is the expected output of the following code?",
    image: "images/image77.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "Kevin", correct: false },
      { text: "KevinClaus", correct: true },
      { text: "Claus", correct: false },
    ],
    explanation:
      "Explanation:<br><br>String literals that are delimited by whitespace are automatically concatenated.",
    link: "https://www.w3schools.com/python/python_strings.asp",
  },
  {
    question:
      "Which of the following functions immediately terminates a program?",
    answers: [
      { text: "sys.terminate( )", correct: false },
      { text: "sys.exit( )", correct: true },
      { text: "sys.halt( )", correct: false },
      { text: "sys.stop( )", correct: false },
      { text: "None", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The sys.exit() function in Python is used to terminate a program immediately. It raises the SystemExit exception, which can be caught if needed, but by default, it stops the program execution.",
    link: "https://docs.python.org/2/library/exceptions.html#exceptions.SystemExit",
  },
  {
    question: "A code point is:",
    answers: [
      { text: "A number which makes up a character.", correct: true },
      { text: "A code containing a point.", correct: false },
      { text: "A point used to write a code.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A code point is a unique numeric value that corresponds to a specific character in a character encoding standard, such as Unicode. It allows each character to be uniquely identified and represented in digital systems.",
    link: "https://en.wikipedia.org/wiki/Code_point",
  },
  {
    question:
      "The part of your code where the handling of an exception takes place should be placed inside:",
    answers: [
      { text: "the except: block", correct: true },
      { text: "the exception: block", correct: false },
      { text: "the try: block", correct: false },
      { text: "None of the above", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, the except: block is used to handle exceptions that occur within the corresponding try: block. When an exception occurs, control transfers to the except: block to execute the error-handling code.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "If the class's constructor is declared as below, which one of the assignments is valid?",
    image: "images/image55.png",
    answers: [
      { text: "Object = Class(object)", correct: false },
      { text: "object = Class()", correct: true },
      { text: "object = Class(self)", correct: false },
      { text: "object = Class", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, when instantiating a class, you typically use the class name followed by parentheses to call its constructor (initializer) method. <br>object = Class( ) correctly creates an instance of the class Class by calling its constructor without passing any arguments.",
    link: "https://www.geeksforgeeks.org/constructors-in-python/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image56.png",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "The code is erroneous.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>range(2) has two elements: 0 and 1. Therefore the outer list will have two elements. Since data[2] does not exist, the code is erroneous.",
    link: "https://www.w3schools.com/python/python_for_loops.asp",
  },
  {
    question: "Which of the following variable names is illegal?",
    answers: [
      { text: "true", correct: false },
      { text: "TRUE", correct: false },
      { text: "True", correct: true },
      { text: "tRUE", correct: false },
    ],
    explanation:
      "Explanation:<br><br>True is a reserved keyword in Python. Therefore, it is illegal to use it as a variable name.",
    link: "https://www.w3schools.com/python/python_booleans.asp",
  },
  {
    question: "How many stars will the following code print to the monitor?",
    image: "images/image57.png",
    answers: [
      { text: "one", correct: false },
      { text: "two", correct: false },
      { text: "four", correct: true },
      { text: "eight", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code will print 4 asterisks to the monitor. The << operator is a bitwise left shift operator, which effectively doubles the value of x on each iteration of the loop.<br>In each iteration, x is left-shifted by 1, effectively doubling its value (1 << 1 becomes 2, 2 << 1 becomes 4, etc.).",
  },
  {
    question: "The += operator, when applied to strings, performs:",
    answers: [
      { text: "Concatenation", correct: true },
      { text: "Multiplication", correct: false },
      { text: "Subtraction", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The += operator, when applied to strings, concatenates the right operand to the left operand.",
    link: "https://www.w3schools.com/python/gloss_python_string_concatenation.asp",
  },
  {
    question: "Consider the following code:",
    image: "images/image58.png",
    answers: [
      { text: "It shuffles the elements of the list in-place.", correct: true },
      {
        text: "It will not modify the list. This function is just a placeholder and yet to be implemented.",
        correct: false,
      },
      {
        text: "It returns a list where the elements 10, 20, and 30 would be at random positions.",
        correct: false,
      },
      {
        text: "It shuffles the elements for the number of times equal to the size of the list.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>random.shuffle() is a function that shuffles the elements of the list in-place.",
    link: "https://www.w3schools.com/python/ref_random_shuffle.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image59.png",
    answers: [
      { text: "4", correct: false },
      { text: "4.0", correct: false },
      { text: "3", correct: false },
      { text: "3.5", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The operators here are from two different groups:<br>The group 'Multiplication, Division, Floor division, Modulus' has a higher precedence than the group 'Addition, Subtraction'.<br><br>Therefore the order of operations here is:  //  →  /  →  +  ",
  },
  {
    question:
      "Is there a way to check if a class is a subclass of another class?",
    answers: [
      { text: "Yes, there is a function that can do that.", correct: true },
      { text: "No.", correct: false },
      {
        text: "It may be possible, but only under special conditions.",
        correct: false,
      },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, you can use the issubclass() function to check if a class is a subclass of another class. It returns True if the first argument is a subclass of the second argument, otherwise, it returns False.",
    link: "https://www.w3schools.com/python/ref_func_issubclass.asp",
  },
  {
    question: "Which of the following is false?",
    answers: [
      {
        text: "A try statement can have one or more except clauses.",
        correct: false,
      },
      {
        text: "A try statement can have a finally clause and an except clause.",
        correct: false,
      },
      {
        text: "A try statement can have one or more finally clauses.",
        correct: true,
      },
      {
        text: "A try statement can have a finally clause without an except clause.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>In Python, a try statement can have only one finally clause. The finally clause is used to execute cleanup code regardless of whether an exception occurs, and there can only be one such block associated with a try statement.",
    link: "https://www.w3schools.com/python/gloss_python_try_except.asp",
  },
  {
    question: "How many stars will the following code print to the monitor?",
    image: "images/image60.png",
    answers: [
      { text: "zero", correct: false },
      { text: "one", correct: false },
      { text: "two", correct: false },
      { text: "The snippet will enter an infinite loop.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>i gets incremented inside the while loop, BUT i will always be smaller than i + 2. Therefore the whole condition will always be True and we've build ourselves a nice infinite loop.",
    link: "https://www.w3schools.com/python/python_while_loops.asp",
  },
  {
    question: "Which program will produce the following output:",
    image: "images/image61.png",
    answers: [
      {
        text: "import calendar" + "\n" + "print(calendar.week)",
        correct: false,
      },
      {
        text: "import calendar" + "\n" + "print(calendar.weekheader(3))",
        correct: false,
      },
      {
        text: "import calendar" + "\n" + "print(calendar.weekheader())",
        correct: false,
      },
      {
        text: "import calendar" + "\n" + "print(calendar.weekheader(2))",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The calendar.weekheader() function generates a header for a week, typically used in calendars.<br>The argument 2 specifies the length of the abbreviated weekday names.<br>By default, the abbreviated weekday names are three characters long, but by passing 2 as an argument, they are abbreviated to two characters.<br>Thus, the output will be 'Mo Tu We Th Fr Sa Su', representing abbreviated weekday names.",
    link: "https://www.w3resource.com/python/module/calendar/weekheader.php",
  },
  {
    question:
      "What is the expected output of the following code?<br><br>print(float('3.14'))",
    answers: [
      { text: "3,14", correct: false },
      { text: "3.14", correct: true },
      { text: "314", correct: false },
      { text: "'3.14'", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The float() function converts a string representing a floating-point number into a floating-point number.",
    link: "https://www.geeksforgeeks.org/convert-string-to-float-in-python/",
  },
  {
    question: "What value will be assigned to the x variable?",
    image: "images/image62.png",
    answers: [
      { text: "1", correct: false },
      { text: "0", correct: false },
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python, the comparison operators (==, >, !=, etc.) return boolean values (True or False).<br>The expression y == z evaluates to False because y is 7 and z is 3.<br>Similarly, the expression y > z also evaluates to True.<br><br>Therefore, the overall expression becomes False and True or False and True, which simplifies to False or False, resulting in False.",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image63.png",
    answers: [
      { text: "4", correct: true },
      { text: "e", correct: false },
      { text: "2", correct: false },
      { text: ";", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The string 'John,Doe,42' is split into a list of substrings using the comma , as a delimiter.<br>Then, the join() function concatenates these substrings without any separator, effectively removing the comma.<br>The resulting string is 'JohnDoe42'.<br>Finally, strng[-2] accesses the second character from the end of the string, which is '4'.",
    link: "https://www.geeksforgeeks.org/python-program-split-join-string/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image64.png",
    answers: [
      { text: "2", correct: false },
      { text: "0", correct: false },
      { text: "4", correct: false },
      { text: "The code is erroneous and cannot be run.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python you cannot add/concatenate an integer to a string, only strings can be concatenated.<br>Therefore plane + 2 will not work, making the code erroneous.",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image65.png",
    answers: [
      { text: "3", correct: false },
      { text: "-3", correct: true },
      { text: "2", correct: false },
      { text: "-2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The math.floor() method rounds a number DOWN to the nearest integer.<br>The math.ceil() method rounds a number UP to the nearest integer.<br>The abs() function returns the absolute value of a given number.",
    link: "https://www.geeksforgeeks.org/floor-ceil-function-python/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image66.png",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines an empty dictionary 'people'.<br><br>The function add_person() is defined to add a person to the dictionary.<br>Three persons are added to the dictionary: 'Kevin', 'Marvin', and 'kevin'.<br><br>Since the keys 'Kevin' and 'kevin' are considered different due to case sensitivity in Python, both are added as separate entries.<br><br>Therefore, the length of the dictionary 'people' is 3, indicating that there are three unique persons in the dictionary.",
    link: "https://www.w3schools.com/python/python_dictionaries.asp",
  },
  {
    question:
      "What is the expected output of the following code if the user enters 2 and 4?",
    image: "images/image67.png",
    answers: [
      { text: "4.0", correct: false },
      { text: "1.0", correct: false },
      { text: "2.0", correct: true },
      { text: "0.0", correct: false },
    ],
    explanation: "Explanation:<br><br>4 ** 1/2 = sqrt(4) = 2.0.",
    link: "https://www.datacamp.com/tutorial/exponents-in-python?dc_referrer=https%3A%2F%2Fwww.google.com%2F",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image68.png",
    answers: [
      { text: "[ 10, 20, 42 ]", correct: false },
      { text: "[ 7, 3, 23, 42 ]", correct: false },
      { text: "[ 10, 20, 23, 42 ]", correct: false },
      { text: "[ 7, 20, 23, 42 ]", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The two list slicings create new lists and don't affect w.<br> The assigning of the list w to the variable z creates a reference to the same object. Therefore the change of z does also affect w. <br><br>Hence, z[1] = 20 affects the Index [1] of w, leading to [7, 20, 23, 42]",
    link: "https://www.geeksforgeeks.org/python-list-slicing/",
  },
  {
    question:
      "Which of the following commands is used to open a file in binary format for writing only?",
    answers: [
      { text: "open('data.txt' , 'w+')", correct: false },
      { text: "open('data.txt' , 'wb+')", correct: false },
      { text: "open('data.txt' , 'w')", correct: false },
      { text: "open('data.txt' , 'wb')", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'wb' mode opens the file for binary writing and truncates the file if it already exists.",
    link: "https://www.w3schools.com/python/python_file_open.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image69.png",
    answers: [
      { text: "6 9 12", correct: false },
      { text: "8 27 64", correct: false },
      { text: "9 27 81", correct: true },
      { text: "27 81 343", correct: false },
    ],
    explanation:
      "Explanation:<br><br>data is a list of lambda functions. In the for loop the lambda functions get assigned to func and one after the other they are called with the argument 3:<br><br> 3 ** 2 = 9, 3 ** 3 = 27, 3 ** 4 = 81.",
    link: "https://www.datacamp.com/tutorial/exponents-in-python?dc_referrer=https%3A%2F%2Fwww.google.com%2F",
  },
  {
    question: "Which of the following is the output of the below Python code?",
    image: "images/image70.png",
    answers: [
      { text: "True" + "\n" + "False", correct: false },
      { text: "False" + "\n" + "True", correct: true },
      { text: "False" + "\n" + "False", correct: false },
      { text: "True" + "\n" + "True", correct: false },
    ],
    explanation:
      "Explanation:<br><br>An object is mutable and if you create two new objects with the same values they still will be different objects and have different ids. <br><br>A string is immutable and if you create two strings with the same value they will both point to the same object and therefore have the same ids.",
    link: "https://www.geeksforgeeks.org/mutable-vs-immutable-objects-in-python/",
  },
  {
    question:
      "A predefined Python variable, storing the module name, is called:",
    answers: [
      { text: "__name__", correct: true },
      { text: "__mod__", correct: false },
      { text: "__module__", correct: false },
      { text: "__modname__", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The name of the predefined variable is __name__. In the current file the output will be __main__. In an imported file named module.py the output would be module. The others do not exist.",
    link: "https://builtin.com/articles/name-python",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image71.png",
    answers: [
      { text: "0", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
    explanation:
      "Explanation:<br><br>All the characters of header will be in x. Therefore, none of them are NOT IN header, so plus is never incremented, resulting in 0.",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image72.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      {
        text: "The number of all the entities residing in the math module.",
        correct: false,
      },
      {
        text: "A string containing the fully qualified name of the module.",
        correct: false,
      },
      {
        text: "A list of all the entities residing in the math module.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The dir() function returns the names of all entities (properties and methods) of the passed module (or object). Examples for entities in the math module are: e, pi, inf, nan, and tau.",
    link: "https://www.w3schools.com/python/ref_func_dir.asp",
  },
  {
    question: "When an exception occurs, we say that it has been:",
    answers: [
      { text: "thrown", correct: false },
      { text: "raised", correct: true },
      { text: "dropped", correct: false },
      { text: "picked", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, exceptions can be handled using a try statement. The critical operation which can raise an exception is placed inside the try clause. The code that handles the exceptions is written in the except clause.",
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question:
      "What is the expected behavior of the following program if the user enters 0?",
    image: "images/image73.png",
    answers: [
      { text: "The program will output 0 to the console.", correct: false },
      {
        text: "The program will raise the ZeroDivisionError exception.",
        correct: false,
      },
      {
        text: "The program will raise the TypeError exception.",
        correct: true,
      },
      {
        text: "The program will raise the ValueError exception.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The input() function always returns a string. If you try to divide by a string you get a TypeError",
    link: "https://www.w3schools.com/python/ref_func_input.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image74.png",
    answers: [
      { text: "125", correct: true },
      { text: "250", correct: false },
      { text: "72", correct: false },
      { text: "500", correct: false },
    ],
    explanation:
      "Explanation:<br><br>len(str(i)) is 3, therefore 3 < 72, leading to the else clause. <br><br>Here i //=2 is equivalent to i = i // 2, so i = 250 // 2 = 125, with // being the floor division operator.",
    link: "https://www.geeksforgeeks.org/floor-division-in-python/",
  },
  {
    question:
      "What snippet would you insert in the line indicated below, to print '1 2 3 4'?",
    image: "images/image75.png",
    answers: [
      { text: "print(n)", correct: false },
      { text: 'print(n, sep=" ")', correct: false },
      { text: 'print(n, end=" ")', correct: true },
      { text: 'print(n, " ")', correct: false },
    ],
    explanation:
      "Explanation:<br><br>By default, the print() function prints a new line after the output. To prevent this, use the 'end' argument.",
    link: "https://www.w3schools.com/python/ref_func_print.asp",
  },
  {
    question:
      "What is the value type returned after executing the following snippet?",
    image: "images/image76.png",
    answers: [
      { text: "int", correct: false },
      { text: "float", correct: false },
      { text: "str", correct: false },
      { text: "bool", correct: true },
      { text: "NoneType", correct: false },
    ],
    explanation:
      'Explanation:<br><br>z = len("Python") is 6, therefore it is of type int. x = y > z is False, therefore x is of type bool.',
    link: "https://www.w3schools.com/python/python_datatypes.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image78.png",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>b = a ** 0: This means that a is raised to the power of 0. In Python, any number raised to the power of 0 results in the value 1, so b = 1",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "How many stars (*) does the following snippet print?",
    image: "images/image79.png",
    answers: [
      { text: "3", correct: true },
      { text: "2", correct: false },
      { text: "1", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>When i is 10, it's decremented to 7, and a star is printed. Next, when i is 7, it's decremented to 4, and another star is printed. Finally, when i is 4, it's decremented to 1, and a third star is printed. At this point, since i is now less than or equal to 3, the loop breaks, and the else block is skipped.<br><br>Therefore, the number of stars printed is 3.",
  },
  {
    question: "What is the result of the following comparison?",
    image: "images/image80.png",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
      { text: "None", correct: false },
      {
        text: "The comparison causes a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The variables x and y are strings, not numbers. When Python compares strings using >, it does so lexicographically, meaning character by character, like in a dictionary. For '20' and '30', it compares the first characters: '2' and '3'. The Unicode value of '2' is 50, and '3' is 51. Since 50 is less than 51, '20' is less than '30'. Therefore, x > y evaluates to False, and the code prints False.",
    link: "https://www.geeksforgeeks.org/string-comparison-in-python/",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image81.png",
    answers: [
      { text: "Hello, Python!", correct: true },
      { text: "!nohtyP ,olleH", correct: false },
      { text: "Hello, Python!Hello, Python!", correct: false },
      { text: "!nohtyP ,olleH!nohtyP ,olleH", correct: false },
      { text: "The program causes a runtime exception/error.", correct: false },
      { text: "The result cannot be predicted.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The variable s is the string 'Hello, Python!' with 14 characters. The slice s[-14:15] starts at index -14, which is the first character of the string since -14 refers to the start in a string with 14 characters. The slice ends at index 15, but since the string only has 14 characters, it effectively goes to the end of the string.<br><br>Therefore, s[-14:15] extracts the entire string from start to finish. The output is: Hello, Python!",
    link: "https://www.w3schools.com/python/python_strings_slicing.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image82.png",
    answers: [
      { text: "[2, 4]", correct: true },
      { text: "['C', 2, 4]", correct: false },
      { text: "['B', 'C', 2, 4]", correct: false },
      { text: "['A', 'B']", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Using the del statement, you can remove a specific slice of elements from a list. The slice [0:-2] means 'from the start of the list (index 0) up to, but not including(!), the element at index -2'. In Python, negative indexing allows you to refer to positions from the end of the list, with -1 being the last element. Therefore, -2 refers to the second-to-last element, which is 2 in this case.<br><br>Therefore, 'A', 'B' and 'C' are removed from the list.",
    link: "https://www.w3schools.com/python/python_lists_remove.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image83.png",
    answers: [
      { text: "a" + "\n" + "b" + "\n" + "c", correct: true },
      { text: "1" + "\n" + "2" + "\n" + "3", correct: false },
      { text: "a:1" + "\n" + "b:2" + "\n" + "c:3", correct: false },
      { text: "0" + "\n" + "1" + "\n" + "2", correct: false },
      { text: "The code is erroneous", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the for loop 'for item in dict:', the term ''item'' refers to the keys of the dictionary. Since dictionaries in Python are collections of key-value pairs, iterating over them by default gives you the keys. <br><br>Thus, in this case, 'a', 'b', and 'c' are the ''items'' being printed. These keys are the elements enclosed in single quotes in the dictionary, distinguishing them from the associated values (1, 2, and 3) which are not printed in this loop.",
    link: "https://www.w3schools.com/python/python_dictionaries.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image84.png",
    answers: [
      { text: "0", correct: false },
      { text: "3", correct: false },
      { text: "7", correct: false },
      { text: "11", correct: false },
      {
        text: "The program will cause a runtime exception/error.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>We get a runtime exception here <br><br>→ ZeroDivisionError: integer division or modulo by zero",
    link: "https://docs.python.org/3/library/exceptions.html",
  },
  {
    question:
      "How many stars (*) will the following snippet send to the console?",
    image: "images/image85.png",
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "Three", correct: true },
      { text: "Four", correct: false },
      {
        text: "The program will cause a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>First we got a nested list comprehension that generates a list of lists:<br>The outer loop for r in range(3) iterates over the range 0, 1, 2. For each value of r, the inner loop for c in range(r) creates a list of integers from 0 to r-1. <br><br>Let's break down the list comprehension for each value of r: <br>When r = 0, the inner loop for c in range(0) generates an empty list [] because the range is 0. <br>When r = 1, the inner loop for c in range(1) generates [0]. <br>When r = 2, the inner loop for c in range(2) generates [0, 1]. <br><br>Combining these, the result of the list comprehension is: lst = [[], [0], [0, 1]]<br><br>Now let's examine how the nested for loop processes the list lst: <br>For the first sublist [], there are no elements to iterate over, so nothing is printed. <br>For the second sublist [0], the only element is 0. Since 0 < 2, an asterisk '*' is printed. <br>For the third sublist [0, 1], the elements are 0 and 1. Both satisfy y < 2, so two asterisks '*' are printed.",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question:
      "What would you insert instead of ??? so that the program prints '1024' to the monitor?",
    image: "images/image86.png",
    answers: [
      { text: "[0]", correct: false },
      { text: "[1]", correct: false },
      { text: "[-1]", correct: true },
      { text: "[1024]", correct: false },
      { text: "[:]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>lst = [2 ** x for x in range(0, 11)] generates a list where each element is 2 raised to the power of x, for x ranging from 0 to 10. <br><br>This results in the list: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].<br><br> Since 1024 is the last element in the list, we can select and print it with print(lst[-1]).",
    link: "https://www.geeksforgeeks.org/range-to-a-list-in-python/",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image87.png",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
      { text: "None", correct: false },
      {
        text: "The program will cause a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>lst2 = lst1.split(',') splits the string lst1 at each comma (,). After splitting, lst2 becomes ['12', '34']. This creates a list where each element is a substring from lst1 separated by commas. <br><br>len(lst1) gives the length of the string lst1, which is 5 (counting each character including the comma). <br>len(lst2) gives the length of the list lst2, which is 2 (since it contains two elements after splitting). <br><br>So in this case, 5 < 2 evaluates to False.",
    link: "https://www.w3schools.com/python/ref_string_split.asp",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image88.png",
    answers: [
      { text: "It will print 5", correct: false },
      { text: "It will print 64", correct: false },
      { text: "It will print 256", correct: true },
      { text: "It will print 512", correct: false },
      {
        text: "The code will cause a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br> The function fun calculates a raised to the power of b raised to the power of c. In this specific call fun(b=2, a=2, c=3), it computes 2 ** (2 ** 3), which results in 256. Therefore, the output of the print statement is 256.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected outcome of the following snippet?",
    image: "images/image89.png",
    answers: [
      { text: "3", correct: false },
      { text: "5", correct: false },
      { text: "7", correct: true },
      {
        text: "The code will cause a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>x = 5: This assigns the value 5 to the variable x.<br><br>f = lambda x: x + 2: This defines a lambda function that takes one parameter x and returns the result of adding 2 to it. <br><br>print(f(x)): This calls the lambda function f with the argument x (which is 5). <br><br>The function computes x + 2x + 2, which is 5 + 2 = 75 + 2 = 7, and prints the result.",
    link: "https://www.w3schools.com/python/python_lambda.asp",
  },
  {
    question: "What is the expected outcome of the following snippet?",
    image: "images/image90.png",
    answers: [
      { text: "8", correct: true },
      { text: "4", correct: false },
      { text: "6", correct: false },
      { text: "runtime error on line 4", correct: false },
      { text: "runtime error on line 5", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The given code snippet starts by assigning the value `1` to the variable `x`. It then defines a function named `a` that takes a single argument `x` and returns twice its value. After defining the function, the code calculates `x = 2 + a(x)`. At this point, the function `a` is called with the current value of `x`, which is `1`. The function returns `2` (since `2 * 1 = 2`), and this result is added to `2`, giving a new value of `4` for `x`. <br><br>Next, the code executes `print(a(x))`. Here, the function `a` is called again, but this time with the updated value of `x`, which is `4`. The function computes `2 * 4`, which results in `8`. This value, `8`, is then printed to the console. Thus, the expected output of the code is `8`.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image91.png",
    answers: [
      { text: "print hello", correct: false },
      { text: "print h", correct: false },
      { text: "print ello", correct: false },
      { text: "cause a runtime exception on line 2", correct: false },
      { text: "cause a runtime exception on line 3", correct: false },
      { text: "cause a runtime exception on line 4", correct: false },
      { text: "cause a runtime exception on line 5", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In the code snippet, the variable `a` is assigned the string `'hello'`. A function `x` is then defined, requiring two parameters, `a` and `b`. Inside this function, the first character of `a` is accessed and returned. <br><br>When `print(x(a))` is called, it tries to invoke the function `x` with only one argument, `a`. Since `x` expects two arguments but receives only one, Python raises a `TypeError`. <br><br>The error message will be: TypeError: x() missing 1 required positional argument: 'b'",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image92.png",
    answers: [
      { text: "It will print: SPAM", correct: false },
      { text: "It will print: MAPS", correct: false },
      { text: "It will print: None", correct: false },
      { text: "It will print: SPAMMAPS", correct: true },
      { text: "It will print: SPAM MAPS", correct: false },
      { text: "It will cause a runtime exception/error", correct: false },
      { text: "It will print an empty line", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The provided code snippet includes a string assignment and a function definition. Initially, the variable `s` is assigned the string value `'SPAM'`. Following this, a function `f` is defined, which takes one parameter `x`. Inside the function body, the return statement concatenates the global variable `s` with the string `'MAPS'`.<br><br>Despite the function accepting a parameter `x`, it does not utilize this parameter in its operation. Instead, it uses the global variable `s` to form the output. When the function `f` is called with `s` as the argument (`f(s)`), it concatenates the value of the global variable `s`, which is `'SPAM'`, with `'MAPS'`. Therefore, the function returns the string `'SPAMMAPS'`. <br><br>Finally, the `print` function outputs this concatenated string. As a result, the code will print `SPAMMAPS` to the console.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image93.png",
    answers: [
      {
        text: "It will print: <generator object gen at (some hex digits)>",
        correct: false,
      },
      { text: "It will print: 014916", correct: true },
      {
        text:
          "It will print: \n" +
          "0" +
          "\n" +
          "1" +
          "\n" +
          "4" +
          "\n" +
          "9" +
          "\n" +
          "16",
        correct: false,
      },
      { text: "It will cause a runtime exception/error", correct: false },
      { text: "It will print an empty line", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a generator function called `gen()`. This function creates a range of numbers from 0 to 4. It then yields the square of each number in that range. The `for` loop outside the function calls `gen()` and iterates over its values. It prints each square on the same line without any spaces or newlines between them. Therefore, the output of the code is `014916`.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image94.png",
    answers: [
      { text: "1" + "\n" + "2", correct: false },
      { text: "ERROR MESSAGE" + "\n" + "1" + "\n" + "2", correct: false },
      { text: "0" + "\n" + "2", correct: false },
      {
        text: "0" + "\n" + "ERROR MESSAGE" + "\n" + "1" + "\n" + "2",
        correct: true,
      },
    ],
    explanation:
      'Explanation:<br><br>The code snippet begins by setting x to 0. In the try block, it prints x, which is 0. Then, it attempts to perform 1 / x, causing a ZeroDivisionError because division by zero is not allowed. <br><br>When this error occurs, the except block catches it and prints "ERROR MESSAGE". Regardless of the error, the finally block always executes, printing x + 1, which is 1.<br>After the try-except-finally block, the code prints x + 2, which is 2.',
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "The following class hierarchy is given. What is the expected output of the code?",
    image: "images/image95.png",
    answers: [
      { text: "AB", correct: false },
      { text: "ABB", correct: true },
      { text: "BA", correct: false },
      { text: "BBA", correct: false },
      { text: "AAA", correct: false },
      { text: "BBB", correct: false },
    ],
    explanation:
      'Explanation:<br><br>The provided code snippet demonstrates the concepts of class inheritance and method overriding in Python.<br><br> First, the code defines three classes: A, B, and C. Class A has a method a that prints the character "A" without a newline. Class B inherits from A and overrides the a method to print the character "B" instead. Class C inherits from B and adds a new method b that prints the character "B". <br><br>Next, three instances are created: a from class A, b from class B, and c from class C. When the method a.a() is called, it uses the a method from class A, printing "A". The call to b.a() invokes the overridden a method from class B, printing "B". Finally, calling c.b() uses the b method from class C, which also prints "B". <br><br>Thus, the output of the code, in sequence, is "A" from a.a(), "B" from b.a(), and "B" from c.b(), resulting in the combined output of ABB.',
    link: "https://www.programiz.com/python-programming/inheritance",
  },
  {
    question: "What is the expected result of executing the following code?",
    image: "images/image96.png",
    answers: [
      { text: "It will print bdf", correct: false },
      { text: "It will print ace", correct: true },
      { text: "It will print abcdef", correct: false },
      { text: "It will print an empty line.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The function I() is defined to work with the string 'abcdef'. Within this function, the slice notation s[::2] is applied to the string s, creating a new string consisting of every second character from the original string. This slicing operation results in the string 'ace'. The for loop inside the function then iterates over each character in this sliced string and yields each character one by one. <br><br>Outside the function, a for loop is used to iterate over the characters produced by the generator function I(). For each character yielded by the generator, the print function outputs the character. The end='' parameter in the print function ensures that the characters are printed consecutively without any spaces or newlines between them. <br><br>During the execution, the generator function I() yields the characters 'a', 'c', and 'e' from the string 'ace'. As the loop iterates over these yielded characters, it prints them sequentially. <br><br>The combined effect is that the code prints the characters 'a', 'c', and 'e' in a continuous manner. Thus, the final output of the code is the string 'ace'.",
    link: "https://wiki.python.org/moin/Generators",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image97.png",
    answers: [
      { text: "1", correct: false },
      { text: "False", correct: true },
      { text: "0", correct: false },
      { text: "True", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The provided code snippet initializes a dictionary data with keys 'name' and 'age', storing values 'Peter' and 30, respectively. It then creates a copy of this dictionary using the copy() method and assigns it to person. id() provides a way to uniquely identify and compare objects in Python based on their memory addresses.<br><br>To check if data and person refer to the same object in memory, the code compares their IDs using id(data) == id(person). Since copy() creates a shallow copy of data, person is a separate object with the same contents as data. <br><br>Therefore, the comparison id(data) == id(person) evaluates to False, indicating that data and person are distinct objects occupying different memory locations despite containing identical key-value pairs.",
    link: "https://www.toppr.com/guides/python-guide/references/methods-and-functions/methods/set/copy/python-set-copy/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image98.png",
    answers: [
      { text: "42" + "\n" + "23" + "\n" + "42", correct: false },
      { text: "42" + "\n" + "42" + "\n" + "42", correct: false },
      { text: "42" + "\n" + "23" + "\n" + "23", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>There's a global variable x initially set to 42. The function func() is defined with the global x declaration inside it, indicating that x refers to the global variable rather than a local one within the function scope. <br>When func() is called, it first prints the current value of x, which is 42. Then, it assigns a new value 23 to x and prints this updated value. <br>After executing func(), the final print(x) statement outside the function also prints the current value of the global variable x, which remains 23 after being modified within func().",
    link: "https://www.geeksforgeeks.org/python-inner-functions/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image99.png",
    answers: [
      { text: "*", correct: false },
      { text: "***", correct: false },
      { text: "******", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The provided Python code defines a generator function named func(n) that takes an integer parameter n. Inside this function, an empty string s is initialized. A for loop iterates i from 0 to n-1. During each iteration, an asterisk ('*') is appended to the string s, and then yield s is used to yield the current value of s to the caller.<br><br> Outside the function, a for loop iterates over the generator object returned by func(3). During each iteration, it prints the value yielded by the generator function without adding a newline (end=''). This results in the consecutive printing of the string values '*', '**', and '***'.",
    link: "https://www.geeksforgeeks.org/generators-in-python/",
  },
  {
    question: "The two basic, mutually exclusive, file open modes are named:",
    answers: [
      { text: "text and image", correct: false },
      { text: "binary and ternary", correct: false },
      { text: "binary and text", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The two basic, mutually exclusive, file open modes are 'r' and 'rb'. 'r' is used for reading text files and 'rb' is used for reading binary files.",
    link: "https://www.programiz.com/python-programming/methods/built-in/open",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image100.png",
    answers: [
      { text: " 1" + "\n" + "-1", correct: true },
      { text: " 2" + "\n" + "-2", correct: false },
      { text: " 3" + "\n" + "-3", correct: false },
      { text: " 4" + "\n" + "-4", correct: false },
      { text: " 5" + "\n" + "-5", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, +++++x and -----x use consecutive unary operators (+ and -), but each operator only affects x once.<br><br>For +++++x: It simplifies to +x, which evaluates to 1 when x is 1. <br><br>For -----x: It simplifies to -x, which evaluates to -1 when x is 1.",
    link: "https://www.programiz.com/python-programming/precedence-associativity",
  },
  {
    question: "Consider the following code. What is the value of x?",
    image: "images/image101.png",
    answers: [
      { text: "False", correct: false },
      { text: "1", correct: false },
      { text: "True", correct: true },
      { text: "0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value of x is True because the expression x == x is True.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },

  {
    question: "The built-in class property called __bases__ is:",
    answers: [
      {
        text: "a tuple, which contains information about the direct superclasses of the class.",
        correct: true,
      },
      {
        text: "a variable of type int , which stores the radix currently used by the class.",
        correct: false,
      },
      {
        text: "a dictionary, which contains information about all the superclasses of the class.",
        correct: false,
      },
      {
        text: "a string, which contains information about the direct superclass of the class.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The __bases__ attribute is a tuple containing the direct superclasses of the class. It is a read-only attribute.",
    link: "https://jfine-python-classes.readthedocs.io/en/latest/construct.html",
  },
  {
    question:
      "A predefined Python variable that stores the current module name is called:",
    answers: [
      { text: "__module__", correct: false },
      { text: "__mod__", correct: false },
      { text: "__name__", correct: true },
      { text: "__modname__", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The name of the predefined variable is __name__.",
    link: "https://docs.python.org/3/tutorial/modules.html",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image102.png",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the code snippet, a function named inc is defined. This function takes a parameter inc, which is used within its nested function do. Inside inc, do is defined to accept another parameter val. When do is invoked with a value for val, it returns val + inc.<br><br> In the main execution of the code, inc(-1) is assigned to action. This means that action now holds the inner function do with inc set to -1. Later, action is called with 2 as its argument (action(2)). This call computes 2 + (-1), resulting in 1. <br><br>Therefore, when the statement print(action(2)) is executed, it outputs 1. This demonstrates how the function inc creates a closure around the parameter inc, allowing action to modify its input by adding -1 to it before returning the result.",
    link: "https://www.geeksforgeeks.org/closures-and-decorators-in-python/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image103.png",
    answers: [
      { text: "3", correct: true },
      { text: "6", correct: false },
      { text: "9", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code snippet iterates through a list named data to count how many elements within it are lists themselves. It initializes a variable count to 0 and then uses a for loop to iterate over each index of the data list. During each iteration, it checks if the type of the element at the current index (data[i]) is a list using the condition if type(data[i]) == list. If the condition is true, indicating that data[i] is indeed a list, it increments the count variable by 1. After completing the loop, the code prints out the final value of count, which represents the total number of elements in the data list that are lists themselves. <br><br>In the context of the provided data = [1, 2, [3, 4], [5, 6], 7, [8, 9]], the output of the code will be 3, as there are three elements in data that are lists ([3, 4], [5, 6], and [8, 9]). This example demonstrates how Python allows for flexible handling of different types of data within a single list structure, and how simple type checking can be used to filter and process elements based on their data type.",
    link: "https://realpython.com/python-type-checking/",
  },
  {
    question:
      "What would you insert instead ??? so that the program prints 'True' to the monitor?",
    image: "images/image104.png",
    answers: [
      { text: "x < y", correct: false },
      { text: "x is y", correct: true },
      { text: "x is not y", correct: false },
      { text: "x != y", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The identity operator 'is' checks if x and y are the same object in memory. In this case, because strings with the same content often refer to the same object in memory due to interning (especially for small strings and literals), this will likely evaluate to True as well.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image105.png",
    answers: [
      { text: "44", correct: false },
      { text: "(4,)", correct: false },
      { text: "(4)", correct: false },
      { text: "4", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Initially, data is assigned a tuple (1, 2, 4, 8). The slicing operation data[-2:-1] extracts a portion of this tuple, specifically creating a new tuple containing just the second-to-last element, which is (4,). Then, data is reassigned to the last element of this new tuple, which is simply 4. Therefore, when the final value of data is printed, the output is 4.",
    link: "https://realpython.com/python-tuples/",
  },
  {
    question:
      "Which of the following commands can be used to read the next line from a file?",
    answers: [
      { text: "readline( )", correct: true },
      { text: "read(n)", correct: false },
      { text: "read( )", correct: false },
      { text: "readlines( )", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The readline() method reads the next line from the file and returns it as a string. It is similar to the read() method, except it reads only one line at a time.",
    link: "https://www.w3schools.com/python/ref_file_readline.asp",
  },
  {
    question: "A built-in function is a function which ...",
    answers: [
      {
        text: "comes with Python, and is an integral part of Python.",
        correct: true,
      },
      { text: "is hidden from programmers.", correct: false },
      { text: "has to be imported before use.", correct: false },
      {
        text: "has been placed within your code by another programmer.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>A built-in function is a function which comes with Python, and is an integral part of Python. It is one of the fundamental building blocks of any programming language.",
    link: "https://www.geeksforgeeks.org/python-built-in-functions/",
  },
  {
    question:
      "Which of the following functions can be used to check if a file exists?",
    answers: [
      { text: "os.isFile( )", correct: false },
      { text: "os.path.exists( )", correct: false },
      { text: "os.path.isfile( )", correct: true },
      { text: "os.path.isFile( )", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The os.path.isfile() function checks if the path is an existing regular file. It returns True if it exists and False if it does not.",
    link: "https://www.geeksforgeeks.org/python-os-path-isfile-method/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image106.png",
    answers: [
      { text: "Peter", correct: true },
      { text: "Paul", correct: false },
      { text: "Mary", correct: false },
      { text: "The code is erroneous.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Initially, the list data is assigned the elements ['Peter', 'Paul', 'Mary']. The expression inside the print statement is data[int(-1 / 2)]. To understand this, we need to evaluate the expression int(-1 / 2) first.<br><br>The division of -1 by 2 results in -0.5. Applying the int() function to -0.5 truncates the decimal part, yielding 0 because converting a float to an integer in Python truncates towards zero. So, int(-0.5) evaluates to 0.<br><br>Thus, the expression data[int(-1 / 2)] simplifies to data[0]. The index 0 in the list data refers to the first element, which is 'Peter'. Therefore, when the program runs, it prints 'Peter' to the monitor.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image107.png",
    answers: [
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The given code snippet defines a function func(x) that uses recursion to compute the sum of all integers from x down to 0. Here's how it works:<br><br>When func(3) is called, the function checks if x is 0. Since x is 3, which is not 0, the function proceeds to return the value of 3 plus the result of func(2). The call to func(2) then triggers a similar process: it checks if x is 0, finds that x is 2, and returns 2 plus the result of func(1).<br><br>This pattern continues with func(1), which returns 1 plus the result of func(0). Finally, func(0) reaches the base case where x is indeed 0, so it returns 0.<br><br>As the recursion unwinds, func(1) returns 1, func(2) returns 3, and func(3) ultimately returns 6, which is the sum of 3 + 2 + 1 + 0.<br><br>Therefore, when print(func(3)) is executed, the output will be 6.",
    link: "https://www.programiz.com/python-programming/recursion",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image108.png",
    answers: [
      { text: "0", correct: true },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The for loop runs four times (len(data) is 4, as the dictionary has four key-value pairs). Each iteration updates x based on its current value as a key in the dictionary. <br><br>First Iteration: <br>x is 0. <br>x is updated to data[0], which is 1. <br><br>Second Iteration: <br>x is now 1. <br>x is updated to data[1], which is 0. <br><br>Third Iteration: <br>x is now 0 again. <br>x is updated to data[0], which is 1. <br><br>Fourth Iteration: <br>x is now 1 again. <br>x is updated to data[1], which is 0 = final value.<br><br>The variable x oscillates between 0 and 1 throughout the iterations due to the values stored in the dictionary data.",
    link: "https://www.programiz.com/python-programming/dictionary",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image109.png",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The output of the code snippet is 2. This is because the method set updates self.x to 2 + 3 (which is 5) but returns the original value of x (which is 2). Thus, when print(a.set(a.x + 1)) is executed, it prints 2, which is the value returned by the set method.",
    link: "https://www.programiz.com/python-programming/methods",
  },
  {
    question: "What is the output of math.ceil(-1.1)?",
    answers: [
      { text: "-1", correct: true },
      { text: "-1.0", correct: false },
      { text: "-2", correct: false },
      { text: "-2.0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The math.ceil() function in Python returns the smallest integer greater than or equal to a given number. For -1.1, the smallest integer greater than -1.1 is -1.",
    link: "https://www.w3schools.com/python/ref_math_ceil.asp",
  },
  {
    question: "What is the output of math.floor(-1.1)?",
    answers: [
      { text: "-1", correct: false },
      { text: "-1.0", correct: false },
      { text: "-2", correct: true },
      { text: "-2.0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The math.floor() function in Python returns the largest integer less than or equal to a given number. For -1.1, the largest integer less than -1.1 is -2.",
    link: "https://www.w3schools.com/python/ref_math_floor.asp",
  },
  {
    question:
      "Which of the follwing returns a random floating number between 0 and 1?",
    answers: [
      { text: "math.random()", correct: false },
      { text: "math.random(1.0)", correct: false },
      { text: "random.random()", correct: true },
      { text: "random.random(1.0)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>random.random() in Python generates a random floating-point number between 0.0 (inclusive) and 1.0 (exclusive). It returns a value in the range [0.0, 1.0)",
    link: "https://www.w3schools.com/python/ref_random_random.asp",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image110.png",
    answers: [
      { text: "None", correct: false },
      { text: "True", correct: true },
      { text: "0", correct: false },
      { text: "False", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The output is True. Both dir(math) and dir(sys) return lists, so b1 and b2 are both True. The logical and between them results in True.",
    link: "https://www.geeksforgeeks.org/python-dir-function/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image111.png",
    answers: [
      { text: "It outputs 0", correct: false },
      { text: "It outputs 1", correct: false },
      { text: "It outputs 2", correct: true },
      { text: "The code is erroneous and will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The output is 2. The code raises a ValueError because '2A' cannot be converted to an integer, so n is set to 2.",
    link: "https://docs.python.org/3/library/exceptions.html#base-classes",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image112.png",
    answers: [
      { text: "It outputs 1", correct: false },
      { text: "It outputs 2", correct: false },
      { text: "It outputs 3", correct: true },
      { text: "The code is erroneous and will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The output is 3. The foo(0) call triggers a ZeroDivisionError, an ArithmeticError subclass. This increments m by 1 and re-raises the exception. The outer try-except block catches the ArithmeticError, adding 2 more to m, resulting in a final value of 3.",
    link: "https://docs.python.org/3/library/exceptions.html#base-classes",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image113.png",
    answers: [
      { text: "It outputs error", correct: false },
      { text: "It outputs 0", correct: false },
      { text: "The code is erroneous and will not execute", correct: false },
      { text: "It outputs list assignment index out of range", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The output is list assignment index out of range. The code attempts to assign a value to an index that doesn't exist, causing an IndexError, which is caught and printed.",
    link: "https://www.freecodecamp.org/news/list-index-out-of-range-python-error-message-solved/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image114.png",
    answers: [
      { text: "It outputs 3", correct: true },
      { text: "It outputs 'None'", correct: false },
      { text: "It outputs 0", correct: false },
      { text: "It raises an exception", correct: false },
    ],
    explanation:
      'Explanation:<br><br>The output is 3. The code converts 1/3 to a string ("0.3333333333333333"), iterates over each character, and builds the dummy string. The last character of the string is 3.',
    link: "https://www.geeksforgeeks.org/convert-integer-to-string-in-python/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image115.png",
    answers: [
      { text: "It outputs True", correct: true },
      { text: "It outputs False", correct: false },
      { text: "It outputs nothing", correct: false },
      { text: "It raises an exception", correct: false },
    ],
    explanation:
      'Explanation:<br><br>The output is True. The split method creates a list of strings without separators, and join concatenates them into "alphabetagamme", which contains only alphabetic characters. Thus, isalpha() returns True.',
    link: "https://www.w3schools.com/python/ref_string_isalpha.asp",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image116.png",
    answers: [
      { text: "It outputs 1", correct: true },
      { text: "It outputs 0", correct: false },
      { text: "It raises an exception", correct: false },
      { text: "It outputs 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code prints 1. Sub_A's doit() method calls its overridden make() method, returning 1, while Sub_B's doit() calls the inherited make() method from Super, returning 0. The sum is 1.",
    link: "https://docs.python.org/3/tutorial/classes.html#inheritance",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image117.png",
    answers: [
      { text: "False upper", correct: false },
      { text: "True upper", correct: true },
      { text: "False lower", correct: false },
      { text: "True lower", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code prints True upper. Object is an instance of Lower, and super().__init__() in Lower calls Upper's constructor, setting Object.property to 'upper'.",
    link: "https://docs.python.org/3/tutorial/classes.html#inheriting-from-classes",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image118.png",
    answers: [
      { text: "It raises an exception", correct: false },
      { text: "It outputs 2", correct: false },
      { text: "It outputs 0", correct: false },
      { text: "It outputs 1", correct: true },
    ],
    explanation:
      "Explanation:<br><br>First, the Class is defined with a class variable Variable initialized to 0 and an instance variable value initialized to 0 within the __init__ method. When object_1 is created, the __init__ method is called, setting object_1.value to 0. After that, the class variable Class.Variable is incremented by 1, making its value 1.<br><br>Next, object_2 is created, which also triggers the __init__ method, setting object_2.value to 0. Then, object_2.value is explicitly incremented by 1, making its value 1. At this point, object_2.Variable refers to the class variable Variable, which is 1, and object_1.value remains 0.<br><br>When the code prints object_2.Variable + object_1.value, it adds 1 (from object_2.Variable) and 0 (from object_1.value), resulting in the output 1.",
    link: "https://docs.python.org/3/tutorial/classes.html#class-variables",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image119.png",
    answers: [
      { text: "It outputs 6", correct: false },
      { text: "It raises an exception", correct: false },
      { text: "It outputs 1", correct: false },
      { text: "It outputs 2", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The provided code defines a class Class with a private class variable __Var initialized to 0. The class also has a method foo, which increments Class.__Var by 1 and assigns this incremented value to an instance variable __prop, which is also private.<br><br>When o1, an instance of Class, is created and its foo method is called, Class.__Var is incremented from 0 to 1, and o1.__prop is set to this value 1. Afterward, another instance o2 is created, but its foo method is not called. This means that o2's __prop is never assigned, and Class.__Var remains 1.<br><br>In the final print statement, the code attempts to access the private class variable __Var and the private instance variable __prop. These private variables are accessed using their name-mangled versions: _Class__Var for the class variable and _Class__prop for the instance variable.<br><br>The expression o2._Class__Var + o1._Class__prop adds 1 (the value of Class.__Var via o2._Class__Var) to 1 (the value of o1._Class__prop). As a result, the output of the code is 2.",
    link: "https://docs.python.org/3/tutorial/classes.html#private-variables",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image120.png",
    answers: [
      { text: "4", correct: false },
      { text: "1", correct: true },
      { text: "16", correct: false },
      { text: "An exception is raised", correct: false },
    ],
    explanation:
      "Explanation:<br><br>range(-2, 2) creates a collection of numbers, starting from -2 and ending at 2 (exclusive), so [-2, -1, 0, 1].<br><br>The filter function or lambda function filters out everything where the absolute value is less than 1.<br><br>The absolute value or the absolute value function is as follows: absolute value |x| = √(x²).<br><br>Thus, for -2, it is √(-2)² = √4 = 2.<br>Similarly, for -1, the absolute value is 1.<br><br>So [-2, -1, 0, 1] becomes [2, 1, 0, 1].<br><br>Now, everything that is less than 1 (True) is filtered out, so only 0 remains in the variable m.Therefore, the final result for the length of m, which contains only the element 0, is 1.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#list-comprehensions",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image121.png",
    answers: [
      { text: "1", correct: false },
      { text: "0", correct: true },
      { text: "3", correct: false },
      { text: "The code is erroneous and will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>3 % 1 is 0. <br><br>Since x = 0, the else block is executed, which prints 0.",
    link: "https://www.geeksforgeeks.org/what-is-a-modulo-operator-in-python/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image122.png",
    answers: [
      { text: "An exception is raised", correct: false },
      { text: "1", correct: false },
      { text: "0", correct: false },
      { text: "-1", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The foo function takes three parameters: x, y, and z. x is expected to be a function. In the code, x is a lambda function that returns the remainder of dividing its input by 2 (x % 2).<br><br> When calling foo(lambda x: x % 2, 2, 1), the lambda function is applied to both 2 and 1. For 2, 2 % 2 equals 0, and for 1, 1 % 2 equals 1. The function subtracts these results: 0 - 1.<br><br> Thus, the expected output is -1.",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image123.png",
    answers: [
      { text: "The code is erroneous and will not execute", correct: false },
      { text: "It outputs [4, 2, 0]", correct: false },
      { text: "It outputs [3, 1]", correct: true },
      { text: "It outputs [1, 3]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>my_list is created as [0, 1, 2, 3, 4].<br>br>The list comprehension [my_list[i] for i in range(4, 0, -1) if my_list[i] % 2 != 0] iterates over the indices 4, 3, 2, 1 (in that order) and selects the values from my_list at those indices if the value is not divisible by 2 (i.e., it's odd).<br>br> For i = 4, my_list[4] is 4 (even, so it's not included).<br>br>For i = 3, my_list[3] is 3 (odd, so it's included).<br>br>For i = 2, my_list[2] is 2 (even, so it's not included).<br>br>For i = 1, my_list[1] is 1 (odd, so it's included).<br>br>Therefore, the resulting list m is [3, 1].<br>br>The output of the code is [3, 1].",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question: "What is the expected behaviour of the following code?",
    image: "images/image124.png",
    answers: [
      { text: "The code is erroneous and will not execute", correct: true },
      { text: "It outputs 1", correct: false },
      { text: "It outputs 3", correct: false },
      { text: "It outputs 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'except' clause must be last in the 'try-except' block, otherwise it will not be executed and results in a SyntaxError.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image125.png",
    answers: [
      { text: "It outputs False", correct: true },
      { text: "It raises an exception", correct: false },
      { text: "It outputs True", correct: false },
      { text: "It outputs nothing", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code joins the tuple ('alpha', 'omega') into the string 'alpha,,omega' using ',,' as a delimiter.<br><br>It then splits this string by ',' , resulting in the list ['alpha', '', 'omega'].<br><br> Finally, the code checks if the string ',' is an element in this list. <br><br>Since ',' is not in the list, the output is False.",
    link: "https://www.w3schools.com/python/ref_string_split.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image126.png",
    answers: [
      { text: "It outputs 123", correct: false },
      { text: "It raises an exception", correct: false },
      { text: "It outputs 6", correct: true },
      { text: "It outputs 321", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code reverses the string `'123'`, resulting in `'321'`. It then iterates over each character in this reversed string, converting each character to an integer and adding it to the variable `dummy`. Starting with `dummy` equal to 0, it first adds 3, then 2, and finally 1. After these additions, the value of `dummy` becomes 6, which is then printed.",
    link: "https://www.geeksforgeeks.org/python-reversed-function/",
  },
  {
    question: "What is the expected behaviour of the following code?",
    image: "images/image127.png",
    answers: [
      { text: "It outputs 3", correct: false },
      { text: "It outputs 2", correct: false },
      { text: "It outputs 5", correct: true },
      { text: "It raises an exception", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a class named Class with a class variable Var initialized to 0. When an instance of this class is created, the __init__ method sets an instance variable var and increments the class variable Var by 1.<br><br>When object_1 is created with the value 1, it sets object_1.var to 1 and increases Class.Var to 1. Then, when object_2 is created with the value 2, it sets object_2.var to 2 and increments Class.Var to 2. Finally, the code prints the sum of Class.Var, object_1.var, and object_2.var, which equals 2 + 1 + 2, resulting in an output of 5.",
    link: "https://docs.python.org/3/tutorial/classes.html#instance-variables",
  },
  {
    question: "What is the expected behaviour of the following code?",
    image: "images/image128.png",
    answers: [
      { text: "It raises an exception", correct: false },
      { text: "It outputs 2", correct: false },
      { text: "It outputs 3", correct: true },
      { text: "It outputs 1", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a base class `Super` with two methods: `make`, which returns `0`, and `doit`, which calls the `make` method. There are two subclasses, `Sub_A` and `Sub_B`, each of which overrides the `make` method. `Sub_A`'s `make` method returns `1`, and `Sub_B`'s returns `2`.<br><br>When an instance of `Sub_A` is created and the `doit` method is called on it, the overridden `make` method in `Sub_A` is executed, returning `1`. Similarly, when an instance of `Sub_B` calls `doit`, the overridden `make` method in `Sub_B` returns `2`.<br><br>Finally, the code prints the sum of `a.doit()` and `b.doit()`, which is `1 + 2`, resulting in an output of `3`.",
    link: "https://docs.python.org/3/tutorial/classes.html#overriding-methods",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image129.png",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "2", correct: true },
      { text: "An exception is raised", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a function `foo` that takes three arguments: `x`, `y`, and `z`. The function returns the result of applying `x` to the result of applying `y` to `z`.<br><br>In the function call `foo(lambda x: 2 * x, lambda x: x // 2, 2)`, the argument `y` is `lambda x: x // 2` and `z` is `2`. Applying `y` to `z` results in `2 // 2`, which equals `1`. This result is then passed to `x`, where `x` is `lambda x: 2 * x`. Applying `x` to `1` gives `2 * 1`, which equals `2`.<br><br>Therefore, the `print` statement outputs `2`.",
    link: "https://realpython.com/python-lambda/#anonymous-functions",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image130.png",
    answers: [
      { text: "An exception is raised", correct: false },
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The code defines a tuple mytu containing the elements ('a', 'b', 'c'). It then creates a new tuple m by applying a lambda function to each element of mytu. The lambda function converts each character to its ASCII value using ord, adds 1 to this value, and then converts it back to a character using chr.<br><br>For the character 'a', ord('a') is 97, so chr(97 + 1) results in 'b'.<br><br>For the character 'b', ord('b') is 98, so chr(98 + 1) results in 'c'.<br>br>For the character 'c', ord('c') is 99, so chr(99 + 1) results in 'd'.<br><br>Thus, the tuple m becomes ('b', 'c', 'd').<br><br>Finally, m[-2] accesses the second-to-last element of the tuple m, which is 'c'. Therefore, the print statement outputs 'c'.",
    link: "https://realpython.com/python-lambda/#anonymous-functions",
  },
  {
    question: "What is the expected behaviour of the following code?",
    image: "images/image131.png",
    answers: [
      { text: "It outputs abcef", correct: false },
      { text: "The code is erroneous and will not execute", correct: true },
      { text: "It outputs abcdef", correct: false },
      { text: "It outputs abdef", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code snippet attempts to delete the character at index 2 from the string str and then return the modified string. However, strings in Python are immutable, meaning they cannot be changed after they are created.<br><br>The function fun is defined to take a string s as input. It tries to delete the character at index 2 using del s[2].<br><br>Since strings are immutable, you cannot use del to remove characters from them. This will result in a TypeError indicating that the object does not support item deletion.<br><br>Thus, running this code will produce a TypeError and will not print any result.",
    link: "https://www.w3schools.com/python/ref_keyword_del.asp",
  }, 
  {
    question: "What is true about Python packages?<br><br>(Choose three)",
    answers: [
      { text: "A code designed to initialize a package's state should be placed inside a file named init.py", correct: true },
      { text: "A package's contents can be stored and distributed as an mp3 file", correct: false },
      { text: "__pycache__ is a folder that stores semi-compiled Python modules", correct: true },
      { text: "The sys.path variable is a list of strings", correct: true },
    ],
    explanation: "Explanation:<br><br>The __init__.py file is used to initialize a Python package and can contain initialization code or define what is available for import when the package is imported.<br><br>The __pycache__ directory contains bytecode-compiled versions of Python modules, which are files with a .pyc extension. These files help Python start up faster by skipping the compilation step.<br><br>sys.path is a list of strings that specifies the search paths for modules. It includes directories and zip files where Python looks for modules when importing.",
    link: "https://docs.python.org/3/library/sys.html#sys.path",
  },
  {
    question: "Assuming that the code below has been executed successfully, which of the following expressions will always evaluate to True?<br><br>(Choose two)",
    image: "images/image700.png",
    answers: [
      { text: "len(random.sample([1, 2, 3], 1)) > 2", correct: false },
      { text: "v1 == v2", correct: false },
      { text: "random.choice([1, 2, 3]) > 0", correct: true },
      { text: "v1 != v2", correct: true },
    ],
    explanation: "Explanation:<br><br>The function random.choice([1, 2, 3]) randomly selects an element from the list [1, 2, 3]. Since all elements in this list (1, 2, and 3) are greater than 0, random.choice([1, 2, 3]) > 0 will always be True<br><br>v1 != v2 will always evaluate to True because v1 and v2 are randomly generated floating-point numbers between 0.0 and 1.0. While it is theoretically possible for v1 and v2 to be exactly equal, in practical terms with the precision of floating-point numbers, they are very unlikely to be exactly the same. Thus, this condition will almost always be true.",
    link: "https://docs.python.org/3/library/random.html#random.choice",
  },
  {
    question: "Which of the following code snippets will execute without raising any unhandled exceptions? <br><br>(Choose two)",
    image: "images/image701.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
    explanation: "Explanation:<br><br>In snippet A, print(-1/1) executes successfully without raising an exception, so the except block is skipped, and the else block runs, printing 1/1. Thus, this code runs without errors.<br><br>In snippet B, x = 1 executes without errors, so the except block is skipped. The else block runs and updates x to 3. This snippet works fine without any exceptions.<br><br>Snippet C raises a NameError in the try block because y is undefined. The except block also fails to handle this properly, causing another NameError. Hence, this snippet does not work due to unhandled exceptions.<br><br>In snippet D, x = 1/0 raises a ZeroDivisionError, which is not caught by the except block that only handles NameError. As a result, the snippet fails due to the unhandled ZeroDivisionError",
    link: "https://docs.python.org/3/tutorial/errors.html#handling-exceptions",
  },
  {
    question: "What is true about the following snippet?<br><br>(Choose two)",
    image: "images/image702.png",
    answers: [
      { text: 'The string "the show must go on" will be seen', correct: false },
      { text: 'The string "nice to see you" will be seen', correct: true },
      { text: 'The string "na na na na" will be seen', correct: false },
      { text: 'The code will raise an unhandled exception', correct: false },
      {text: 'The string  "I feel good" will be seen', correct: true},
    ],
    explanation: 'Explanation:<br><br>The snippet defines a custom exception class E with a fixed string message in its __str__ method. In the try block, it prints "I feel food" and raises an instance of E with a specific message.<br><br> The except block catches the exception and prints "nice to see you" due to the custom __str__ method. The else block is skipped because an exception was raised.',
    link: "https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions",
  },
  {
    question: "Which of the following expressions evaluates to True? <br><br>(Choose two)",
    image: "images/image703.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>For expression A, ord("0") - ord("9") == 10, the ord("0") function returns the ASCII value of "0", which is 48, and ord("9") returns the ASCII value of "9", which is 57. Subtracting these values gives 48 - 57, which equals -9. Since -9 is not equal to 10, this expression is false.<br><br>Expression B, len("''") == 2, checks the length of the string ''. The string contains two single quotes, so its length is indeed 2. Therefore, this expression is true.<br><br>For expression C, chr(ord('z') - 1) == 'y', ord('z') gives the ASCII value of 'z', which is 122. Subtracting 1 from 122 gives 121, and chr(121) returns the character 'y'. Since 'y' is indeed equal to 'y', this expression is true.<br><br>Expression D, len(''1234'') == 4, contains an incorrectly formatted string (''1234''), which would cause a syntax error in Python. If the string were properly formatted as "1234", its length would be 4. However, as it is written, the expression is invalid and does not evaluate to anything.`,
    link: "https://python-reference.readthedocs.io/en/latest/docs/str/ASCII.html",
  },
  {
    question: "Which of the following expressions evaluates to True? <br><br>(Choose two)",
    image: "images/image704.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation: "Explanation:<br><br>For expression A, 'xYz'.lower() > 'XY', the .lower() method converts the string 'xYz' to lowercase, resulting in 'xyz'. When comparing 'xyz' with 'XY', Python compares the strings lexicographically based on Unicode values. The lowercase 'x' has a higher Unicode value than the uppercase 'X', so 'xyz' > 'XY' is true.<br><br>In expression B, '8' + '8' != 2 * '8', the operation '8' + '8' concatenates the two strings, resulting in '88'. The expression 2 * '8' repeats the string '8' twice, also resulting in '88'. Since '88' is equal to '88', the expression '8' + '8' != 2 * '8' is false.<br><br>For expression C, float('3.14') == str('3.' + '14'), the float('3.14') converts the string '3.14' to the float 3.14. The str('3.' + '14') first concatenates the strings '3.' and '14' to form '3.14', and then converts it to a string, which remains '3.14'. However, a float 3.14 is not equal to a string '3.14', so this expression is false.<br><br>In expression D, 121 + 1 == int('1' + 2 * '2'), the calculation 121 + 1 results in 122. The expression '1' + 2 * '2' first repeats the string '2' twice to get '22', and then concatenates it with '1' to form '122'. Converting this string '122' to an integer using int('122') results in the integer 122. Since 122 == 122, this expression is true.",
    link: "https://docs.python.org/3/reference/expressions.html#value-comparisons",
  },
  {
    question: "Which of the following invocations are valid?<br><br>(Choose two)",
    answers: [
      { text: 'sort("python")', correct: false },
      { text: '"python".find("")', correct: true },
      { text: '"python".sort()', correct: false },
      { text: 'sorted("python")', correct: true },
    ],
    explanation: `Explanation:<br><br>sort("python") - This is not valid. The sort() method is available only for lists, not strings. Strings in Python are immutable, so they cannot be sorted in place.<br><br>"python".find("") - This is valid. The find() method can be used on a string to search for a substring. When you pass an empty string "" as the argument, it returns 0 because an empty string is found at the beginning of any string.<br><br>"python".sort() - This is not valid. Like sort("python"), this also fails because the sort() method cannot be applied to strings, as it is a list-specific method.<br><br>sorted("python") - This is valid. The sorted() function can be used with strings. It returns a list of characters sorted in ascending order (i.e., ['h', 'n', 'o', 'p', 't', 'y'] for the string "python").`,
    link: "https://docs.python.org/3/howto/sorting.html",
  },
  {
    question: "Which of the following invocations are valid?<br><br>(Choose two)",
    answers: [
      { text: "'in' in 'in'", correct: true },
      { text: "'in' in 'Hamburg'", correct: false },
      { text: "'in not' in 'not'", correct: false },
      { text: "'m'.upper() in 'Marvin'", correct: true },
    ],
    explanation: "Explanation:<br><br>'in' in 'in' - This is valid. The expression checks if the substring 'in' is present in the string 'in'. Since both are the same, the result is True.<br><br>'in' in 'Hamburg' - This is not valid. The expression checks if the substring 'in' is present in the string 'Hamburg'. Since 'in' is not present in 'Hamburg', the result is False.<br><br>'in not' in 'not' - This is not valid. The expression checks if the substring 'in not' is present in the string 'not'. Since 'in not' is longer and doesn't exist in 'not', the result is False.<br><br>'m'.upper() in 'Marvin' - This is valid. The expression converts 'm' to its uppercase form 'M' and checks if 'M' is present in the string 'Marvin'. Since 'M' is indeed in 'Marvin', the result is True.",
    link: "https://docs.python.org/3/reference/expressions.html#membership-test-operations",
  },
  {
    question: "Which of the following statements are true?<br><br>(Choose two)",
    answers: [
      { text: "An escape sequence can be recognized by the / sign put in front of it", correct: false },
      { text: "ASCII is a subset of Unicode", correct: true },
      { text: "II in ASCII stands for Internal Information", correct: false },
      { text: "A code point is a number assigned to a given character", correct: true },
    ],
    explanation: "Explanation:<br><br>ASCII (American Standard Code for Information Interchange) is a character encoding standard that uses 7 bits to represent 128 characters. Unicode is a more extensive encoding system that encompasses ASCII as its first 128 characters, allowing for the representation of a much wider array of characters and symbols from various languages and scripts.<br><br>In Unicode, a code point is a unique number assigned to each character in the Unicode standard. For example, the code point for the letter 'A' is U+0041.",
    link: "https://en.wikipedia.org/wiki/ASCII",
  },
  {
    question: "Assuming the code below has been executed successfully, which of the following expressions evaluate to True? <br><br>(Choose two)",
    image: "images/image705.png",
    answers: [
      { text: "'var' in Class __dict__", correct: true },
      { text: "'data' in Object.__dict", correct: false },
      { text: "len(Class.__dict__) == 1", correct: false },
      { text: "'data' in Class.__dict__", correct: true },
    ],
    explanation: "Explanation:<br><br>'var' in Class.__dict__, evaluates to true. This is because Class.__dict__ is a dictionary containing the class attributes of Class. Since var is a class attribute defined in Class, it will be present in this dictionary.<br><br>'data' in Object.__dict__, evaluates to false. This is because Object.__dict__ is a dictionary containing only the instance attributes of the Object instance. Since data is a class attribute and not an instance attribute, it will not be found in this dictionary.<br><br>len(Class.__dict__) == 1, evaluates to false. The Class.__dict__ dictionary contains multiple entries, including the class attributes var and data, as well as other special entries such as methods and possibly module information. Therefore, the length of Class.__dict__ is greater than one.<br><br>'data' in Class.__dict__, evaluates to true. Since data is a class attribute of Class, it is included in the Class.__dict__ dictionary, making this expression true.",
    link: "https://docs.python.org/3/reference/datamodel.html#object.__dict__",
  },
  {
    question: "Assuming that the code below has been placed inside a file named code.py and executed successfully, which of the following expressions evaluate to true?<br><br>(Choose two)",
    image: "images/image706.png",
    answers: [
      { text: "str(Object) = 'Object'", correct: false },
      { text: "__name__ == '__main__'", correct: false },
      { text: "len(ClassB.__bases__) == 1", correct: false },
      { text: "classA.__module__ == 'ClassA'", correct: false },
    ],
    explanation: "Explanation:<br><br>str(Object) = 'Object': In Python, you cannot use = for comparison. The correct operator for comparison is ==. The correct expression would be str(Object) == 'Object', but even then, this would not be true because the default implementation of __str__ in Object will return something like '<__main__.ClassB object at 0x...>', not 'Object'.<br><br>__name__ == '__main__': This expression checks if the script is being run as the main program. Since the code provided does not include the standard if __name__ == '__main__': block, we cannot determine if this script was executed as the main program. Therefore, without more context, this expression might not be true, but IT CAN BE true if this script were executed directly.<br><br>len(ClassB.__bases__) == 1: ClassB.__bases__ returns a tuple of base classes of ClassB. Since ClassB inherits from ClassA, ClassB.__bases__ contains a single base class, ClassA. Thus, the length of ClassB.__bases__ is 1, making this expression true.<br><br>classA.__module__ == 'ClassA': This expression is not valid as classA is not defined in the provided code. The __module__ attribute of a class refers to the name of the module in which the class is defined. In this context, the correct expression would be ClassA.__module__, and it would return the name of the module (likely 'code' if the code is in a file named code.py).",
    link: "https://docs.python.org/3/reference/datamodel.html#object.__module__",
  },
  {
    question: "What is true about lambda function? <br><br>(Choose two)",
    answers: [
      { text: "The are called anonymous functions", correct: true },
      { text: "They cannot return the None value as a result", correct: false },
      { text: "The must contain the return keyword", correct: false },
      { text: "The must have a non-zero number of parameters", correct: true },
    ],
    explanation: "Explanation:<br><br>Lambda functions in Python are indeed known as anonymous functions because they are defined without a name. They are often used for short, throwaway functions where defining a full function with a name would be unnecessarily verbose.<br><br>A lambda function in Python can have any number of arguments, including zero arguments. Lambda function with no arguments performs a simple operation without needing any inputs. However, they cannot have zero parameters.",
    link: "https://docs.python.org/3/reference/compound_stmts.html#lambda",
  },
  {
    question: "Which of the following lines contain valid Python code? <br><br>(Choose two)",
    image: "images/image707.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation: "Explanation: <br><br>A is invalid because you cannot use return in a lambda function. Lambda functions are meant to be single expressions, not statements.<br><br>B is valid. It defines a lambda function that takes two arguments a and b, and returns a if a is less than b, otherwise it returns b. <br><br>C is invalid. Lambda functions do not support default argument values in this manner. <br><br>D is valid. It defines a lambda function that takes two arguments a and b but always returns True, regardless of the values of a and b.",
    link: "https://docs.python.org/3/reference/compound_stmts.html#lambda",
  },
  {
    question: "Select the true statements about the map() function? <br><br>(Choose two)",
    answers: [
      { text: "The map() function can accept more than two arguments.", correct: true },
      { text: "The map() function can accept only two arguments.", correct: false },
      { text: "The first map() function argument can be a list.", correct: false },
      { text: "The second map() function argument can be a list.", correct: true },
    ],
    explanation: "Explanation:<br><br>The map() function can accept more than two arguments. The first argument is a function, and subsequent arguments are iterables. If there are multiple iterables, map() will apply the function using corresponding elements from each iterable.<br><br>The second argument (and any subsequent arguments) to map() can be lists (or other iterables). These iterables are used as inputs to the function provided as the first argument.",
    link: "https://docs.python.org/3/library/functions.html#map",
  },
  {
    question: "Which of the following snippets outputs '1 2 3'? <br><br>(Choose two)",
    image: "images/image708.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>Snippet A converts the string "321" into a list of characters, sorts the list into ['1', '2', '3'], and then joins the sorted elements with a space separator. This results in the output "1 2 3".<br><br>Snippet B sorts the characters of the string "321" into a list ['1', '2', '3'], and then joins these sorted characters with a space separator, also producing the output "1 2 3.`
  },
  {
    question: "Which of the following are valid Python string literals? <br><br>(Choose two)",
    answers: [
      { text: '" " " Hello there! General Kenobi!" " " "', correct: true },
      { text: "'All the emperor's druids'", correct: false },
      { text: '"\"', correct: false },
      { text: `"King's Cross Station"`, correct: true },
    ],
    explanation: `Explanation:<br><br>A is a valid Python string literal. Triple quotes (""" or ''') allow for multi-line strings and can include both single and double quotes within the string without the need for escaping.<br><br>B is not a valid Python string literal. The single quote within the string (emperor's) conflicts with the single quotes used to define the string, which causes a syntax error. To make this valid, you would need to either escape the inner single quote or use double quotes for the string.<br><br>C is not a valid Python string literal. The backslash (\) is an escape character, and it's incomplete here. To make this valid, you would need to complete the escape sequence or use a double backslash to represent a literal backslash.<br><br>D is a valid Python string literal. The string is enclosed in double quotes, so the single quote within the string (King's) does not cause any issues.`,
    link: "https://www.w3schools.com/python/python_strings.asp",
  },
  {
    question: "Assuming that the following code has been executed successfully, indicate the expressions which evaluate to True and don't raise any exceptions. <br><br>(Choose two)",
    image: "images/image709.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: "Explanation:<br><br>Expression A, 'stuff' in binder.__dict__, evaluates to False because after the method dispose() is called on the binder object, the stuff attribute is deleted. As a result, 'stuff' is no longer present in binder.__dict__.<br><br>Expression B, len(binder.__dict__) != len(Collection.__dict__), evaluates to True. After dispose() is called, binder.__dict__ is likely empty, while Collection.__dict__ still contains the class attributes, including stamps. Since the lengths of these dictionaries are different, this expression is true.<br><br>Expression C, 'stamps' in Collection.__dict__, evaluates to True. The stamps attribute is a class attribute of the Collection class, and it remains in Collection.__dict__, so this expression is true.<br><br>Expression D, len(binder.__dict__) > 0, evaluates to False. After the dispose() method deletes the stuff attribute, binder.__dict__ becomes empty, so its length is not greater than zero.",
    link: "https://docs.python.org/3/library/functions.html#len",
  },
  {
    question: "Which of the following function calls can be used to invoke the below function definition? <br><br>(Choose three)",
    image: "images/image710.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: true },
      { text: "E", correct: false },
    ],
    explanation: "Explanation:<br><br>The function call A is valid because it passes four positional arguments that directly match the parameters a, b, c, and d in the function's definition.<br><br>The function call B is also valid. It uses three positional arguments for the parameters a, b, and c, and assigns a value to d using a keyword argument, which is perfectly acceptable in Python.<br><br>The function call C is invalid because it incorrectly mixes keyword arguments with a positional argument that comes after them. In Python, once you start using keyword arguments, all subsequent arguments must also be passed as keyword arguments.<br><br>The function call D is valid. It uses keyword arguments for all four parameters, matching the function's signature exactly, which is allowed and correct.<br><br>Lastly, the function call D is invalid because it starts with a keyword argument and then follows with positional arguments. In Python, after using a keyword argument, all subsequent arguments must also be passed as keyword arguments.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
  },
  {
    question: "Select the true statements. <br><br>(Choose two)",
    answers: [
      { text: "The lambda function can evaluate multiple expressions.", correct: false },
      { text: "The lambda function can evaluate only one expression.", correct: true },
      { text: "The lambda function can accept a maximum of two arguments.", correct: false },
      { text: "The lambda function can accept any number of arguments.", correct: true },
    ],
    explanation: "Explanation:<br><br>Lambda functions can have any number of arguments but only one expression. The expression is evaluated and returned. Lambda functions can be used wherever function objects are required.",
    link: "https://www.programiz.com/python-programming/anonymous-function#how",
  },
  {
    question: "What is true about object-oriented programming (OOP)? <br><br>(Choose two)",
    answers: [
      { text: "A class is like a blueprint used to construct objects.", correct: true },
      { text: "A class may exist without its objects, while objects cannot exist without their class.", correct: true },
      { text: "A relation between superclass and its subclass is known as fraternity.", correct: false },
      { text: "Polymorphism is a phenomenon which allows you to have many classes of the same name.", correct: false },
    ],
    explanation: "Explanation:<br><br>In OOP, a class is indeed like a blueprint or template that defines the properties (attributes) and behaviors (methods) that objects created from the class will have. Objects are instances of classes.<br><br>A class can be defined without creating any objects from it. However, an object cannot exist without a class because the class defines the structure and behavior of the object.",
    link: "https://www.programiz.com/python-programming/object-oriented-programming",
  },
  {
    question: "Which of the following expressions evaluates to True and raises no exception? <br><br>(Choose two)",
    image: "images/image711.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation: "Explanation:<br><br>The expression A evaluates to True and raises no exceptions. In Python, the empty string is considered to be present in any string, so this expression correctly returns True.<br><br>The expression B checks whether the substring 'xyz' is not present in the string 'uvwxyz'. Since 'xyz' is actually part of the string 'uvwxyz', this expression evaluates to False. While it raises no exceptions, it does not meet the criteria of evaluating to True.<br><br>The expression C checks whether the empty string is not present in another empty string. However, Python considers the empty string to be present in any string, including another empty string, so this expression evaluates to False. It raises no exceptions, but it does not evaluate to True.<br><br>Finally, the expression D evaluates to True and raises no exceptions. The character 'b' is indeed present in the string 'abc', so this expression correctly returns True.",
    link: "https://docs.python.org/3/reference/expressions.html#boolean-operations",
  },
  {
    question: "Select the true statements about the filter() function. <br><br>(Choose two)",
    answers: [
      { text: "The filter() function returns an iterator.", correct: true },
      { text: "The filter() function has the following syntax:filter(function, iterable)", correct: true },
      { text: "The filter() function does not return an iterator.", correct: false },
      { text: "The filter() function has the following syntax:filter(iterable, function)", correct: false },
    ],
    explanation: "Explanation:<br><br>The filter() function returns an iterator that can be used to iterate over the filtered results. In Python 3, it doesn't return a list directly but an iterator object that yields items one by one.<br><br>The filter() function takes two arguments: a function and an iterable. The function is applied to each item in the iterable, and only items for which the function returns True are included in the iterator returned by filter().",
    link: "https://www.programiz.com/python-programming/methods/built-in/filter",
  },
  {
    question: "Given the code below, which of the expressions will evaluate to True? <br><br>(Choose two)",
    image: "images/image712.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation: "Explanation: <br><br>Expression A compares if selection and element are the same object in memory. Since selection is an instance of Radio and element is an instance of Control, they are different objects and the expression evaluates to False.<br><br>In expression B, selection is an instance of Radio. In Radio, my_ID is inherited from Button, which is 2. Thus, selection.my_ID evaluates to 2, so this expression evaluates to True.<br><br>In expression C, start is an instance of Button, where my_ID is 2. This expression compares start.my_ID with -2, which is not equal. Thus, this expression evaluates to False.<br><br>In expression D, start is an instance of Button, so isinstance(start, Button) evaluates to True.",
    link: "https://docs.python.org/3/library/functions.html#isinstance",
  },
  {
    question: "A programmer needs to use the following functions:<br><br>machine( ), choice () and system( )<br><br>Which modules have to be imported to make this possible? <br><br>(Choose two)",
    answers: [
      { text: "math", correct: false },
      { text: "random", correct: true },
      { text: "tkinter", correct: false },
      { text: "platform", correct: true },
    ],
    explanation: "Explanation:<br><br>random is imported for the choice() function and system() function. tkinter is imported for the machine() function.",
    link: "https://docs.python.org/3/library/random.html",
  },
  {
    question: "Given the code below, complete the print() method body in a way that will ensure that the get() method is properly invoked <br><br>(Choose two)",
    image: "images/image713.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation: "Explanation:<br><br>A is incorrect: get() is an instance method, so you need an instance (self) to call it. Simply using get() without self won't work within the method.<br><br>B is incorrect: get() is an instance method and needs an instance to be called. Storage.get() tries to call get() on the class, not on an instance.<br><br>C is correct: This is the correct way to call the get() method on the current instance (self). Inside the print() method, self.get() will properly invoke the get() method.<br><br>D is correct: This calls get() on the instance self using the class Storage. While it's less common, it's valid and effectively does the same as self.get().",
    link: "https://docs.python.org/3/tutorial/classes.html#instance-methods",
  },
  {
    question: "You develop a Python application for your company. A list named employees contains 200 employee names, the last five being company management. You need to slice the list to display all employees excluding management. <br><br>Which code segments can you use? <br><br>(Choose two)",
    answers: [
      { text: "A.   Employees[ 1:-5 ]", correct: false },
      { text: "B.   Employees[  :-5 ]", correct: true },
      { text: "C.   Employees[ 0:-5 ]", correct: true },
      { text: "D.   Employees[ 0:-4 ]", correct: false },
      { text: "E.   Employees[ 1:-4 ]", correct: false },
    ],
    explanation: "Explanation:<br><br>A is incorrect: This starts slicing from index 1 and excludes the last five elements. This will skip the first employee and exclude the last five, which is not the desired outcome.<br><br>B is correct: This slices the list from the beginning up to but not including the last five elements. This is the correct way to exclude the last five elements.<br><br>C is correct: This is functionally the same as employees[:-5]. It slices from the beginning of the list up to but not including the last five elements.<br><br>D is incorrect: This slices up to but not including the last four elements. It excludes only the last four, not the last five.<br><br>E is incorrect: This starts slicing from index 1 and excludes the last four elements. This skips the first employee and excludes the last four, which is not the desired outcome.",
    link: "https://docs.python.org/3/tutorial/datastructures.html#slicing",
  },
  {
    question: "Which of the following statements are true? <br><br>(Choose two)",
    answers: [
      { text: "The open( ) function raises an exception when its operation fails.", correct: true },
      { text: "Trying to write a file opened in read-only mode removes its contents.", correct: false },
      { text: "Read, write, and delete are the names of file open modes.", correct: false },
      { text: "The second argument of the open( ) function is a string.", correct: true },
    ],
    explanation: "Explanation:<br><br>If the open() function fails (for example, if the file does not exist or there are permission issues), it raises an OSError or a subclass of it, such as FileNotFoundError.<br><br>The second argument of the open() function specifies the mode in which to open the file and is indeed a string. Examples include 'r', 'w', 'a', 'rb', etc.<br><br><br><br>If you open a file in read-only mode ('r'), you cannot write to it at all. Attempting to write will raise an io.UnsupportedOperation exception. The file's contents are not removed; the write operation is simply not allowed.<br><br>The common file open modes are 'r' (read), 'w' (write), 'a' (append), and so on. Delete is not a file open mode.",
    link: "https://docs.python.org/3/library/functions.html#open",
  },
  {
    question: "Which of the following open modes allow you to perform read operations? <br><br>(Choose two)",
    answers: [
      { text: "r+", correct: true },
      { text: "r", correct: true },
      { text: "w", correct: false },
      { text: "a", correct: false },
    ],
    explanation: "Explanation:<br><br>The r+ mode opens the file for both reading and writing. It does not truncate the file and allows you to perform read operations.<br><br>The r mode opens the file for reading only. It does not allow writing to the file.<br><br>The w mode opens the file for writing only and truncates the file if it exists. It does not permit reading from the file.<br><br>The a mode opens the file for appending. It allows writing data to the end of the file but does not allow reading from it.",
    link: "https://docs.python.org/3/library/functions.html#open",
  },
  {
    question: "Which of the following snippets output ABC to the screen? <br><br>(Choose two)",
    answers: [
      { text: "A.   print ( 'ABCDEF' [ :3 ] )", correct: true },
      { text: "B.   print ( 'AXBYCZ' [ : : -2] )", correct: false },
      { text: "C.   print ( 'AXBYCZ' [ : :2] )", correct: true },
      { text: "D.   print ( 'FEDCBA' [-3: ] )", correct: false },
    ],
    explanation: "Explanation:<br><br>A. This slices the string 'ABCDEF' from the beginning up to but not including index 3, which results in 'ABC'.<br><br>B. This reverses the string and takes every second character. The string 'AXBYCZ' reversed is 'ZCYBXA', and taking every second character gives 'ZCBA'.<br><br>C. This takes every second character from the string 'AXBYCZ', starting from the beginning. The result is 'ABC'.<br><br>D. This slices the string 'FEDCBA' starting from the third-to-last character to the end. The result is 'CBA'.",
    link: "https://www.w3schools.com/python/python_strings_slicing.asp",
  },
  {
    question: "The ABC company is creating a program that allows customers to log the number of miles biked. The program will send messages based on how many miles the customer logs. You create the following Python code:",
    image: "images/image714.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "E", correct: false },
      { text: "F", correct: true },
    ],
    explanation: "Explanation:<br><br>Answer A: The function doesn't need any parameters and correctly handles user input.<br><br>Answer F: The function has the necessary parameters to perform the calorie calculation based on the number of miles and the calories burned per mile.<br><br>Answers C and E incorrectly require a parameter.<br><br>In answer B, the parameter name should be calories_per_mile for clarity.<br><br>Answer D is missing required parameters.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "Assuming that the following code has been executed successfully, indicate the expressions which evaluate to True and don't raise any exceptions. <br><br>(Choose two)",
    image: "images/image715.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: "Explanation:<br><br>Expression A checks if the method is present in the class's dictionary and is not None. Since Class.__dict__ contains the class's attributes, including method, this evaluates to True and does not raise any exceptions.<br><br>Expression B compares the length of the instance's dictionary (object.__dict__) with the class's dictionary (Class.__dict__). Since the instance dictionary only contains instance_var and the class dictionary contains more items (like class_var and method), their lengths are different. This evaluates to False.<br><br>Expression C checks if '__dict__' is a key in Class.__dict__. However, __dict__ is a special attribute and not a key within the dictionary, so this evaluates to False but does not raise an exception.<br><br>Expression C tries to access 'method' in the instance's dictionary (object.__dict__). Since methods are stored in the class dictionary, not the instance dictionary, this will raise a KeyError exception.",
    link: "https://docs.python.org/3/library/functions.html#isinstance",
  },
  {
    question: "Given the code below, which of the expressions will evaluate to True? <br><br>(Choose two)",
    image: "images/image716.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: "Explanation:<br><br>Expression A checks if the value attribute of the short object is equal to 2. The short object is an instance of the Bottom class, which inherits the value attribute from the Middle class. In Middle, value is set to 2, so short.value is indeed 2. Therefore, this expression evaluates to True.<br><br>Expression B checks if the average object is an instance of the Bottom class. The average object is actually an instance of the Middle class, not Bottom. Since average is not a Bottom instance, this expression evaluates to False.<br><br>Expression C checks if the value attribute of the average object is equal to 2. The average object is an instance of the Middle class, where the value attribute is explicitly set to 2. Therefore, average.value is 2, making this expression True.<br><br>Expression D checks if the say() method of the tall object returns 2. The tall object is an instance of the Top class, where the value attribute is set to 3. The say() method in Top returns self.value, which is 3 in this case. Since the method returns 3 and not 2, this expression evaluates to False.",
    link: "https://www.programiz.com/python-programming/methods/built-in/isinstance",
  },
  {
    question: "What statements are true about object-oriented programming? <br><br>(Choose two)",
    answers: [
      { text: "In the hierarchy diagram, a subclass of a class is located above the class.", correct: false },
      { text: "Encapsulation is a phenomenon which allows you to hide some class traits from the outer world.", correct: true },
      { text: "Polymorphism is a phenomenon allowing you to have manylasses of the same name.", correct: false },
      { text: "A class may exist without its objects, but an object cannot exist without its class.", correct: true },
    ],
    explanation: "Explanation:<br><br>In a hierarchy diagram, a subclass is shown below the class it inherits from.<br><br>Encapsulation allows you to hide certain details of a class, restricting access to some of its attributes and methods from the outside world.<br><br>Polymorphism allows objects of different classes to be treated as objects of a common superclass, but it does not involve having multiple classes with the same name.<br><br>A class can exist without creating any objects, but an object must have a class as its blueprint.",
    link: "https://www.programiz.com/python-programming/object-oriented-programming",
  },
  {
    question: "Which of the following expressions evaluates to True and raises no exception? <br><br>(Choose two)",
    image: "images/image717.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation: "Explanation:<br><br>Expression A checks whether the substring 'xyz' is not in the string 'uvwxyz'. However, the substring 'xyz' is indeed present in 'uvwxyz', so 'xyz' in 'uvwxyz' evaluates to True. The not operator then negates this, making the entire expression evaluate to False.<br><br>Expression B checks if the character '?' is present in the string ' ', which consists of a single space. Since the character '?' is not found in the space character, the expression evaluates to False.<br><br>Expression C checks whether the substring 'de' is not in the string 'abc'. Since 'de' is indeed not found in 'abc', the expression evaluates to True.<br><br>Expression D checks if a space character ' ' is present within the string ' '. Since the string is exactly one space character, the expression evaluates to True.",
    link: "https://docs.python.org/3/reference/expressions.html#boolean-operations",
  },
  {
    question: "Which of the following can be used to find a given substring within a string? <br><br>(Choose two)",
    answers: [
      { text: "The .index( ) method", correct: true },
      { text: "String Slicing", correct: false },
      { text: "The find( ) function", correct: false },
      { text: "The .rfind( ) method", correct: true },
    ],
    explanation: `Explanation:<br><br>The .index() method searches for a substring within a string and returns the index of the first occurrence. If the substring is not found, it raises a ValueError. <br><br>For example, "hello".index("e") returns 1.<br><br>The .rfind() method is similar to .find(), but it searches for the substring from the end of the string towards the beginning, returning the index of the last occurrence of the substring. If the substring is not found, it returns -1. <br><br>For example, "hellohello".rfind("l") returns 9.`,
    link: "https://docs.python.org/3/library/stdtypes.html#str.index",
  },
  {
    question: "Which of the following classes have valid constructors? <br><br>(Choose two)",
    image: "images/image718.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: "Explanation:<br><br>Constructor A raises an exception (ArithmeticError). While it is technically a valid constructor in the sense that it syntactically correct, it will always raise an error when an instance of the class is created.<br><br>Constructor B will result in a TypeError because the __init__ method must accept at least one parameter, which is typically self. The self parameter represents the instance of the class being initialized and is required for accessing instance attributes and methods.<br><br>Constructor C initializes an instance attribute self.attribute with the value True. It is a valid constructor and will successfully create instances of the Aleph class.<br><br>Constructor D attempts to return a value (False). Constructors in Python (__init__ methods) should not return a value (other than None, which is implicit). Returning a value from __init__ is invalid and will raise a TypeError.",
    link: "https://docs.python.org/3/reference/datamodel.html#object.__init__",
  },
  {
    question: "Which of the following are character encoding standard names? <br><br>(Choose two)",
    answers: [
      { text: "UniLang", correct: false },
      { text: "Intcod", correct: false },
      { text: "Unicode", correct: true },
      { text: "ASCII", correct: true },
    ],
    explanation: "Explanation:<br><br>Unicode is a character encoding standard that uses 7 bits to represent 128 characters. ASCII is a subset of Unicode.",
    link: "https://en.wikipedia.org/wiki/Character_encoding",
  },
  {
    question: "Which of the following code snippets will be True? <br><br>(Choose two)",
    image: "images/image719.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
      { text: "E", correct: false },
    ],
    explanation: "Explanation:<br><br>A) n Python, small integers (typically between -5 and 256) are cached and reused, so x and y will actually reference the same object. Therefore, x is y is True, and x is not y is False. So this will print False.<br><br>B) The string 'v' is indeed a substring of 'Kevin'. Thus, 'v' in 'Kevin' evaluates to True. This will print True.<br><br>C) The substring 'ist' is present in the string 'Das ist Python Code!'. Therefore, 'ist' in 'Das ist Python Code!' evaluates to True. This will print True.<br><br>D) The string 'Kevin' and its lowercase version 'kevin' are different objects. So x and y do not refer to the same object. Thus, x is y evaluates to False. This will print False.<br><br>E) Lists are mutable, and x and y are two different list objects with the same content. Since they are different objects, x is y evaluates to False. This will print False.",
    link: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
  },
  {
    question: "Which of the following code snippets will print 124?",
    image: "images/image720.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: "Explanation:<br><br>In snippet A, eval evaluates the input as a Python expression. If you enter 123, eval will evaluate this as the integer 123. Adding 1 to 123 will give 124.<br><br>Snippet B converts the input string to an integer using int() and then adds 1. If you input 123, int(num) converts it to 123, and 123 + 1 is 124.<br><br>Snippet C directly converts the input string to an integer using int(), and then adds 1. If you input 123, int(input()) converts it to 123, and 123 + 1 is 124.<br><br>Snippet D does not convert the input to an integer; it treats num as a string. Adding 1 to a string will result in a TypeError. If you input 123, this will cause an error because you cannot concatenate a string and an integer.",
    link: "https://docs.python.org/3/library/functions.html#eval",
  },
  {
    question: "Which of the following statements are true? <br><br>(Choose two)",
    answers: [
      { text: '"/n" can be used to encode a new-line character', correct: false },
      { text: "Python accepts UTF-8 encoded source files", correct: true },
      { text: "ASCII is a subset of UNICODE", correct: true },
      { text: "In ASCII, Latin upper-case letter codepoints are greater than their lower-case counterparts", correct: false },
    ],
    explanation: "Explanation:<br><br>The correct escape sequence for a new-line character in Python is \n, not /n.<br><br>ython source files can indeed be encoded in UTF-8. This allows the use of a wide range of characters and symbols in source code, including non-English characters.<br><br>ASCII (American Standard Code for Information Interchange) is a character encoding standard that includes 128 characters. Unicode is a more comprehensive character encoding standard that includes all ASCII characters and many more. Thus, ASCII is a subset of Unicode.<br><br>In ASCII, the code points for upper-case letters (A-Z) are actually less than those for lower-case letters (a-z). For example, the code point for 'A' is 65, while the code point for 'a' is 97.",
    link: "https://en.wikipedia.org/wiki/ASCII",
  },
  {
    question: "Which of the following functions come from the math module? <br><br>(Choose two)",
    answers: [
      { text: "sqrt( )", correct: true },
      { text: "hypot( )", correct: true },
      { text: "processor( )", correct: false },
      { text: "seed( )", correct: false },
    ],
    explanation: "Explanation:<br><br>The math.sqrt() method returns the square root of a number.<br><br>The math.hypot() method returns the hypotenuse of a right-angled triangle.",
    link: "https://docs.python.org/3/library/math.html#module-math",
  },
  {
    question: "Which of the following are the names of built-in Python exceptions? <br><br>(Choose two)",
    answers: [
      { text: "LookupException", correct: false },
      { text: "KeyError", correct: true },
      { text: "ProgramTooComplicatedError", correct: false },
      { text: "AssertionError", correct: true },
    ],
    explanation: "Explanation:<br><br>KeyError is a built-in exception in Python that is raised when a dictionary key is not found in a dictionary. <br><br>AssertionError is a built-in exception in Python that is raised when a condition is not true.",
    link: "https://docs.python.org/3/library/exceptions.html",
  },
  {
    question: "Which of the following assignments will successfully produce a non-empty string? <br><br>(Choose two)",
    image: "images/image721.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>Assignment A: s[-1] accesses the last character of the string "12", which is "2". This assignment changes s from "12" to "2", which is a non-empty string.<br><br>Assignment B: The slicing operation s[1::2] starts at index 1 and takes every second character. For the string "12", this results in "2". Thus, s is assigned the non-empty string "2".<br><br>Assignment C: s[9] tries to access the character at index 9 of the string "Marvin", which only has 6 characters (indices 0 through 5). This will raise an IndexError because the index is out of range.<br><br>Assignment D: The slicing operation s[-3:-5] starts from index -3 and slices up to (but not including) index -5. Since -3 is valid but -5 is out of range for the string "12", the slice produces an empty string because the start index is greater than the end index.`,
    link: "https://docs.python.org/3/tutorial/datastructures.html#slicing",
  },
  {
    question: "What is true about object-oriented programming (OOP)? <br><br>(Choose two)",
    answers: [
      { text: "A superclass of a class is located below the class in the hierarchy diagram.", correct: false },
      { text: "Encapsulation is a phenomenon which allows you to hide certain class traits from the outer world.", correct: true },
      { text: "All objects of the same class have exactly the same set of attributes.", correct: false },
      { text: "A part of a class designed to build new objects is called constructor.", correct: true },
    ],
    explanation: "Explanation:<br><br> In hierarchy diagrams, the superclass is above the subclass.<br><br>Encapsulation hides internal details of a class.<br><br>Objects of the same class have the same set of attributes, though their values may differ.<br><br> A constructor initializes new objects in a class.",
    link: "https://www.programiz.com/python-programming/object-oriented-programming",
  },
  {
    question: "Which of the following code snippets will expand the code, so that 100 will be printed? <br><br>(Choose two)",
    image: "images/image722.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: "Explanation:<br><br>Snippet A will add 100 to res for each name in the tuple that is present in data. If only one name is in data, res will be 100. If two or more names are in data, res will be greater than 100.<br><br>Snippet B will add 100 to res for each name in the tuple that is not present in data. To get a total of 100, exactly one name must be missing from data.<br><br>Snippet C will add 50 to res for each name in the tuple that is present in data. To get a total of 100, exactly two names must be in data.<br><br>Snippet D will add 50 to res for each name in the tuple that is not present in data. To get a total of 100, exactly two names must be missing from data.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#list-comprehensions",
  },
  {
    question: "Which of the following lines contain valid Python code? <br><br>(Choose two)",
    answers: [
      { text: "A. lambda x: x + 1", correct: true },
      { text: "B. lambda (x): return x + 1", correct: false },
      { text: "C. lambda x: None", correct: true },
      { text: "D. lambda x = x + 1", correct: false },
    ],
    explanation: "Explanation:<br><br>Lambda functions are used for creating small anonymous functions in Python.<br><br>Line A defines a valid lambda function that takes one parameter x and returns x + 1.<br><br>Line B is invalid because there are    parentheses around a single parameter, which is not allowed in Python 3. Lambda functions do not use return statements, they are meant to be single-expression functions.<br><br>Line C defines a valid lambda function that takes one parameter x and returns None<br><br>Line D is invalid because lambda functions cannot have default arguments that depend on the value of the parameter itself. The syntax for lambda functions does not support such default arguments.",
    link: "https://docs.python.org/3/reference/compound_stmts.html#lambda",
  },
  {
    question: "You want to print the numbers 1 to 7. But the code below does not work. What do you have to change?",
    image: "images/image723.png",
    answers: [
      { text: "if nums[x] == 7:   # Line 5", correct: true },
      { text: "while (x < 10):    # Line 3", correct: false },
      { text: "x = x + 1          # Line 8", correct: false },
      { text: "print (nums[x] )   # Line 4", correct: true },
    ],
    explanation: "Explanation:<br><br>In line 4, nums(x) uses parentheses, which is incorrect for indexing lists. You should use square brackets for indexing.<br><br>In line 7, the assignment operator = is used instead of the comparison operator ==.",
    link: "https://www.programiz.com/python-programming/list",
  },
  {
    question: "Which of the following statements are true?",
    answers: [
      { text: "A)   The final branch of the try statement may be executed if special conditions are met.", correct: false },
      { text: "B)   The args property is a tuple designed to gather all arguments passed to the exception constructor.", correct: true },
      { text: "C)   The final branch of the try statement is always executed.", correct: true },
      { text: "D)   You cannot define new exceptions as subclasses derived from predefined exceptions.", correct: false },
    ],
    explanation: "Explanation:<br><br>Statement A refers to the finally block in a try statement. However, it is misleading because the finally block is always executed, regardless of whether an exception is raised or handled. There are no special conditions for it to execute—it runs no matter what, ensuring that cleanup code is always executed.<br><br>Statement B is true. In Python, when you create an exception and pass arguments to it, these arguments are stored in the args property as a tuple. This allows you to access the arguments later.<br><br>Statement C is true and refers to the finally block in a try statement. The finally block is executed no matter what happens in the try and except blocks—whether an exception is raised, caught, or even if a return statement is encountered. The purpose of finally is to guarantee that the cleanup code is run.<br><br>Statement D is false. In Python, you can define new exceptions by creating a subclass of an existing exception. This allows you to create custom exceptions that can carry specific information or behavior.",
    link: "https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions",
  },
  {
    question: "Which of the following statements are true?",
    answers: [
      { text: "A)   Variables with names starting with two underscores are considered private within their class due to name mangling.", correct: true },
      { text: "B)   The directory from which the Python code is run is always searched through in order to find the necessary modules.", correct: true },
      { text: "C)   Variables with names ending with two underscores are considered private inside their home module.", correct: false },
      { text: "D) The directory from which the code is run is never searched through.", correct: false },
    ],
    explanation: `Explanation:<br><br>Statement A is true. In Python, variables whose names start with two underscores (but do not end with two underscores) are subject to name mangling. This means that they are modified internally by the interpreter to include the class name, making it harder to access them from outside the class directly.<br><br>Statement B is true. The directory from which the Python script is executed is the first entry in the sys.path list. This means that Python will search this directory first when looking for modules to import.<br><br>Statement C is false. Variables with names ending with two underscores (like __init__, __str__, etc.) are not considered private. These are typically special methods or attributes in Python, often referred to as "dunder" (double underscore) methods. They are not meant to be private and are part of the Python object's public API.<br><br>Statement D is false. As mentioned in statement B, the directory from which the code is run is indeed searched through first when looking for modules to import.`,
    link: "https://docs.python.org/3/library/sys.html#sys.path",
  },
  {
    question: "Which of the following assignments can be performed without raising any exceptions? <br><br>(Choose two)",
    image: "images/image724.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation: "Explanation:<br><br>A will raise an exception. The string 'kevin' has only 5 characters, indexed from 0 to 4. Trying to access s[9] will result in an IndexError because index 9 is out of range.<br><br>B will raise an exception. Strings in Python are immutable, meaning they cannot be changed after they are created. Attempting to assign a new value to s[0] will raise a TypeError.<br><br>C will not raise an exception. The slicing operation s[::2] creates a new string by taking every second character of the original string 'kevin'. The resulting string would be 'kvi'.<br><br>D will not raise an exception. The slicing operation s[::-2] creates a new string by taking every second character of the original string 'kevin', but in reverse order. The resulting string would be 'nve'.",
    link: "https://www.w3schools.com/python/python_strings_slicing.asp",
  },
  {
    question: "Which of the following expressions evaluate to True? <br><br>(Choose two)",
    image: "images/image725.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation: "Explanation:<br><br>A: The ord('x') gives 120, and ord('X') gives 88. The sum 120 + 88 equals 208, while ord(' ') gives 32. Since 208 is not equal to 32, the expression is False.<br><br>B: The ord('k') gives 107, so ord('k') + 2 equals 109. chr(109) gives 'm', not 'i'. Therefore, the expression is False.<br><br>C: As explained above, ord('k') + 2 equals 109, and chr(109) gives 'm'. Thus, the expression is True.<br><br>D: The ord('x') gives 120, and ord('X') gives 88. The difference 120 - 88 equals 32, and ord(' ') also gives 32. Thus, the expression is True.",
    link: "https://miro.medium.com/v2/resize:fit:1400/1*rFEwJIMzpHHTb-MpoiLCAw.jpeg",
  },
  {
    question: "Which of the following messages will appear on the screen when the code is run?",
    image: "images/image726.png",
    answers: [
      { text: "Problem", correct: false },
      { text: "Ignore", correct: true },
      { text: "Launch", correct: true },
      { text: "Ignition", correct: false },
    ],
    explanation: `Explanation:<br><br>he Failure class is defined as a subclass of IndexError. It has an __init__ method that takes a message argument and assigns it to an instance variable, self.message.<br><br>The __str__ method is overridden to return the string "Problem" whenever an instance of Failure is converted to a string.<br><br>The code inside the try block first prints "Launch". It then raises an instance of the Failure exception with the message "Ignition".<br><br>The first except block is for RuntimeError. This block would be ignored because the raised exception is of type Failure, which is a subclass of IndexError, not RuntimeError.<br><br>The second except block catches IndexError. Since Failure is a subclass of IndexError, this block will handle the raised Failure exception. Inside this block, "Ignore" is printed.<br><br>The else block is not executed because an exception was raised and caught.`,
    link: "https://www.geeksforgeeks.org/python-try-except/",
  },
  {
    question: "Select the true statements about the try-except block in relation to the following example:",
    image: "images/image727.png",
    answers: [
      { text: "A)   The code that follows the try statement will be executed if the code in the except clause runs into an error.", correct: false },
      { text: "B)   If there is a syntax error in code located ¡n the try block, the except branch will not handle it, and a SyntaxError exception will be raised instead.", correct: true },
      { text: "C)   If you suspect that a snippet may raise an exception, you should place it in the try block.", correct: true },
      { text: "D)   The code that follows the except statement will be executed if the code in the try clause runs into an error.", correct: false },
    ],
    explanation: "Explanation:<br><br>Statement A: False. If an error occurs in the except block, the control will not proceed to the code that follows the try block or the except block. Instead, Python will look for any additional except or finally blocks, or if none are present, it will propagate the exception up to the next higher level.<br><br>Statement B: True. Syntax errors occur during the parsing of the code before execution begins. Therefore, if there is a syntax error in the try block, it will not be caught by the except block. Instead, a SyntaxError will be raised before the try block is executed.<br><br>Statement C: True. To handle potential exceptions gracefully, you should place the code that might raise an exception inside a try block. This allows you to catch and handle exceptions using the except block, rather than allowing the program to terminate unexpectedly.<br><br>Statement D: False. If an error occurs in the try block, the except block will handle it, and any code following the except block (within the same level of indentation) will be executed. The except block itself handles the exception, but the try block does not execute the code that comes after the except block.",
    link: "https://www.geeksforgeeks.org/python-try-except/",
  },
  {
    question: `If you want to build a string that reads:<br><br>Marvin's weed's name's "La Sage"<br><br>Which of the following literals would you use?`,
    answers: [
      { text: `A)   'Marvin\'s weed\'s name\'s \"La Sage\"`, correct: true },
      { text: `B)   'Marvin's weed's name's "La Sage" '`, correct: false },
      { text: `C)   "Marvin's weed's name's "La Sage" "`, correct: false },
      { text: `D)   "Marvin's weed's name's \"La Sage\" "`, correct: true },
    ],
    explanation: "Explanation:<br><br>A) is a valid option in Python. It uses single quotes to define the string and escapes both the single quotes and the double quotes within the string.<br><br>B) will result in a syntax error in Python because the single quotes inside the string conflict with the single quotes used to define the string.<br><br>C) is problematic because it incorrectly places a single quote after name, which will cause a syntax error.<br><br>D) is a valid option in Python. It uses double quotes to define the string and escapes the double quotes inside the string.",
    link: "https://www.w3schools.com/python/python_strings.asp",
  },
  {
    question: "Consider the code below. Which print statement will output True?",
    image: "images/image728.png",
    answers: [
      { text: "A.  print (languages is more_languages)", correct: false },
      { text: "B.  print (languages is extra_languages)", correct: false },
      { text: "C.  print (more_languages is extra_languages)", correct: true },
      { text: "D.  print (languages == more_languages)", correct: true },
    ],
    explanation: "Explanation:<br><br>A) will output False because languages and more_languages are two different lists, even though they have the same content. They are stored at different memory locations.<br><br>B) will also output False because languages and extra_languages are different lists stored at different memory locations.<br><br>C) will output True because extra_languages is just another reference to the same list as more_languages. They both point to the exact same object in memory.<br><br>D) will output True because the contents of languages and more_languages are the same.",
    link: "https://docs.python.org/3/reference/datamodel.html#objects-values-and-types",
  },
  {
    question: "Which of the following operations will not raise any exception?",
    answers: [
      { text: "A)   Indexing a tuple", correct: false },
      { text: "B)   Invoking the float( ) function", correct: false },
      { text: "C)   Slicing a string", correct: true },
      { text: "D)   Decrementing an integer variable by one", correct: true },
    ],
    explanation: "Explanation:<br><br>A) can raise an exception if the index is out of bounds (e.g., trying to access an index that doesn't exist in the tuple). So, this operation can raise an IndexError if the index is invalid.<br><br>B) can raise a ValueError if the string or input provided to float() cannot be converted to a float.<br><br>C) will not raise an exception, even if the start or end indices are out of range. However, depending on the situation (such as trying to perform an operation on the sliced result), it could potentially lead to issues.<br><br>D) is a basic arithmetic operation in Python that will not raise any exceptions.",
    link: "https://docs.python.org/3/library/functions.html#float",
  },
  {
    question: "Which of the following expressions evaluates to True and raises no exception?",
    answers: [
      { text: "A.  ' ' * 0 < 1 * ' '", correct: true },
      { text: "B.  'Analog' < 'analog'", correct: true },
      { text: "C.  str(None) == None", correct: false },
      { text: "D.  str(None) != 'None'", correct: false },
    ],
    explanation: "Explanation:<br><br>Statement A evaluates to True because ' ' * 0 results in an empty string '', and 1 * ' ' results in a string containing a single space ' '<br><br>Statement B evaluates to True because the string comparison is based on the ASCII values of the characters.<br><br>In Statement C, the comparison between str(None) and None evaluates to False because a string is not the same as the None object.<br><br>In Statement D, the comparison between str(None) and the string 'None' evaluates to False because both are the same string, and the != operator checks for inequality, which is not the case here.",
    link: "https://docs.python.org/3/library/stdtypes.html#str",
  },
  {
    question: "You are creating a function that manipulates a number. The function has the following requirements:<br><br>A float is passed into the function. The function must take the absolute value of the float.Any decimal points after the integer must be removed. <br><br>Which math functions should you use?",
    answers: [
      { text: "math.ceil(x)", correct: false },
      { text: "math.floor(x)", correct: true },
      { text: "math.fabs(x)", correct: true },
      { text: "math.fmod(x)", correct: false },
      { text: "math.frexp(x)", correct: false },
    ],
    explanation: "Explanation:<br><br>math.floor(x): This function returns the largest integer less than or equal to x. This effectively removes any decimal points after the integer part, as it rounds down to the nearest whole number.<br><br>math.fabs(x): This function returns the absolute value of x. It converts a negative float to its positive counterpart but does not remove decimal points.",
    link: "https://docs.python.org/3/library/math.html",
  },
  {
    question: "Which of the following statements are correct?",
    answers: [
      { text: "A) True or False evaluates to True", correct: true },
      { text: "B) True + 1 evaluates to 2", correct: true },
      { text: "C) 7 + False evaluates to False", correct: false },
      { text: "D) Type ('') returns <class 'bool'>", correct: false },
      { text: "E) True and False evaluates to True", correct: false },
    ],
    explanation: "Explanation:<br><br>A) The or operator returns True if at least one of the operands is True. Since True or False has one True operand, the expression evaluates to True.<br><br>B) True is equivalent to 1, and False is equivalent to 0. Therefore, True + 1 is equivalent to 1 + 1, which equals 2.<br><br>C) As mentioned before, False is equivalent to 0. Therefore, 7 + False is equivalent to 7 + 0, which equals 7, not False.<br><br>D) Type('') checks the type of the empty string ''. The type of '' is <class 'str'>, not <class 'bool'>.<br><br>E) The and operator returns True only if both operands are True. Since one of the operands is False, the expression evaluates to False.",
    link: "https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not",
  },
  {
    question: "Which of the following lines contain valid Python code?",
    answers: [
      { text: "A)  lambda f (x,y): return x >> y", correct: false },
      { text: "B)  lambda x, y: '0123456789' [x:y]", correct: true },
      { text: "C)  lambda x, y: x + y", correct: true },
      { text: "D)  lambda x, y -> x ** y", correct: false },
    ],
    explanation: "Explanation:<br><br>A) attempts to define a lambda function, but it incorrectly uses the syntax f(x, y) and the return keyword. In Python, lambda functions are anonymous and don't use the return keyword; they consist of a single expression that is implicitly returned.<br><br>B) defines a lambda function that slices the string '0123456789' from index x to index y. The syntax is correct.<br><br>C) defines a lambda function that takes two arguments x and y, and returns their sum. The syntax is correct.<br><br>D) incorrectly uses the -> symbol, which is not valid in a lambda function. The correct syntax should use a colon (:) instead of ->.",
    link: "https://docs.python.org/3/library/functions.html#lambda",
  },
  {
    question: "You are writing code that generates a random integer with a minimum value of 5 and a maximum value of 11.",
    answers: [
      { text: "random.randrange (5, 12, 1)", correct: true },
      { text: "random.randrange (5, 11, 1)", correct: false },
      { text: "random.randint (5, 11)", correct: true },
      { text: "random.randint (5, 12)", correct: false },
    ],
    explanation: "Explanation:<br><br>With randint() both start and stop are inclusive.<br><br>With randrange() start is inclusive and stop is exclusive.",
    link: "https://docs.python.org/3/library/random.html#random.randrange",
  },
  {
    question: "Which of the following literals reflect the value given as 34.23?",
    answers: [
      { text: ".3423e2", correct: true },
      { text: "3423e-2", correct: true },
      { text: ".3423e-2", correct: false },
      { text: "3423e2", correct: false },
    ],
    explanation: "Explanation:<br><br>The literal .3423e2 represents the value 34.23.<br><br>The literal 3423e-2 represents the value 34.23.",
    link: "https://docs.python.org/3/library/functions.html#float",
  },
  {
    question: "Assuming that the following snippet has been successfully executed, which of the equations are True?",
    image: "images/image729.png",
    answers: [
      { text: "A)  len(a) == len(b)", correct: true },
      { text: "B)  b [0] +1 ==a [0]", correct: false },
      { text: "C)  a [0] == b [0]", correct: true },
      { text: "D)  a [0] + 1 ==b [0]", correct: false },
    ],
    explanation: "Explanation:<br><br>A) Both a and b reference the same list, so they have the same length.<br><br>B) b[0] is 0 and a[0] is also 0. So, b[0] + 1 equals 1, which is not equal to a[0] (which is 0).<br><br>C) Both a[0] and b[0] are 0 because a and b reference the same list.<br><br>D) a[0] is 0, so a[0] + 1 equals 1. However, b[0] is 0, so 1 is not equal to 0.",
    link: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
  },
  {
    question: "Assuming that the following snippet has been successfully executed, which of the equations are True?",
    image: "images/image730.png",
    answers: [
      { text: "A)  len(a) == len (b)", correct: true },
      { text: "B)  a [0] - 1 == b [0]", correct: true },
      { text: "C)  a [0] == b [0]", correct: false },
      { text: "D)  b [0] - 1 == a [0]", correct: false },
    ],
    explanation: "Explanation:<br><br>A) is True. Both a and b are lists with a length of 1, so their lengths are equal.<br><br>B) is True. The value of a[0] is 1, so a[0] - 1 equals 0, which is the same as b[0].<br><br>C) is False. The value of a[0] is 1, while the value of b[0] is 0, so they are not equal.<br><br>D) is False. The value of b[0] is 0, so b[0] - 1 equals -1, which is not equal to a[0], which is 1.",
    link: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
  },
  {
    question: "Which of the following statements are true?",
    answers: [
      { text: "A) Python strings are actually lists", correct: false },
      { text: "B) Python strings can be concatenated", correct: true },
      { text: "C) Python strings can be sliced like lists", correct: true },
      { text: "D) Python strings are mutable", correct: false },
    ],
    explanation: "Explanation:<br><br>A) is False. Python strings are not lists; they are a distinct data type called str. While strings and lists share some similarities, such as indexing and slicing, they are different in how they are implemented and used.<br><br>B) is True. Python strings can be concatenated using the + operator. For example, 'Hello, ' + 'World!' results in 'Hello, World!'.<br><br>C) is True. Python strings can be sliced similarly to lists. For example, 'Hello'[1:4] results in 'ell'.<br><br>D) is False. Python strings are immutable, meaning once a string is created, its contents cannot be changed. To modify a string, you would need to create a new string.",
    link: "https://docs.python.org/3/library/stdtypes.html#str",
  },
  {
    question: "Which of the following statements are true?",
    answers: [
      { text: "Lists may not be stored inside tuples", correct: false },
      { text: "Tuples may be stored inside lists", correct: true },
      { text: "Tuples may not be stored inside tuples", correct: false },
      { text: "Lists may be stored inside lists", correct: true },
    ],
    explanation: "Explanation:<br><br>A) is False. Lists can indeed be stored inside tuples. For example, tuple_with_list = ([1, 2, 3], 'a', 'b') is a valid tuple where one of the elements is a list.<br><br>B) is True. Tuples can be stored inside lists. For example, list_with_tuple = [(1, 2), (3, 4)] is a valid list containing tuples.<br><br>C) is False. Tuples can be stored inside other tuples. For example, nested_tuple = ((1, 2), (3, 4)) is a valid tuple where each element is also a tuple.<br><br>D) is True. Lists can be stored inside other lists. For example, nested_list = [[1, 2, 3], [4, 5, 6]] is a valid list where each element is another list.",
    link: "https://docs.python.org/3/library/stdtypes.html#tuple",
  },
  {
    question: "Which of the following expression evaluate to True?",
    image: "images/image731.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>A) evaluates to True because the string '•' contains exactly one character. Therefore, its length is 1, which makes the comparison len('•') == 1 true. <br><br>B) evaluates to False. The string """ """ actually contains a single space, so its length is 1. Since the comparison is checking if the length is 0, it does not hold true.<br><br>B) evaluates to True. The function ord('A') returns the ASCII value of 'A', which is 65. Adding 1 to this value gives 66, and chr(66) converts this back to the character 'B'. Therefore, the comparison chr(ord('A') + 1) == 'B' is true.<br><br>D) evaluates to False. The ord("Z") function returns 90, and ord("z") returns 122. The difference is 90 - 122, which equals -32. The ord("0") function returns 48, so the comparison -32 == 48 is false.`,
    link: "https://docs.python.org/3/library/functions.html#ord",
  },
  {
    question: "Which of the following expression evaluate to True?",
    image: "images/image732.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation: `Explanation:<br><br>A) evaluates to False. The function ord("0") returns the ASCII value of '0', which is 48. The function ord("9") returns the ASCII value of '9', which is 57. Subtracting these values, 48 - 57, results in -9. Therefore, -9 is not equal to 10.<br><br>B) evaluates to True. The string """1234""" is equivalent to "1234", which contains 4 characters: '1', '2', '3', and '4'. Thus, len("""1234""") is 4, and the comparison len("""1234""") == 4 is true.<br><br>C) evaluates to True. The string "''" contains exactly 2 characters, both of which are single quote marks. Hence, len("''") is 2, making the comparison len("''") == 2 true.<br><br>D) evaluates to True. The function ord('Z') returns 90, and subtracting 1 gives 89. The function chr(89) converts the value 89 to the character 'Y'. Therefore, chr(ord('Z') - 1) is 'Y', making the comparison chr(ord('Z') - 1) == 'Y' true.`,
    link: "https://docs.python.org/3/library/functions.html#ord",
  },
  {
    question: "What is a true about python class constructors?",
    answers: [
      { text: "A) the constructor must have at least one parametercorrect", correct: true },
      { text: "B) the constructor must return a value other than None", correct: false },
      { text: "C) the constructor is a method named_init_correct", correct: true },
      { text: "D) there can the more than one constructor in a Python class", correct: false },
    ],
    explanation: "Explanation:<br><br>A) is True. In Python, the constructor method __init__ must have at least one parameter, self, which refers to the instance being created. Other parameters can be added as needed, but self is required.<br><br>B) is False. In Python, the constructor method __init__ does not return any value. Its purpose is to initialize the instance. By default, it implicitly returns None.<br><br>C) is True. In Python, the constructor method is indeed named __init__. It is called when a new instance of the class is created.<br><br>D) is False. Python does not support method overloading, so a class cannot have more than one __init__ method. However, you can achieve similar functionality by using default arguments or variable-length arguments in a single __init__ method.",
    link: "https://www.geeksforgeeks.org/python-classes/",
  },
  {
    question: "Which of the following expressions evaluate to True?",
    image: "images/image733.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation: "Explanation:<br><br>A) evaluates to True. First, the operation 1 - 1 results in 0, which is then converted to the string '0'. The slice '012345£739'[:2] extracts the first two characters of the string, which are '01'. The substring '0' is indeed present in '01', making the condition str(1-1) in '012345£739'[:2] true.<br><br>B) evaluates to False. The substring 'phd' is not found within the string 'alpha'. Hence, the condition 'phd' in 'alpha' is false.<br><br>C) evaluates to True. The reverse of the string 'abcde' is 'edcba'. The substring 'deb' is not present in the reversed string 'edcba', so the condition 'deb' not in 'abcde'[::-1] is true.<br><br>D) evaluates to True. The substring 'True' does not appear in the string 'False'. Thus, the condition 'True' not in 'False' is true.",
    link: "https://docs.python.org/3/library/stdtypes.html#str",
  },
   {
    question: "An operator able to perform bitwise shifts is coded as...",
    answers: [
      { text: "- -", correct: false },
      { text: "+ +", correct: false },
      { text: "< <", correct: true },
      { text: "> >", correct: true },
    ],
    explanation: "Explanation: <br><br>Bitwise left shift operator is coded as <<. Bitwise right shift operator is coded as >>.",
    link: "https://docs.python.org/3/reference/expressions.html#operator-precedence",
  },  
  // Matthias Fragen ab hier
  {
    question: "What will be the value of the i variable when the while loop finishes its execution?",
    image: "images/image132.png",
    answers: [
      { text: "1", correct: true },
      { text: "0", correct: false },
      { text: "2", correct: false },
      { text: "The variable becomes unavailable", correct: false },
    ],
    explanation: "Explanation:<br><br>In the given code, the variable i is initialized to 0. The while loop is set to continue executing as long as the condition i != 0 is true. However, since i is initially 0, this condition is false from the start, which means that the body of the while loop does not execute at all.<br><br>Since the loop was never entered, the else block associated with the while loop is executed. The else block increments i by 1, resulting in i being updated from 0 to 1.<br><br>As a result, when the while loop finishes its execution, the value of i will be 1.",
    link: "https://www.w3schools.com/python/python_while_loops.asp",
  },
  {
    question: "What is the output of the following piece of code?",
    image: "images/image133.png",
    answers: [
      { text: "ant'bat'camel", correct: false },
      { text: `ant"bat"camel`, correct: false },
      { text: "antbatcamel", correct: false },
      { text: `print(a, b, c, sep= '"')`, correct: false },
    ],
    explanation: `Explanation:<br><br>The code defines three variables: a with the value 'ant', b with the value "bat", and c with the value 'camel'. When the print function is called, it prints the values of a, b, and c in sequence. The sep parameter in the print function is set to '"', meaning that each value will be separated by a double-quote character.<br><br>As a result, the output of the code will be the string ant"bat"camel, where the words ant, bat, and camel are separated by double quotes.`,
    link: "https://www.w3schools.com/python/ref_func_print.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image134.png",
    answers: [
      { text: "3", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "The code is erroneous", correct: true },
    ],
    explanation: "Explanation:<br><br>The provided code snippet contains a syntax error due to the incorrect indentation of the else block. In Python, the else statement must be aligned with the corresponding if statement. Since the else block is indented incorrectly, the code will not execute and will raise a SyntaxError.",
    link: "https://www.w3schools.com/python/python_conditions.asp",
  },
  {
    question: "Assuming a String is six or more letters long, the following slice<br><br>string[ 1 : - 2 ]<br><br>is shorter than the original string by..?",
    answers: [
      { text: "four chars", correct: false },
      { text: "three chars", correct: true },
      { text: "one char", correct: false },
      { text: "two chars", correct: false },
    ],
    explanation: "Explanation:<br><br>Given that the string is six or more letters long, the slice string[1:-2] removes three characters from the original string. Specifically, it excludes the first character and the last two characters. As a result, the sliced string is shorter than the original string by three characters.",
    link: "https://www.w3schools.com/python/ref_string_slice.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image135.png",
    answers: [
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
    ],
    explanation: "Explanation:<br><br>The given code initializes a list lst with the values [1, 2, 3, 4]. The first slicing operation, lst[-3:-2], extracts a sublist starting from the element at index -3 (which is 2) up to but not including the element at index -2 (which is 3). This operation results in the list [2]. Next, the code reassigns lst to the value of lst[-1], which selects the last element of the list [2], resulting in lst being assigned the integer 2. Finally, the print statement outputs the value of lst, which is 2.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image136.png",
    answers: [
      { text: "abc", correct: false },
      { text: "The code will raise a Type Error", correct: false },
      { text: "ABC", correct: false },
      { text: "123", correct: false },
    ],
    explanation: "Explanation:<br><br>The given code snippet will result in an error when executed. The code attempts to use a for loop to iterate over len(s), where s is the string 'abc'. However, len(s) returns an integer, and integers are not iterable in Python. This will cause the code to raise a TypeError because the for loop cannot iterate over an integer.<br><br>Furthermore, even if the code correctly iterated over the indices of the string, it would still encounter an issue. In Python, strings are immutable, meaning you cannot modify a string in place by assigning a new value to s[i].<br><br>As a result, the expected output of this code is a TypeError indicating that an 'int' object is not iterable.",
    link: "https://www.w3schools.com/python/python_for_loops.asp",
  },
  {
    question: "How many elements will the list2 list contain after execution of the following snippet?",
    image: "images/image137.png",
    answers: [
      { text: "zero", correct: false },
      { text: "five", correct: false },
      { text: "seven", correct: true },
      { text: "three", correct: false },
    ],
    explanation: "Explanation:<br><br>The code snippet first creates a list list1 consisting of nine False values, generated by a list comprehension that iterates over the range from 1 to 9.<br><br>The next line of the code performs slicing on list1 with the expression list1[-1:1:-1]. This slice starts from the last element of the list and moves backward towards the index just before 1, but does not include the element at index 1.<br><br>As a result, this slicing operation retrieves elements in reverse order from the end of the list up to but not including the second element. Therefore, list2 will contain 7 elements, all of which are False.<br><br>Thus, after executing the snippet, the list list2 will contain 7 elements.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question: "Can a module run like regular code?",
    answers: [
      { text: "Yes, and it can differentiate its behavior between the regular launch and import", correct: true },
      { text: "It depends on the Python version", correct: false },
      { text: "Yes, but in cannot differentiate its behavior between the regular launch and import", correct: false },
      { text: "No, it is not possible; a module can be imported, not run", correct: false },
    ],
    explanation: `Explanation:<br><br>A Python module can run like regular code and can differentiate its behavior based on how it is executed. If a module is run directly, the code under the if __name__ == "__main__": block will execute. If the module is imported, this block will be skipped, allowing the module to adapt its behavior depending on whether it is run as a script or imported.`,
    link: "https://docs.python.org/3/tutorial/modules.html",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image138.png",
    answers: [
      { text: "cause a runtime exception", correct: true },
      { text: "print 1", correct: false },
      { text: "print 0,[1]", correct: false },
      { text: "print [1]", correct: false },
    ],
    explanation: "Explanation:<br><br>The provided code snippet will result in an error when executed. The function a is defined to return the value of x[y], where x is expected to be a sequence (such as a list or string) and y is an index. However, in the function call a(0, [1]), 0 is passed as the first argument, which is an integer, and [1] is passed as the second argument, which is a list.<br><br>Since integers cannot be indexed and lists cannot be used as indices for integers, Python will raise a TypeError. The error message will indicate that an integer object is not subscriptable, meaning you cannot use a list to index an integer.",
    link: "https://docs.python.org/3/library/exceptions.html#TypeError",
  },
  {
    question: "What can you do if you don't like a long package path like this one?<br><br>import alpha.beta.gamma.delta.epsilon.zeta",
    answers: [
      { text: "you can make an alias for the name using the alias keyword", correct: false },
      { text: "nothing, you need to come to terms with it", correct: false },
      { text: "you can shorten it to alpha . zeta and Python will find the proper connection", correct: false },
      { text: "you can make an alias for the name using the as keyword", correct: true },
    ],
    explanation: "Explanation:<br><br>In Python, if you don't like a long package path, you can use the as keyword to create an alias for the module or package. This allows you to refer to it by a shorter name within your code. Here is an example of how you can do this:<br><br>import alpha.beta.gamma.delta.epsilon.zeta as zeta<br><br>With this alias, you can use zeta instead of the full path alpha.beta.gamma.delta.epsilon.zeta throughout your code, making it more concise and readable.",
    link: "https://realpython.com/python-aliases/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image139.png",
    answers: [
      { text: "abcef", correct: false },
      { text: "The program will cause a runtime exception/error", correct: true },
      { text: "acdef", correct: false },
      { text: "abdef", correct: false },
    ],
    explanation: "Explanation:<br><br>The code snippet will result in an error when executed. In the code, the string 'abcdef' is assigned to the variable str, and the function fun is defined to take a parameter s and attempt to delete the element at index 2 using del s[2].<br><br>However, since strings in Python are immutable, you cannot modify them by deleting characters or altering them in place. Therefore, attempting to delete an element from the string will raise a TypeError. The error message will indicate that a 'str' object does not support item deletion. Consequently, the function call print(fun(str)) will not produce a valid output and will instead result in this type of error.",
    link: "https://www.w3schools.com/python/python_ref_string.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image140.png",
    answers: [
      { text: "21", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "12", correct: false },
    ],
    explanation: "Explanation:<br><br>The code defines a recursive function f that constructs a string by concatenating numbers in descending order. When f(2) is called, the function returns '2' concatenated with the result of f(1). Since f(1) returns '1', the result of f(2) is '2' + '1', which is '21'. Therefore, the expected output of the code is '21'.",
    link: "https://www.programiz.com/python-programming/recursion",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image141.png",
    answers: [
      { text: "cause a runtime exception on line 02", correct: false },
      { text: "cause a runtime exception on line 01", correct: false },
      { text: "cause a runtime exception on line 03", correct: false },
      { text: "print 3", correct: true },
    ],
    explanation: "Explanation:<br><br>In the code snippet, the function x is initially defined to return the value 2. However, the subsequent line x = 1 + x() reassigns x. Here, x() is called, which returns 2, so the expression 1 + x() evaluates to 1 + 2, resulting in 3. As a result, x is assigned the value 3. Consequently, the print(x) statement outputs 3.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image142.png",
    answers: [
      { text: "print 4321", correct: false },
      { text: "print <generator object f at (some hex digits)>", correct: true },
      { text: "cause a runtime exception", correct: false },
      { text: "print 1234", correct: false },
    ],
    explanation: "Explanation:<br><br>The expected behavior of the provided code is to print a description of the generator object. When the function f(2) is called, it returns a generator object. This generator object represents an iterator that can yield values from 1 to 2 when iterated over.<br><br> However, simply printing the generator object does not execute it or display the values it generates. Instead, it prints a description of the generator object, which looks like <generator object f at (some hex digits)>, where (some hex digits) is the memory address of the generator.",
    link: "https://www.programiz.com/python-programming/generator",
  },
  {
    question: "Is it possible to safely check if a class/object has a certain attribute?",
    answers: [
      { text: "yes, by using the hasattr attribute", correct: false },
      { text: "yes, by using the hasattr( ) method", correct: false },
      { text: "yes, by using the hasattr( ) function", correct: true },
      { text: "no, it is not possible", correct: false },
    ],
    explanation: "Explanation:<br><br>It is possible to safely check if a class or object has a certain attribute by using the `hasattr()` function. This function takes two arguments: the object (or class) and the name of the attribute (as a string) you want to check. It returns `True` if the attribute exists and `False` if it does not. This allows you to verify the presence of an attribute without causing an error if the attribute is not found.",
    link: "https://www.programiz.com/python-programming/methods/built-in/hasattr",
  },
  {
    question: "The first parameter of each method:",
    answers: [
      { text: "holds a reference to the currently processed object", correct: true },
      { text: "is always set to None", correct: false },
      { text: "is set to a unique random value", correct: false },
      { text: "is set by the first argument's value", correct: false },
    ],
    explanation: "Explanation:<br><br>The first parameter of each method within a class in Python, commonly named `self`, holds a reference to the instance of the class that is currently being processed. This allows the method to access and manipulate the attributes and other methods of that specific instance. For example, when you call a method on an object, `self` refers to that object, enabling the method to interact with its data.",
    link: "https://docs.python.org/3/tutorial/classes.html",
  },
  {
    question: "The simplest possible class definition in Python can be expressed as:",
    answers: [
      { text: "class X:", correct: false },
      { text: "class X:\npass", correct: true },
      { text: "class X:\nreturn", correct: false },
      { text: "class X:\n{ }", correct: false },
    ],
    explanation: "Explanation:<br><br>In Python, the simplest possible class definition includes just the class keyword followed by the class name and a placeholder statement. The pass statement is used as a placeholder in the class body to indicate that no action is required. This is useful when defining a class with no methods or attributes yet.",
    link: "https://www.programiz.com/python-programming/class",
  },
  {
    question: "If you want to access an exception object's components and store them in an object called e, you have to use the following form of exception statement:",
    answers: [
      { text: "except Exception(e):", correct: false },
      { text: "except e = Exception:", correct: false },
      { text: "except Exception as e:", correct: true },
      { text: "such an action is not possible in Python", correct: false },
    ],
    explanation: "Explanation:<br><br>To access and store an exception object in a variable, you use the `except` clause with the `as` keyword. This allows you to capture the exception instance and refer to it by a variable name. For example, in the statement `except Exception as e:`, the exception object is stored in the variable `e`. You can then use this variable to access details about the exception. This approach is standard in Python for handling exceptions and retrieving error information.",
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question: "A variable stored separately in every object is called:",
    answers: [
      { text: "there are no such variables, all variables are shared among objects", correct: false },
      { text: "a class variable", correct: false },
      { text: "an object variable", correct: false },
      { text: "an instance variable", correct: true },
    ],
    explanation: "Explanation:<br><br>In Python, a variable that is stored separately for each instance of a class is called an instance variable. Instance variables are defined within methods (typically in the __init__ method) and are unique to each object created from the class. Each object maintains its own copy of instance variables, allowing them to hold different values for different instances of the class.",
    link: "https://pynative.com/python-instance-variables/",
  },
  {
    question: "There is a stream named s open for writing. What option will you select to write a line to the stream?",
    answers: [
      { text: `s.write("Hello\n")`, correct: true },
      { text: `write(s, "Hello")`, correct: false },
      { text: `s.writeln("Hello")`, correct: false },
      { text: `s.writeline("Hello")`, correct: false },
    ],
    explanation: "Explanation:<br><br>In Python, to write a line to a stream that is open for writing, you use the write() method. This method requires you to manually include any newline characters if you want to move to a new line after writing the text.",
    link: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
  },
  {
    question: "You are going to read just one character from a stream called s. Which statement would you use?",
    answers: [
      { text: "ch = read(s, 1)", correct: false },
      { text: "ch = s.input(1)", correct: false },
      { text: "ch = input(s, 1)", correct: false },
      { text: "ch = s.read(1)", correct: true },
    ],
    explanation: "Explanation:<br><br>In Python, to read a specific number of characters from a stream, such as reading just one character, you use the read() method of the stream object. By passing 1 as an argument to s.read(), you instruct Python to read one character from the stream s.",
    link: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
  },
  {
    question: "The following class hierarchy is given. What is the expected out of the code?",
    image: "images/image143.png",
    answers: [
      { text: "B B", correct: false },
      { text: "C C", correct: false },
      { text: "A A", correct: false },
      { text: "B C", correct: true },
    ],
    explanation: `Explanation:<br><br>When the code is executed, it first creates an instance of class B and calls the do() method on it. This method, defined in class B, calls the b() method of the same instance. Inside b(), it then calls self.a(), which refers to the a() method of class B. As a result, "B" is printed.<br><br>Next, the code creates an instance of class C and calls the do() method on it. Similar to the previous step, the do() method in class C calls the b() method. Inside b(), it calls self.a(), which refers to the a() method of class C. Consequently, "C" is printed.<br><br>Therefore, the final output of the code is "B C", with each letter separated by a space.`,
    link: "https://docs.python.org/3/tutorial/classes.html",
  },
  {
    question: "Python's built in function named open() tries to open a file and returns:",
    answers: [
      { text: "an integer value identifying an opened file", correct: false },
      { text: "an error code (0 means success)", correct: false },
      { text: "a stream object", correct: true },
      { text: "always None", correct: false },
    ],
    explanation: "Explanation:<br><br>In Python, the built-in open() function attempts to open a file and returns a file object, which is a stream object. This object provides methods and attributes for interacting with the file, such as reading from or writing to it.",
    link: "https://docs.python.org/3/library/functions.html#open",
  },
  {
    question: 'Python strings can be "glued" together using the operator..?',
    answers: [
      { text: ".", correct: false },
      { text: "&", correct: false },
      { text: "_", correct: false },
      { text: "+", correct: true },
    ],
    explanation: 'Explanation:<br><br>In Python, strings can be concatenated, or "glued" together, using the + operator. This operator allows you to join two or more strings into a single string.',
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "How many stars (*) does the following snippet print?",
    image: "images/image144.png",
    answers: [
      { text: "the code is erroneous", correct: false },
      { text: "five", correct: false },
      { text: "three", correct: false },
      { text: "four", correct: true },
    ],
    explanation: "Explanation:<br><br>The code snippet will print a total of four stars (*). Initially, the variable i is set to 3. During each iteration of the while loop, i is decremented by 1, and a star is printed. <br><br>This process repeats for three iterations, resulting in three stars being printed. After the loop terminates, the else block is executed, which prints an additional star. <br><br>Therefore, combining the three stars from the loop and the one star from the else block, the total output is four stars.",
    link: "https://www.w3schools.com/python/python_while_loops.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image145.png",
    answers: [
      { text: "*-**-**-**-*", correct: true },
      { text: "*-**-**-**-**-**-**-**-*", correct: false },
      { text: "*-*", correct: false },
      { text: "*-**-*", correct: false },
    ],
    explanation: "Explanation:<br><br>First, the variable s is initialized with the string '*-*'. The expression 2 * s results in the string '*--*', which is the original string repeated twice. Similarly, s * 2 also results in '*--*'. Adding these two results together with 2 * s + s * 2 produces the concatenated string '*--*--*'. Therefore, when the print(s) statement is executed, it prints '*--*--*'.",
    link: "https://www.w3schools.com/python/gloss_python_string_concatenation.asp",
  },
  {
    question: "How many elements will the list1 list contain after execution of the following snippet?",
    image: "images/image146.png",
    answers: [
      { text: "two", correct: true },
      { text: "zero", correct: false },
      { text: "one", correct: false },
      { text: "three", correct: false },
    ],
    explanation: `Explanation:<br><br>The split(',') method splits the string "don't think twice, do it!" into a list of substrings wherever a comma , is found.<br><br>    In the string "don't think twice, do it!", there is one comma, which separates the string into two parts: "don't think twice" and " do it!".<br><br>Thus, after splitting, list1 will contain two elements: ["don't think twice", " do it!"].`,
    link: "https://www.w3schools.com/python/ref_string_split.asp",
  },
  {
    question: "Assuming that lst - is a four-element list. Is there any difference between these two statements?",
    image: "images/image147.png",
    answers: [
      { text: "yes, there is, the first line empties the list, the second line deletes the list as a whole", correct: false },
      { text: "yes, there is, the first line deletes the list as a whole, the second line just empties the list", correct: true },
      { text: "no, there is no difference", correct: false },
      { text: "yes, there is, the first line deletes the list as a whole, the second line removes all the elements except the first one", correct: false },
    ],
    explanation: "Explanation:<br><br>The first line, del lst, deletes the list object itself, meaning the variable lst will no longer exist after this statement is executed.<br><br>The second line, del lst[:], does not delete the list itself but instead removes all elements from the list, leaving it empty. The list lst will still exist as an empty list.",
    link: "https://www.w3schools.com/python/python_lists_remove.asp",
  },
  {
    question: "What should you put instead of XXX to print out the module name?",
    image: "images/image148.png",
    answers: [
      { text: "main", correct: false },
      { text: "_main_", correct: false },
      { text: "_ _main_ _", correct: true },
      { text: "_ _ _main_ _ _", correct: false },
    ],
    explanation: `Explanation:<br><br>In Python, when a script is run directly, the special variable __name__ is set to "__main__". Therefore, to print out the module name when the script is executed directly, you should check if __name__ is equal to "__main__".`,
    link: "https://docs.python.org/3/tutorial/modules.html",
  },
  {
    question: "Files with the suffix .pyc contain:",
    answers: [
      { text: "Python 4 source code", correct: false },
      { text: "backups", correct: false },
      { text: "temporary data", correct: false },
      { text: "semi-compiled Python code", correct: true },
    ],
    explanation: "Explanation:<br><br>Files with the suffix .pyc contain bytecode, which is semi-compiled Python code. This bytecode is generated by the Python interpreter to speed up the execution of programs by avoiding the need to recompile the source code each time the program is run.",
    link: "https://stackoverflow.com/questions/2998215/if-python-is-interpreted-what-are-pyc-files",
  },
  {
    question: "Package source directories/folders can be:",
    answers: [
      { text: "converted into the so-called pypck format", correct: false },
      { text: "packed as a ZIP file and distributed as one file", correct: true },
      { text: "rebuilt to a flat form and distributed as one directory/folder", correct: false },
      { text: "removed as Python compiles them into an internal portable format", correct: false },
    ],
    explanation: "Explanation:<br><br>In Python, package source directories can be compressed into a ZIP file and distributed as a single file. This allows for easier distribution and installation of Python packages, as the entire package can be contained within one compressed file.",
    link: "https://packaging.python.org/en/latest/tutorials/packaging-projects/",
  },
  {
    question: "A two-parameter lambda function raising its first parameter to the power of the second parameter should be declared as:",
    image: "images/image149.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation: "Explanation:<br><br>In Python, a lambda function is declared using the syntax lambda parameters: expression. In this case, the lambda function takes two parameters x and y, and returns the result of x raised to the power of y, which is represented by x ** y.",
    link: "https://www.w3schools.com/python/python_lambda.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image150.png",
    answers: [
      { text: "21", correct: false },
      { text: "13", correct: false },
      { text: "3", correct: true },
      { text: "None", correct: false },
    ],
    explanation: "Explanation:<br><br>The function f(n) is a recursive function that adds the current value of n to the result of calling itself with n - 1. <br><br>When f(2) is called, the function first checks if n is equal to 1. Since n is 2, it does not return 1 immediately but instead returns 2 + f(1). <br><br>The function then calls f(1), and because n is now 1, it returns 1. This leads to the calculation 2 + 1, which results in 3. <br><br>Therefore, when print(f(2)) is executed, the output is 3.",
    link: "https://www.programiz.com/python-programming/recursion",
  },
  {
    question: "A method for passing the arguments used by the following snippet is called:",
    image: "images/image151.png",
    answers: [
      { text: "sequential", correct: false },
      { text: "named", correct: false },
      { text: "positional", correct: true },
      { text: "keyword", correct: false },
    ],
    explanation: "Explanation:<br><br>In the provided code snippet, the arguments 1 and 2 are passed to the function fun in a way where their positions match the parameters a and b in the function definition. This method of passing arguments, where the position of each argument determines which parameter it corresponds to, is known as positional argument passing.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image152.png",
    answers: [
      { text: "print 2 1", correct: false },
      { text: "print 1 2", correct: true },
      { text: "cause a runtime error", correct: false },
      { text: "print <generator object f at (some hex digits)>", correct: false },
    ],
    explanation: "Explanation:<br><br>In the code, the function f(n) is a generator function that yields numbers from 1 to n inclusive. When f(2) is called, it creates a generator that will yield the values 1 and 2. The for loop then iterates over these values, and each value is printed followed by a space (due to end=' ').<br><br> As a result, the numbers 1 and 2 are printed on the same line with a space separating them.",
    link: "https://www.programiz.com/python-programming/generator",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image153.png",
    answers: [
      { text: "prints 0", correct: false },
      { text: "cause a runtime exception/error", correct: true },
      { text: "prints 3", correct: false },
      { text: "print an empty line", correct: false },
    ],
    explanation: "Explanation:<br><br>The function unclear(x) returns 0 when x is odd. If x is even, the function does not explicitly return a value, so it implicitly returns None.<br><br>When unclear(1) is called, the function returns 0 because 1 is odd. However, when unclear(2) is called, the function returns None because 2 is even.<br><br>The expression unclear(1) + unclear(2) thus becomes 0 + None. In Python, adding an integer to None is not allowed and results in a TypeError. Therefore, instead of producing a result, the code will raise a TypeError due to this invalid operation.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
  },
  {
    question: "If any of a class's components has a name that starts with two underscores (___), then:",
    answers: [
      { text: "the class component's name will be mangled", correct: true },
      { text: "the class component has to be an instance variable", correct: false },
      { text: "the class component has to be a class variable", correct: false },
      { text: "the class component has to be a method", correct: false },
    ],
    explanation: "Explanation:<br><br>When a class component's name starts with two underscores (__), Python applies name mangling. This means that the name is altered to include the class name as a prefix, which makes it harder to accidentally override the component in subclasses. For example, if a class MyClass has a variable named __variable, Python will internally change this name to _MyClass__variable.",
    link: "https://en.wikipedia.org/wiki/Name_mangling#Python",
  },
  {
    question: "If you need to serve two different exceptions called Ex1 and Ex2 in one except branch, you can write:",
    answers: [
      { text: "except Ex1 Ex2:", correct: false },
      { text: "except (Ex1, Ex2)", correct: true },
      { text: "except Ex1, Ex2:", correct: false },
      { text: "except Ex1+Ex2:", correct: false },
    ],
    explanation: "Explanation:<br><br>In Python, if you want to handle multiple exceptions in a single except block, you can group them together inside parentheses, separated by commas. This way, if either Ex1 or Ex2 is raised, the except block will be executed.",
    link: "https://docs.python.org/3/tutorial/errors.html#handling-exceptions",
  },
  {
    question: "A function called issubclass(c1, c2) is able to check if:",
    answers: [
      { text: "c1 and c2 are both subclasses of the same superclass", correct: false },
      { text: "c2 is a subclass of c1", correct: false },
      { text: "c1 is a subclass of c2", correct: true },
      { text: "c1 and c2 are not subclasses of the same superclass", correct: false },
    ],
    explanation: "Explanation:<br><br>The function issubclass(c1, c2) checks if c1 is a subclass of c2.",
    link: "https://docs.python.org/3/library/functions.html#issubclass",
  },
  {
    question: "If s is a stream open for reading, what do you expect from the following invocation?<br><br>c = s.read()",
    answers: [
      { text: "one line of the file will be read and stored in the string called c", correct: false },
      { text: "the whole file content will be read and stored in the string called c", correct: true },
      { text: "one character will be read and stored in the string called c", correct: false },
      { text: "one disk sector (512 bytes) will be read and stored in the string called c", correct: false },
    ],
    explanation: "Explanation:<br><br>If s is a stream open for reading, the invocation c = s.read() will read the whole file content and store it in the string called c.",
    link: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image154.png",
    answers: [
      { text: "True False", correct: false },
      { text: "True True", correct: true },
      { text: "False False", correct: false },
      { text: "False True", correct: false },
    ],
    explanation: `Explanation:<br><br>The isinstance(x, Z) function call returns True since x is an instance of class Z. Additionally, the isinstance(z, X) function call also returns True because z is an instance of class Z, and class Z is a subclass of X.<br><br> As a result, z is also considered an instance of X. Therefore, both conditions evaluate to True, and the output is "True True."`,
    link: "https://docs.python.org/3/library/functions.html#isinstance",
  },
  {
    question: "Which one of the platform module functions should be used to determine the underlying platform name?",
    answers: [
      { text: "platform.python_version()", correct: false },
      { text: "platform.processor()", correct: false },
      { text: "platform.platform()", correct: true },
      { text: "platform.uname()", correct: false },
    ],
    explanation: "Explanation:<br><br>This function returns a string that describes the platform name, including the operating system, version, and other relevant details. It is specifically designed to provide information about the underlying platform on which the Python code is running.",
    link: "https://docs.python.org/3/library/platform.html#platform.platform",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image155.png",
    answers: [
      { text: "False", correct: false },
      { text: "None", correct: false },
      { text: "True", correct: true },
      { text: "0", correct: false },
    ],
    explanation: "Explanation:<br><br>The dir(math) function returns a list of names of the attributes of the math module. Each name in this list is a string, so type(dir(math)[0]) checks the type of the first item in this list, which is indeed a string. Therefore, b1 is True.<br><br>The dir(sys.path) function returns a list of names of attributes and methods for the sys.path object. Since sys.path is a list, the dir(sys.path) call returns the list of attributes and methods available for lists. Each item in this list is a string, so type(dir(sys.path)[-1]) checks the type of the last item in this list, which is also a string. Hence, b2 is True.<br><br>Since both b1 and b2 are True, the final output of the print statement will be True.",
    link: "https://docs.python.org/3/library/functions.html#dir",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image156.png",
    answers: [
      { text: "it outputs 3", correct: true },
      { text: "it outputs 1", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs 2", correct: false },
    ],
    explanation: "Explanation:<br><br>The code initializes a global variable `m` to `0`. It defines a function `foo(n)` that asserts `m` is `0`, then tries to return `1 / n`. If `n` is `0`, a `ZeroDivisionError` occurs, which is caught as an `ArithmeticError`. In the exception block, `m` is incremented by `1`, and the exception is re-raised.<br><br>In the outer `try` block, `foo(0)` is called, which raises the `ArithmeticError`. This is caught by the `except ArithmeticError` block, which increments `m` by `2`. Since no other exceptions are raised, and the re-raised exception is not caught by any other block, the final value of `m` is `2`.<br><br>Therefore, when the `print(m)` statement is executed, it outputs `2`.",
    link: "https://docs.python.org/3/tutorial/errors.html#handling-exceptions",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image157.png",
    answers: [
      { text: "it outputs 3", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs 1", correct: true },
      { text: "it outputs 2", correct: false },
    ],
    explanation: "Explanation:<br><br>The code attempts to convert the string s with the value '2A' into an integer using int(s). However, '2A' is not a valid integer literal, so a ValueError exception will be raised by the int() function.<br><br>Since ValueError is a subclass of Exception but not explicitly caught by any of the specified except clauses (TypeError, LookupError), the generic except clause is triggered. In this generic except block, the value of n is set to 1.<br><br>Thus, the print(n) statement will output 1."
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image158.png",
    answers: [
      { text: "it outputs error", correct: false },
      { text: "it outputs <class 'IndexError'>", correct: false },
      { text: "it outputs list assignment index out of range", correct: true },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation: `Explanation:<br><br>When the code is executed, it attempts to assign a value to an index in the list that does not exist. The list 'my_list' contains three elements with indices '0', '1', and '2'. The code tries to assign the value at index '2' to index '3', but since the list does not have an index '3', Python raises an 'IndexError'. This error is caught by the 'except' block, which then prints the error message "list assignment index out of range". Therefore, the expected outcome of this code is the error message being printed.`,
    link: "https://www.freecodecamp.org/news/list-index-out-of-range-python-error-message-solved/"
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image159.png",
    answers: [
      { text: "it raises an exception", correct: false },
      { text: "it outputs 0", correct: true },
      { text: "it outputs 3", correct: false },
      { text: "it outputs 'None'", correct: false },
    ],
    explanation: `Explanation:<br><br>When the code is executed, it first calculates the result of 1 / 3, which is approximately '0.3333333333333333', and converts this result into a string. The code then iterates over each character in this string, adding each character to the beginning of an initially empty string called 'dummy'. This process effectively reverses the string.<br><br> After the loop completes, 'dummy' contains the reversed version of the original string, which is "3333333333333333.0".<br><br> Finally, the code prints the last character of this reversed string. Since the last character of "3333333333333333.0" is "0", the code will print "0".`,
    link: "https://www.w3schools.com/python/python_howto_reverse_string.asp"

  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image160.png",
    answers: [
      { text: "it raises an exception", correct: false },
      { text: "it outputs True", correct: false },
      { text: "it outputs False", correct: true },
      { text: "it outputs nothing", correct: false },
    ],
    explanation: `Explanation:<br><br>The expected behavior of the code begins with the string "alpha;beta;gamma" being split using the delimiter ":" through the split method. Since this delimiter does not exist in the string, the result of this operation is a list containing a single element, which is ['alpha;beta;gamma'].<br><br>Following this, the code attempts to join the elements of the list into a single string using an empty string '' as the separator. Given that the list contains only one element, the resulting string remains unchanged as "alpha;beta;gamma".<br><br>Finally, the code checks whether the resulting string "alpha;beta;gamma" consists solely of alphabetic characters by using the isalpha() method. Because the string includes semicolons (;), which are not alphabetic characters, the isalpha() method returns False.<br><br>Thus, when this code is executed, the final output will be False.`,
    link: "https://www.w3schools.com/python/ref_string_isalpha.asp"
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image161.png",
    answers: [
      { text: "it outputs 0", correct: false },
      { text: "it outputs 1", correct: true },
      { text: "it raises an exception", correct: false },
      { text: "it outputs 2", correct: false },
    ],
    explanation: "Explanation:<br><br>The code defines a class hierarchy with three classes: Super, Sub_A, and Sub_B. The Super class has two methods: make, which returns 0, and doit, which calls self.make() and returns its result. The Sub_A class inherits from Super and overrides the make method to return 1. The Sub_B class also inherits from Super but does not override the make method, so it uses the default implementation from Super.<br><br>When instances of these classes are created (a as an instance of Sub_A and b as an instance of Sub_B), and the doit method is called on each instance, the behavior is as follows:<br><br>For instance a of Sub_A, calling a.doit() invokes doit, which in turn calls self.make(). Since a is an instance of Sub_A, the overridden make method in Sub_A is used, which returns 1.<br><br>For instance b of Sub_B, calling b.doit() similarly invokes doit, which calls self.make(). Since b is an instance of Sub_B and this class does not override make, it uses the make method from Super, which returns 0.<br><br>Therefore, when you print the sum of the results of a.doit() and b.doit(), the calculation is 1 + 0, resulting in an output of 1.",
    link: "https://docs.python.org/3/tutorial/classes.html#overriding-methods"
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image162.png",
    answers: [
      { text: "True upper", correct: false },
      { text: "True lower", correct: false },
      { text: "False upper", correct: true },
      { text: "False lower", correct: false },
    ],
    explanation: "Explanation:<br><br>In the given code, there are two classes: Upper and Lower. The Lower class inherits from Upper and overrides the method to return a different string.<br><br>An instance named Object is created from the Upper class. When the isinstance function is used to check if Object is an instance of the Lower class, the result is False because Object is an instance of Upper, not Lower.<br><br>When calling the method on the Object instance, it invokes the method defined in the Upper class, which returns the string 'upper'.<br><br>Thus, when the print statement is executed, it first prints False (the result of the isinstance check) and then prints 'upper' (the result of the method call), with the two values separated by a space. <br><br>Therefore, the output of the code is: False upper.",
    link: "https://docs.python.org/3/library/functions.html#isinstance"
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image163.png",
    answers: [
      { text: "it outputs 1", correct: false },
      { text: "it outputs 3", correct: true },
      { text: "it outputs 6", correct: false },
      { text: "it raises an exception", correct: false },
    ],
    explanation: "Explanation:<br><br>In the given code, the class Class has a class attribute __Var that is initialized to 0. The foo method increments this class attribute and assigns the incremented value to an instance attribute named __prop.<br><br>When an instance o1 of Class is created and its foo method is called, the class attribute __Var is incremented from 0 to 1, and the instance attribute __prop for o1 is set to 1. Subsequently, another instance o2 of Class is created, and calling o2.foo() again increments the class attribute __Var from 1 to 2, setting the instance attribute __prop for o2 to 2.<br><br>Finally, the code prints the sum of o2._Class__Var and o1._Class__prop. The value of o2._Class__Var is 2, and the value of o1._Class__prop is 1. Therefore, the result of the addition is 3.",
    link: "https://docs.python.org/3/tutorial/classes.html#private-variables"
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image164.png",
    answers: [
      { text: "it outputs 0", correct: true },
      { text: "it raises an exception", correct: false },
      { text: "it outputs 1", correct: false },
      { text: "it outputs 2", correct: false },
    ],
    explanation: "Explanation:<br><br>In the provided code, the class Class has a class attribute named Variable, which is initialized to 0, and an instance attribute value, also initialized to 0.<br><br>When an instance object_1 of Class is created, it initially inherits the class attribute Variable with the value 0 and has its own instance attribute value set to 0. After creating object_1, the code sets object_1.Variable to 1. This action creates or modifies an instance attribute named Variable specific to object_1, but it does not affect the class attribute Variable, which remains 0 for other instances.<br><br>Next, another instance object_2 of Class is created. This instance starts with the class attribute Variable set to 0 and its own instance attribute value set to 0. The code then increments object_2.value by 1, so object_2.value becomes 1.<br><br>When the code prints the sum of object_2.Variable and object_1.value, it calculates object_2.Variable (which is still 0, as it refers to the class attribute) and object_1.value (which remains 0, as it was not modified). Thus, the sum is 0.",
    link: "https://docs.python.org/3/tutorial/classes.html#class-attributes"
  },
  {
    question: "A property that stores information about a given class's super-classes is named:",
    answers: [
      { text: "__upper__", correct: false },
      { text: "__super__", correct: false },
      { text: "__ancestors__", correct: false },
      { text: "__bases__", correct: true },
    ],
    explanation: "Explanation:<br><br>In Python, __bases__ is an attribute of a class that provides a tuple containing the base classes (superclasses) of the class. This attribute allows you to inspect the hierarchy of a class and see which classes it directly inherits from.",
    link: "https://docs.python.org/3/reference/datamodel.html#class-objects"
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image165.png",
    answers: [
      { text: "a", correct: false },
      { text: "c", correct: true },
      { text: "an exception is raised", correct: false },
      { text: "b", correct: false },
    ],
    explanation: "Explanation:<br><br>In the provided code, a tuple named mytu is defined with the elements 'a', 'b', and 'c'. The code then uses the map function along with a lambda function to transform each element of the tuple.<br><br>The lambda function lambda x: chr(ord(x) + 1) converts each character to its Unicode code point using ord(x), increments this code point by 1, and then converts it back to a character using chr. As a result, each character in the tuple mytu is replaced by the next character in the Unicode sequence. Specifically, 'a' becomes 'b', 'b' becomes 'c', and 'c' becomes 'd'. Thus, the transformed tuple is ('b', 'c', 'd').<br><br>Finally, the code prints the element at the index -2 of the tuple m, which refers to the second-to-last element. In the tuple ('b', 'c', 'd'), the second-to-last element is 'c'.",
    link: "https://realpython.com/python-lambda/#anonymous-functions"
  },
  ,
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image166.png",
    answers: [
      { text: "it outputs [1, 3]", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs [3, 1]", correct: true },
      { text: "it outputs [4, 2, 0]", correct: false },
    ],
    explanation: "Explanation:<br><br>The code begins by creating a list named my_list, which contains the values [0, 1, 2, 3, 4]. This list is generated using a list comprehension that iterates over the numbers from 0 to 4.<br><br>Following this, a new list named m is constructed using another list comprehension. This comprehension iterates over the indices 4, 3, 2, and 1 in reverse order. For each index, it checks whether the value at that index in my_list is odd. If the value is odd, it is included in the list m.<br><br>Specifically, when the code examines index 4, the value is 4, which is even, so this value is not included in the new list. At index 3, the value is 3, which is odd, so it is included. At index 2, the value is 2, which is even, so it is not included. Finally, at index 1, the value is 1, which is odd, so it is included.<br><br>As a result, the list m is created with the values [3, 1].",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp"
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image167.png",
    answers: [
      { text: "3", correct: true },
      { text: "5", correct: false },
      { text: "4", correct: false },
      { text: "an exception is raised", correct: false },
    ],
    explanation: "Explanation:<br><br>The code defines a function named foo that takes two parameters: x and y. Inside the function, y(x) is evaluated first, and then the result is added to x + 1. The result of this addition is then returned by the function.<br><br>In the specific call to foo, the first argument is 1 and the second argument is a lambda function defined as lambda x: x * x. This lambda function takes an input x and returns the square of x.<br><br>When foo is called with these arguments, the lambda function lambda x: x * x is applied to the value 1. Therefore, y(1) results in 1 * 1, which is 1. Next, the function adds this result to x + 1, which is 1 + 1, resulting in 2.<br><br>Thus, the function foo(1, lambda x: x * x) returns 2, and when the result is printed, the output is 2.",
    link: "https://realpython.com/python-lambda/#anonymous-functions"
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image168.png",
    answers: [
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs 1", correct: false },
      { text: "it outputs -1", correct: false },
      { text: "it outputs 0", correct: true },
    ],
    explanation: "Explanation:<br><br>The code first calculates 3 % 1, which is 0, and assigns this value to the variable x. Then, it uses a conditional expression to set y to 1 if x is greater than 0, otherwise to 0. Since x is 0, which is not greater than 0, y is assigned 0. Finally, the code prints y, so the output is 0.",
    link: "https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex"
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image169.png",
    answers: [
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs 2.0", correct: true },
      { text: "it outputs 2.5", correct: false },
      { text: "it outputs 3.0", correct: false },
    ],
    explanation: "Explanation:<br><br>The code first calculates 8 ** (1 / 3), which is the cube root of 8. This calculation results in 2.0 because 23=823=8. Thus, x is assigned the value 2.0.<br><br>Next, the code uses a conditional expression to set the variable y. It checks if x is less than 2.3. Since x is 2.0, which is indeed less than 2.3, the condition is true, and y is assigned the value 2.0.",
    link: "https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex"
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image170.png",
    answers: [
      { text: "it outputs [4, 2]", correct: true },
      { text: "it outputs [2, 4]", correct: false },
      { text: "it outputs [0, 1, 2, 3, 4]", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation: "Explanation:<br><br>The code begins by creating a list named my_list using a list comprehension. This comprehension iterates over the range from 5 down to 1 (excluding 0), resulting in the list [5, 4, 3, 2, 1].<br><br>Following this, another list comprehension constructs the list m. This comprehension iterates over the indices from 0 to 4 and includes elements from my_list only if those elements are even. Specifically, at index 0, the value is 5, which is odd, so it is not included. At index 1, the value is 4, which is even, so it is included. At index 2, the value is 3, which is odd, so it is not included. At index 3, the value is 2, which is even, so it is included. Finally, at index 4, the value is 1, which is odd, so it is not included.<br><br>As a result, the list m contains the even numbers [4, 2].",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp"
  },
  {
    question: "The __bases__ property contains:",
    answers: [
      { text: "base class location (addr)", correct: false },
      { text: "base class objects (class)", correct: true },
      { text: "base class names (str)", correct: false },
      { text: "base class ids (int)", correct: false },
    ],
    explanation: "Explanation:<br><br>The __bases__ attribute of a class is a tuple containing the base classes of that class. Each element in this tuple is a class object representing a direct base class of the class. This allows you to inspect the inheritance hierarchy of a class programmatically.",
    link: "https://docs.python.org/3/reference/datamodel.html#class-objects"
  },/*
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  }*/
  
];
