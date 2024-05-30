/**
 * The execute API is to execute the flow data. It will be called when the user clicks the run button or your custom calls the execute method.
 */
function Execute(input: any) {}

/**
 * The parser API is to parse the flow data and tips the variables based on the context data.
 */
function Parser() {}

/**
 * The node validate API is to validate the flow data before saving it.
 */
function Validate() {}

/**
 * The flow builder setting.
 * @returns
 */
function BuilderSetting(): Setting {
  return {
    // Array of FlowValue or single FlowValue to be displayed in the builder, when the builder is initialized and the value is empty, it will display an empty canvas.
    // It it not required to set a default value, but you can set it to an empty array or object.
    defaultValue: [
      {
        flow: {
          label: "AI 制作海报",
          name: "AI-Poster",
          icon: "material-brush",
          deletable: false,
          description: "根据输入的文本生成海报",
        },

        execute: {
          input: {
            prompt: `白灵淼:
大傩世界侧李火旺的妻子，性格外柔内刚，曾经和李火旺一起是清风观中的“药引”。
因为李火旺“火烧白家人”事件而和李火旺产生隔阂。曾经因煞气入体而导致性格大变（后被驱散），
后成为白莲教圣女（无生老母的心蟠）并在法教战役中获得成长并立下战功，
在对抗福生天司命的战役中主动带头重新感染煞气，最终与无生老母融合。
`,
          },
        },

        nodes: [
          {
            id: "1",
            type: "AI-Data",
            position: { x: 0, y: 0 },
            showTargetHandle: false,
            deletable: false,
            props: {
              name: "keywords",
              description: "根据输入的文本提取海报关键词",
              prompt: `- 根据我给你的说明，结合表单数据，提取一组 **Stable Diffusion** 关键词并将关键词翻译成英文
- 主要用途为海报制作，关键词用于生成海报，请添加对应的关键词
- 使用 JSON 格式返回，例如：{"keywords": ["关键词1", "关键词2", ...]}
- 只回复我 **JSON 格式**的数据，不要回答其他内容，不然我会认为你的回答是错误的。
- 如果你无法提取关键词，请回复 {"code": 400, "message": "无法提取关键词" }
----------------
 我的说明如下: 
 {{ $in.prompt }}
 `,
              validation: "json",
              retry: 3,
            },
          },
        ],
      },
      {
        flow: {
          label: "AI 制作人物卡片",
          name: "AI-Poster",
          icon: "material-badge",
          description: "根据输入的文本生成海报",
        },

        execute: {
          input: {
            prompt: `
白灵淼:
大傩世界侧李火旺的妻子，性格外柔内刚，曾经和李火旺一起是清风观中的“药引”。
因为李火旺“火烧白家人”事件而和李火旺产生隔阂。曾经因煞气入体而导致性格大变（后被驱散），
后成为白莲教圣女（无生老母的心蟠）并在法教战役中获得成长并立下战功，
在对抗福生天司命的战役中主动带头重新感染煞气，最终与无生老母融合。
`,
          },
        },

        nodes: [
          {
            id: "1",
            position: { x: 0, y: 0 },
            type: "AI-Data",
            showTargetHandle: false,
            props: {
              name: "keywords",
              description: "根据输入的文本提取人物卡片关键词",
              prompt: `
- 根据我给你的说明，结合表单数据，提取一组 **Stable Diffusion** 关键词并将关键词翻译成英文
- 主要用途为人物卡片制作，关键词用于生成卡片，请添加对应的关键词
- 使用 JSON 格式返回，例如：{"keywords": ["关键词1", "关键词2", ...]}
- 只回复我 **JSON 格式**的数据，不要回答其他内容，不然我会认为你的回答是错误的。
- 如果你无法提取关键词，请回复 {"code": 400, "message": "无法提取关键词" }
----------------
 我的说明如下: 
 {{ $in.prompt }}
`,
              validation: "json",
              retry: 3,
            },
          },
        ],
      },
    ], // or {}

    // The list of available flow types that the user can add to the canvas.
    types: [
      {
        label: "AI 数据处理",
        name: "AI-Data",
        icon: "material-cognition",
        color: "#7e22ce",
        background: "primary",
        props: [
          { columns: [{ name: "功能简介", width: 12 }] },
          {
            columns: [
              { name: "提示词", width: 12 },
              { name: "结果校验", width: 12 },
              { name: "重试次数", width: 12 },
            ],
          },
        ],
      },
      {
        label: "AI 图片生成",
        name: "AI-Image",
        icon: "material-palette",
        color: "#7e22ce",
        background: "primary",
        props: [
          { columns: [{ name: "功能简介", width: 12 }] },
          {
            columns: [
              { name: "提示词", width: 12 },
              { name: "结果校验", width: 12 },
              { name: "重试次数", width: 12 },
            ],
          },
        ],
      },
      {
        label: "保存数据到",
        name: "SaveDataTo",
        props: [
          { columns: [{ name: "功能简介", width: 12 }] },
          { columns: [{ name: "选择存储", width: 12 }] },
        ],
      },
      {
        label: "页面跳转到",
        name: "RedirectTo",
        icon: "material-link",
        color: "primary",
        background: "primary",
        props: [
          { columns: [{ name: "功能简介", width: 12 }] },
          {
            columns: [{ name: "网址", width: 12 }],
          },
        ],
      },
      {
        label: "发送 HTTP 请求",
        name: "SendHttpRequest",
        icon: "material-http",
        color: "#16a34a",
        background: "success",
        props: [
          { columns: [{ name: "功能简介", width: 12 }] },
          {
            columns: [
              { name: "请求方法", width: 4 },
              { name: "请求地址", width: 8 },
              { name: "请求参数", width: 12 },
              { name: "请求体", width: 12 },
              { name: "请求头", width: 12 },
            ],
          },
          {
            columns: [{ name: "重试次数", width: 12 }],
          },
        ],
      },
      {
        label: "发送短信给",
        name: "SendSmsTo",
        icon: "material-sms",
        color: "warning",
        background: "warning",
        props: [
          { columns: [{ name: "功能简介", width: 12 }] },
          {
            columns: [
              { name: "手机", width: 12 },
              { name: "内容", width: 12 },
            ],
          },
        ],
      },
      {
        label: "发送邮件给",
        name: "SendEmailTo",
        icon: "material-mail",
        color: "warning",
        background: "warning",
        props: [
          { columns: [{ name: "功能简介", width: 12 }] },
          {
            columns: [
              { name: "邮箱", width: 12 },
              { name: "内容", width: 12 },
            ],
          },
        ],
      },
      {
        label: "运行脚本",
        name: "RunScript",
        icon: "material-javascript",
        color: "danger",
        background: "danger",
        props: [
          { columns: [{ name: "功能简介", width: 12 }] },
          { columns: [{ name: "脚本", width: 12 }] },
        ],
      },
    ],

    // The Flow Builder setting panel, it is used to define the layout of the setting panel.
    // You can add your custom setting panel for the flow builder.
    flow: [
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

    // The Execute setting panel, it is used to define the layout of the execute panel.
    // You can add your custom setting panel for the execute panel.
    execute: [
      { columns: [{ name: "输入数据", width: 12 }] },
      { columns: [{ name: "请求参数", width: 12 }] },
    ],

    // The Edge setting panel, it is used to define the layout of the edge panel.
    // You can add your custom setting panel for the edge panel.
    edge: [
      {
        columns: [{ name: "注释", width: 12 }],
      },
      {
        columns: [
          { name: "并发执行", width: 12 },
          { name: "执行条件", width: 12 },
        ],
      },
    ],

    // The components definition, it is used to define the properties of the components.
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

      功能简介: {
        bind: "description",
        edit: {
          type: "TextArea",
          props: {
            placeholder: "功能简介",
            autoSize: { minRows: 3, maxRows: 6 },
          },
        },
      },

      内容: {
        bind: "content",
        edit: { type: "TextArea", props: { placeholder: "内容" } },
      },

      输入数据: {
        bind: "input",
        edit: {
          type: "CodeEditor",
          props: {
            placeholder: "输入数据",
            language: "yaml",
            height: 160,
            hideLineNumbers: true,
          },
        },
      },

      提示词: {
        bind: "prompt",
        edit: {
          type: "CodeEditor",
          props: {
            placeholder: "请输入 AI 提示词",
            language: "yaml",
            height: 220,
            hideLineNumbers: true,
          },
        },
      },

      选择存储: {
        bind: "model",
        edit: {
          type: "Select",
          props: {
            placeholder: "选择存储模型",
            options: [
              { label: "英雄", value: "hero" },
              { label: "角色", value: "role" },
            ],
          },
        },
      },

      结果校验: {
        bind: "validation",
        edit: {
          type: "AutoComplete",
          props: {
            placeholder: "结果校验",
            options: [
              { label: "必须为 JSON 格式", value: "json" },
              { label: "必须为图片文件", value: "image" },
              { label: "必须为文本格式", value: "text" },
            ],
          },
        },
      },

      重试次数: {
        bind: "retry",
        edit: {
          type: "Input",
          props: { placeholder: "重试次数", type: "number", defaultValue: 3 },
        },
      },

      网址: {
        bind: "url",
        edit: { type: "Input", props: { placeholder: "跳转网址" } },
      },

      手机: {
        bind: "mobile",
        edit: { type: "Input", props: { placeholder: "手机号码" } },
      },

      邮箱: {
        bind: "email",
        edit: { type: "Input", props: { placeholder: "邮箱地址" } },
      },

      请求地址: {
        bind: "url",
        edit: { type: "Input", props: { placeholder: "请求地址" } },
      },

      请求方法: {
        bind: "method",
        edit: {
          type: "Select",
          props: {
            placeholder: "请求方法",
            defaultValue: "GET",
            options: [
              { label: "GET", value: "GET" },
              { label: "POST", value: "POST" },
              { label: "PUT", value: "PUT" },
              { label: "DELETE", value: "DELETE" },
            ],
          },
        },
      },

      请求参数: {
        bind: "query",
        edit: {
          type: "List",
          props: { placeholder: "请求参数", name: "params" },
        },
      },

      请求头: {
        bind: "headers",
        edit: {
          type: "List",
          props: { placeholder: "请求头", name: "params" },
        },
      },

      请求体: {
        bind: "payload",
        edit: {
          type: "CodeEditor",
          props: { placeholder: "请求体", language: "json" },
        },
      },

      脚本: {
        bind: "script",
        edit: {
          type: "CodeEditor",
          props: { placeholder: "编写脚本", language: "javascript" },
        },
      },

      注释: {
        bind: "label",
        edit: { type: "Input", props: { placeholder: "注释" } },
      },

      并发执行: {
        bind: "concurrent",
        edit: {
          type: "RadioGroup",
          props: {
            defaultValue: 0,
            options: [
              { label: "是", value: 1 },
              { label: "否", value: 0 },
            ],
          },
        },
      },

      执行条件: {
        bind: "condition",
        edit: {
          type: "CodeEditor",
          props: {
            placeholder: "条件设定",
            language: "json",
            hideLineNumbers: true,
          },
        },
      },
    },
  };
}

