const sleep = (ms) => new Promise((res) => window.setTimeout(res, ms));

function generatePartyShortname(existingPartys) {
  let res = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  while (res === "" || res in existingPartys) {
    for (let i = 0; i < 3; i++) {
      res += characters[Math.floor(Math.random() * 26)];
    }
  }
  return res;
}

class ElectionResultsGenerator {
  #results;

  constructor() {
    this._prepareData();
  }

  _getRandomPartyName(results) {
    const partys = Object.keys(this.#results);
    return partys[Math.floor(Math.random() * partys.length)];
  }

  _getTotalVotes() {
    return Object.values(this.#results).reduce(
      (acc, curr) => acc + curr.votes,
      0
    );
  }

  _prepareData() {
    // generate between six and twelve partys
    const partyCount = Math.floor(Math.random() * 6) + 6;

    this.#results = {};
    for (let i = 0; i < partyCount; i++) {
      const partyShortname = generatePartyShortname(Object.keys(this.#results));
      const votes = Math.floor(Math.random() * 1000000);
      this.#results[partyShortname] = {
        votes,
        color: `hsl(${(360 / partyCount) * i}, 50%, 75%)`,
      };
    }

    for (let i = 0; i < 6; i++) {
      this.#results[this._getRandomPartyName(this.#results)].votes += 1000000;
    }

    console.log("Election Results", this.#results);
  }

  _updateResults() {
    // Give three random partys some more votes
    for (let i = 0; i < 3; i++) {
      const party = this._getRandomPartyName(this.#results);
      this.#results[party].votes = Math.floor(
        (this.#results[party].votes += Math.floor(Math.random() * 100000))
      );
    }

    // console.log("New Results:", this.#results);
  }

  async fetchLiveResults() {
    // guarantee that Componer is ready
    await window.componer.ready;
    console.log("Fetching Election Results Started");
    await sleep(1000);
    console.log("Fetching Election Results Ended");
    console.log(this);
    const total = this._getTotalVotes();
    const results = this.#results;
    return {
      total,
      results,
    };
  }
}

window.componer.component = new ElectionResultsGenerator();
setInterval((_) => window.componer.component._updateResults(), 1000);

window.componer._triggerReady();
