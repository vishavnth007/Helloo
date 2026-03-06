let currentPage = 1;
const totalPages = 3;

function nextPage() {
  if (currentPage < totalPages) {
    document.getElementById("page" + currentPage).classList.remove("active");
    currentPage++;
    document.getElementById("page" + currentPage).classList.add("active");
  }
}

function yesAnswer() {
  alert("You just made my heart the happiest 🤍");
}

function noAnswer() {
  alert("Nice try 😌 You are mine forever 🤍");
}
