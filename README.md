# Landing Page - React + Vite + Tailwind CSS v4

صفحة الهبوط الحديثة بتصميم داكن مع فيديو خلفية وتأثيرات حركة احترافية.

## المميزات ✨

- **React 18** مع **Vite** للبناء السريع
- **Tailwind CSS v4** مع `@tailwindcss/vite`
- **Framer Motion** للحركات السلسة والديناميكية
- **HLS.js** لتشغيل فيديوهات البث المباشر من Mux
- **Lucide React** للأيقونات الحديثة
- **Glassmorphism** تصميم الزجاج الشفاف
- **TypeWriter Effect** لتأثير الكتابة المتحركة

## المكونات الرئيسية 🏗️

### Navbar
- شريط تنقل بتصميم glassmorphism
- شعار مع أيقونة
- روابط التنقل (Features, Pricing, About)
- أزرار Sign Up و Login
- حركة فيديو عند التحميل

### BackgroundVideo
- فيديو خلفية بدقة عالية من Mux
- يدعم HLS streaming مع fallback للمتصفحات المختلفة
- `autoplay`, `muted`, `loop` تلقائياً

### Hero Section
- عنوان رئيسي بخط Instrument Serif
- نص توضيحي بخط Inter
- نموذج البريد الإلكتروني مع typewriter effect
- زر "Get early access" يتحول إلى نموذج
- تأثير الكتابة لنص placeholder
- يعود للزر بعد 4 ثوانٍ من الإرسال

## الإعداد والتشغيل 🚀

### المتطلبات
- Node.js 16+ و npm/yarn

### خطوات التثبيت

```bash
# 1. انتقل إلى مجلد المشروع
cd /path/to/project

# 2. ثبت المتطلبات
npm install

# 3. ابدأ خادم التطوير
npm run dev

# 4. افتح المتصفح على http://localhost:5173
```

### البناء للإنتاج

```bash
npm run build
```

## الملفات الرئيسية 📁

```
.
├── index.html           # نقطة دخول HTML
├── main.jsx            # نقطة دخول React
├── index.css           # الأنماط والخطوط
├── vite.config.js      # إعدادات Vite
├── package.json        # المتطلبات
├── App.jsx             # مكون التطبيق الرئيسي
└── components/
    ├── Navbar.jsx      # شريط التنقل
    ├── Hero.jsx        # القسم الرئيسي
    └── BackgroundVideo.jsx  # مشغل الفيديو
```

## الألوان والقيم 🎨

- **الخلفية**: `#000000` (أسود)
- **النص الأمامي**: `#ffffff` (أبيض)
- **Glassmorphism**: `rgba(255,255,255,0.01)` مع blur
- **Glass Pill**: `rgba(255,255,255,0.04)` مع blur أقوى

## الخطوط 🔤

- **Inter**: 300, 400, 500, 600 weights (من Google Fonts)
- **Instrument Serif**: للعنوان الرئيسي

## الفيديو 🎬

- **المصدر**: Mux HLS Stream
- **الرابط**: `https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8`
- **الدعم**: Safari (native) + Chrome/Firefox (hls.js)

## التخصيص 🎯

### تغيير اسم العلامة التجارية
في `components/Navbar.jsx`, غير "Asme" إلى اسم علامتك.

### تحديث الفيديو الخلفية
في `components/BackgroundVideo.jsx`, غير رابط `hlsUrl`:
```javascript
const hlsUrl = 'YOUR_NEW_HLS_STREAM_URL'
```

### تعديل النصوص
في `components/Hero.jsx`:
- العنوان الرئيسي
- النص التوضيحي
- رسائل النموذج

## الملاحظات التقنية ⚙️

- **الحركات**: تستخدم `framer-motion` مع شريط المحرك الذي يدعم SVG و CSS
- **CSS المتقدم**: gradient text، backdrop-filter، layer masks
- **التوافقية**: تم اختبار على متصفحات حديثة (Chrome, Firefox, Safari, Edge)

## الترخيص 📜

هذا المشروع مفتوح المصدر ومتاح للاستخدام الشخصي والتجاري.
