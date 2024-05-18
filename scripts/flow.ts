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
function BuilderSetting() {
  return {
    // Array of FlowValue or single FlowValue to be displayed in the builder, when the builder is initialized and the value is empty, it will display an empty canvas.
    // It it not required to set a default value, but you can set it to an empty array or object.
    defaultValue: [
      {
        label: "AI 制作海报",
        name: "AI-Poster",
        icon: "material-brush",
        description: "根据输入的文本生成海报",
        mock: [
          {
            prompt: `白灵淼:
大傩世界侧李火旺的妻子，性格外柔内刚，曾经和李火旺一起是清风观中的“药引”。
因为李火旺“火烧白家人”事件而和李火旺产生隔阂。曾经因煞气入体而导致性格大变（后被驱散），
后成为白莲教圣女（无生老母的心蟠）并在法教战役中获得成长并立下战功，
在对抗福生天司命的战役中主动带头重新感染煞气，最终与无生老母融合。
`,
          },
        ],
        nodes: [
          {
            id: "1",
            name: "keywords",
            position: { x: 0, y: 0 },
            type: "AI-Data",
            description: "根据输入的文本提取海报关键词",
            showTargetHandle: false,
            props: {
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
        label: "AI 制作人物卡片",
        name: "AI-Poster",
        icon: "material-badge",
        description: "根据输入的文本生成海报",
        mock: [
          {
            prompt: `
白灵淼:
大傩世界侧李火旺的妻子，性格外柔内刚，曾经和李火旺一起是清风观中的“药引”。
因为李火旺“火烧白家人”事件而和李火旺产生隔阂。曾经因煞气入体而导致性格大变（后被驱散），
后成为白莲教圣女（无生老母的心蟠）并在法教战役中获得成长并立下战功，
在对抗福生天司命的战役中主动带头重新感染煞气，最终与无生老母融合。
`,
          },
        ],
        nodes: [
          {
            id: "1",
            name: "keywords",
            position: { x: 0, y: 0 },
            type: "AI-Data",
            description: "根据输入的文本提取人物卡片关键词",
            showTargetHandle: false,
            props: {
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

    fields: {
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
    },
  };
}

type FlowNode = {
  id: string;
  position: { x: number; y: number };
  type: string;
  description: string;
  props: {};
  output?: any;
  showTargetHandle?: boolean;
  showSourceHandle?: boolean;
};

type FlowEdge = {
  source: string;
  target: string;
  condition?: string;
};

type FlowValue = {
  name?: string; // the name of the flow
  label?: string; // the label of the flow
  icon?: string | { name: string; size: number }; // the icon of the flow
  mock?: any[]; // the latest mock data of the flow
  data?: Data[] | Data;
  nodes?: FlowNode[];
  edges?: FlowEdge[];
};

type Data = {
  [key: string]: any;
};
