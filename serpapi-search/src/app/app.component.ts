import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SerpApiService } from './services/serpapi.service';
import { SerpApiResponse } from './models/serpapi-response';
import { I18nService } from './services/i18n.service';
import { SearchOptions, SearchType } from './models/search-options';
import { SupportedLanguage } from './utils/translations';
import { RequestCounterService } from './services/request-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'serpapi-search';
  loading = false;
  error: string | null = null;
  response: SerpApiResponse | null = null;
  currentType: SearchType = 'web';
  currentPage = 1;
  language: SupportedLanguage = 'en';
  requestsUsed = 0;
  limit = this.counter.limitValue;
  private lastOptions?: SearchOptions;
  private subscriptions = new Subscription();

  constructor(
    private serpApi: SerpApiService,
    private i18n: I18nService,
    private counter: RequestCounterService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.i18n.getLanguage().subscribe((lang) => {
        this.language = lang;
      })
    );

    this.subscriptions.add(
      this.counter.count$.subscribe((count) => {
        this.requestsUsed = count;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  translate = (key: any) => this.i18n.translate(key);

  onLanguageChange(lang: SupportedLanguage): void {
    this.i18n.setLanguage(lang);
  }

  onSearch(options: SearchOptions): void {
    this.loading = true;
    this.error = null;
    this.response = null;
    this.currentType = options.type;
    this.currentPage = options.page;
    this.lastOptions = options;

    this.serpApi.search(options).subscribe({
      next: (res) => {
        this.loading = false;
        this.response = res;
        this.counter.increment();
      },
      error: (err: Error) => {
        this.loading = false;
        const message = err.message?.toLowerCase() ?? '';
        if (message.includes('quota') || message.includes('limit')) {
          this.error = this.translate('errorQuota');
        } else {
          this.error = this.translate('errorGeneric');
        }
        this.counter.increment();
      },
    });
  }

  onPageChange(page: number): void {
    if (!this.lastOptions) return;
    const nextOptions: SearchOptions = {
      ...this.lastOptions,
      page,
    };
    this.onSearch(nextOptions);
  }

  resetCounter(): void {
    this.counter.reset();
  }
}
