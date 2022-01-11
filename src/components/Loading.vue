<template>
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: "Loading"
}
</script>

<style lang="scss" scoped>
    .loading {
        span {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #4b8;
            margin: 4px;
            animation: dots .6s cubic-bezier(.6, .1, 1, .4) infinite alternate;

            &:nth-of-type(1) {
                animation-delay: .1s;
            }
            &:nth-of-type(2) {
                animation-delay: .2s;
            }
            &:nth-of-type(3) {
                animation-delay: .3s;
            }
            &:nth-of-type(4) {
                animation-delay: .4s;
            }
        }
    }
    @keyframes dots {
        from {
            transform: translate3d(0,0,0)
        }
        to {
            transform: translate3d(0, 30px, 0)
        }
    }
</style>