window.addEventListener('load', function () {
 
    const lunch = this.document.getElementById('lunch');
    const reload = this.document.getElementById('reload');
    const stop = this.document.getElementById('stop');
    const svg = this.document.querySelector('svg');
    const counterdiv = this.document.getElementById('downnumber');
    const fire = this.document.getElementsByClassName('fire');
    const circle = this.document.querySelector('circle');

    let counterDown = 10;
    reload.addEventListener("click",()=>{
        this.location.reload();
    })
    lunch.addEventListener("click",()=>{
        
        lunch.style.display="none";
        stop.style.display="block";
        const timer = setInterval(function(){
            stop.addEventListener("click",()=>{
                svg.classList.remove("path");
                circle.classList.remove("rockbtn");
                lunch.style.display="block";
                stop.style.display="none";
                counterDown = 10;
                clearInterval(timer);
                counterdiv.innerHTML = '';
               // flightstop(status); 
            });
            if(counterDown > 0){
                svg.classList.add("path");
                circle.classList.add("rockbtn");
                
                counterdiv.innerHTML = counterDown;
               counterDown = counterDown - 1;
            }else{
                svg.classList.remove("path");
                circle.classList.remove("rockbtn");
                stop.style.display="none";
                reload.style.display="block";
                counterdiv.innerHTML = 'Boom!';
                clearInterval(timer);
                flight();
            }
        }, 800);  
    })
    
    function flight(status){

        svg.classList.add("move");
        //fire.classList.add("move");
    }
});