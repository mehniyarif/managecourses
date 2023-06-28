export default class requestService {
  constructor(data) {
    this.data = data;
    this.filteredParams = {};
  }

  filterParams() {
    for (const [key, value] of Object.entries(this.data)) {
      if (value !== null && value !== "") {
        this.filteredParams[key] = value;
      }
    }
  }
  createQueryset() {
    this.filterParams();
    return `?${new URLSearchParams(this.filteredParams).toString()}`;
  }
}
