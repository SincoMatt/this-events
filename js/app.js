//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName('navi');
// console.log(naveElem)
for(var i= 0; i<navElem.length; i++){
    navElem[i].addEventListener('click', showMenu);
}

function showMenu(){
    var childElem = this.querySelectorAll('.inner')[0];
    if(childElem.style.display === 'block'){
        childElem.style.display = 'none';
    }else{
        childElem.style.display = 'block';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var showMenu = document.getElementsByClassName('name');

for(var i= 0; i<showMenu.length; i++){
    showMenu[i].addEventListener('click', secretMenu);
}

function secretMenu(){
    var pElem = this.querySelectorAll('.menu')[0];
    if(pElem.style.display === 'block'){
        pElem.style.display = 'none';
    }else{
        pElem.style.display = 'block';
    }
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var showThumb = document.getElementsByClassName('thumb');

for(var i= 0; i<showThumb.length; i++){
    showThumb[i].addEventListener('click', thumbsDown);
// event made
    var counter = document.createElement('div');
    counter.className = 'dislikes';
    showThumb[i].appendChild(counter);
    // counter linked to event listener
}

function thumbsDown(){
    var dislikeCount = this.querySelectorAll('.dislikes')[0];
    dislikeCount.innerHTML++;

}

// var thumbsDown = document.getElementsByClassName('thumb');

// for(var i= 0; i<thumbsDown.length; i++){
//     thumbsDown[i].addEventListener('click', dislikesCounter);
//     var counter = document.createElement('div');
//     counter.className = 'hate';
//     thumbsDown[i].appendChild(counter);
// }

// function dislikeCounter(){
//     var hateCount = this.querySelectorAll('.hate')[0];
//     hateCount.innerHTML++;
// }