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

## Day 04 - 06/Nov/2026 - UI States (Loading & Error Handling)

Today, the task was easy and I successfully implemented error handling.
At first, the program shows a loading state and pauses for 3 seconds using `setTimeout`.
If the user data is fetched successfully, it renders the cards; otherwise, it displays an error message.

## Day 05 - 07/Nov/2026 - Live Search Feature

Today, I completed the project by adding a Live Search feature.
As the user types into the search box, the user list is filtered in real-time by name, email, and city. If no matching users are found, an error message such as 'No users found' is displayed.

- To achieve this, I used `addEventListener` with the `'input'` event to capture user input dynamically.
- Then, I used the `filter()` method on the user data combined with `includes()` to handle the filtering logic.
- Finally, I rendered the filtered results into `li` elements and implemented error handling for empty states.

## Day 06 - 08/Nov/2026 - Testing & Code Review

Today, I review my codes and I understand that I have a piece of repetitive code. So, I reduce it by a func and call it in that old place.
the project overed and I write the best code and it has good performance.
