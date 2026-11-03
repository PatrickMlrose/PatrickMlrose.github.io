window.CMS_MANUAL_INIT = true;
const status = document.getElementById('editor-status');
try {
  const { init } = await import('@sveltia/cms');
  await init();
  status?.remove();
} catch (error) {
  if (status) status.firstChild.textContent = '暂时未能打开写作后台，请刷新重试。';
  console.error('Unable to initialize the blog editor', error.name);
}
