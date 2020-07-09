
class Review {

    constructor(id, title, rating, content){
        this.id = id
        this.title = title
        this.rating = rating
        this.content = content
        this.renderReview()
    }

    static submitReview(e){ 
        debugger
        const itemId = parseInt(e.target.parentElement.parentElement.parentElement.parentElement.id)
        let data = {'title': e.target.title.value,
                    'content': e.target.content.value 
                    }   
    }

    // fetch('http://localhost:3000/items', {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    //     body: JSON.stringify(data)
    // })
    // .then(resp => resp.json())
    // .then

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
            <input type="text" placeholder="Enter Title" name="title" required>
        
            <br /><label for="content"><b>Review</b></label>
            <input type="textarea" placeholder="Enter Review Here" name="content" required>
        
            <button type="submit" class="btn reviewSubmit">Submit Review</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
          </form>
        </div>
         `
    }


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
    
    
         openForm() {
          document.getElementById("review-form").style.display = "block";
        }
        
         closeForm() {
          document.getElementById("review-form").style.display = "none";
        }
        
    }