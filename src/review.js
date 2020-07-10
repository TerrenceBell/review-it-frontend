


fetch('http://localhost:3000/reviews')
.then(resp => resp.json())
.then(reviews => {
  reviews.forEach(review => {
    
    const { id, title, rating, content} = review
    
    new Review(id, title, rating, content)
  });
})
class Review {

    constructor(id, title, rating, content){
        this.id = id
        this.title = title
        this.rating = rating
        this.content = content
        this.renderReview()
    }

    static submitReview(e){ 
        
        e.preventDefault()
        
        const itemId = parseInt(e.target.parentElement.parentElement.parentElement.parentElement.id)
        //let this.id === itemId
        let reviewData = {'title': e.target.parentElement.title.value,
                    'content': e.target.parentElement.content.value,
                    'rating': e.target.parentElement.rating.value,
                    'item_id': itemId
                    }   
                    fetch('http://localhost:3000/reviews', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(reviewData)
                    })
                    .then(resp => resp.json())
                    .then(review => { 
                        const { id, title, rating, content} = review
                        new Review(id, title, rating, content)
                        // this.renderReview()
                        // debugger
                        // document.getElementById('review-form').reset()
                    }) 
    }

   

    //add review button to each item
    //on click of form, trigger patch request
    //send fetch post request to review
    // set obj id to 


    static reviewHTML(){
        return `
       
        <div id="review-form">
          <form class="form-container">
            <h1>Create A Review</h1>
        
            <label for="title"><b>Title</b></label>
            <input type="text" name="title" placeholder="Enter Title"  required><br />

            <label for="rating"><b>Rating</b></label>
            <input type="text" name="rating" placeholder="Enter Rating Out Of 10"  required>
        
            <br /><label for="content"><b>Review</b></label>
            <input type="text" placeholder="Enter Review Here" name="content" required>
        
            <button type="submit" class="btn reviewSubmit">Submit Review</button>
            <button type="button" class="btn cancel closeForm()">Close</button>
          </form>
        </div>
         `
    }

    // openForm() {
    //     document.getElementById("review-form").style.display = "block";
    //   }
      
    //    closeForm() {
    //     document.getElementById("review-form").style.display = "none";
    //   }


    static reviewForm(e){
        
        const reviewDiv = e.target.parentElement

        
        const newReview = document.createElement('div')
        newReview.classList.add('review')
        newReview.id = this.id 
        newReview.innerHTML += this.reviewHTML()
        reviewDiv.appendChild(newReview)
        reviewDiv.addEventListener('click', e => {
            if (e.target.className.includes('reviewSubmit')) this.submitReview(e)
        })
    }
    
    
         

        itemReviewHTML(){
            return `
            
            <h3>${this.title}</h3>
              <p>rating: ${this.rating}</P
              <p>${this.content}</p>
              <button class="delete" data-id"${this.id}> Delete?</button>
            `
        }

        // delete review?
deleteReview(e){
    const id = parseInt(e.target.parentElement.id)
    fetch(`${BACKEND_URL}/reviews/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        debugger
        document.getElementsByClassName('item-review').removeChild(document.getElementById(id))
    })
}

        renderReview(){
            const itemList = document.getElementById('item-list')
            const innerItem = document.createElement('div')
            innerItem.classList.add('item-review')
            innerItem.id = Item.id 
            innerItem.innerHTML += this.itemReviewHTML()
            itemList.appendChild(innerItem)
            innerItem.addEventListener('click', e => {
                if (e.target.className.includes('delete')) this.deleteReview(e)
                //if(e.target.className.includes('review')) Review.reviewForm(e)

            })
        }
        
    }

    // delete items?
