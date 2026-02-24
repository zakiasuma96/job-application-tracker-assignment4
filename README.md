1.	Differences between getElementById, getElementsByClassName
getElementById uses id and return single element. Id must be unique.
getElementsByClassName uses className, works on everything within the className.

Difference between querySelector and querySelectorAll
querySelector returns the 1st matched element.
querySelectorAll return all the matched elements.

2.	How to create and insert a new element into the DOM
const btn = document.createElement("button");
btn.textContent = "Insert";
document.body.appendChild(btn);

3.	What is Event Bubbling? How does it work?
Event bubbling works upwards. If we start the child element it will run it first then it will go to the parent. 

4.	What is Event Delegation? 
We add eventListener to the parent and it works for all the child elements and runs all.
Event bubbling handles this process.
Why is it useful?
We don’t need to add eventListener to all the item.
It gives perfect result even if any elements are added in the future. 

5.	Difference between preventDefault() and stopPropagation()
preventDefault() stops browsers default action.
stopPropagation() stops event bubbling. Stops event from going up and run it.



