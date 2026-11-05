** In this file, I write everything I learn. So each section separated by challenge day! **

## Day 02 - 04/Nov/2026 - API Module (src/js/api.js)

Today, I worked on fetching data and error handling:

- Separation of concerns: Fetching data from the API should be handled inside `api.js`.
- Used `fetch` along with `async/await` and `try...catch` blocks to manage asynchronous data.
- Learned about `res.ok`: It checks whether the HTTP response status is successful. For example, if an endpoint like `users` is misspelled, `res.ok` becomes `false` and throws an error to the `catch` block.
- Learned the difference between network errors (e.g., invalid domains / DNS failures) and HTTP status errors (e.g., 404 Not Found).

## Day 03 - 05/Nov/2026 - Dynamic DOM Rendering

ُToday, I work on main.js file. I try to connect and show user data (name, email, city) with DOM in js.

- at first, I exported api.js with `export default`.
- second, I created `container-js` in class `<ul>` / index.html . then I connected it to `main.js` with `document.querySelector(".container-js")`. It is important that I attention to `.` before `".container-js"` in `document.querySelector`. because I use class in html!
- third, I created `renderUsers` function. then I got data from `User` by `user` variable. then, I used `forEach` method for getting data (name, email, city) from API.
- `createElement` is for creating a element.
- `classList.add`: The `classList` property returns the CSS classnames of an element.`add` Adds one or more tokens to the list. It is important that I must use `""` and `,` for each token in list! for example, `"bg-green-700", "rounded-lg", "py-1.5", "px-3"`.
- `innerHTML`: The innerHTML property sets or returns the HTML content (inner HTML) of an element.
- `appendChild`: The `appendChild()` method appends a node (element) as the last child of an element.
