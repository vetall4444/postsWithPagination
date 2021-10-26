export default class PostServices {
  mainurl = "https://jsonplaceholder.typicode.com/";
  getPosts(page) {
    const res = fetch(`${this.mainurl}posts?_page=${page}`).then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      const data = {
        count: response.headers.get("x-total-count"),
        items: response.json(),
      };
      return data;
    });
    return res;
  }

  getComments(id) {
    const res = fetch(`${this.mainurl}posts/${id}/comments`).then(
      (response) => {
        if (!response.ok) {
          throw new Error("Ошибка запроса");
        }
        return response.json();
      }
    );
    return res;
  }
}
