const fastify = require('fastify')()

fastify.get('/g', (request,reply) => {
    reply.redirect('https://google.com')
})

fastify.listen(3000)
