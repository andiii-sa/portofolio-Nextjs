import itemJson from "./item.json";

export function getItemPortofolio() {
  return itemJson.data;
}

export function getItemPortofolioDetail(id: string) {
  let data = {};
  itemJson.data.map((item: any) => {
    if (item.id === id) {
      data = item;
    }
  });
  return data;
}
