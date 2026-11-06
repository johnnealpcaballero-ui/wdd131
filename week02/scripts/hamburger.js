const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classlist.toggle("show");
	hamButton.classList.toggle("open");
});