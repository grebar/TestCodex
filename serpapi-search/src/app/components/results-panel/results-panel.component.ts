import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SerpApiResponse } from '../../models/serpapi-response';
import { SearchType } from '../../models/search-options';

@Component({
  selector: 'app-results-panel',
  templateUrl: './results-panel.component.html',
  styleUrls: ['./results-panel.component.scss'],
})
export class ResultsPanelComponent {
  @Input() response?: SerpApiResponse | null;
  @Input() type: SearchType = 'web';
  @Input() loading = false;
  @Input() error?: string | null;
  @Input() translate!: (key: any) => string;
  @Input() page = 1;

  @Output() pageChange = new EventEmitter<number>();

  get hasResults(): boolean {
    if (!this.response) return false;
    if (this.type === 'image') {
      return Boolean(this.response.images_results?.length || this.response.inline_images?.length);
    }
    return Boolean(this.response.organic_results?.length);
  }

  next(): void {
    this.pageChange.emit(this.page + 1);
  }

  prev(): void {
    if (this.page > 1) {
      this.pageChange.emit(this.page - 1);
    }
  }
}
