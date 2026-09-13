1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   --- querySelectorAll return a node obj like array of all the matches to the specific css in the parenthesis.
   --- querySelector return a single element of first match to that specific css query we put in the parenthesis.
   --- getElementById - is faster, return unique single html element of that specific id we query about.
   --- getElementByClass gives html list (array like obj) that has the similar class name.

2. How do you create and insert a new element into the DOM?

--- const newDiv = document.createElement("div");

--- const targetContainer = document.getElementById("container")
--- targetContainer.appendChild(newDiv)

3. What is Event Bubbling? And how does it work?

--- Event bubbling is the default order of event propagation where an event hits the target and it goes from bottom to top root.

4. What is Event Delegation in JavaScript? Why is it useful?
   --- Event delegation is when we put the event handler in the whole container instead of the single child element. we can work with all the targetted child element with just one event handler and dynamic child element also get that event handler function on the fly.

5. What is the difference between preventDefault() and stopPropagation() methods?
   any event with "preventDefault()" method stops the browsers default behaviour.

and stopPropagation() - it stops bubbling the action from child target element to root and stops it with the targetted child immediately.
