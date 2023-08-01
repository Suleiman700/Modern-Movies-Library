class Languages {
    data = [
        {
            code: 'en',
            name: 'English',
            textDirection: 'ltr',
            textAlign: 'left',
            textAlignOpposite: 'right',
            translations: {
                popular: 'Popular',
                popular_movies: 'Popular movies',
                top_rated_movies: 'Top rated movies',
                top_rated: 'Top Rated',
                upcoming: 'Upcoming',
                upcoming_movies: 'Upcoming movies',
                search_for_a_movie: 'Search for a movie',
                movies: 'Movies',
                popularity: 'Popularity',
                votes_average: 'Votes Average',
                average_rating: 'Average rating',
                vote: 'Vote',
                votes: 'Votes',
                highest_rating: 'Highest Rating',
                title: 'Title',
                release_date: 'Release Date',
                search_results: 'Search results',
                minutes: 'Minutes',
                there_is_no_synopsis_available: 'There is no synopsis available',
                discover: 'Discover',
                genres: 'Genres',
            },
        },
        {
            code: 'ar',
            name: 'Arabic',
            textDirection: 'rtl',
            textAlign: 'right',
            textAlignOpposite: 'left',
            translations: {
                popular: 'شعبي',
                popular_movies: 'افلام شعبيه',
                top_rated_movies: 'افلام الأفضل تقييمًا',
                top_rated: 'أفضل تقيمًا',
                upcoming: 'افلام قادمه',
                upcoming_movies: 'افلام قادمه',
                search_for_a_movie: 'إبحث عن فيلم',
                movies: 'افلام',
                popularity: 'الشعبية',
                votes_average: 'متوسط التقييمات',
                average_rating: 'معدل التقييمات',
                vote: 'تقييم',
                votes: 'تقييمات',
                highest_rating: 'الاكثر تقييمًا',
                title: 'العنوان',
                release_date: 'تاريخ الاصدار',
                search_results: 'نتائج البحث',
                minutes: 'دقائق',
                there_is_no_synopsis_available: 'لا يوجد ملخص متاح',
                discover: 'إكتشف',
                genres: 'الفئات',
            },
        },
    ]

    constructor() {}

    /**
     * set selected language code
     * @param _languageCode {string} E.g. en
     */
    storeSelectedLanguageCode(_languageCode) {
        localStorage.setItem('movies_library_display_language_code', _languageCode);
    }

    /**
     * get selected language code
     * @return {string} E.g. en
     */
    getSelectedLanguageCode() {
        return localStorage.getItem('movies_library_display_language_code')?localStorage.getItem('movies_library_display_language_code'):'en';
    }

    /**
     * get selected language data
     * @return {{textDirection: string, code: string, textAlign: string, name: string} | {textDirection: string, code: string, textAlign: string, name: string}}
     */
    getSelectedLanguageData() {
        return this.data.find(language => language.code === this.getSelectedLanguageCode())
    }

    /**
     * get language text align
     * @return {string} E.g. left|right
     */
    getSelectedLanguageTextAlign() {
        const languageData = this.getSelectedLanguageData()
        if (languageData) return languageData.textAlign
        else return 'left'
    }

    /**
     * get language text align opposite
     * @return {string} E.g. left|right
     */
    getSelectedLanguageTextAlignOpposite() {
        const languageData = this.getSelectedLanguageData()
        if (languageData) return languageData.textAlignOpposite
        else return 'right'
    }

    /**
     * get language text direction
     * @return {string} E.g. left|right
     */
    getSelectedLanguageTextDirection() {
        const languageData = this.getSelectedLanguageData()
        if (languageData) return languageData.textDirection
        else return 'lrt'
    }

    /**
     * get language name
     * @return {string} E.g. English
     */
    getSelectedLanguageName() {
        const languageData = this.getSelectedLanguageData()
        if (languageData) return languageData.name
        else return 'English'
    }

    getSelectedLanguageTranslations() {
        const languageData = this.getSelectedLanguageData()
        if (languageData) return languageData.translations
        else return this.data[0].translations
    }

    getSelectedLanguageTranslation(_string) {
        let languageTranslations = {}
        const languageData = this.getSelectedLanguageData()
        if (languageData) languageTranslations = languageData.translations
        else languageTranslations = this.data[0].translations

        for (const key in languageTranslations) {
            if (key === _string) {
                return languageTranslations[key];
            }
        }
        return `NO STRING TRANSLATION FOUND FOR [${_string}]`;
    }
}

export default new Languages()
