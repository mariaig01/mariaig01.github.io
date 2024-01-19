const element = document.getElementById('my-work-link')
const element2 = document.getElementById('my-work-section')

if (element) {
  element.addEventListener('click', () => {
    element2.scrollIntoView({ behavior: "smooth", block: "start" });
  })
}

/*
if (document.getElementById('my-work-link')) {
    document.getElementById('my-work-link').addEventListener('click', () => {
      document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
    })
  }*/