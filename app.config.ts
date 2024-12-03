export default defineAppConfig({
    pageTransition: {
        name: 'fade',
        mode: 'out-in' // default
    },
    layoutTransition: {
        name: 'slide',
        mode: 'out-in' // default
    },
    head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
    },
    ui: {
        global: true
    },
    container: {
        constrained: 'max-w-5xl'
    }
})
