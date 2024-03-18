import { Process } from "./__types/yao";

// yao run scripts.init.setData
function setData() {
  Process(
    "models.hero.Insert",
    [
      "avatar",
      "name",
      "alias",
      "title",
      "roles",
      "position",
      "attack",
      "defense",
      "magic",
      "difficulty",
      "gold_price",
      "coupon_price",
      "identity",
    ],
    [
      [
        ["https://game.gtimg.cn/images/lol/act/img/champion/Annie.png"],
        "黑暗之女",
        "Annie",
        "安妮",
        ["mage"],
        ["中单"],
        2,
        3,
        10,
        6,
        4800,
        2000,
        "机甲师",
      ],
      [
        ["https://game.gtimg.cn/images/lol/act/img/champion/Olaf.png"],
        "狂战士",
        "Olaf",
        "奥拉夫",
        ["fighter", "tank"],
        ["上单", "打野"],
        9,
        5,
        3,
        3,
        1350,
        1500,
        "飞行员",
      ],
      [
        ["https://game.gtimg.cn/images/lol/act/img/champion/Hecarim.png"],
        "战争之影",
        "Hecarim",
        "赫卡里姆",
        ["fighter", "tank"],
        ["上单", "打野"],
        8,
        6,
        4,
        6,
        4800,
        3500,
        "轻骑兵",
      ],
    ]
  );

  Process(
    "models.role.Insert",
    ["name", "type"],
    [
      ["法师", "mage"],
      ["战士", "fighter"],
      ["坦克", "tank"],
      ["辅助", "support"],
    ]
  );
}
