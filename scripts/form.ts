import { time } from "./__types/yao";

/**
 * Form Builder
 * @param query
 * @returns
 */
function BuilderSetting(query: Record<string, any>): Setting {
  return {
    defaultValue: {
      columns: [
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
    },

    form: [
      {
        columns: [
          { name: "显示名称", width: 12 },
          { name: "显示图标", width: 12 },
        ],
      },
      {
        columns: [
          { name: "名称", width: 12 },
          { name: "鉴权方式", width: 12 },
          { name: "可见范围", width: 12 },
        ],
      },
    ],

    types: [
      {
        label: "输入框",
        name: "Input",
        icon: "material-format_align_left",
        color: "#7e22ce",
        background: "primary",
        props: [
          {
            columns: [
              { name: "显示名称", width: 12 },
              { name: "可用范围", width: 12 },
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
        label: "下拉选择",
        name: "Select",
        icon: "material-view_list",
        color: "primary",
        background: "primary",
        props: [
          {
            columns: [
              { name: "显示名称", width: 12 },
              { name: "选项", width: 12 },
              { name: "可用范围", width: 12 },
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
        color: "#16a34a",
        background: "success",
        props: [
          {
            columns: [
              { name: "显示名称", width: 12 },
              { name: "日期格式", width: 12 },
              { name: "显示时间", width: 12 },
              { name: "可用范围", width: 12 },
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
      显示名称: {
        bind: "label",
        edit: { type: "Input", props: { placeholder: "显示名称" } },
      },

      显示图标: {
        bind: "icon",
        edit: {
          type: "AutoComplete",
          props: {
            placeholder: "选择或输入图标",
            options: [
              {
                label: "material-save",
                value: "material-save",
                icon: "material-save",
              },
              {
                label: "material-send",
                value: "material-send",
                icon: "material-send",
              },
              {
                label: "material-task_alt",
                value: "material-task_alt",
                icon: "material-task_alt",
              },
            ],
          },
        },
      },

      名称: {
        bind: "name",
        edit: { type: "Input", props: { placeholder: "名称" } },
      },

      鉴权方式: {
        bind: "guard",
        edit: {
          type: "AutoComplete",
          props: {
            placeholder: "选择或输入鉴权方式",
            options: [
              { label: "bearer-jwt", value: "bearer-jwt" },
              { label: "cookie-jwt", value: "cookie-jwt" },
              { label: "query-jwt", value: "query-jwt" },
            ],
          },
        },
      },

      可见范围: {
        bind: "scope",
        edit: {
          type: "Select",
          props: {
            placeholder: "指定可见范围",
            mode: "multiple",
            options: [
              { label: "创建", value: "create" },
              { label: "编辑", value: "edit" },
              { label: "查看", value: "view" },
              { label: "删除", value: "delete" },
            ],
          },
        },
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
            defaultValue: 0,
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
            defaultValue: 0,
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
            defaultValue: 0,
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
            defaultValue: 0,
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
              { label: "邮箱", value: "email" },
              { label: "手机号", value: "mobile" },
            ],
          },
        },
      },

      可用范围: {
        bind: "scope",
        edit: {
          type: "Select",
          props: {
            mode: "multiple",
            placeholder: "可用范围",
            xProps: { remote: { api: "/api/select/options", query: {} } },
          },
        },
      },
    },
  };
}

/**
 * The preset API is to get the preset data. It will be called when the user clicks the insert button.
 * if the query has `withCategories` set to true, it will return the categories and presets.
 *
 * @param query
 * @returns
 */
function BuilderPresets(query: PresetsQuery): PresetsResult {
  time.Sleep(200); // Simulate the network delay
  const { keywords, category, withCategories, __namespace, __bind } = query;
  const categories: Category[] = [
    { value: 0, label: "全部" },
    { value: 1, label: "常用" },
    { value: 2, label: "专业" },
  ];

  const presets: PresetItem[] = [
    {
      name: "会员注册",
      description: "会员注册表单",
      icon: "material-person_add",
      width: 6,
      category: 1,
      payload: {
        columns: [
          {
            type: "Input",
            width: 6,
            props: { label: "手机号", name: "mobile" },
          },
          { type: "Input", width: 6, props: { label: "邮箱", name: "email" } },
          {
            type: "Select",
            width: 6,
            props: {
              label: "性别",
              name: "gender",
              options: [
                { label: "男", value: 1 },
                { label: "女", value: 0 },
              ],
            },
          },
        ],
      },
    },
    {
      name: "会员登录",
      description: "会员登录表单",
      image: "/assets/icon.svg",
      width: 6,
      category: 1,
      payload: {
        columns: [
          {
            type: "Input",
            width: 6,
            props: { label: "手机号", name: "mobile" },
          },
          {
            type: "Input",
            width: 6,
            props: { label: "密码", name: "password" },
          },
        ],
      },
    },
    {
      name: "学术论文提交",
      description: "学术论文提交表单",
      cover: "/assets/form_cover.jpg",
      width: 12,
      category: 2,
      payload: {
        columns: [
          {
            type: "Input",
            width: 12,
            props: { label: "论文标题", name: "title" },
          },
          {
            type: "Input",
            width: 12,
            props: { label: "作者", name: "author" },
          },
          {
            type: "Datetime",
            width: 12,
            props: { label: "提交时间", name: "submit_at" },
          },
        ],
      },
    },
  ];

  const searchPresets = presets.filter((preset) => {
    if (keywords && category) {
      return (
        preset.category === category &&
        (preset.name.includes(keywords) ||
          preset.description.includes(keywords))
      );
    }

    if (keywords) {
      return (
        preset.name.includes(keywords) || preset.description.includes(keywords)
      );
    }

    if (category) {
      return preset.category === category;
    }

    return true;
  });

  // return the categories and presets when withCategories is true
  if (withCategories) {
    return { categories: categories, presets: searchPresets };
  }

  // Return the presets only
  return searchPresets;
}

type Setting = {
  form?: Section[];
  types?: Type[];
  fields?: Record<string, Component>;
  defaultValue?: FormValue;
};

type FormValue = {
  columns: Field[];
  form?: {
    label?: string; // the label of the form
    name?: string; // the name of the form
    icon?: IconT; // the icon of the form
    [key: string]: any; // the other properties of the form
  };
};

type Type = {
  name: string;
  label?: string;
  icon?: IconT;
  color?: string;
  background?: string;
  props?: Section[];
};

type Field = {
  type: string;
  width?: number;
  props: Record<string, any>;
};
type Section = { title?: string; columns: Column[] };
type Column = { name: string; width?: number };
type Component = {
  bind: string;
  edit: { type: string; props: Record<string, any> };
};

type IconT =
  | string
  | {
      name: string;
      size?: number;
      color?: string;
    };

type PresetItem = {
  name: string;
  icon?: IconT;
  image?: string;
  cover?: string;
  description: string;
  category?: string | number;
  width?: 2 | 4 | 6 | 8 | 12;
  payload: { columns: Field[] };
};

type Category = {
  value?: string | number;
  label: string;
};

type PresetsResult =
  | PresetItem[]
  | { categories: Category[]; presets: PresetItem[] };

type PresetsQuery = {
  keywords?: string;
  category?: string | number;
  withCategories?: boolean;
  __namespace?: string;
  __bind?: string;
  params?: Record<string, any>;
  [key: string]: any;
};
