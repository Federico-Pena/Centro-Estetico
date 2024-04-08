export const handleChangeForm = (e) => {
  const { name, value, files, type, checked } = e.target
  let inputValue
  if (type === 'file') {
    if (files[0]) {
      inputValue = new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          resolve({
            [name]: files[0],
            imgPreview: e.target.result
          })
        }
        reader.onerror = (error) => {
          reject(error)
        }
        reader.readAsDataURL(files[0])
      })
    }
  } else if (type === 'checkbox') {
    inputValue = { [name]: checked }
  } else {
    inputValue = { [name]: value }
  }
  return inputValue
}
