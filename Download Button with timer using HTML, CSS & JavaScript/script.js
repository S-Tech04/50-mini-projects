const downloadBtns = document.querySelectorAll('.btn-container');
downloadBtns.forEach((btn)=>{
    const downloadBtn = btn.querySelector('.download-btn');
    const countdown = btn.querySelector('.countdown');
    const pleaseWait_text = btn.querySelector('.pleaseWait-text');
    const manualDownload_text = btn.querySelector('.manualDownload-text');
    const manualDownload_link = btn.querySelector('.manualDownload-link');
    const download_link = downloadBtn.getAttribute("data-href");
    let timeleft = 12;
    downloadBtn.addEventListener("click",()=>{
        downloadBtn.style.display="none";
        countdown.innerHTML = "Your download will start in <span>"+ timeleft +"</span> Seconds";
        let timeInterval = setInterval(()=>{
            timeleft -=1;
            countdown.innerHTML = "Your download will start in <span>"+ timeleft +"</span> Seconds";
            if (timeleft <= 0) {
                clearInterval(timeInterval);
                countdown.style.display = "none";
                pleaseWait_text.style.display = "block";
                // here i am using google drive file download link
                let url = "https://drive.google.com/uc?export=download&id=";
                let download_href = url + download_link; // enter download file link here
                window.open(download_href);
                manualDownload_link.href = download_href;
                setTimeout(() => {
                    countdown.style.display = "none";
                    pleaseWait_text.style.display = "none";
                    manualDownload_text.style.display = "block";
                }, 1000);
            }
        },1000)
    })
})