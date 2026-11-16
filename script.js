const navigation = document.querySelector(".nevigation");

const menu = document.querySelector(".menu");

console.log(navigation);

menu.addEventListener("click", (e) => {

    e.preventDefault();

    navigation.classList.toggle("active");

});