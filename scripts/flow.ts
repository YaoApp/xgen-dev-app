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
    defaultValue: [], // or {}

    // The list of available flow types that the user can add to the canvas.
    types: [
      {
        label: "AI 数据处理",
        name: "AI-Data",
        icon: "material-psychology",
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
        icon: "material-psychology",
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
        name: "RedirectTo",
        icon: "material-http",
        color: "#16a34a",
        background: "primary",
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
        name: "RedirectTo",
        icon: "material-sms",
        color: "primary",
        background: "primary",
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
        name: "RedirectTo",
        icon: "material-mail",
        color: "primary",
        background: "primary",
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
        edit: { type: "TextArea", props: { placeholder: "功能简介" } },
      },

      内容: {
        bind: "content",
        edit: { type: "TextArea", props: { placeholder: "内容" } },
      },

      提示词: {
        bind: "prompt",
        edit: {
          type: "CodeEditor",
          props: { placeholder: "请输入 AI 提示词", language: "yaml" },
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
          defaultValue: 3,
          props: { placeholder: "重试次数", type: "number" },
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
          props: { placeholder: "编写脚本", language: "typescirpt" },
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
