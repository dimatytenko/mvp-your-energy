document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("myModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const sendBtn = document.getElementById("additionalButton");
  const emailInput = document.getElementById("email");
  const commentTextarea = document.getElementById("comment");
  const stars = document.querySelectorAll(".star");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // window.addEventListener("click", function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // });

//   sendBtn.addEventListener("click", function () {
//     alert("!!!");
  // });

  emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value;
    const emailIsValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailValue);

    if (emailIsValid) {
      emailInput.setCustomValidity("");
    } else {
      emailInput.setCustomValidity("Enter a correct email");
    }
  });

  commentTextarea.addEventListener("input", function () {
    const commentValue = commentTextarea.value.trim();
    const commentIsValid = commentValue.length > 0;

    if (commentIsValid) {
      commentTextarea.setCustomValidity("");
    } else {
      commentTextarea.setCustomValidity("Enter your comment");
    }
  });

  stars.forEach(function (star, index) {
    star.addEventListener("click", function () {
      const rating = index + 1;
      setStars(rating);
    });
  });

  function setStars(count) {
    stars.forEach(function (star, index) {
      star.classList.toggle("active", index < count);
    });

    ratingDisplay.textContent = count.toFixed(1);
  }
});