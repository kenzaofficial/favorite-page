document.addEventListener("DOMContentLoaded", () => {
  const xhr = new XMLHttpRequest();
  const token = 'gZn3HXpbTilL_mUh0g4QrFOht4NdIsy1_1678224354';
  xhr.open("GET", "https://api.sdating.net/v1/profile");
  xhr.setRequestHeader("Authorization", "Bearer "  + token );
  xhr.setRequestHeader('accept', 'application/json');
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("ошибочка");
    } else {
      console.log("запрос удачный");
      const response = JSON.parse(xhr.response);
      const title = response.title;
    }
    const response = JSON.parse(xhr.response);
    console.log(response);
  };

  xhr.onprogress = function (event) {
    console.log(`Загружено ${event.loaded} из ${event.total})`);
  };

  xhr.onerror = function () {
    console.log("нет соединения");
  };
});
