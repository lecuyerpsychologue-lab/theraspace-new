/**
 * Custom hook for sharing content
 */
export function useShare() {
  const canShare = typeof navigator !== 'undefined' && navigator.share;

  const share = async (data) => {
    if (!canShare) {
      console.warn('Web Share API not supported');
      return false;
    }

    try {
      await navigator.share({
        title: data.title || 'TheraSpace',
        text: data.text || '',
        url: data.url || window.location.href,
      });
      return true;
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
      return false;
    }
  };

  return { canShare, share };
}
