const ratingSelect = document.querySelectorAll('.rating');
    
    ratingSelect.forEach(element => {
      element.addEventListener('click', () => {
        document.querySelector('.select')?.classList.remove('select');
        element.classList.add('select');
      });
    });

    
