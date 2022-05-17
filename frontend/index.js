// при нажатии на кнопку будет выполнена следущая функция
button.onclick = async function () {
    // достаем значение из input поля
    const name = nameInput.value;
    // отправляем запрос
    const response = await fetch('http://localhost:3000/hello-message' /* путь */, {
        method: 'POST', // метод POST
        body: JSON.stringify({ name: name }), // тело запроса. Превращаем объект в json строчку
        headers: {
            'Content-Type': 'application/json' // указываем, что тип тела - это json
          }
    })
    // получаем тело ответа ввиде текста
    const text = await response.text();
    const responseBody = JSON.parse(text); // превращаем его в объект
    const message = responseBody.message; // получаем сообщение из объекта

    // вставляем сообщение в блок с результатом
    resultBlock.innerText = message;
}