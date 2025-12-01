document.addEventListener('DOMContentLoaded', () => {
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

	const btnSubir = document.getElementById('btn-subir')
	if (btnSubir) {
		btnSubir.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		})
	}
})

