import { useCallback, useEffect } from 'react';
import BASE from '../components/helpers/base';

const useTitle = ({ title }: { title?: string }) => {
  const handleVisibilityChange = useCallback(() => {
    document.title = document.hidden
      ? `${BASE.title} | Come back!`
      : BASE.title + (title ? ' | ' + title : '');
  }, [title]);

  useEffect(() => {
    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [title, handleVisibilityChange]);

  return title;
};
export default useTitle;
