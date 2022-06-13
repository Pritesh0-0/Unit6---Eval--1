import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
    alert('You have submitted the form.')
  }
 
  return (
    <div className="wrapper">
      <h1>Please Fill the Form to Proceed</h1>
      <form>
      <fieldset>
         <label>
           <p>Title</p>
           <input title="title" />
         </label>
         <label>
           <p>Gender</p>
           <input gender="gender" />
         </label>
         <label>
           <p>Price</p>
           <input price="price" />
         </label>
         <label>
           <p>Category</p>
           <input category="category" />
         </label>
         

       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;