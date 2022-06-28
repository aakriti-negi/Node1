# What is Node.js?

1) Node.js is an open source server environment.
2) It runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
3) It uses JavaScript on the server.
4) It uses asynchronous programming.
5) It eliminates the waiting, and simply continues with the next request.
6) It runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

# What Can Node.js Do?

1) Node.js can generate dynamic page content.
2) It can create, open, read, write, delete, and close files on the server.
3) It can collect form data.
4) It can add, delete, modify data in your database

# Node modules

=> http, https, path, os these are some of the core node modules.
1) http: It helps us with launching a server, also with other tasks like sending requests because a node app could also send a request
   to another server.
2) https: It helps us with launching a SSL server where all code encrypted.
3) path: This module helps us with constructing paths to file on a file system that work on any operating system because windows and mac
   and linux use different path formats.
4) OS: This module helps us with operating system, relevant information and so on.

# Process for creating package and adding start script

1) create a package.json file
   npm init (to configure file) or npm init --y (y for yes to all options).

2) In scripts create start: "node index.js" in package,json file.