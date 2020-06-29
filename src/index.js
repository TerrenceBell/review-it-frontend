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

