const $main = $('main')
const $selector = $('#image-filter')

const apiURL = 'https://raw.githubusercontent.com/codefellows/code-301-guide/master/curriculum/02-jquery-selectors-events/demos/read-json/data.json?token=AX39vKvmGhCGGhsfeq1aF5a7tPTumsh8ks5byQ71wA%3D%3D'

const Dog = function(imageObj) {
  this.name = imageObj.name;
  this.image_url = imageObj.image_url;
  this.hobbies = imageObj.hobbies;
}

let allDogs = []

Dog.prototype.renderDog = imgObj => {
  let $dogClone = $('#image-template').clone()
  $main.append($dogClone)
  $dogClone.attr('id', imgObj.name)
  $dogClone.find('img').attr('src', imgObj.image_url)
  $dogClone.find('p').text(imgObj.name)
}

$($selector).on('change', () => {
  $('section').hide()
  $(`section[id=${event.target.value}]`).show()
})

$.getJSON(apiURL, response => {
  response.forEach((val) => {
    let newDog = new Dog(val)
    allDogs.push(newDog)
    newDog.renderDog(val)
    $selector.append(`<option value=${newDog.name}>${newDog.name}</option>`)
  })
})

