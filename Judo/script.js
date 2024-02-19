const menu = document.querySelector(".navbar_links");
const menuButton = document.querySelector(".navbar_icons");
const overlay = document.querySelector("#overlay");

// làm cho nút button nghe được động tác Click của User
// tạo class mới để qua Css lại để hiển thị lên màn hình
//toggle: chuyển đổi, classList: tạo class
menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("navbar_open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener('click', ()=>{
    menu.classList.toggle("navbar_open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});



// ==== SLIDER ===== 
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
    console.log("ok");
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
    console.log("ok");
}
// let refreshInterval = setInterval(()=> {next.click()}, 1000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 10000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

var startX;
var endX;

slider.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', function(e) {
    endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', function(e) {
    var threshold = 50; // Ngưỡng để xác định người dùng đã kéo đủ xa hay chưa
    var deltaX = endX - startX;
    
    if (deltaX > threshold) {
        // Kéo sang phải
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
        console.log("Kéo sang phải");
    } else if (deltaX < -threshold) {
        // Kéo sang trái
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
        console.log("Kéo sang trái");
    }
});


// ====
let slider1 = document.querySelector('.slider1 .list1');
let items1 = document.querySelectorAll('.slider1 .list1 .item1');
let next1 = document.getElementById('next1');
let prev1 = document.getElementById('prev1');
let dots1 = document.querySelectorAll('.slider1 .dots1 li');

let lengthItems1 = items1.length - 1;
let active1 = 0;
next1.onclick = function(){
    active1 = active1 + 1 <= lengthItems1 ? active1 + 1 : 0;
    reloadSlider1();
    console.log("ok");
}
prev1.onclick = function(){
    active1 = active1 - 1 >= 0 ? active1 - 1 : lengthItems1;
    reloadSlider1();
    console.log("ok");
}
// let refreshInterval1 = setInterval(()=> {next1.click()}, 1000);
function reloadSlider1(){
    slider1.style.left = -items1[active1].offsetLeft + 'px';
    // 
    let last_active_dot1 = document.querySelector('.slider1 .dots1 li.active');
    last_active_dot1.classList.remove('active1');
    dots1[active1].classList.add('active1');

    clearInterval(refreshInterval1);
    refreshInterval1 = setInterval(()=> {next1.click()}, 10000);

    
}

dots1.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active1 = key;
         reloadSlider1();
    })
})
window.onresize = function(event) {
    reloadSlider1();
};

var startX1;
var endX1;
slider1.addEventListener('touchstart', function(e) {
    startX1 = e.touches[0].clientX;
});

slider1.addEventListener('touchmove', function(e) {
    endX1 = e.touches[0].clientX;
});

slider1.addEventListener('touchend', function(e) {
    var threshold1 = 50; // Ngưỡng để xác định người dùng đã kéo đủ xa hay chưa
    var deltaX1 = endX1 - startX1;
    
    if (deltaX1 > threshold1) {
        // Kéo sang phải
        active1 = active1 - 1 >= 0 ? active1 - 1 : lengthItems1;
        reloadSlider1();
        console.log("Kéo sang phải");
    } else if (deltaX1 < -threshold1) {
        // Kéo sang trái
        active1 = active1 + 1 <= lengthItems1 ? active1 + 1 : 0;
        reloadSlider1();
        console.log("Kéo sang trái");
    }
});