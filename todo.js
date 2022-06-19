//elementlere erişmek için oluşturulan değişkenler
let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo")

//add butonu fonksiyonu
addToDoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p"); //p elementi oluşturma
  paragraph.classList.add("paragraph"); //paragrapha style eklemek
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML = inputText.value; //inputText değerini paragraph içerisine ata
  inputText.value = ""; //en sonda inputText içerisini boşaltma

  paragraph.addEventListener("click", function () { //paragrafa bir defa tıklandığında
    paragraph.style.textDecoration = "line-through"; //listedeki cümlenin üstünü çizme
  });

  paragraph.addEventListener("dblclick", function () { //paragrafa çift tıklandığında
    toDoContainer.removeChild(paragraph);
  });

  clearToDo.addEventListener("click", function(){ //sil tuşuna basma
    paragraph.remove();
  })
});
