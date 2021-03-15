app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /*html*/`
        <ul class="col-sm-12 col-md-6 col-xl-4">
            <a class="list-group-item list-group-item-action active bookTitle" :href="this.bookObj.selfLink">{{ this.bookObj.volumeInfo.title || "Missing Title"}}</a>
            <div class="list-group-item">
                <div class="bookImg">
                    <img :src="this.bookObj.volumeInfo.imageLinks.thumbnail">
                </div>
            </div>
            <li class="list-group-item">
                <strong>Author(s): </strong>
                <span v-for="(author, index) in this.bookObj.volumeInfo.authors">
                    <span>{{ author }}</span>
                    <span v-if="index + 1 != this.bookObj.volumeInfo.authors.length">, </span>
                </span>
                <span v-if="this.bookObj.volumeInfo.authors === 0">Unknown</span>
            </li>
            <li class="list-group-item">
                <strong>Publisher: </strong>
                <span>{{ this.bookObj.volumeInfo.publisher || "Unknown" }}</span>
            </li>
            <li class="list-group-item">
                <strong>Published Date: </strong>
                <span>{{ this.bookObj.volumeInfo.publishedDate || "Unknown"}}</span>
            </li>
            <li class="list-group-item">
                <strong>Pages: </strong>
                <span>{{ this.bookObj.volumeInfo.pageCount || "Unknown"}}</span>
            </li>
            <li class="list-group-item">

                <strong>Categories: </strong>
                <span v-if="this.bookObj.volumeInfo.categories">
                    <span v-for="(category, index) in this.bookObj.volumeInfo?.categories">
                        <span>{{ category }}</span>
                        <span v-if="index + 1 != this.bookObj.volumeInfo.categories.length">, </span>
                    </span>
                </span>
                <span v-if="!this.bookObj.volumeInfo.categories || this.bookObj.volumeInfo.categories == 0">None</span>
            </li>
        </ul>`,
    computed: {
        bookObj() {
            if(this.book != null){
                return JSON.parse(this.book);
            }
            else {
                return null;
            }
        }
    }
})