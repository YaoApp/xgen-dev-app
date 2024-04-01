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

function FormBuilderSetting(query: Record<string, any>) {
  return {
    defaultValue: [
      { type: "Input", width: 6, props: { label: "手机号", name: "mobile" } },
      {
        type: "Select",
        width: 6,
        props: {
          label: "类目",
          name: "category",
          options: [
            { label: "类目一", value: "c1" },
            { label: "类目二", value: "c2" },
          ],
        },
      },
    ],

    types: [
      {
        label: "输入框",
        name: "Input",
        icon: "material-format_align_left",
        props: [
          { columns: [{ name: "名称", width: 12 }] },
          {
            columns: [
              { name: "字段名称", width: 12 },
              { name: "必填项", width: 12 },
              { name: "占位符", width: 12 },
              { name: "数值校验", width: 12 },
            ],
          },
          {
            columns: [
              { name: "数值唯一", width: 12 },
              { name: "可检索", width: 12 },
            ],
          },
        ],
      },
      {
        label: "下拉选择",
        name: "Select",
        icon: "material-view_list",
        props: [
          {
            columns: [
              { name: "名称", width: 12 },
              { name: "选项", width: 12 },
            ],
          },
          {
            columns: [
              { name: "字段名称", width: 12 },
              { name: "必填项", width: 12 },
              { name: "占位符", width: 12 },
              { name: "数值校验", width: 12 },
            ],
          },
          {
            columns: [
              { name: "数值唯一", width: 12 },
              { name: "可检索", width: 12 },
            ],
          },
        ],
      },
      {
        label: "日期时间",
        name: "Datetime",
        icon: "material-date_range",
        props: [
          {
            columns: [
              { name: "名称", width: 12 },
              { name: "日期格式", width: 12 },
              { name: "显示时间", width: 12 },
            ],
          },
          {
            columns: [
              { name: "字段名称", width: 12 },
              { name: "必填项", width: 12 },
              { name: "占位符", width: 12 },
              { name: "数值校验", width: 12 },
            ],
          },
          {
            columns: [
              { name: "数值唯一", width: 12 },
              { name: "可检索", width: 12 },
            ],
          },
        ],
      },
    ],

    fields: {
      名称: {
        bind: "label",
        edit: { type: "Input", props: { placeholder: "名称" } },
      },

      选项: {
        bind: "options",
        edit: { type: "List", props: { placeholder: "选项", name: "options" } },
      },

      字段名称: {
        bind: "name",
        edit: { type: "Input", props: { placeholder: "字段" } },
      },

      日期格式: {
        bind: "format",
        edit: { type: "Input", props: { placeholder: "字段" } },
      },
      显示时间: {
        bind: "showTime",
        edit: {
          type: "RadioGroup",
          props: {
            placeholder: "显示时间",
            options: [
              { label: "显示", value: 1 },
              { label: "隐藏", value: 0 },
            ],
          },
        },
      },

      必填项: {
        bind: "required",
        edit: {
          type: "RadioGroup",
          props: {
            placeholder: "必填项",
            options: [
              { label: "是", value: 1 },
              { label: "否", value: 0 },
            ],
          },
        },
      },

      数值唯一: {
        bind: "unique",
        edit: {
          type: "RadioGroup",
          props: {
            placeholder: "数值唯一",
            options: [
              { label: "是", value: 1 },
              { label: "否", value: 0 },
            ],
          },
        },
      },

      可检索: {
        bind: "index",
        edit: {
          type: "RadioGroup",
          props: {
            placeholder: "可检索",
            options: [
              { label: "是", value: 1 },
              { label: "否", value: 0 },
            ],
          },
        },
      },

      占位符: {
        bind: "placeholder",
        edit: { type: "Input", props: { placeholder: "占位符" } },
      },

      数值校验: {
        bind: "validation",
        edit: {
          type: "AutoComplete",
          props: {
            placeholder: "数值校验",
            options: [
              { label: "邮箱", value: "mobile" },
              { label: "手机号", value: "email" },
            ],
          },
        },
      },
    },
  };
}

function FormBuilderPresets(query: Record<string, any>) {
  return [
    {
      type: "Input",
      width: 12,
      props: { name: "mobile", label: "手机号必填", requered: 1 },
    },
    {
      type: "Select",
      width: 12,
      props: {
        label: "行业分类",
        name: "category",
        options: [
          { label: "IT、互联网", value: "it" },
          { label: "汽车", value: "auto" },
        ],
      },
    },
  ];
}
