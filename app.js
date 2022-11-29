const fileInput = document.querySelector('input')
const downloadBtn = document.querySelector('button')
const form = document.querySelector('form')

const downloadFile = e => {
  e.preventDefault()
  const inputValueURL = e.target.inputdownload.value

  fetch(inputValueURL)
    .then(res => res.blob())
    .then(file => {
      const tempUrl = URL.createObjectURL(file)
      const link = document.createElement('a')
      
      link.href = tempUrl
      link.download = inputValueURL.replace(/^.*[\\\/]/, '')
      document.body.appendChild(link)
      
      link.click()
      URL.revokeObjectURL(tempUrl)
      link.remove()
    })
    .catch(() => alert('Failed to download file'))
}

form.addEventListener('submit', downloadFile)
