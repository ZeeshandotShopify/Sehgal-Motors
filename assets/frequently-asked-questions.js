const collapsible_questions = document.querySelectorAll("h3.faq-question.h3");
collapsible_questions.forEach(function(question) {
   question.addEventListener("click", function() {
      this.parentElement.parentElement.classList.toggle("active-faq-block");
      this.classList.toggle("open");
      this.parentNode.nextElementSibling.classList.toggle("open");
   });
});
