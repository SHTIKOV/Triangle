Vue.component('pagination', {
    template: '#pagination-template',
    props: {
        current: {
            type: Number,
            default: 12
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    data: {
        current: 12,
        currentPage: 0
    },
    computed: {
        nextPage: function () {
            let current = this.current;
            this.currentPage += 1;
            return this.$parent.offsetFriends += this.$parent.perPage;
        },
        prevPage: function () {
            if (this.current) {
                this.currentPage += 1;
                return this.$parent.offsetFriends -= this.$parent.perPage;
            } else {
                this.currentPage = 0;
                return this.$parent.offsetFriends = 0;
            }
        },
    },
    methods: {
        changePage: function (page) {
            this.$emit ('page-changed', page);
        }
    }
})
