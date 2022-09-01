import DashoardPage from "../pages/Dashboard";
import ItemListPage from "../pages/ItemList";

export const routes = [
  { path: "/", component: DashoardPage },
  { path: "/item-list/:id", component: ItemListPage },
];
