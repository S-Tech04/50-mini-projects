// Selecting all required elements
const wrapper = document.querySelector(".noInternet");
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');
const subTitle = document.querySelector('.subTitle');

btn.addEventListener('click',function (){
  window.location.reload()
})
window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = ()=>{
            if(xhr.status !== 200 && xhr.status < 300){
              offline();
            }else{
              online();
            }
        }
        xhr.onerror = ()=>{
          offline();
        }
        xhr.send();
        function offline(){
          wrapper.classList.add('offline');
          title.innerHTML = "Connect to the internet";
          subTitle.innerHTML = "You're offline. Check your connection.";
        }
        function online(){
          title.innerHTML = "You're online now";
          subTitle.innerHTML = "Hurray! Internet is connected.";
          setTimeout(()=>{
            wrapper.classList.remove('offline');
          }, 3000)
        }
    }

    setInterval(()=>{
      ajax();
    }, 100);
}
