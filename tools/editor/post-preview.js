export function registerPostPreview({ React, registerPreviewTemplate, registerPreviewStyle }) {
  const el = React.createElement;

  function PostPreview({ entry, widgetFor, getAsset }) {
    const data = entry.get('data');
    const title = data.get('title') || '文章标题';
    const date = String(data.get('date') || '').slice(0, 10);
    const categories = data.get('categories');
    const section = categories?.join(' / ') || '手记';
    const cover = data.get('image');
    const coverPath = typeof cover === 'string' ? cover : cover?.get?.('path');
    const coverUrl = coverPath && getAsset(coverPath)?.url;
    return el('article', { className: 'proof-page' },
      el('header', {},
        el('small', { className: 'proof-kicker' }, 'PATRICKMLROSE / FIELD NOTES'),
        el('h1', { 'data-key-path': 'title' }, title),
        data.get('description') && el('p', { className: 'proof-deck', 'data-key-path': 'description' }, data.get('description')),
        el('p', { className: 'proof-meta' }, [date, section].filter(Boolean).join(' · ')),
        coverUrl && el('img', { className: 'proof-cover', src: coverUrl, alt: '', 'data-key-path': 'image' })
      ),
      el('div', { className: 'proof-body' }, widgetFor('body'))
    );
  }
  registerPreviewTemplate('posts', PostPreview);
  registerPreviewStyle('/admin/proof.css', { collection: 'posts' });
}
