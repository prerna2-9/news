
function sports(){
   
    $.ajax({
        type:'GET',
        url:'https://newsapi.org/v2/top-headlines?country=in&apiKey=fabb056ff8594a2c9cd1ea680aa83aa7',
        success: function(data){
            console.log(data)
            let text = 'Read More';
           
            let component = data.articles.map(news=>{
                return(
                   `
                   <div class="card my-3">
            
                        <div class="card-body">
                            <h5 class="card-title text-primary">
                                ${news.title}
                            </h5>
                            
                            <p class="card-text mt-3">
                                ${news.description}
                            </p>
                            <small class="card-subtitle mb-2 ">
                                Source:&nbsp;&nbsp;  ${news.source.name}
                            </small>
                            <br>
                            <small class="card-subtitle mb-2 ">
                                Published at:&nbsp;&nbsp;  ${news.publishedAt.substr(0,10)}
                             </small>
                            <br>
                            
                           <button class="mt-2 btn btn-mat text-white">
                                ${text.link(`${news.url}`)}
                           </button>
                        </div>
                    </div>

                   `
                )
            })

            document.getElementById('news').innerHTML=component
        }
    })
}



function tech(){
   
    $.ajax({
        type:'GET',
        url:'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fabb056ff8594a2c9cd1ea680aa83aa7',
        success: function(data){
            console.log(data)
            let text = 'Read More';
           
            let component = data.articles.map(news=>{
                return(
                   `
                   <div class="card my-3">
            
                        <div class="card-body">
                            <h5 class="card-title text-primary">
                                ${news.title}
                            </h5>
                            
                            <p class="card-text mt-3">
                                ${news.description}
                            </p>
                            <small class="card-subtitle mb-2 text-muted">
                                Source:&nbsp;&nbsp;  ${news.source.name}
                            </small>
                            <br>
                            <small class="card-subtitle mb-2 text-muted">
                                Published at:&nbsp;&nbsp;  ${news.publishedAt.substr(0,10)}
                             </small>
                            <br>
                            
                           <button class="mt-2 btn btn-mat text-white">
                                ${text.link(`${news.url}`)}
                           </button>
                        </div>
                    </div>

                   `
                )
            })

            document.getElementById('news').innerHTML=component
        }
    })
}

function health(){
   
    $.ajax({
        type:'GET',
        url:'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=fabb056ff8594a2c9cd1ea680aa83aa7',
        success: function(data){
            console.log(data)
            let text = 'Read More';
           
            let component = data.articles.map(news=>{
                return(
                   `
                   <div class="card my-3">
            
                        <div class="card-body">
                            <h5 class="card-title text-primary">
                                ${news.title}
                            </h5>
                            
                            <p class="card-text mt-3">
                                ${news.description}
                            </p>
                            <small class="card-subtitle mb-2 text-muted">
                                Source:&nbsp;&nbsp;  ${news.source.name}
                            </small>
                            <br>
                            <small class="card-subtitle mb-2 text-muted">
                                Published at:&nbsp;&nbsp;  ${news.publishedAt.substr(0,10)}
                             </small>
                            <br>
                            
                           <button class="mt-2 btn btn-mat text-white">
                                ${text.link(`${news.url}`)}
                           </button>
                        </div>
                    </div>

                   `
                )
            })

            document.getElementById('news').innerHTML=component
        }
    })
}




function science(){
   
    $.ajax({
        type:'GET',
        url:'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=fabb056ff8594a2c9cd1ea680aa83aa7',
        success: function(data){
            console.log(data)
            let text = 'Read More';
           
            let component = data.articles.map(news=>{
                return(
                   `
                   <div class="card my-3">
            
                        <div class="card-body">
                            <h5 class="card-title text-primary">
                                ${news.title}
                            </h5>
                            
                            <p class="card-text mt-3">
                                ${news.description}
                            </p>
                            <small class="card-subtitle mb-2 text-muted">
                                Source:&nbsp;&nbsp;  ${news.source.name}
                            </small>
                            <br>
                            <small class="card-subtitle mb-2 text-muted">
                                Published at:&nbsp;&nbsp;  ${news.publishedAt.substr(0,10)}
                             </small>
                            <br>
                            
                           <button class="mt-2 btn btn-mat text-white">
                                ${text.link(`${news.url}`)}
                           </button>
                        </div>
                    </div>

                   `
                )
            })

            document.getElementById('news').innerHTML=component
        }
    })
}


function anything(){

    let data = document.querySelector('input').value;
   
    $.ajax({
        type:'GET',
        url:`https://newsapi.org/v2/everything?q=${data}&from=2019-10-20&language=en&sortBy=publishedAt&apiKey=fabb056ff8594a2c9cd1ea680aa83aa7`,
        success: function(data){
            console.log(data)
            let text = 'Read More';
           
            let component = data.articles.map(news=>{
                return(
                   `
                   <div class="card my-3">
            
                        <div class="card-body">
                            <h5 class="card-title text-primary">
                                ${news.title}
                            </h5>
                            
                            <p class="card-text mt-3">
                                ${news.description}
                            </p>
                            <small class="card-subtitle mb-2 text-muted">
                                Source:&nbsp;&nbsp;  ${news.source.name}
                            </small>
                            <br>
                            <small class="card-subtitle mb-2 text-muted">
                                Published at:&nbsp;&nbsp;  ${news.publishedAt.substr(0,10)}
                             </small>
                            <br>
                            
                           <button class="mt-2 btn btn-mat text-white">
                                ${text.link(`${news.url}`)}
                           </button>
                        </div>
                    </div>

                   `
                )
            })

            document.getElementById('news').innerHTML=component
        }
    })
}


