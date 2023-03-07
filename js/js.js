document.addEventListener("DOMContentLoaded", () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users/kenzaofficial");
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
