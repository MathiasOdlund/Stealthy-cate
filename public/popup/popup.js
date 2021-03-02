function onChangeColor(){
    const selectedColor = document.getElementById('list').value;
    document.getElementById('body').style.backgroundColor = selectedColor;
    console.log(selectedColor)
}
