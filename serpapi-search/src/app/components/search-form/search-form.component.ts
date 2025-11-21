import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchOptions, SearchType } from '../../models/search-options';
import { SupportedLanguage } from '../../utils/translations';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnChanges {
  @Input() translate!: (key: any) => string;
  @Input() language: SupportedLanguage = 'en';
  @Input() loading = false;

  @Output() search = new EventEmitter<SearchOptions>();
  @Output() languageChange = new EventEmitter<SupportedLanguage>();
  @Output() apiKeyChange = new EventEmitter<string>();

  form!: FormGroup;
  readonly languages: SupportedLanguage[] = ['en', 'it', 'es'];
  readonly dateOptions = [
    { value: '', label: '-' },
    { value: 'd', label: '24h' },
    { value: 'w', label: '7d' },
    { value: 'm', label: '30d' },
    { value: 'y', label: '1y' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const storedKey = localStorage.getItem('serpapi-key') ?? '';
    this.form = this.fb.group({
      query: ['', Validators.required],
      type: ['web' as SearchType],
      dateRestrict: [''],
      siteSearch: [''],
      language: [this.language],
      apiKey: [storedKey, Validators.required],
      page: [1],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['language'] && this.form) {
      this.form.get('language')?.setValue(this.language, { emitEvent: false });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.value;
    const options: SearchOptions = {
      query: value.query,
      apiKey: value.apiKey,
      type: value.type,
      dateRestrict: value.dateRestrict || undefined,
      siteSearch: value.siteSearch || undefined,
      language: value.language,
      page: value.page ?? 1,
    };

    localStorage.setItem('serpapi-key', value.apiKey);
    this.apiKeyChange.emit(value.apiKey);
    this.search.emit(options);
  }

  onLanguageChange(lang: SupportedLanguage): void {
    this.language = lang;
    this.languageChange.emit(lang);
  }
}
