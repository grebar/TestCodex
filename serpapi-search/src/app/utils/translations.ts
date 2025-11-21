export type SupportedLanguage = 'en' | 'it' | 'es';

type TranslationKeys =
  | 'title'
  | 'subtitle'
  | 'queryPlaceholder'
  | 'searchButton'
  | 'searchType'
  | 'webSearch'
  | 'imageSearch'
  | 'dateFilter'
  | 'siteFilter'
  | 'languageLabel'
  | 'apiKeyLabel'
  | 'saveKey'
  | 'results'
  | 'noResults'
  | 'errorGeneric'
  | 'errorQuota'
  | 'resetCounter'
  | 'requestsUsed'
  | 'itemsFrom'
  | 'formHelp'
  | 'pageLabel';

export const translations: Record<SupportedLanguage, Record<TranslationKeys, string>> = {
  en: {
    title: 'Google Search via SerpApi',
    subtitle: 'Client-only Angular SPA using SerpApi (Google Search) with images, date restrict, and site filters.',
    queryPlaceholder: 'Search on Google…',
    searchButton: 'Search',
    searchType: 'Type',
    webSearch: 'Web',
    imageSearch: 'Images',
    dateFilter: 'Date range',
    siteFilter: 'Site filter',
    languageLabel: 'Language',
    apiKeyLabel: 'SerpApi API Key',
    saveKey: 'Save key',
    results: 'Results',
    noResults: 'No results found',
    errorGeneric: 'Something went wrong. Try again later.',
    errorQuota: 'Quota exceeded: free tier allows up to 250 requests.',
    resetCounter: 'Reset counter',
    requestsUsed: 'Requests used',
    itemsFrom: 'items from SerpApi',
    formHelp: 'Use date restrict and site filter to refine your queries.',
    pageLabel: 'Page'
  },
  it: {
    title: 'Ricerca Google via SerpApi',
    subtitle: 'SPA Angular solo client che usa SerpApi (Google Search) con immagini, filtro data e sito.',
    queryPlaceholder: 'Cerca su Google…',
    searchButton: 'Cerca',
    searchType: 'Tipologia',
    webSearch: 'Web',
    imageSearch: 'Immagini',
    dateFilter: 'Intervallo data',
    siteFilter: 'Filtro sito',
    languageLabel: 'Lingua',
    apiKeyLabel: 'Chiave API SerpApi',
    saveKey: 'Salva chiave',
    results: 'Risultati',
    noResults: 'Nessun risultato trovato',
    errorGeneric: 'Si è verificato un errore. Riprova più tardi.',
    errorQuota: 'Quota superata: il piano free permette fino a 250 richieste.',
    resetCounter: 'Azzera contatore',
    requestsUsed: 'Richieste usate',
    itemsFrom: 'elementi da SerpApi',
    formHelp: 'Usa filtro data e sito per affinare le ricerche.',
    pageLabel: 'Pagina'
  },
  es: {
    title: 'Búsqueda de Google vía SerpApi',
    subtitle: 'SPA Angular solo cliente que usa SerpApi (Google Search) con imágenes, rango de fechas y filtro de sitio.',
    queryPlaceholder: 'Buscar en Google…',
    searchButton: 'Buscar',
    searchType: 'Tipo',
    webSearch: 'Web',
    imageSearch: 'Imágenes',
    dateFilter: 'Rango de fechas',
    siteFilter: 'Filtro de sitio',
    languageLabel: 'Idioma',
    apiKeyLabel: 'Clave API SerpApi',
    saveKey: 'Guardar clave',
    results: 'Resultados',
    noResults: 'No se encontraron resultados',
    errorGeneric: 'Algo salió mal. Inténtalo de nuevo más tarde.',
    errorQuota: 'Cuota excedida: el plan gratuito permite hasta 250 solicitudes.',
    resetCounter: 'Reiniciar contador',
    requestsUsed: 'Solicitudes usadas',
    itemsFrom: 'elementos de SerpApi',
    formHelp: 'Usa rango de fechas y filtro de sitio para afinar las búsquedas.',
    pageLabel: 'Página'
  }
};
