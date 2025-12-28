
const box1 = document.querySelector('.Box1');
const box2 = document.querySelector('.Box2');
const box3 = document.querySelector('.Box3');
const box4 = document.querySelector('.Box4');
const boxes = document.querySelectorAll('.Box1, .Box2, .Box3, .Box4');

//hover effect
box1.addEventListener('mouseover', function() {
    box1.style.backgroundColor = 'red';
    box1.style.transition="all 1s";
    box1.style.cursor = 'crosshair';
    box1.style.border="thick solid black";
    
});
box2.addEventListener('mouseover', function() {
    box2.style.backgroundColor = 'green';
    box2.style.transition="all 1s";
    box2.style.cursor = 'pointer';
    box2.style.border="thick solid black";
    
});
box3.addEventListener('mouseover', function() {
    box3.style.backgroundColor = 'blue';
    box3.style.transition="all 1s";
    box3.style.cursor = 'grab';
    box3.style.border="thick solid black";
});
box4.addEventListener('mouseover', function() {
    box4.style.backgroundColor = 'yellow';
    box4.style.transition="all 1s";
    box4.style.cursor = 'move';
    box4.style.border="thick solid black";
});

//leave effect

boxes.forEach(box => {
    box.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'white';
        this.style.transition="all 1s";
        this.style.border="thick solid white";

    });
});