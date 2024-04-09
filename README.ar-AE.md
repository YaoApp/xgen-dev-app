# تعليمات الاستخدام

يوضح هذا المثال كيفية استخدام ياو لتنفيذ وظائف الأساسية لإدارة الواجهة الخلفية أو أنظمة الأعمال الداخلية، مع التركيز بشكل أساسي على استخدام مكونات XGEN.

يُوصى بتشغيل هذا المثال باستخدام إصدار ياو 0.10.4. ويُوصى باستخدام TypeScript كلغة برمجة.

## تنزيل وتثبيت ياو v0.10.4

### الطريقة 1: تنزيل القطعة

قم بتنزيل القطعة من صفحة الإجراءات (Actions) ، ثم فك الضغط عن القطعة وانسخها إلى الدليل /usr/local/bin ، ثم قم بإضافة الصلاحيات التنفيذية.

إذا كنت ترغب في وضعها في دليل آخر ، يرجى التأكد من إضافة ذلك الدليل إلى متغير البيئة PATH.

#### القطع لنظام Linux

https://github.com/YaoApp/yao/actions/workflows/build-linux.yml

في الصفحة أعلاه، اختر أحدث بناء، قم بتنزيله وفك الضغط عنه، ثم اختر ملف القطعة استنادًا إلى هندستك المعالج. الهندسات المدعومة هي x86_64 وarm64.

#### القطع لنظام MacOS

https://github.com/YaoApp/yao/actions/workflows/build-macos.yml

في الصفحة أعلاه، اختر أحدث بناء، قم بتنزيله وفك الضغط عنه، ثم اختر ملف القطعة استنادًا إلى هندستك المعالج. الهندسات المدعومة هي معالج Intel و M1/M2/M3 (arm64).

### الطريقة 2: استخدام دوكر

صورة دوكر لهندسة X86_64:

```bash
docker run -d --name yao -v <project root>:/data/app -p 5099:5099 -p 5077:5077 yaoapp/yao:0.10.4-unstable-amd64-dev
docker exec -it yao /bin/bash
```

صورة دوكر لهندسة Arm64:

```bash
docker run -d --name yao -v <project root>:/data/app -p 5099:5099 -p 5077:5077 yaoapp/yao:0.10.4-unstable-arm64-dev
```

قم بتشغيل الأوامر التالية داخل الحاوية:

```bash
docker exec -it yao /bin/bash
yao version --all
```

## تشغيل المثال

انسخ كود المثال هذا محليًا ، ثم قم بتنفيذ الأوامر التالية:

```bash
git clone https://github.com/YaoApp/xgen-dev-app.git /data/app
cd /data/app
yao start
```

اتبع التعليمات على سطر الأوامر للتثبيت.

**معلومات الدخول الافتراضية للمسؤول:**

اسم المستخدم: `xiang@iqka.com`

كلمة المرور: `A123456p+`

**أوامر إعادة تعيين البيانات:**

```bash
yao migrate --reset
yao run scripts.init.setData
```
