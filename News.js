// 9544504a3c154b2b8a74c5ba0e616a3d

// console.log("Hello world"); 

let source = "bbc-news";
let apikey  = "9544504a3c154b2b8a74c5ba0e616a3d"

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        console.log(json);
    }
    else{
        console.log("some error occured")
    }
}
xhr.send()