# 使用说明

这个示例演示如何使用 Yao 实现管理后台或内部用业务系统的基本功能, 主要演示 XGEN 组件的使用方式。

推荐使用 Yao 0.10.4 版运行本示例。 推荐使用 TypeScript 作为脚本开发语言。

[在线演示](https://xgen-dev.iqka.com/)

## Yao v0.10.4 安装下载

### 方式 1：下载制品

在 Actions 页面下载制品，解压后将制品复制到 /usr/local/bin 目录下，并添加执行权限。

如需要放置到其他目录，请将该目录添加到 PATH 环境变量中。

#### Linux 制品

https://github.com/YaoApp/yao/actions/workflows/build-linux.yml

在上面页面选择最新的构建，下载解压后，根据 CPU 架构选择制品文件。支持 x86_64 和 arm64 两种架构。

#### MacOS 制品

https://github.com/YaoApp/yao/actions/workflows/build-macos.yml

在上面页面选择最新的构建，下载解压后，根据 CPU 架构选择制品文件。支持 Intel CPU 和 M1/M2/M3 (arm64) 两种架构。

### 方式 2: 使用 Docker

X86_64 架构的 Docker 镜像：

```bash
docker run -d --name yao -v <project root>:/data/app -p 5099:5099 -p 5077:5077 yaoapp/yao:0.10.4-unstable-amd64-dev
docker exec -it yao /bin/bash
```

Arm64 架构的 Docker 镜像：

```bash
docker run -d --name yao -v <project root>:/data/app -p 5099:5099 -p 5077:5077 yaoapp/yao:0.10.4-unstable-arm64-dev
```

在容器内执行以下命令：

```bash
docker exec -it yao /bin/bash
yao version --all
```

## 运行示例

Git clone 本示例代码到本地，然后执行以下命令：

```bash
git clone https://github.com/YaoApp/xgen-dev-app.git /data/app
cd /data/app
yao start
```

根据命令行提示安装。

**默认管理员账号密码：**

用户名： `xiang@iqka.com`

密码: `A123456p+`

**重置数据命令**

```bash
yao migrate --reset
yao run scripts.init.setData
```
