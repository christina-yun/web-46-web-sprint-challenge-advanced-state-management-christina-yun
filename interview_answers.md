# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

A: Context API solves both the problems of prop drilling through many layers by creating context and also the problem of doing a big setup when it comes to using redux. It's fast and lightweight.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: Answers below:
Actions: The source of information that the store takes. They are the functions that activate the reducers by case and give those reducers payload information(when utilized) in order to tell the reducers to do something.

Reducers: The functions that intake actions and then change state based on the action taken. They are directly tied to actions in that they only execute actions that exist or return state by default.

Store: A state container that is the holder of the application's single state. It is an immutable source of information that is tied to the reducer and to some degree, it's used like a "display" of state to all the components that have access to its information.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

A: Redux-thunk allows us to call action creators and return a function which takes dispatch as an argument and then used to dispatch synchronous actions after the API or side effects have finished up. Basically it allows us to run functions asynchronousely.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

A: My favorite state managment system so far has just been using plain redux at this point. I really like that it gives me extremely precise control over which props and actions to pass and once I understood the order, it was extremely easy to follow. While I like how simple context API is and it COULD become my favorite, I'd like to work more with it to see what it can do and what its limitations are. Mostly I like that redux by itself makes it easy to look at code and know what it's doing no matter if you built it or someone else built it.