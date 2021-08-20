(function() {

    angular
        .module("online_TEST")
        .factory("DataService", DataService);


    function DataService() {


        var dataObj = {
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        return dataObj;
    }


    var correctAnswers = [0, 3, 2, 0, 3, 1, 1, 3, 0, 2];

    var quizQuestions = [{
            type: "text",
            text: "What is the name of the object that allows you to perform mathematical tasks with the interpreter?",
            possibilities: [{
                    answer: "Math"
                },
                {
                    answer: "Number"
                },
                {
                    answer: "Solve"
                },
                {
                    answer: "Count"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
            possibilities: [{
                    answer: "JSON"
                },
                {
                    answer: "Output"
                },
                {
                    answer: "Scope"
                },
                {
                    answer: "Syntax"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
            possibilities: [{
                    answer: "Arrays"
                },
                {
                    answer: "Function"
                },
                {
                    answer: "Strings"
                },
                {
                    answer: "Variables"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "In JavaScript, what element is used to store multiple values in a single variable?",
            possibilities: [{
                    answer: "Arrays"
                },
                {
                    answer: "Functions"
                },
                {
                    answer: "Arrays"
                },
                {
                    answer: "Variables"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What can loops offer JavaScript code as a whole?",
            possibilities: [{
                    answer: "Added plug-ins."
                },
                {
                    answer: "Cross-platform support."
                },
                {
                    answer: "Cleaner syntax."
                },
                {
                    answer: "Improved performance."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where is the JavaScript placed inside an HTML document or page?",
            possibilities: [{
                    answer: "In the <title> section."
                },
                {
                    answer: "In the <body> and <head> sections."
                },
                {
                    answer: "Cleaner syntax."
                },
                {
                    answer: "Added plug-ins."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the element used – and hidden – in code that explains things and makes the content more readable?",
            possibilities: [{
                    answer: "Notes"
                },
                {
                    answer: "Comments"
                },
                {
                    answer: "Comparisons"
                },
                {
                    answer: "Quotations"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
            possibilities: [{
                    answer: "Boolean"
                },
                {
                    answer: "Condition"
                },
                {
                    answer: "RegExp"
                },
                {
                    answer: "Events"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
            possibilities: [{
                    answer: "While Loop"
                },
                {
                    answer: "Else Loop"
                },
                {
                    answer: "For Loop"
                },
                {
                    answer: "Conditional Loop"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How can you print 'hello world' in javascript",
            possibilities: [{
                    answer: "system.out.print('hello world')"
                },
                {
                    answer: "print('hello world')"
                },
                {
                    answer: "console.log('hello world')"
                },
                {
                    answer: "'hello world'"
                }
            ],
            selected: null,
            correct: null
        }
    ];



})();