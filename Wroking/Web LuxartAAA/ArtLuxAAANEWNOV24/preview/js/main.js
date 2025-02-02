// إنشاء صور بانورامية
const panoramas = [
  new PANOLENS.ImagePanorama('images/01.webp'),
  new PANOLENS.ImagePanorama('images/02.webp'),
  new PANOLENS.ImagePanorama('images/03.webp'),
  new PANOLENS.ImagePanorama('images/04.webp'),
];

// تحديد العنصر الذي سيتم عرض الصور داخله
let imageContainer = document.querySelector('.image-container');

// إنشاء عارض البانوراما
const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true, // التدوير التلقائي
  autoRotateSpeed: 0.3,
  controlBar: true
});

// تحديد مواقع الانتقال بين الصور
var infospotPosition = new THREE.Vector3(2000, 0, 0); // مكان المؤشر

// ربط الصور معًا بحيث يتم الانتقال بينها
for (let i = 0; i < panoramas.length; i++) {
  let nextIndex = (i + 1) % panoramas.length; // يجعل التنقل دائريًا
  panoramas[i].link(panoramas[nextIndex], infospotPosition);
}

// إضافة جميع الصور إلى العارض
panoramas.forEach(panorama => viewer.add(panorama));

// تعيين الصورة الأولى كإفتراضية عند بدء العرض
viewer.setPanorama(panoramas[0]);