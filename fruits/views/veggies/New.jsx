const React = require('react');

const New = (props) => {
  return(
    <div>
      <h1> New Route </h1>

      <form action="/veggies" method="POST">
        <label>Name:</label>
        <input type="text" name="name" /><br/>
        <label>Color:</label>
        <input type="text" name="color" /><br/>
        <label>Is Ready to Eat:</label>
        <input type="checkbox" name="readyToEat" /><br/>
        <input type="submit" name="" value="Create Vegetable!" />
      </form>
    </div>
  )
}

module.exports = New;

// Add a form (like in the fruits new page) to collect the data you need to make a new veggie