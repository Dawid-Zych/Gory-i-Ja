document.addEventListener('DOMContentLoaded', function () {
	// Sprawdź, czy użytkownik korzysta z urządzenia mobilnego
	const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

	// Znajdź wszystkie linki z klasą .nav-link
	let navLinks = document.querySelectorAll('.nav-link');

	// Dodaj nasłuchiwanie na kliknięcie każdego linku
	navLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			// Znajdź dropdown-content wewnątrz linka
			let dropdown = link.querySelector('.dropdown-content');

			// Toggle (przełącz) widoczność dropdown-content
			if (dropdown.style.display === 'block') {
				dropdown.style.display = 'none';
				dropdown.style.opacity = 0;
			} else {
				// Zamknij wszystkie otwarte dropdowny
				closeAllDropdowns();

				dropdown.style.display = 'block';
				dropdown.style.opacity = 1;

				// Jeśli użytkownik korzysta z urządzenia mobilnego, dodaj nasłuchiwanie na kliknięcie na całej stronie
				if (isMobileDevice) {
					document.addEventListener('click', closeDropdown);
				}

				// Zapobiegnij propagacji kliknięcia, aby nie zamknęło się od razu
				event.stopPropagation();
			}
		});

		// Dodaj nasłuchiwanie na zdarzenie "mouseenter" dla efektu hover na komputerach
		if (!isMobileDevice) {
			link.addEventListener('mouseenter', function () {
				// Jeśli dropdown jest ukryty, pokaż go
				let dropdown = link.querySelector('.dropdown-content');
				if (dropdown.style.display !== 'block') {
					closeAllDropdowns(); // Zamknij wszystkie inne dropdowny
					dropdown.style.display = 'block';
					dropdown.style.opacity = 1;
				}
			});

			// Dodaj nasłuchiwanie na zdarzenie "mouseleave" dla efektu hover na komputerach
			link.addEventListener('mouseleave', function () {
				// Jeśli dropdown jest widoczny, ukryj go po opuszczeniu linka
				let dropdown = link.querySelector('.dropdown-content');
				if (dropdown.style.display === 'block') {
					dropdown.style.display = 'none';
					dropdown.style.opacity = 0;
				}
			});
		}
	});

	// Funkcja do zamykania wszystkich otwartych dropdownów
	function closeAllDropdowns() {
		let openDropdowns = document.querySelectorAll('.dropdown-content');
		openDropdowns.forEach(function (dropdown) {
			dropdown.style.display = 'none';
			dropdown.style.opacity = 0;
		});
	}

	// Funkcja do zamykania dropdown po kliknięciu poza nim
	function closeDropdown(e) {
		let openDropdowns = document.querySelectorAll('.dropdown-content');
		openDropdowns.forEach(function (dropdown) {
			// Sprawdź, czy kliknięcie nie jest wewnątrz dropdown
			if (!dropdown.contains(e.target) && dropdown.style.display === 'block') {
				dropdown.style.display = 'none';
				dropdown.style.opacity = 0;
				document.removeEventListener('click', closeDropdown);
			}
		});
	}
});
