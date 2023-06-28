export default class requestService {
  constructor() {
    this.data = {};
    this.filteredParams = {};
  }

  filterParams() {
    for (const [key, value] of Object.entries(this.data)) {
      if (value !== null && value !== "") {
        this.filteredParams[key] = value;
      }
    }
  }
  createQuerySet(data) {
    this.data = data
    this.filterParams();
    return `?${new URLSearchParams(this.filteredParams).toString()}`;
  }
}
