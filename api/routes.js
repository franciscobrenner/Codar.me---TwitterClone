import Router from '@koa/router'

export const router = new Router()

const tweets = []

router.get('/tweets', ctx => {
  ctx.body = tweets
})

router.post('/tweets', ctx => {
  const tweet = ctx.request.body
  tweets.push(tweet)
  ctx.body = tweet
})
