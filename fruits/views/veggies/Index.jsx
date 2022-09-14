const React = require('react');

const Index = (props) => {
  return (
    <div>
      <h1> Index Route</h1>

      <a href="/veggies/new">Create a New Vegetable!</a>

      <ul>
        {
          props.veggies.map((veggie, index) => {
            return (
              <li key={index}>
                The <a href={`/veggies/${veggie._id}`}>{veggie.name}</a> is {veggie.color}. {veggie.readyToEat ? " It's ready to eat!" : " It's not ready to eat!"}
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

module.exports = Index;

// only change is to modify line 13 to use the _id instead of the index!