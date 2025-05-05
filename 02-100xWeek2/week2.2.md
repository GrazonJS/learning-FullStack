### ECMAScript

- ECMAScript is a scripting language specification on which Javascript is based on
- The ECMAScript sets a standard approach to write javascript
- People who are creating a compiler for JS makes sure that it supports all the functions and statements mentioned by ecmascript

### JavaScript

- Javascript is the implementation of ECMAScript
- ECMAScript sets a standard and JavaScript is the implementation of that standard
- The Web APIs such as DOM, setTimeout, Fetch API is not a part of Javascript instead it is a part of the browser
- Javascript is executed by JS engines such as v8 or spidermonkey. These JS Engines have code written in C or Rust that converts the JS to low-level 0s and 1s

### Node JS

- Node JS is a back-end runtime
- It is known that the V8 engine can convert the JS code into 0s and 1s, so they took the V8 engine and added server based concepts such as fs.readFile, HTTPS server etc.. and made it as a backend language
- Node JS is used to create CLIs, HTTP servers, video players, games etc…

### Bun

- Bun is said to be a competitor for Node JS
- Node JS is built using C++ and Bun is built using zig which is a fast low latency language
- In simple terms, Madurai Paiyanum Chennai ponnumBun has faster runtime than node js

---

### HTTP Server

- HTTP stands for Hypertext Transfer Protocol
- A protocol means that a fixed set of rules to communicate. Here, it is defined for machines to communicate to each other
- HTTP protocol is the way how the website’s frontend communicates with the backend
- HTTP server is the server that works using the HTTP protocol
- **RPC** - HTTP as a Transport for RPC(Remote Procedure Call), RPC is a protocol that allows a program to request a service or function from another program located on a different computer or server without having to understand the underlying network details.

---

### Sending a request from the client to the server

- There are 5 important things that are required while sending a request from client to server.

![image.png](attachment:c10cd9e5-dd23-447a-89cb-7e27f56a661b:image.png)

- The whole URL contains 3 parts : the protocol (eg: http://, https://) , the Address aka URL (eg: google.com, chat.openai.com), the route (it leads to the specific task or location from that server eg: https://chat.openai.com/backend-conversation)
- When sending the request apart from the URL there are three more things : Headers (it carries the cookie or authentication data), Query Params aka Query parameters (it carries the actual data from the frontend in the form of JSON), Method (it mentions what kind of action is this GET, POST, DELETE etc)
- When an user is logged in to a website, a token is generated as the header and gets stored in browser as cookie and the every time when a request is made, this token is attached as the header

---

### Giving a response to the client from the server

- There are 3 important things that are required to send the data from the server to the client

![image.png](attachment:224fd30d-b1bc-43e2-aab3-81b5f6d5b2cb:image.png)

- The response header is the header data send by the server. (Most of the time it happens only at the time of authentication)
- The response body is the data sent by the server
- The status code tells the status of the response by using some codes such as 200, 400, 403, 404, 500 etc…
