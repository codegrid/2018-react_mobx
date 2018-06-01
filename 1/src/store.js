import { decorate, observable, action } from 'mobx';

class Store {
  constructor() {
    this.route = {
      name: '',
      params: {},
    };
  }

  updateRoute(name, params) {
    const { route } = this;

    route.name = name;
    route.params = params;
  }
}

decorate(Store, {
  route: observable,
  updateRoute: action,
});

export default Store;
