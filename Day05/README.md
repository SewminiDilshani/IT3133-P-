# ⚛️ React `useState` Hook

## 📌 What is `useState`?
`useState` is a **React Hook** that allows you to add state to functional components.  
State helps components **store and update values dynamically** without refreshing the page.

---

## 🔹 Syntax
```jsx
import { useState } from "react";

const [state, setState] = useState(initialValue);
state → current value of the state variable

setState → function to update the state

initialValue → starting value (number, string, boolean, object, array, etc.)

🔹 Example
jsx
Copy code
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
