export default class PostServices {
  mainurl = "https://jsonplaceholder.typicode.com/";
  async getPosts(page) {
    const res = await fetch(`${this.mainurl}posts?_page=${page}`).then(
      (response) => {
        if (!response.ok) {
          throw new Error("Ошибка запроса");
        }
        return response.json();
      }
    );
    return res;
  }

  async getComments(id) {
    const res = await fetch(`${this.mainurl}posts/${id}/comments`).then(
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
