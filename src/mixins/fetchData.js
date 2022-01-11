export default {
    data() {
        return {
            api: null,
            loading: true
        }
    },
    methods: {
        fetchData(page) {
            this.loading = true
            this.api = null
            fetch(`http://localhost:3000/${page}`)
                .then(r => r.json())
                .then(r => {
                    setTimeout(() => {
                        this.api = r
                        this.loading = false
                    }, 1000)
                })
        }
    },
    created() {
        this.fetchData()
    }
}