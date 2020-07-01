const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/items`)
.then(resp => resp.json())
.then(items => {
  items.forEach(item => {
    
    const { id, name, category, description, image} = item 
    
    new Item(id, name, category, description, image)
  });
})
// have form to create item... maybe
// have form to create review

console.log("testing...")


//form should open when review button is clicked!
// or maybe it goes to a show page idk bruv

formHTML(){
  return `
  <h3>Add a Review!</h3>
  <form id="review-form">
  <input type="text" name="title" placeholder="title"><br />
  <input type="text" name="rating" placeholder="ratio out of 10"><br />
  <input type="textarea" name="content" placeholder="review goes here!"><br />



  `
}

