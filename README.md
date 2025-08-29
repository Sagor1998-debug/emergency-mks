### 6. Answer of the following questions :

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

answer: 
getElementById() :	It selects a single element by its unique id         attribute.
getElementsByClassName() :	It selects all elements that have a specific class name.
querySelector()	: It selects the first element that matches a specified CSS selector.
querySelectorAll() : It selects all elements that match a specified CSS selector.



2. How do you **create and insert a new element into the DOM**?

answer: 

const newElement = document.createElement('Element');
newDiv.textContent = 'This is a new element.';

const parent = document.parent;


parent.appendChild(newElement);

3. What is **Event Bubbling** and how does it work?

answer: 
Definition: Event bubbling is when an event that occurs on a specific element, like a click, also triggers the same event on its parent elements, all the way up to the top of the document.

It works (When we click on an element, the browser first processes the event on that element itself. It then checks if the element's direct parent has a listener for that same event. If it does, the event is triggered on the parent. This process repeats, "bubbling" the event up the DOM tree from the initial target element to the <body>, <html>, and finally the document object.)

4. What is **Event Delegation** in JavaScript? Why is it useful?

answer: 
Event delegation is a technique where we add a single event listener to a common parent element instead of adding a listener to each individual child element. This single listener then handles events for all of its children.

It is useful for two main reasons:

Performance: It reduces the number of event listeners, which saves memory and improves a webpage's performance.

Dynamic Elements: It automatically works for new elements that are added to the page later because the listener is already on the parent, so it doesn't need to be re-added to each new element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

answer:
event.preventDefault()	Stops the default action of a browser event, such as a link navigating to a new page or a form submitting. It does not stop the event from bubbling up to parent elements. 
Where,
 event.stopPropagation()	Stops the event from bubbling up to parent elements. It does not stop the default browser action.
