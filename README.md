# Usage

[中文](README.zh-CN.md) | [العربية](README.ar-AE.md)

This example demonstrates how to use Yao to implement basic functionalities for managing backend or internal business systems, focusing primarily on the usage of XGEN components.

It is recommended to run this example with Yao version 0.10.4. TypeScript is recommended as the scripting language.

## Yao v0.10.4 Installation & Download

### Method 1: Download Artifacts

Download artifacts from the Actions page, unzip the downloaded file, copy the artifacts to the /usr/local/bin directory, and grant execution permissions.

If you wish to place them in a different directory, please ensure to add that directory to the PATH environment variable.

#### Linux Artifacts

https://github.com/YaoApp/yao/actions/workflows/build-linux.yml

On the above page, select the latest build, download and unzip it, then choose the artifact file based on your CPU architecture. Supported architectures are x86_64 and arm64.

#### MacOS Artifacts

https://github.com/YaoApp/yao/actions/workflows/build-macos.yml

On the above page, select the latest build, download and unzip it, then choose the artifact file based on your CPU architecture. Supported architectures are Intel CPU and M1/M2/M3 (arm64).

### Method 2: Use Docker

For X86_64 architecture Docker image:

```bash
docker run -d --name yao -v <project root>:/data/app -p 5099:5099 -p 5077:5077 yaoapp/yao:0.10.4-unstable-amd64-dev
docker exec -it yao /bin/bash
```

For Arm64 architecture Docker image:

```bash
docker run -d --name yao -v <project root>:/data/app -p 5099:5099 -p 5077:5077 yaoapp/yao:0.10.4-unstable-arm64-dev
```

Run the following commands inside the container:

```bash
docker exec -it yao /bin/bash
yao version --all
```

## Running the Example

Clone this example code locally, then execute the following commands:

```bash
git clone https://github.com/YaoApp/xgen-dev-app.git /data/app
cd /data/app
yao start
```

Follow the command-line prompts for installation.

**Default admin account credentials:**

Username: `xiang@iqka.com`

Password: `A123456p+`

**Reset Data Commands:**

```bash
yao migrate --reset
yao run scripts.init.setData
```
