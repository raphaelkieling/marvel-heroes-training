declare module "*.vue" {
  import { Component } from "vue";

  const component: Component;
  export default component;
}

declare module "vue-carousel" {
  export default any;
}
