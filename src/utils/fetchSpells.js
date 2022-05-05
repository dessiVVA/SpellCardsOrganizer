let link = "https://api.open5e.com/spells/";
let data = [];
export default async function getSpells(url = "https://api.open5e.com/spells/") {
  await fetch(url)
    .then((resp) => resp.json())
    .then(async (spells) => {
      data = [...data, ...spells.results];
      url = spells.next;
      if (url !== null) {
        await getSpells(url);
      }
    });
    return data;
}
