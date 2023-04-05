import {
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6,
    Question7,
    Question8,
    Question9,
    Question10,
} from "../../components/FP_SET5";

import Question1Json from "../../assets/JSON/FP_set5/Question1.json";

import {
    CodeSnippet1,
    CodeSnippet2,
    CodeSnippet3,
    CodeSnippet4,
    CodeSnippet5,
    CodeSnippet6,
    CodeSnippet7,
    CodeSnippet8,
    CodeSnippet9,
    CodeSnippet10,
} from "../../Code/FP_Set5";

console.log(Question1Json.watchlist);
const React_Set1 = [
    {
        qno: 1,
        question:
            "Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.",

        code: CodeSnippet1,
        output: <Question1 />,
    },
    {
        qno: 2,
        question:
            "Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.",
        output: <Question2 />,
        code: CodeSnippet2,
    },
    {
        qno: 3,
        question:
            "Create an array of objects representing books in a library. Each object has the following properties: id, title, author, and rating. Write a React component that takes the array of books as input and returns an unordered list of books, where each list item displays the book's title, author, and rating.",

        output: <Question3 />,
        code: CodeSnippet1,
    },
    {
        qno: 4,
        question:
            "Create an array of objects representing employees in a company. Each object has the following properties: id, name, department, and salary. Write a React component that takes the array of employees as input and returns an unordered list of employees, where each list item displays the employee's name, department, and salary.",
        output: <Question4 />,
        code: CodeSnippet1,
    },
    {
        qno: 5,
        question:
            "Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, recipe name, recipe creator name. Write a React component that takes the array of recipes as input and returns an unordered list, where each list item displays the recipe's name and recipe creator name.",
        output: <Question5 />,
        code: CodeSnippet1,
    },
    {
        qno: 6,
        question:
            "Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component that takes the array of cars as input and returns an unordered list of cars, where each list item displays the car's make, model, and price.",
        output: <Question6 />,
        code: CodeSnippet1,
    },
    {
        qno: 7,
        question:
            "Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component that takes the array of students as input and generates an ordered list of students, where each list item displays the student's name, grade, and attendance.",
        output: <Question7 />,
        code: CodeSnippet1,
    },
    {
        qno: 8,
        question:
            "Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title, director, and runtime. Write a React component that takes the array of movies as input and generates an ordered list of movies, where each list item displays the movie's title, director, and runtime.",
        output: <Question8 />,
        code: CodeSnippet1,
    },
    {
        qno: 9,
        question:
            "Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and generates an ordered list of products, where each list item displays the product's name, price, and category.",
        output: <Question9 />,
        code: CodeSnippet1,
    },
    {
        qno: 10,
        question:
            "Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, name, ingredients, and instructions. Write a React component that takes the array of recipes as input and generates an ordered list of recipes, where each list item displays the recipe's name, ingredients, and instructions. Data has been provided below for this questions.",
        output: <Question10 />,
        code: CodeSnippet1,
    },
];
export default React_Set1;
