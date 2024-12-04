import type { H3Event } from 'h3'

export default cachedEventHandler((event) => {
    return {
        success: true,
        date: new Date().toISOString()
    }
}, {
    maxAge: 60 * 60, // 1 hour
    getKey: (event: H3Event) => event.path
})
