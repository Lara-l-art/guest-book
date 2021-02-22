const BASE_URL = 'http://localhost:8000/';

export function getComments() {

 return fetch(BASE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to load comments');
      }

     return response.json()
    });
}

export function onCommentSubmit(comment) {

  const Http = new XMLHttpRequest();
  Http.open("POST", BASE_URL);
  Http.send(JSON.stringify(comment));
}
