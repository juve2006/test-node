const requestURL = 'https://jsonplaceholder.typicode.com/users';
let btn = document.querySelector("#my-btn");
btn.addEventListener('click', getRequest);

function getRequest () {

        const xhr = new XMLHttpRequest();

        xhr.responseType = 'json';

        xhr.open('GET', requestURL);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log(xhr.response);
            } else {
                console.log(xhr.response);
            }
        }
        xhr.onerror = () => {
            console.log(xhr.response);
        }
        xhr.send();
}


