
function launch() {
  
  var formData = new FormData(document.getElementById('contact'));

  const options = {
    method: 'POST',
    body: formData
  };

fetch('http://localhost:3000/predict', options)
.then(response=>response.json())
.then(result=>{document.getElementById('result').innerHTML=result.toFixed(2)+" $";})


}
