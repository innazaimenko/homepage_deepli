var btn = document.querySelector('.modal-btn');
var popupLoad = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

window.addEventListener('load', function () {
    popupLoad.classList.add('popup-active');
});

modalClose.addEventListener('click', function (){
    popupLoad.classList.remove('popup-active');
});


window.addEventListener('load', ()=> {
   
    let Title1 = document.querySelector('.title1');
    let source_name1 = document.querySelector('.source_name1')

    let Title2 = document.querySelector('.title2');
    let source_name2 = document.querySelector('.source_name2')

    let Title3 = document.querySelector('.title3');
    let source_name3 = document.querySelector('.source_name3')

    let Title4 = document.querySelector('.title4');
    let source_name4 = document.querySelector('.source_name4')

    let Title5 = document.querySelector('.title5');
    let source_name5 = document.querySelector('.source_name5')


    const api = `https://newsapi.org/v2/everything?q=genetics&apiKey=3cbefa828c6642799a9cabac9c49cd0f`

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

        const { title } = data.articles[0];
        const { source:name } = data.articles[0];
            console.log({ source:{id:{name:name}} });
        const source1 = JSON.stringify(name.name);
        const sourceClean1 = source1.replace(/"/g, "");    
        Title1.textContent = title;
        source_name1.textContent = sourceClean1;
        })

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        const { title } = data.articles[1];
        const { source:name } = data.articles[1];
        const source2 = JSON.stringify(name.name);
        const sourceClean2 = source2.replace(/"/g, "");    
        Title2.textContent = title;
        source_name2.textContent = sourceClean2;
        })

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);   
        const { title } = data.articles[2];
        const { source:name } = data.articles[2];
        const source3 = JSON.stringify(name.name);
        const sourceClean3 = source3.replace(/"/g, "");    
        Title3.textContent = title;
        source_name3.textContent = sourceClean3;
        })  

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);   
        const { title } = data.articles[3];
        const { source:name } = data.articles[3];
        const source4 = JSON.stringify(name.name);
        const sourceClean4 = source4.replace(/"/g, "");    
        Title4.textContent = title;
        source_name4.textContent = sourceClean4;
        })  

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);   
        const { title } = data.articles[4];
        const { source:name } = data.articles[4];
        const source5 = JSON.stringify(name.name);
        const sourceClean5 = source5.replace(/"/g, "");    
        Title5.textContent = title;
        source_name5.textContent = sourceClean5;
        })  


}); 
