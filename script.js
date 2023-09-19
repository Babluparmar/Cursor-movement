const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");

main.addEventListener("mousemove",function(point){
    cursor.style.left = point.x+"px";
    cursor.style.top = point.y+"px";
})