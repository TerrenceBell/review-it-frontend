fetch("http://localhost:3000/items")
.then(resp => resp.json())
.then(items => {
  items.forEach(item => {
    const { id, name, category, description} = item 
    new Item(id, name, category, description)
  });
})
// have form to create item... maybe
// have form to create review

console.log("testing...")

