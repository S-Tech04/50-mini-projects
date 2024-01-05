// let's select all required tags or elements
const mainVideo = document.querySelector('#main-Video');
const musicList = document.querySelector('.music-list');
const playlist = document.getElementById('playlist');
const AllLessons = document.querySelector('.AllLessons');

const ulTag = document.querySelector("ul");
AllLessons.innerHTML = `${allVideos.length} Lessons`

let musicIndex = 1;
window.addEventListener('load',()=>{
   loadMusic(musicIndex); //calling load music function once window load
   playingNow();
})
function playMusic(){
   mainVideo.play();
   playlist.classList.add('active')
}
function loadMusic(indexNumb){
   mainVideo.src = `media/${allVideos[indexNumb - 1].src}.mp4`;
}

let musicDurationTime = document.querySelector('.duration');

for(let i = 0; i < allVideos.length; i++){
   let liTag = `<li li-index="${i + 1}">
      <div class="row">
         <span>${i + 1}. ${allVideos[i].name}</span>
      </div>
      <video class="${allVideos[i].id}" src="media/${allVideos[i].src}.mp4"></video>
      <span id="${allVideos[i].id}" class="duration"></span>
   </li>`;
   playlist.insertAdjacentHTML('beforeend',liTag); 

   let liAudioDuration = ulTag.querySelector(`#${allVideos[i].id}`)
   let liAudioTag = ulTag.querySelector(`.${allVideos[i].id}`);
   

   liAudioTag.addEventListener("loadeddata", ()=>{
      // update song total duration
      let audioDuration = liAudioTag.duration;
      let totalMin = Math.floor(audioDuration / 60);
      let totalSec = Math.floor(audioDuration % 60);
      // if totalSec is less then 10 then add 0 at the beginging
      totalSec < 10 ? totalSec = "0"+ totalSec : totalSec
      liAudioDuration.innerText = `${totalMin}:${totalSec}`;
      // adding t duration attribe which we'll use below
      liAudioDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
   })  
}
// let's work on play particular song on click
const allLiTags = playlist.querySelectorAll('li');
function playingNow(){
   for(let j = 0; j<allVideos.length; j++){
      if(allLiTags[j].classList.contains('playing')){
         allLiTags[j].classList.remove("playing")
      }
      if(allLiTags[j].getAttribute('li-index')==musicIndex){
         allLiTags[j].classList.add('playing')
      }
      // adding onclick attribute in all li tags
      allLiTags[j].setAttribute("onclick", "clicked(this)")
   }
}


// // let's play song on li click
function clicked(element){
   // getting li index of particular clicked li tag
   let getIndex = element.getAttribute("li-index");
   musicIndex = getIndex;
   loadMusic(musicIndex);
   playMusic();
   playingNow();
}
