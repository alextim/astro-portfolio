const escapeHTML = (s: string | undefined) => {
  if (!s) {
    return '';
  }
  return s.replace(/[&<>'"]/g, (tag: string) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
};

export default escapeHTML;
