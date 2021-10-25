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
  getPosts() {
    const res = this.fetchdata("posts/");
    return res;
  }
  getComments(id) {
    const res = this.fetchdata(`posts/${id}/comments`);
    return res;
  }
}
