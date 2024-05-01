React is a library a small part of web page can be updated using react also

Q1 - What is Emmet?

Emmet is a web development tool that allows developers to write HTML and CSS code faster and more efficiently. It's essentially a set of plugins for various text editors and IDEs that enables users to write shorthand abbreviations, called "emmet abbreviations," and expand them into full HTML or CSS code snippets. This can greatly speed up the coding process by reducing the amount of typing required and providing shortcuts for commonly used code patterns. Emmet is widely used in the web development community and is available as a plugin for popular code editors like Visual Studio Code, Sublime Text, and Atom. for eg html:5 expands int boilerplate HTML code 

Q2 - Difference between a Library and Framework?

Library:

A library is a collection of reusable code modules or functions that can be directly called by your own code.
It provides specific functionalities that you can use in your program but doesn't dictate the overall structure or flow of your application.
You have more control over how you use a library, as you decide when and where to call its functions.
Examples of libraries include:
React (JavaScript library for building user interfaces)
Requests (Python library for making HTTP requests)
jQuery (JavaScript library for DOM manipulation)

Framework:

A framework, on the other hand, is a pre-built architecture that dictates the structure and flow of your application.
It provides a skeleton where you fill in the specific details of your application.
Frameworks typically offer a set of tools, libraries, and best practices to streamline the development process.
Your code essentially "plugs into" the framework, and the framework controls the overall execution of your application.
Examples of frameworks include:
Django (Python web framework for building web applications)
Angular (JavaScript framework for building web applications)
Spring (Java framework for building enterprise applications)

Q3 - What is CDN? Why do we use it?

A Content Delivery Network (CDN) is a network of distributed servers strategically located across various geographical locations. Its purpose is to deliver web content, such as images, videos, CSS files, JavaScript files, and other static assets, to users more efficiently and reliably.

Here's why we use CDNs:

Improved Performance: CDNs cache content on their servers located closer to the end-users. When a user requests a particular resource, the CDN serves it from the nearest server instead of the origin server where the content is hosted. This reduces latency and load times, resulting in faster content delivery and a better user experience.
Scalability: CDNs can handle large amounts of traffic and distribute it across multiple servers. This helps to prevent overloading the origin server, ensuring consistent performance even during traffic spikes or high-demand periods.
Redundancy and Reliability: CDNs replicate content across multiple servers in different locations, providing redundancy and failover protection. If one server goes down, requests can be automatically routed to another available server, minimizing downtime and ensuring content availability.
Bandwidth Savings: By offloading the delivery of static content to the CDN, you can reduce the bandwidth usage on your origin server. This can result in cost savings, especially if your hosting provider charges based on bandwidth usage.
Global Reach: CDNs have a global network of servers, allowing content to be delivered quickly to users worldwide. This is particularly beneficial for websites with a global audience, as it ensures consistent performance regardless of the user's location.
Overall, CDNs help to optimize website performance, enhance scalability and reliability, reduce server load, and improve the user experience by delivering content faster and more efficiently.

Q4 - Why is React known as React?

React is known as "React" because of its core concept of reactive, or responsive, user interfaces. The name "React" originates from how the library fundamentally works: by reacting to changes in data and efficiently updating the user interface.

When data changes in a React application, the user interface automatically re-renders to reflect those changes. React accomplishes this through a virtual DOM (Document Object Model), which is a lightweight representation of the actual DOM in memory. React compares the virtual DOM with the previous version and only applies the necessary updates to the actual DOM, minimizing performance overhead.

So, the name "React" emphasizes the library's approach of reacting to data changes and efficiently updating the UI, making it suitable for building highly interactive and responsive web applications.

Q5 - What is crossorigin in script tag?


The crossorigin attribute in the <script> tag is used to specify how the browser should handle requests for scripts that are loaded from a different origin (i.e., a different domain, protocol, or port) than the current document.

When you load a script from a different origin, the browser enforces the same-origin policy by default, which restricts the script's access to certain resources, such as cookies, local storage, and other elements of the DOM. This security measure helps prevent malicious scripts from accessing sensitive information on other websites.

The crossorigin attribute provides options for handling scripts loaded from different origins:

Anonymous: This is the default behavior if the crossorigin attribute is not specified. With the anonymous value, the browser loads the script without including any credentials (such as cookies or HTTP authentication). This means that the script is treated as coming from an "anonymous" origin, and it has limited access to resources on the page.
Use Credentials: If the script requires credentials to be included (such as cookies or HTTP authentication) when making requests to the server, you can specify crossorigin="use-credentials". This tells the browser to include credentials with the requests made by the script.

Q6 - What is diference between React and ReactDOM ?

React:

React is the core library for building user interfaces in React applications.
It provides the foundation for creating components, managing component state, handling events, and rendering UI elements.
React allows developers to create reusable UI components and compose them together to build complex user interfaces.
It implements a virtual DOM (Document Object Model) to efficiently update the actual DOM based on changes in application state.

ReactDOM:

ReactDOM is a package specifically designed for rendering React components into the DOM (Document Object Model).
It serves as the glue between React components and the browser's DOM, allowing React to interact with the actual HTML elements on the page.
ReactDOM provides methods for rendering React components, updating the DOM in response to changes in component state, and handling events.

Q7 - What is difference between react.development.js and react.production.js files via CDN?

react.development.js:

This file is intended for use during development. It includes additional development features and warnings aimed at aiding developers in debugging and identifying issues in their React applications.
The development version of React is typically larger in file size compared to the production version due to the inclusion of development tools and extra code for debugging purposes.
It may include helpful warning messages in the console, such as warnings about potential performance issues, prop type validation warnings, and other development-related messages.
While using react.development.js is beneficial during development for its debugging features, it's not suitable for production use due to its larger file size and the performance overhead of the included development tools.

react.production.js:

This file is optimized for production use. It omits development features and warnings, resulting in a smaller file size and improved performance.
The production version of React is stripped of development tools, debug messages, and other non-essential code to reduce its footprint and improve loading times.
It is recommended to use react.production.js in production environments to ensure better performance and a smaller bundle size for your React applications.
While the production version lacks the debugging features present in the development version, it is optimized for efficiency and is suitable for use in production deployments where performance is critical.


Q8 - What is async and defer?

async and defer are attributes that can be used with the <script> tag in HTML to control how scripts are loaded and executed in web pages.

async:

When you add the async attribute to a <script> tag, it tells the browser to download the script asynchronously while continuing to parse the HTML document.
The browser will fetch the script in the background without blocking the rendering of the page. Once the script is downloaded, it will be executed immediately, regardless of whether the HTML parsing is complete.
Using async is beneficial for scripts that don't depend on the DOM or other scripts and can be executed independently. It can help improve page load performance by allowing non-blocking loading and execution of scripts.
However, scripts loaded with async may not maintain their order of execution, so it's important to consider dependencies between scripts if they rely on each other.

example - <script src="script.js" async></script>

defer:

The defer attribute also tells the browser to download the script asynchronously, but it defers the execution of the script until after the HTML document has been fully parsed.
Scripts with the defer attribute will be executed in the order they appear in the document, just before the DOMContentLoaded event is fired.
Unlike scripts with the async attribute, scripts with defer maintain their order of execution, making it suitable for scripts that rely on DOM elements or other scripts loaded earlier in the document.
Using defer can improve page load performance by allowing scripts to be loaded asynchronously without blocking the rendering of the page and ensuring that they execute in the correct order.

example - <script src="script.js" defer></script>
