export default class PhotoServices {
  mainurl = "https://jsonplaceholder.typicode.com/";
  async getPosts() {
    const res = await fetch(`${this.mainurl}posts/`).then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      return response.json();
    });
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
