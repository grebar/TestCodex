import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RequestCounterService {
  private readonly storageKey = 'serpapi-request-count';
  private readonly limit = 250;
  private readonly counter$ = new BehaviorSubject<number>(0);

  constructor() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      const parsed = Number.parseInt(stored, 10);
      if (!Number.isNaN(parsed)) {
        this.counter$.next(parsed);
      }
    }
  }

  get count$() {
    return this.counter$.asObservable();
  }

  get limitValue() {
    return this.limit;
  }

  increment(): void {
    const next = this.counter$.value + 1;
    this.counter$.next(next);
    localStorage.setItem(this.storageKey, String(next));
  }

  reset(): void {
    this.counter$.next(0);
    localStorage.removeItem(this.storageKey);
  }
}
