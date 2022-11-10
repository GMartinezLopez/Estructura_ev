var baseUrl  = "https://api.coinpaprika.com/v1/coins";
//var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var coin_Id   = "btc-bitcoin";

fetch(`${baseUrl}`, {
  method: "GET",
}).then((response) => {
  if(response.ok) {
    response.json().then((json) => {
      console.log(json);

      let coinsData = json;

      if(coinsData.length > 0) {
        var cryptoCoin = "";
      }

      //Inicia ciclo For para obtener cada moneda y colocarla en la tabla
      /* coinsData.forEach((coin) => {

          cryptoCoin += "<tr>";
          cryptoCoin += `<td> ${coin.id}`;
          cryptoCoin += `<td> ${coin.is_active} </td>`;
          cryptoCoin += `<td> ${coin.is_new}</td>`;
          cryptoCoin += `<td> ${coin.name} </td>`;
          cryptoCoin += `<td> ${coin.rank}</td>`;
          cryptoCoin += `<td> ${coin.symbol} Billion</td>`;
          cryptoCoin += `<td> ${coin.type}</td>`;"<tr>";

      });*/
     
      for(coin=0; coin <=10; coin++){
        cryptoCoin += "<tr>";
        cryptoCoin += `<td> ${coin.id}`;
        cryptoCoin += `<td> ${coin.is_active} </td>`;
        cryptoCoin += `<td> ${coin.is_new}</td>`;
        cryptoCoin += `<td> ${coin.name} </td>`;
        cryptoCoin += `<td> ${coin.rank}</td>`;
        cryptoCoin += `<td> ${coin.symbol} Billion</td>`;
        cryptoCoin += `<td> ${coin.type}</td>`;"<tr>";
        if(coin == 5){
          break;
        }
      };
      //Termina ciclo For
      document.getElementById("data").innerHTML = cryptoCoin;
    });
  }
}).catch((error) => {
  console.log(error)
})