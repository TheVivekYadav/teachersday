function circle(){
    let amount = 100
    let i = 0
    let body = document.querySelector('body');
    while (i < amount){
        let element = document.createElement('i');
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 10;

        let size = Math.random() * 50;
        element.style.width = size + 10 + 'px';
        element.style.height = size + 10 + 'px';
        element.style.left = posX + 'px';
        element.style.animationDelay = delay + 's';
        element.style.animationDuration =2 + duration + 's';

        body.appendChild(element);
        i++
    }
}
circle()
