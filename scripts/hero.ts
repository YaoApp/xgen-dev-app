import { time } from "./__types/yao";

function beforeSave(payload) {
  time.Sleep(1000 * 2);
  return payload;
}

function AutoCompleteOptions(query) {
  console.log("query", query);
  const keywords = query.keywords || "";
  const defaults = [
    { label: "机甲师", value: "机甲师" },
    { label: "飞行员", value: "飞行员" },
    { label: "轻骑兵", value: "轻骑兵" },
  ];

  if (keywords != "") {
    defaults.push({ label: keywords, value: keywords });
  }
  return defaults;
}
