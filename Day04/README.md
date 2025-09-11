# 📘  Working with JSON Data in React

I learned how to **work with JSON data in React** and display it dynamically using components.  
I practiced passing props, iterating over arrays with `.map()`, and rendering structured data inside a table.

---

## ✅ What I Built

- Created a **JSON array** (`students`) in `App.js` containing student details.  
- **StudentDetails** component → accepts the student array as props and displays it in a table.  
- **Student** component → renders each student record as a table row.  
- Used **`.map()`** to loop through the array and dynamically generate table rows.  

---

## 🔑 Key Concepts – Working with JSON Data in React

- JSON objects can be stored as **arrays** in React.  
- These arrays can be **passed as props** to child components.  
- Inside child components, we can use **`.map()`** to iterate over the array and display data dynamically.  

---

## 🛠️ Example Code

### App.js
```jsx
import React from "react";
import StudentDetails from "./Components/StudentDetails";

function App() {
  const students = [
    { id: 1, name: "Alice", course: "IT" },
    { id: 2, name: "Bob", course: "CS" },
    { id: 3, name: "Charlie", course: "SE" },
  ];

  return (
    <div>
      <h2>Student Records</h2>
      <StudentDetails studata={students} />
    </div>
  );
}

export default App;

