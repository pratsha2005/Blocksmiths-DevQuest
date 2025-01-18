import { LANGUAGES } from "../services/constants";
import { useTranslation } from "react-i18next";
import '../services/i18n'

export function LanguageDropdown() {
    const {i18n} = useTranslation();

    const onChangeLang = (e) => {
      const lang_code = e.target.value;
      i18n.changeLanguage(lang_code);
    };

    return (
      <>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <select defaultValue={i18n.language} onChange={onChangeLang}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </nav>
      </>
  )
}
