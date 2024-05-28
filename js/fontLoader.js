document.fonts.ready.then(function() {
    // بمجرد تحميل الخطوط بالكامل، قم بإظهار المحتوى
    document.body.classList.add('fonts-loaded');
  });