** In this file, I write everything I learn. So each section separated by challenge day! **

## Day 02 - 04/Nov/2026 - API Module (src/js/api.js)

Today, I worked on fetching data and error handling:

- Separation of concerns: Fetching data from the API should be handled inside `api.js`.
- Used `fetch` along with `async/await` and `try...catch` blocks to manage asynchronous data.
- Learned about `res.ok`: It checks whether the HTTP response status is successful. For example, if an endpoint like `users` is misspelled, `res.ok` becomes `false` and throws an error to the `catch` block.
- Learned the difference between network errors (e.g., invalid domains / DNS failures) and HTTP status errors (e.g., 404 Not Found).
