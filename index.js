


const channelID = 2244876;
const apiKey = 'B5RD5D5CQJBO04B2';
const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${apiKey}&results=10`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const lastRecord = data.feeds[0];
    const temperaturaValue = parseFloat(lastRecord.field1); // Cambiar "field1" por el nombre del campo que deseas mostrar
    const humedadValue = parseFloat(lastRecord.field2); // Cambiar "field1" por el nombre del campo que deseas mostrar
    
   


    const formattedTemperaturaValue = temperaturaValue.toFixed(1);
    const temperaturaElemento = document.getElementById('temperatura');
    temperaturaElemento.textContent = `${formattedTemperaturaValue} °C`;

    const formattedHumedadValue = humedadValue.toFixed(1);
    const humedadElemento = document.getElementById('humedad');
    humedadElemento.textContent = `${formattedHumedadValue} °`;


    



    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
