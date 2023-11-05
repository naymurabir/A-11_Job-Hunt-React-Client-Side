
const Blogs = () => {
    return (
        <div className="dark:text-gray-100 my-5 lg:my-10">
            <div className="container px-2 md:px-5 lg:px-10 py-2 md:py-3 lg:py-6 mx-auto rounded-lg shadow-sm bg-[#ee4624]">

                <div className="mt-3">

                    <h2 className="text-2xl font-bold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

                    <h3 className="mt-2 text-2xl mb-2">Access token: </h3>
                    <p> Access token is a digital pass that is used for securely transferring information between parties. It contains a payload with data and a signature to make sure it has not been tampered with. This token is often used for user authentication and authorization. When we present a JWT access token, a system can trust that we have the right to access certain resources or perform certain actions, like logging into an app or accessing your account. It is a secure way to verify our identity and permissions. </p>

                    <h3 className="mt-2 text-2xl mb-2">Refresh token: </h3>
                    <p> When our access token expires, we can use the refresh token to obtain a new access token without having to enter our username and password again. It is a way to maintain our access to a service or application without needing to re-authenticate frequently. Refresh tokens are usually kept secure, and they play a crucial role in ensuring that we can use a service continuously without compromising security.</p>


                    <h3 className="mt-2 text-2xl mb-2">How they works and where should be stored: </h3>
                    <p> When we authenticate with a service, we typically receive both an access token and a refresh token. The access token is short-lived and grants we access to resources or actions for a limited time. The refresh token is longer-lived and can be used to request a new access token without having to enter our credentials again. When our access token expires, we send the refresh token to the authorization server. The authorization server validates the refresh token and, if valid, issues a new access token, extending our access.</p>

                    <p> The best place to store those is  HTTP-only cookies. One of the most common and secure methods is to store refresh tokens in secure HTTP-only cookies. This prevents JavaScript from accessing the token, making it more resistant to cross-site scripting XSS attacks. </p>
                </div>
            </div>

            <div className="container px-2 md:px-5 lg:px-10 py-2 md:py-3 lg:py-6 mx-auto rounded-lg shadow-sm bg-[#ee4624] mt-5 lg:mt-10">

                <div className="mt-3">

                    <h2 className="text-2xl font-bold">2. (a). What is express js?</h2>

                    <h3 className="mt-2 text-2xl mb-2">Express JS: </h3>
                    <p> Express.js is a framework that simplifies building web applications in Node.js. It helps us handle HTTP requests, create routes, and perform various tasks like rendering web pages, processing data, and more. It is lightweight and flexible, making it a popular choice for web development.</p>

                    <h4 className="mt-2 text-xl mb-2">Explain of code: </h4>
                    <p>npm install express</p>
                    <small>This is used to install the express JS</small>

                    <h4 className="mt-2 text-xl mb-2">Import Express: </h4>
                    <small> importing the Express.js library in our Node.js project using require(express).</small>
                    <h4 className="mt-2 text-xl mb-2">Create an Express Application: </h4>
                    <small> Create an instance of the Express application using const app = express();.</small>
                    <h4 className="mt-2 text-xl mb-2">Define Routes: </h4>
                    <small> Define routes to handle different HTTP requests like GET, POST, PUT, DELETE. We can specify the URL path and a callback function that gets executed when that route is accessed.</small>
                    <h4 className="mt-2 text-xl mb-2">Middleware:</h4>
                    <small>We can use middleware functions to process requests and responses before they reach the route handler. Middleware functions can perform tasks like authentication.</small>
                    <h4 className="mt-2 text-xl mb-2">Start the Server:</h4>
                    <small>Use app.listen(...) to start the Express server and specify the port where our application will listen for incoming requests.</small>

                </div>
            </div>

            <div className="container px-2 md:px-5 lg:px-10 py-2 md:py-3 lg:py-6 mx-auto rounded-lg shadow-sm bg-[#ee4624] mt-5 lg:mt-10">

                <div className="mt-3">

                    <h2 className="text-2xl font-bold">2. (b). What is Nest JS?</h2>

                    <h3 className="mt-2 text-2xl mb-2">Nest JS: </h3>
                    <p> Nest.js is a framework that promotes the use of TypeScript and follows a modular architecture. It provides decorators and tools for creating controllers, services, and modules to structure your application. It is particularly well-suited for building APIs and microservices.</p>

                    <h4 className="mt-2 text-xl mb-2">Explain of code: </h4>

                    <h4 className="mt-2 text-xl mb-2">Application Entry Point: </h4>
                    <small> The entry point file sets up and bootstraps the Nest.js application.It often imports the root module and starts the server.</small>
                    <h4 className="mt-2 text-xl mb-2">Modules:</h4>
                    <small> Modules encapsulate different parts of your application, such as features or components.</small>
                    <h4 className="mt-2 text-xl mb-2">Controllers: </h4>
                    <small> Controllers define routes and handle HTTP requests. They are responsible for processing incoming requests and returning responses.</small>
                    <h4 className="mt-2 text-xl mb-2">Services:</h4>
                    <small>Services contain the applications business logic and are used by controllers to perform various tasks.</small>
                    <h4 className="mt-2 text-xl mb-2">Middleware:</h4>
                    <small>Middleware functions process requests and responses globally or on a per-route basis.</small>

                </div>
            </div>

        </div>
    );
};

export default Blogs;