const sleep = (ms) => new Promise((res) => window.setTimeout(res, ms));

class CommentListComponent {
  #data = [];

  async _prepareData() {
    const randomTextsResp = await fetch(
      "https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum?size=100"
    );
    const randomTexts = await randomTextsResp.json();
    const randomUsersResp = await fetch(
      "https://random-data-api.com/api/users/random_user?size=100"
    );
    const randomUsers = await randomUsersResp.json();
    for (let i = 0; i < 100; i++) {
      this.#data.push({
        username: randomUsers[i].username,
        votes: Math.floor(Math.random() * 200 - 50),
        comment: `Comment ${i + 1} - ` + randomTexts[i].very_long_sentence,
      });
    }
  }

  async fetchComments({ offset = 0, amount = 10 } = {}) {
    // guarantee that Componer is ready
    await window.componer.ready;
    console.log("Comment Fetch Started");
    await sleep(1000 + amount * 100);
    console.log("Comment Fetch Ended");
    return {
      done: offset+amount >= this.#data.length,
      total: this.#data.length,
      comments: this.#data.slice(offset, offset + amount)
    };
  }
}

window.componer.component = new CommentListComponent();

window.componer.component
  ._prepareData()
  .then((_) => window.componer._triggerReady());
