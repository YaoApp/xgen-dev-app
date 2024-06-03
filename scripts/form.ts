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

function BuilderPresets(query: Record<string, any>) {
  const data = [
    {
      type: "Input",
      icon: "material-format_align_left",
      width: 12,
      props: { name: "mobile", label: "手机号必填", required: 1 },
    },
    {
      type: "Select",
      icon: "material-view_list",
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

  if (query.keywords) {
    // filter
    return data.filter((item) => item.props.label.includes(query.keywords));
  }

  return data;
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
