export default class PhotoServices {
  mainurl = "https://jsonplaceholder.typicode.com/";
  async fetchdata(name) {
    const res = await fetch(`${this.mainurl}${name}`).then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      return response.json();
    });
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
