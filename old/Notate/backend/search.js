export class SearchHandler {
  // Constants Definitions
  static currentEngineIndex = 0;
  static searchEngineProviders = [
    {
      name: 'Google',
      URLPrefix: 'https://www.google.com/search?q=',
      favicon: 'https://www.google.com/favicon.ico'
    },
    {
      name: 'Bing',
      URLPrefix: 'https://www.bing.com/search?q=',
      favicon: 'https://www.bing.com/favicon.ico'
    },
    {
      name: 'Yahoo',
      URLPrefix: 'https://search.yahoo.com/search?p=',
      favicon: 'https://search.yahoo.com/favicon.ico'
    },
    {
      name: 'DuckDuckGo',
      URLPrefix: 'https://duckduckgo.com/?q=',
      favicon: 'https://duckduckgo.com/favicon.ico'
    },
    {
      name: 'Baidu',
      URLPrefix: 'https://www.baidu.com/s?wd=',
      favicon: 'https://www.baidu.com/favicon.ico'
    },
    {
      name: 'Yandex',
      URLPrefix: 'https://yandex.com/search/?text=',
      favicon: 'https://yandex.com/favicon.ico'
    },
    {
      name: 'Ecosia',
      URLPrefix: 'https://www.ecosia.org/search?q=',
      favicon: 'https://www.ecosia.org/favicon.ico'
    },
    {
      name: 'PerplexityAI',
      URLPrefix: 'https://perplexity.ai/search?q=',
      favicon: 'https://perplexity.ai/favicon.ico'
    }
  ];

  // Method Definitions
  static selectSearchEngine(index) {
    const searchEngineBtn = $('.search-engine-btn');
    const searchEngine = this.searchEngineProviders[index];

    searchEngineBtn.find('.search-engine-favicon').attr('src', searchEngine.favicon);
    searchEngineBtn.find('.search-engine-name').text(searchEngine.name);

    this.currentEngineIndex = index;
  }

  static performSearch() {
    const searchTerm = $('#searchInput').val().trim();
    const currentSearchEngine = this.searchEngineProviders[this.currentEngineIndex];

    if (searchTerm !== '') {
      const searchURL = currentSearchEngine.URLPrefix + encodeURIComponent(searchTerm);
      window.location.href = searchURL;
    }
  }

  static handleSearchInputKeydown = (event) => {
    if (event.key === 'Enter') {
      this.performSearch();
    }
  };

  static handleSearchEngineSelectorClick = () => {
    const newIndex = (this.currentEngineIndex + 1) % this.searchEngineProviders.length;
    this.selectSearchEngine(newIndex);
  };
}
