Smart Calculator
A clean, responsive calculator built with HTML, CSS, and vanilla JavaScript. Supports standard arithmetic, percentage calculations, and bracket expressions — all without any libraries or frameworks.

Live Demo
View Live Demo
https://burhanuddin-gif.github.io/Smart-Calculator/


Repository
GitHub — Smart Calculator
https://github.com/burhanUdDin-gif/Smart-Calculator


Features

Basic arithmetic: addition, subtraction, multiplication, division
Percentage calculations
Parentheses / bracket support with smart auto-detection
AC (All Clear) to reset the calculator
Live expression display alongside the result
Responsive layout with hover and press animations
Clean dark-themed UI with color-coded button groups


Project Structure
Smart-Calculator/
├── index.html      # Calculator layout and button structure
├── style.css       # Styling, theme variables, and button states
└── script.js       # Calculator logic and event handling

How It Works
HTML defines the calculator's structure — a screen section showing the expression and result, and a button grid organized in five rows.
CSS uses custom properties (:root variables) for the color scheme, making it easy to retheme. Each button type (digit, operator, special, equal, AC) has its own color. Buttons have hover brightness and active scale transitions for tactile feedback.
JavaScript tracks the current expression as a string. On each button press:

AC clears everything and resets the display.
( ) intelligently inserts an opening or closing bracket based on the current balance of brackets in the expression.
= evaluates the expression using eval() after replacing the display X with * for valid JavaScript multiplication.
All other buttons append their value to the expression string.


Getting Started
No build tools or dependencies are needed.

Clone the repository:

bashgit clone https://github.com/burhanUdDin-gif/Smart-Calculator.git

Open index.html in any browser.

That's it.

Color Reference
ElementColorBackground#c8c8c8Calculator body#1a2b38Screen#111820Digit buttons#2e4457Special buttons#3a5068Operator buttons#f19616Equal button#4caf72AC button#e03530

Technologies Used

HTML5
CSS3
JavaScript (ES6+)
Font Awesome (icons)
Google Fonts — Poppins


License
This project is open source. Feel free to use, modify, or build on top of it.
Burhan Ud Din | 2026
