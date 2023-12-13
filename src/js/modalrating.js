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
    var emailValue = emailInput.value;
    var emailIsValid = /\S+@\S+\.\S+/.test(emailValue);

    if (emailIsValid) {
      emailInput.setCustomValidity("");
    } else {
      emailInput.setCustomValidity("Enter a correct email");
    }
  });

  commentTextarea.addEventListener("input", function () {
    var commentValue = commentTextarea.value.trim();
    var commentIsValid = commentValue.length > 0;

    if (commentIsValid) {
      commentTextarea.setCustomValidity("");
    } else {
      commentTextarea.setCustomValidity("Enter your comment");
    }
  });

  stars.forEach(function (star, index) {
    star.addEventListener("click", function () {
      var rating = index + 1;
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