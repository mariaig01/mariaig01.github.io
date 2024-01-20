const element = document.getElementById('my-work-link')
const element2 = document.getElementById('my-work-section')

if (element) {
  element.addEventListener('click', () => {
    element2.scrollIntoView({ behavior: "smooth", block: "start" });
  })
}

function adjustTooltipPosition(event) {
  const tooltip = event.target.nextElementSibling;
  const imgRect = event.target.getBoundingClientRect();
  const windowWidth = window.innerWidth;

  const tooltipWidth = tooltip.offsetWidth;
  const leftOffset = imgRect.left + imgRect.width / 2 - tooltipWidth / 2;

  if (leftOffset < 0) {
      tooltip.style.left = '0';
  } else if (leftOffset + tooltipWidth > windowWidth) {
      tooltip.style.left = windowWidth - tooltipWidth + 'px';
  } else {
      tooltip.style.left = leftOffset + 'px';
  }
}

// Asegúrate de ejecutar el código después de que se cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
  const programmingLanguagesImages = document.querySelectorAll('.programming-languages img');
  const technologiesAndToolsImages = document.querySelectorAll('.technologies-and-tools img');

  function adjustTooltipPosition(event) {
    const tooltip = document.getElementById('tooltip');
    const image = event.target;

    const rect = image.getBoundingClientRect();
    const topPosition = rect.top + window.scrollY + rect.height + 10; // Ajuste vertical
    const leftPosition = rect.left + window.scrollX + rect.width / 2; // Ajuste horizontal al centro

    tooltip.textContent = image.alt;
    tooltip.style.top = `${topPosition}px`;
    tooltip.style.left = `${leftPosition}px`;

    tooltip.classList.add('visible');
  }

  function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('visible');
  }

  programmingLanguagesImages.forEach((image) => {
    image.addEventListener('mouseover', adjustTooltipPosition);
    image.addEventListener('mouseout', hideTooltip);
  });

  technologiesAndToolsImages.forEach((image) => {
    image.addEventListener('mouseover', adjustTooltipPosition);
    image.addEventListener('mouseout', hideTooltip);
  });
});
