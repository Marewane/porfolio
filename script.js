document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()

  const btn = document.getElementById('menuBtn')
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('mobile-open')
    })
  }
})


