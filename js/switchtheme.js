      // Отримуємо елемент перемикача і body
      const themeToggle = document.getElementById('theme-toggle');
      const body = document.body;

      // Перевіряємо наявність теми у localStorage, щоб зберегти вибір користувача
      if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
      } else {
        body.setAttribute('data-theme', 'light');
      }

      // Додаємо обробник події для перемикача
      themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
          body.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark'); // зберігаємо вибір теми
        } else {
          body.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light'); // зберігаємо вибір теми
        }
      });