const ratingSelect = document.querySelectorAll('.rating');
    
    ratingSelect.forEach(element => {
      element.addEventListener('click', () => {
        document.querySelector('.select')?.classList.remove('select');
        element.classList.add('select');
      });
    });


const ratingResult = document.getElementById('rating-numbers').addEventListener('click', evt =>{
  let clickedButton = evt.target;
  let btnValue = clickedButton.value;
  document.getElementById('rating').value = btnValue;
})