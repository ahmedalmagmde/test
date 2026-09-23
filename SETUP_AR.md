# دليل الإعداد 🇸🇦

## متطلبات النظام

- **Node.js**: الإصدار 16 أو أحدث
- **npm** أو **yarn**
- **متصفح حديث**: Chrome, Firefox, Safari, Edge

## خطوات التثبيت والتشغيل

### 1️⃣ تثبيت المتطلبات

```bash
npm install
```

هذا الأمر سيثبت جميع الحزم المطلوبة:
- React و React DOM
- Vite (أداة البناء السريعة)
- Tailwind CSS v4
- Framer Motion (مكتبة الحركات)
- HLS.js (لتشغيل الفيديو)
- Lucide React (الأيقونات)

### 2️⃣ تشغيل خادم التطوير

```bash
npm run dev
```

سيظهر عنوان محلي مثل:
```
Local:   http://localhost:5173
```

انسخ الرابط والصقه في متصفحك.

### 3️⃣ البناء للإنتاج

عندما تكون جاهزاً للنشر:

```bash
npm run build
```

هذا سينشئ مجلد `dist` يحتوي على ملفات الإنتاج الجاهزة.

لمعاينة بناء الإنتاج محلياً:

```bash
npm run preview
```

## هيكل المشروع 📂

```
.
├── 📄 index.html              # ملف HTML الرئيسي
├── 🔧 main.jsx                # نقطة الدخول لـ React
├── 🎨 index.css               # الأنماط والخطوط
├── ⚙️ vite.config.js          # إعدادات Vite
├── 🎛️ tailwind.config.js      # إعدادات Tailwind
├── 📦 package.json            # المتطلبات والإصدارات
├── 🚀 App.jsx                 # مكون التطبيق الرئيسي
├── 📁 components/             # مكونات React
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   └── BackgroundVideo.jsx
├── 📖 README.md               # التوثيق الكامل
├── 🇸🇦 SETUP_AR.md            # هذا الملف
└── .gitignore                 # ملفات Git المستثناة
```

## المشاكل الشائعة وحلولها 🔧

### المشكلة: الفيديو لا يشتغل

**الحل:**
- تأكد من اتصالك بالإنترنت (الفيديو يأتي من Mux)
- جرب متصفح مختلف
- تحقق من أن `hlsUrl` في `BackgroundVideo.jsx` صحيحة

### المشكلة: الخطوط لا تظهر بشكل صحيح

**الحل:**
- امسح ذاكرة المتصفح (cache)
- أعد تحميل الصفحة (Ctrl+Shift+R)
- تأكد من الاتصال بـ Google Fonts

### المشكلة: الحركات بطيئة

**الحل:**
- تحقق من أداء الجهاز
- قلل التأثيرات البصرية (backdrop-filter)
- ابدأ بمتصفح بدون إضافات

## التخصيص السريع ⚡

### تغيير الألوان

في `index.css`:
```css
:root {
  --background: #000000;
  --foreground: #ffffff;
}
```

### تغيير الخطوط

في `index.css`:
```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

### تغيير اسم العلامة التجارية

في `components/Navbar.jsx`:
```jsx
<span className="text-white font-semibold text-lg">Asme</span>
// غيرها إلى اسمك
```

### تحديث نص الصفحة

في `components/Hero.jsx`:
- عدّل `fullPlaceholder` لتغيير نص البريد
- عدّل نص الزر `Get early access`

## نشر المشروع 🚀

### على Vercel (الخيار الأسهل)

```bash
npm i -g vercel
vercel
```

### على Netlify

```bash
npm run build
# ثم اسحب المجلد `dist` إلى Netlify
```

### على خادم خاص

```bash
npm run build
# انسخ محتوى `dist` إلى خادمك
```

## الموارد والمراجع 📚

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Mux Video](https://www.mux.com)
- [Lucide Icons](https://lucide.dev)

## الدعم والمساعدة 💬

إذا واجهت مشاكل:

1. تحقق من [README.md](./README.md)
2. افتح مشكلة (Issue) في المستودع
3. تحقق من سجل المتصفح (Console)

---

**ملاحظة**: هذا المشروع يتطلب Node.js و npm مثبتين على جهازك. إذا لم تكن قد ثبتهما، انتقل إلى https://nodejs.org