type Setting = {
  flow?: Section[];
  execute?: Section[];
  edge?: Section[];
  types?: Type[];
  fields?: Record<string, Component>;
  defaultValue?: FlowValue | FlowValue[];
};

type Type = {
  name: string;
  label?: string;
  icon?: IconT;
  color?: string;
  background?: string;
  props?: Section[];
};

type Section = { title?: string; columns: Column[] };
type Column = { name: string; width?: number };
type Component = {
  bind: string;
  edit: { type: string; props: Record<string, any> };
};

type FlowNode = {
  id: string;
  type: string;
  position: { x: number; y: number };
  showTargetHandle?: boolean;
  showSourceHandle?: boolean;
  deletable?: boolean;
  props: {
    name?: string;
    label?: string;
    description?: string;
    output?: string;
    [key: string]: any;
  };
};

type FlowEdge = {
  source: string;
  target: string;
  condition?: string;
};

type FlowValue = {
  flow?: {
    name?: string; // the name of the flow
    label?: string; // the label of the flow
    icon?: IconT; // the icon of the flow
    [key: string]: any; // the other properties of the flow
  };

  execute?: {
    input?: any;
    query?: Record<string, any>;
    [key: string]: any;
  };

  nodes?: FlowNode[];
  edges?: FlowEdge[];
  data?: Data[] | Data; // the parsed data, it will be used to execute the flow or display the flow data
};

type Data = {
  [key: string]: any;
};

type IconT =
  | string
  | {
      name: string;
      size?: number;
      color?: string;
    };
