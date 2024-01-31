console.log("this extentio create by bevvee");
console.log("color picker is working");
document.addEventListener('DOMContentLoaded',  ()=> {
    var colorPicker = document.getElementById('color-picker');
    var hex = document.getElementById('hex');
  //had lcode bache ghi tclick 3la text iderleh copy
    colorPicker.addEventListener('input', function () {
      var selectedColor = colorPicker.value;
      hex.innerText = selectedColor;
    });
    //had lcode bache ghi tclick 3la text iderleh copy
    hex.addEventListener('click', function () {
      navigator.clipboard.writeText(hex.innerText)
        .then(function () {
          console.log('Text copied to clipboard!');
        })
        .catch(function (err) {
          console.error('Unable to copy text to clipboard', err);
        });
    });
  });
  