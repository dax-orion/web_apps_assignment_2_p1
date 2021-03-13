const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            maxResults: 20,
            pageNumber: 0,
            totalItems: 0
        }
    },
    methods: {
        newSearch(){
            this.pageNumber = 0;
            this.totalItems = 0;
            this.searchGoogleBooks();
        },
        searchGoogleBooks() {
            fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.keyword + "&startIndex=" + this.startIndex + "&maxResults=" + this.maxResults)
                .then(response => response.json())
                .then(json => {
                    this.result = json;
                    if(this.pageNumber === 0){
                        this.totalItems = this.result.totalItems;
                    }
                });
        },
        decrementPage() {
            if(this.pageNumber > 0){
                this.pageNumber--;
            }
            this.searchGoogleBooks();
        },
        incrementPage() {
            this.pageNumber++;
            this.searchGoogleBooks()
        }
    },
    computed: {
        startIndex(){
            return this.pageNumber*this.maxResults;
        },
        pageNumberDisplay(){
            return this.pageNumber + 1;
        }
    }
});