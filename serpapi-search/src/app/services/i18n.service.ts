import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupportedLanguage, translations } from '../utils/translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly storageKey = 'serpapi-language';
  private currentLang: SupportedLanguage = 'en';
  private readonly language$ = new BehaviorSubject<SupportedLanguage>(this.currentLang);

  constructor() {
    const saved = localStorage.getItem(this.storageKey) as SupportedLanguage | null;
    if (saved && translations[saved]) {
      this.currentLang = saved;
      this.language$.next(saved);
    }
  }

  setLanguage(lang: SupportedLanguage): void {
    if (translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem(this.storageKey, lang);
      this.language$.next(lang);
    }
  }

  getLanguage() {
    return this.language$.asObservable();
  }

  translate(key: keyof typeof translations['en']): string {
    return translations[this.currentLang][key];
  }
}
