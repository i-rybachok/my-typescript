// * Base
import { ELanguage } from '../types/Language.types';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';

const Language = memo(() => {
  const [showList, setShowList] = useState<boolean>(false);
  const [language, setlanguage] = useState(ELanguage.UA);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: ELanguage) => {
    i18n.changeLanguage(lang).then(() => {
      setlanguage(lang);
      setShowList(false);
    });
  };

  return (
    <div className='relative'>
      <button
        type='button'
        className='link'
        onClick={() => setShowList((prev) => !prev)}
      >
        {t(language)}
      </button>
      {showList && <List changeLanguage={changeLanguage} />}
    </div>
  );
});

const List = memo(
  ({ changeLanguage }: { changeLanguage: (lang: ELanguage) => void }) => (
    <ul className='absolute top-full right-0 bg-orange-500 border border-white rounded-lg'>
      <Item changeLanguage={changeLanguage} lang={ELanguage.UA} />
      <Item changeLanguage={changeLanguage} lang={ELanguage.EN} />
    </ul>
  )
);

const Item = memo(
  ({
    lang,
    changeLanguage,
  }: {
    lang: ELanguage;
    changeLanguage: (lang: ELanguage) => void;
  }) => {
    const { t } = useTranslation();

    return (
      <li
        className='p-2 cursor-pointer text-white'
        onClick={() => changeLanguage(lang)}
      >
        {t(lang)}
      </li>
    );
  }
);

export default Language;
