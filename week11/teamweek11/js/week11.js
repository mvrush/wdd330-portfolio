import { makeRequest } from "./authHelpers.js"; // make sure you add the .js at the end of 'authHelpers' to avoid "blocked because of disallowed MIME type" message.
import Auth from "./auth.js";

// passes 'login' as our url and 'POST' as our method to the 'makeRequest' function
makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
});