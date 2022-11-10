import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold mt-8'>Blogs</h1>
            <div className='m-20 shadow-xl p-16 rounded-lg bg-zinc-200'>
                <h1 className='text-4xl font-semibold mb-9'>Difference between SQL and NoSQL?</h1>
                <p>SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
            </div>
            <div className='m-20 shadow-xl p-16 rounded-lg bg-zinc-200'>
                <h1 className='text-4xl font-semibold mb-9'>What is JWT, and how does it work?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                    <br />
                    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.

                </p>
            </div>
            <div className='m-20 shadow-xl p-16 rounded-lg bg-zinc-200'>
                <h1 className='text-4xl font-semibold mb-9'>What is the difference between javascript and NodeJS?</h1>
                <p>
                    JAVASCRIPT: <br />
                    Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers.It is basically used on the client-side.	Javascript is capable enough to add HTML and play with the DOM.
                    Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Javascript is used in frontend development. <br />
                    NODEJS: <br />
                    NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript.Nodejs is used in server-side development.
                </p>
            </div>
            <div className='m-20 shadow-xl p-16 rounded-lg bg-zinc-200'>
                <h1 className='text-4xl font-semibold mb-9'>How does NodeJS handle multiple requests at the same time?</h1>
                <p>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                    NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                    If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
            </div>
        </div>
    );
};

export default Blogs;