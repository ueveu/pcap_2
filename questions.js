export const questions = [
  {
    question: "What is the expected behavior of the following code?",
    code:`the_string = ',,'.join(('alpha', 'omega'))
the_list = the_string.split(',')
print(',' in the_list)`,
    answers: [
      { text: "it raises an exception", correct: false },
      { text: "it outputs False", correct: true },
      { text: "it outputs nothing", correct: false },
      { text: "it outputs True", correct: false },
    ],
    explanation:
      "The 'join' method combines 'alpha' and 'omega' into a string: 'alpha,,omega'. When 'split' is called with ',' as the separator, it splits the string into ['alpha', '', 'omega']. Checking if ',' is in this list will return False, because ',' is not one of the list elements.",
    link: "https://www.w3schools.com/python/ref_string_split.asp",
  },
  
  {
    question: "Which of the following invocations are valid? (Select two answers)",
    code:`'python'.sorted()
"python".find("")
"python".rindex("th")
sort("python")`,
    answers: [
      { text: "'python'.sorted()", correct: false },
      { text: '"python".find("")', correct: true },
      { text: '"python".rindex("th")', correct: true },
      { text: 'sort("python")', correct: false },
    ],
    explanation:
      "Explanation:<br><br>'sorted()' is a built-in function but cannot be used as a method on strings. 'find()' and 'rindex()' are valid string methods, with 'rindex()' returning the highest index of a substring. 'sort()' is a method for lists, not strings.",
    link: "https://www.w3schools.com/python/ref_string_rindex.asp",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`x = 8 ** (1 / 3)
y = 2. if x < 2.3 else 3.
print(y)`,
    answers: [
      { text: "it outputs 3.0", correct: false },
      { text: "it outputs 2.5", correct: false },
      { text: "it outputs 2.0", correct: true },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value of x is approximately 2.0, so y will be assigned 2.0. Therefore, the output will be 2.0.",
    link: "",
  },
  {
    question: "Which of the following statements are true? (Select two answers)",
    code: "",
    answers: [
      { text: "an escape sequence can be recognized by the / sign put in front of it", correct: false },
      { text: "a code point is a number assigned to a given character", correct: true },
      { text: "II in ASCII stands for Internal Information", correct: false },
      { text: "ASCII is a subset of UNICODE", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A code point is indeed a number assigned to a character, and ASCII is a subset of Unicode.",
    link: "",
  },
  
  {
    question: "Which of the following expressions evaluate to True? (Select two answers)",
    code:`'not' not in 'in'
't'.upper() in 'Thames'
'a' not in 'ABC'.lower()
'in' not in 'not'`,
    answers: [
      { text: "'not' not in 'in'", correct: true },
      { text: "'t'.upper() in 'Thames'", correct: true },
      { text: "'a' not in 'ABC'.lower()", correct: false },
      { text: "'in' not in 'not'", correct: true },
    ],
  
      explanation:
        "Explanation:<br><br>'not' is not in 'in', and 'a' is not in 'abc'.",
    link: "",
    },
  
  {
      question: "Which of the following expressions evaluate to True? (Select two answers)",
      code:`11 == '011'
'1' + '2' * 2 == '12'
'abc'.upper() < 'abc'
3 * 'a' < 'a' * 2`,
    answers: [
      { text: "11 == '011'", correct: false },
      { text: "'1' + '2' * 2 == '12'", correct: false },
      { text: "'abc'.upper() < 'abc'", correct: true },
      { text: "3 * 'a' < 'a' * 2", correct: false },
    ],
  
      explanation:
        "Explanation:<br><br>'abc'.upper() < 'abc' evaluates to True because uppercase letters are less than lowercase letters in ASCII. The expression 3 * 'a' < 'a' * 2 evaluates to False because 'aaa' is greater than 'aa'.",
      link: "",
    },
    
  {
    question: "Which of the following expressions evaluate to True? (Select two answers)",
    code:
`
ord("z") - ord("Z") == ord("0")
len('\\') == 1
len('"""') == 0
chr(ord('a') + 1) == 'B'`,
    answers: [
      { text: "ord('z') - ord('Z') == ord('0')", correct: false },
      { text: "len('\\') == 1", correct: true },
      { text: "len('\"\"\"') == 0", correct: false },
      { text: "chr(ord('a') + 1) == 'b'", correct: true }
    ],
    explanation:
      "Explanation:<br><br>len('\\') is 1, and chr(ord('a') + 1) gives 'b'. The difference between 'z' and 'Z' in ASCII is not equal to the ASCII value of '0'. '\"\"\"' is a triple-quoted string with length 3, not 0.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`my_tuple = (1, 2, 3)

try:
    my_tuple[3] = my_tuple[2]
except IndexError as error:
    x = error
except Exception as exception:
    x = exception
else:
    x = None

print(x)`,
    answers: [
      { text: "it outputs 'tuple' object does not support item assignment", correct: true },
      { text: "it outputs None", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs list assignment index out of range", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Attempting to assign a value to an index that does not exist in a tuple raises an IndexError.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`string = str(1/3)
dummy = ''
for character in string:
    dummy = dummy + character
print(dummy[-1])`,
    answers: [
      { text: "it outputs 0", correct: false },
      { text: "it raises an exception", correct: false },
      { text: "it outputs 'None'", correct: false },
      { text: "it outputs 3", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The last character of the string representation of 1/3 is '3'.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`x = 8 ** (1 / 3)
y = 2. if x < 2.3 else 3.
print(y)`,
    answers: [
      { text: "it outputs 3.0", correct: false },
      { text: "it outputs 2.5", correct: false },
      { text: "it outputs 2.0", correct: true },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value of x is approximately 2.0, so y will be assigned 2.0. Therefore, the output will be 2.0.",
    link: "",
  },
  {
    question: "Assuming that the snippet below has been executed successfully, which of the following expressions will evaluate to true? (Select two answers)",
    code:`string = 'python'[::2]
string = string[-1] + string[-2]`,
    answers: [
      { text: "string is None", correct: false },
      { text: "string[0] == 'o'", correct: true },
      { text: "len(string) == 3", correct: false },
      { text: "string[0] == string[-1]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The string becomes 'on', so string[0] is 'o' and string[-1] is also 'o'.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`s = '2A'
try:
    n = int(s)
except ValueError:
    n = 2
except ArithmeticError:
    n = 1
except:
    n = 0

print(n)`,
    answers: [
      { text: "it outputs 2", correct: true },
      { text: "it outputs 1", correct: false },
      { text: "it outputs 0", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Converting '2A' to an integer raises a ValueError, so n is set to 2.",
    link: "",
  },
  {
    question: "What is true about the following snippet? (Select two answers)",
    code:`class E(Exception):
    def __init__(self, message):
        self.message = message
    def __str__(self):
        return "it's nice to see you"

try:
    print("I feel fine")
    raise Exception("what a pity")
except E as e:
    print(e)
else:
    print("the show must go on")`,
    answers: [
      { text: "the string it's nice to see you will be seen", correct: false },
      { text: "the string I feel fine will be seen", correct: true },
      { text: "the code will raise an unhandled exception", correct: false },
      { text: "the string what a pity will be seen", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The first print statement executes, then an exception is raised, which is caught by the except block.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`the_list = "1,2 3".split()
the_string = ''.join(the_list)
print(the_string.isdigit())`,
    answers: [
      { text: "it outputs True", correct: false },
      { text: "it outputs False", correct: true },
      { text: "it raises an exception", correct: false },
      { text: "it outputs nothing", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The string '1,2 3' contains non-digit characters, so isdigit() returns False.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`myli = [1, 2, 4]
m = list(map(lambda x: 2**x, myli))
print(m[-1])`,
    answers: [
      { text: "1", correct: false },
      { text: "16", correct: true },
      { text: "an exception is raised", correct: false },
      { text: "4", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The last element in the list is 2 raised to the power of 4, which is 16.",
    link: "",
  },
  {
    question: "What is true about Python packages? (Select two answers)",
    code: "",
    answers: [
      { text: "a package is a single file whose name ends with the .pa extension", correct: false },
      { text: "the __name__ variable always contains the name of a package", correct: true },
      { text: "a package is a group of related modules", correct: true },
      { text: "the .pyc extension is used to mark semi-compiled Python packages", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A package is indeed a group of related modules, and the __name__ variable contains the name of the package.",
    link: "",
  },
  {
    question: "Assuming that the code below has been executed successfully, which of the following statements are true? (Select two answers)",
    code:`class Class:
    var = 1
    def __init__(self, value):
        self.prop = value

Object = Class(2)`,
    answers: [
      { text: "len(Object.__dict__) == 1", correct: true },
      { text: "'var' in Class.__dict__", correct: true },
      { text: "'prop' in Class.__dict__", correct: false },
      { text: "'var' in Object.__dict__", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Object has one attribute in its __dict__, and Class has 'var' in its __dict__.",
    link: "",
  },
  {
    question: "What is the expected output of the following code?",
    code:`def func(a, b, c=7, *args):
print(a, b, c, args)

func(1, 2, 3, 4, 5)`,
    answers: [
      { text: "1 2 3 (4, 5)", correct: true },
      { text: "1 2 7 (3, 4, 5)", correct: false },
      { text: "1 2 3 4 5", correct: false },
      { text: "1 2 3 (4,) (5,)", correct: false },
    ],
    explanation: "Explanation:<br><br>In this function call, 1 is assigned to a, 2 to b, 3 to c (overriding the default value), and the remaining arguments 4 and 5 are packed into a tuple args. The print statement then outputs these values, with args being printed as a tuple.",
    link: "",
  },
  {
    question: "What will be the output of the following code?",
    code:`x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
    answers: [
      { text: "[1, 2, 3]", correct: false },
      { text: "[1, 2, 3, 4]", correct: true },
      { text: "[1, 2, 3, [4]]", correct: false },
      { text: "Error", correct: false },
    ],
    explanation: "Explanation:<br><br>In Python, when you assign a list to a new variable, both variables refer to the same list object in memory. So when y.append(4) is called, it modifies the original list that both x and y are referring to. Therefore, printing x will show the modified list [1, 2, 3, 4].",
    link: "",
  },
  {
    question: "Assuming that the code below has been placed inside a file named 'code.py', which of the following expressions evaluate to True? (Select two answers)",
    code:`class ClassA:
  var = 1
    
  def __init__(self, prop):
          prop1 = prop2 = prop
      def __str__(self):
          return 'Object'
  
class ClassB(ClassA):
    def __init__(self, prop):
        prop3 = prop ** 2
        super().__init__(prop)
  
Object = ClassB(2)`,
    answers: [
      { text: "len(ClassB.__bases__) == 2", correct: false },
      { text: "__name__ == 'code.py'", correct: false },
      { text: "str(Object) == 'Object'", correct: true },
      { text: "ClassA.__module__ == '__main__'", correct: true },
    ],
    explanation:
      "Explanation:<br><br>len(ClassB.__bases__) returns 2 because ClassB inherits from ClassA. str(Object) returns 'Object' as defined in the __str__ method of ClassA.",
    link: "",
  },
  {
    question: "What is true about the __bases__ property?",
    code: "",
    answers: [
      { text: "there is no such property", correct: false },
      { text: "it is accessible inside a class", correct: true },
      { text: "it is accessible inside an object", correct: true },
      { text: "it is accessible inside a class and an object", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The __bases__ property is accessible within a class and can also be accessed through an instance of the class.",
    link: "",
  },
  {
    question: "Assuming that the following piece of code has been executed, which of the following statements are true? (Select two answers)",
    code:`class A:
    VarA = 1
    def __init__(self):
        self.prop_a = 1
  
class B(A):
    VarA = 2
    def __init__(self):
        self.prop_a = 2
        self.prop_aa = 2
  
class C(B):
    VarA = 3
    def __init__(self):
        super().__init__()

obj_a = A()
obj_b = B()
obj_c = C()`,
    answers: [
      { text: "isinstance(obj_c, A)", correct: true },
      { text: "hasattr(obj_b, 'prop_aa')", correct: false },
      { text: "isinstance(obj_b, B)", correct: true },
      { text: "hasattr(obj_a, 'prop_a')", correct: true },
    ],
    explanation:
      "Explanation:<br><br>obj_c is an instance of C, which inherits from B and A. obj_b has 'prop_a' but not 'prop_aa'.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`class Class:
    _Var = 1
    __Var = 2
    def __init__(self):
        self.prop = 3
        self.__prop = 4
  
o = Class()
print(o._Class__Var + o._Class__prop)`,
    answers: [
      { text: "it outputs 6", correct: true },
      { text: "it outputs 1", correct: false },
      { text: "it raises an exception", correct: false },
      { text: "it outputs 3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>o._Class__Var accesses the private variable, and o._Class__prop accesses the public property, resulting in 6.",
    link: "",
  },
  {
    question: "What is the expected output of the following snippet?",
    code:`class Upper:
    def __init__(self):
        self.property = 'upper'
  
class Lower(Upper):
    def __init__(self):
        super().__init__()
  
Object = Lower()
print(isinstance(Object, Lower), end=' ')
print(Object.property)`,
    answers: [
      { text: "True lower", correct: false },
      { text: "True upper", correct: true },
      { text: "False upper", correct: false },
      { text: "False lower", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The object is an instance of Lower, and its property is set to 'upper'.",
    link: "",
  },
  {
    question: "Which of the following lines of code will work flawlessly when put independently inside the inc() method in order to make the snippet's output equal to 3? (Select two answers)",
    code:`class MyClass:
      Var = 0
      def __init__(self):
          MyClass.Var += 1
          self.prop = MyClass.Var
  
      def get(self):
          return self.prop
  
      def put(self, val):
          self.prop = val
  
      def inc(self, val):
          self.put(val + 1)
          pass
  
Object = MyClass()
Object.inc(2)
print(Object.get())`,
    answers: [
      { text: "self.put(get() + val)", correct: false },
      { text: "self.put(self.prop + val)", correct: true },
      { text: "self.put(val)", correct: false },
      { text: "self.put(val + 1)", correct: true },
    ],
    explanation:
      "Explanation:<br><br>To make the output equal to 3, you can add the current value of prop to val.",
    link: "",
  },
  {
    question: "What is the expected output of the following code?",
    code:`def foo(x, y, z):
    return x(y) - x(z)
  
print(foo(lambda x: x % 2, 2, 2, 1))`,
    answers: [
      { text: "an exception is raised", correct: false },
      { text: "1", correct: false },
      { text: "-1", correct: true },
      { text: "0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The lambda function returns 0 for both 2s, so the output is 0 - 1 = -1.",
    link: "",
  }, 
  {
    question: "Which of the following invocations are valid? (Select two answers)",
    code: "",
    answers: [
      { text: '"python".rindex("th")', correct: true },
      { text: 'sort("python")', correct: false },
      { text: '"python".find("")', correct: true },
      { text: "'python'.sorted()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>rindex and find are valid string methods, while sort and sorted are not applicable to strings.",
    link: "",
  },  
  {
    question: "Which of the following statements are true? (Select two answers)",
    code: "",
    answers: [
      { text: "a code point is a point inside the code when execution stops immediately", correct: false },
      { text: "an escape sequence can be recognized by the # sign put in front of it", correct: false },
      { text: "ASCII is the name of a character coding standard", correct: true },
      { text: "UTF-8 is one of the ways of representing UNICODE code points", correct: true },
    ],
    explanation:
      "Explanation:<br><br>ASCII is indeed a character coding standard, and UTF-8 is a way to represent Unicode code points.",
    link: "",
  },
  {
    question: "Which of the following snippets will execute without raising any unhandled exceptions? (Select two answers)",
    code:`try:
    print(0/0)
except:
    print(0/1)
else:
    print(0/2)

    try:
        print(int("0"))
    except NameError:
        print("0")
    else:
        print(int(""))
  
import math
try:
    print(math.sqrt(-1))
except:
    print(math.sqrt(0))
else:
    print(math.sqrt(1))
try:
    print(float("le1"))`,
    answers: [
      { text: "try: print(int('0')) except NameError: print('0') else: print(int(''))", correct: true },
      { text: "import math; try: print(math.sqrt(-1)) except: print(math.sqrt(0))", correct: true },
      { text: "try: print(0/0) except: print(0/1) else: print(0/2)", correct: false },
      { text: "try: print(float('le1'))", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The first two snippets handle exceptions correctly, while the others will raise unhandled exceptions.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`s = '2A'
try:
   n = int(s)
except ValueError:
  n = 2
except ArithmeticError:
    n = 1
except:
    n = 0

print(n)`,
    answers: [
      { text: "it outputs 2", correct: true },
      { text: "it outputs 1", correct: false },
      { text: "it outputs 0", correct: true },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Converting '2A' to an integer raises a ValueError, which is caught by the first except block, setting n to 2. The code then continues to the else block, setting n to 0.",
    link: "",
  },
  {
    question: "A Python package named pypack includes a module pymod.py which contains a function. Which of the following snippets will let you invoke the function? (Select two answers)",
    code: "",
    answers: [
      { text: "import pypack; import pypack.pymod; pypack.pymod.pyfun()", correct: true },
      { text: "from pypack.pymod import pyfun; pyfun()", correct: true },
      { text: "import pypack; pypack.pymod.pyfun()", correct: false },
      { text: "from pypack import *; pyfun()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The first two options correctly import the function from the module.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`m = 1

def foo(n):
    global m
    assert m == 0
    try:
        return 1/n
    except ArithmeticError:
        m += 1
        raise
  
try:
    foo(0)
except ArithmeticError:
    m += 1
except:
    m += 2

print(m)`,
    answers: [
      { text: "it outputs 3", correct: true },
      { text: "it outputs 1", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code raises an ArithmeticError, which increments m to 1, and the outer exception increments it to 2, resulting in 3.",
    link: "",
  },
  {
    question: "What is true about the following snippet? (Select two answers)",
    code:`class E(Exception):
    def __init__(self, message):
        self.message = message
    def __str__(self):
        return "it's nice to see you"
  
try:
    print("I feel fine")
      raise Exception("what a pity")
  except E as e:
      print(e)
  else:
      print("the show must go on")`,
    answers: [
      { text: "the string it's nice to see you will be seen", correct: false },
      { text: "the string I feel fine will be seen", correct: true },
      { text: "the code will raise an unhandled exception", correct: false },
      { text: "the string what a pity will be seen", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The first print statement executes, then an exception is raised, which is caught by the except block.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`the_list = "1,2 3".split()
the_string = ''.join(the_list)
print(the_string.isdigit())`,
    answers: [
      { text: "it outputs True", correct: false },
      { text: "it raises an exception", correct: false },
      { text: "it outputs False", correct: true },
      { text: "it outputs nothing", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The string '1,2 3' contains non-digit characters, so isdigit() returns False.",
    link: "",
  },
  {
    question: "Which of the following expressions evaluate to True? (Select two answers)",
    code: "",
    answers: [
      { text: "'not' not in 'in'", correct: true },
      { text: "'a' not in 'ABC'.lower()", correct: true },
      { text: "'t'.upper() in 'Thames'", correct: false },
      { text: "'in' not in 'not'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>'not' is not in 'in', and 'a' is not in 'abc'.",
    link: "",
  },
  {
    question: "Assuming that the snippet below has been executed successfully, which of the following expressions will evaluate to True? (Select two answers)",
    code:`string = 'python'[:2]
string = string[-1] + string[-2]`,
    answers: [
      { text: "string is None", correct: false },
      { text: "string[0] == 'o'", correct: true },
      { text: "len(string) == 3", correct: false },
      { text: "string[0] == string[-1]", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The string becomes 'on', so string[0] is 'o' and string[-1] is also 'o'.",
    link: "",
  },
  {
    question: "Which of the following expressions evaluate to True? (Select two answers)",
    code: "",
    answers: [
      { text: "'AbC'.lower() < 'AB'", correct: false },
      { text: "'3.14' != str(3.1415)", correct: true },
      { text: "121 + 1 != '1' + 2 * '2'", correct: false },
      { text: "'1' + '1' + '1' < '1' * 3", correct: true },
    ],
    explanation:
      "Explanation:<br><br>'3.14' is not equal to the string representation of 3.1415, and '1' + '1' + '1' is less than '1' * 3.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`string = str(1//3)
dummy = ''
for character in string:
    dummy = character + dummy
print(dummy[-1])`,
    answers: [
      { text: "it outputs 0", correct: false },
      { text: "it raises an exception", correct: false },
      { text: "it outputs 'None'", correct: false },
      { text: "it outputs 3", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The last character of the string representation of 1//3 is '0'.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`class Class:
    Var = 0

    def __init__(self, var):
        self.var = var
        Class.Var += 1


object_1 = Class(1)
object_2 = Class(2)
print(Class.Var + object_1.var + object_2.var)`,
    answers: [
      { text: "it outputs 2", correct: false },
      { text: "it raises an exception", correct: false },
      { text: "it outputs 3", correct: false },
      { text: "it outputs 5", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Class.Var is incremented for each instance, resulting in 2, plus the values of object_1.var and object_2.var, which are 1 and 2 respectively.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`class Super:
    def make(self):
        return 0

    def doit(self):
        return self.make()


class Sub_A(Super):
    def make(self):
        return 1


class Sub_B(Super):
    pass


a = Sub_A()
b = Sub_B()
print(a.doit() + b.doit())`,
    answers: [
      { text: "it outputs 1", correct: true },
      { text: "it outputs 2", correct: false },
      { text: "it raises an exception", correct: false },
      { text: "it outputs 0", correct: false },
    ],
    explanation:
      "Explanation:<br>   <br>The Sub_A class overrides the make method, so the output is 1 + 0 = 1.",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`x = 8 ** (1 / 3)
y = 2. if x < 2.3 else 3.
print(y)`,
    answers: [
      { text: "it outputs 3.0", correct: false },
      { text: "it outputs 2.5", correct: false },
      { text: "it outputs 2.0", correct: true },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value of x is approximately 2.0, so y will be assigned 2.0. Therefore, the output will be 2.0.",
    link: "",
  },
  {
    question: "What is the expected output of the following code?",
    code:`def foo(x, y, z):
    return x(y) - x(z)
  
print(foo(lambda x: x % 2, 2, 2, 1))`,
    answers: [
      { text: "an exception is raised", correct: true },
      { text: "1", correct: false },
      { text: "-1", correct: false },
      { text: "0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>TypeError: foo() takes 3 positional arguments but 4 were given",
    link: "",
  },
  {
    question: "What is the expected behavior of the following code?",
    code:`x = 8 ** (1 / 3)
y = 2. if x < 2.3 else 3.
print(y)`,
    answers: [
      { text: "it outputs 3.0", correct: false },
      { text: "it outputs 2.5", correct: false },
      { text: "it outputs 2.0", correct: true },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value of x is approximately 2.0, so y will be assigned 2.0. Therefore, the output will be 2.0.",
    link: "",
  },
  {
    question: "What is the expected output of the following code?",
    code:`myli = [1, 2, 4]
m = list(map(lambda x: 2 ** x, myli))
print(m[-1])`,
    answers: [
      { text: "1", correct: false },
      { text: "16", correct: true },
      { text: "an exception is raised", correct: false },
      { text: "4", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The last element in the list is 2 raised to the power of 4, which is 16.",
    link: "",
  },
  {
    question: "What is true about Python packages? (Select two answers)",
    code: "",
    answers: [
      { text: "a package is a single file whose name ends with the .pa extension", correct: false },
      { text: "the __name__ variable always contains the name of a package", correct: true },
      { text: "a package is a group of related modules", correct: true },
      { text: "the .pyc extension is used to mark semi-compiled Python packages", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A package is indeed a group of related modules, and the __name__ variable contains the name of the package.",
    link: "",
  }








];