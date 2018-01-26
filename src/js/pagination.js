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
        },
        perPage: {
            type: Number,
            default: 12
        }
    },
    data: {
        current: 12,
        perPage: 12,
        currentPage: 0
    },
    computed: {
        nextPage: function () {
            let current = this.current;
            let perPage = this.perPage;
            //return this.$parent.perPage += 12;
        },
    },
    methods: {
        changePage: function (page) {
            this.$emit ('page-changed', page);
        }
    }
})

$(window).scroll(function(){
    if ( $(window).scrollTop()+$(window).height() >= $('#load_more').offset ().top-100)  {
        app.getFriends ();
    }
});
