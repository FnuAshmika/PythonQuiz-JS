// define an array of 15 python related questions and answers
const questions = [
    {
      question: "What is the correct syntax to output 'Hello World' in Python?",
      options: ["print('Hello World')", "echo 'Hello World'", "echo('Hello World')", "print('Hello World')"],
      answer: "print('Hello World')"
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["*", "**", "^", "//"],
      answer: "**"
    },
    {
      question: "Which keyword is used for creating a function in Python?",
      options: ["function", "define", "def", "fun"],
      answer: "def"
    },
    {
      question: "What is the output of the following code? \n x = [1, 2, 3] \n print(x[1])",
      options: ["1", "2", "3", "Error"],
      answer: "2"
    },
    {
      question: "Which data type is used for unordered collections of unique elements in Python?",
      options: ["list", "set", "tuple", "dictionary"],
      answer: "set"
    },
    {
      question: "Which method is used to add an element to a set in Python?",
      options: [".add()", ".insert()", ".append()", ".extend()"],
      answer: ".add()"
    },
    {
      question: "What is the output of the following code? \n x = 'Hello World!' \n print(x[-6:-1])",
      options: ["World", "World!", "lo Wo", "lo Wor"],
      answer: "World"
    },
    {
      question: "Which method is used to remove the last element from a list in Python?",
      options: [".remove()", ".pop()", ".del()", ".discard()"],
      answer: ".pop()"
    },
    {
      question: "What is the correct syntax for creating a dictionary in Python?",
      options: ["{key1: value1, key2: value2}", "(key1: value1, key2: value2)", "[key1: value1, key2: value2]", "{'key1': 'value1', 'key2': 'value2'}"],
      answer: "{'key1': 'value1', 'key2': 'value2'}"
    },
    {
      question: "What is the output of the following code? \n x = 3 \n y = '3' \n print(x + y)",
      options: ["6", "33", "TypeError", "None"],
      answer: "TypeError"
    },
    {
      question: "Which method is used to remove an item from a dictionary in Python?",
      options: [".remove()", ".pop()", ".del()", ".discard()"],
      answer: ".pop()"
    },
    {
      question: "What is the correct way to import a module named 'example' in Python?",
      options: ["import example", "require example", "using example", "from example import *"],
      answer: "import example"
    },
    {
        question: "What is the output of the following code: print('python'.capitalize())",
        options: ["'Python'", "'PYTHON'", "'python'", "'pYTHON'"],
        answer: "'Python'"
      },
      {
        question: "Which of the following is NOT a method of a list in Python?",
        options: ["append()", "insert()", "delete()", "remove()"],
        answer: "delete()"
      }
]