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