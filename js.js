let chosenColors = document.querySelector(".chosen-color")
let pixel = document.querySelectorAll(".pixel")
let eraser = document.querySelector(".eraser")
let lastic = chosenColors.value


eraser.onchange = function () {
  if (eraser.checked) {
    lastic = 'white'
    console.log(lastic)
  } else {
    lastic = chosenColors.value
    console.log(lastic)
  }
};


chosenColors.onchange = function(){
  if (!eraser.checked) {
  lastic = chosenColors.value
  } else {lastic = 'white'}
};

for (let pixe of pixel){
pixe.onclick = function(){  
pixe.style.backgroundColor = lastic
}
}



/*

1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
*/