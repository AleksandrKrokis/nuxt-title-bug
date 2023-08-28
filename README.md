Reproduction of a bug with useSeoMeta()

The key issue appears when we are trying to use `useSeoMeta` with concurrency more than 2.
How to reproduce the issue. 


1. `yarn build && node ./.output/server/index.mjs`
2. `k6 run k6/test.js`

you will see a lot of console logs with message `default title` and only one `Aconcagua`. 
But by the logic is everywhere should be `Aconcagua`.
It could be possible to fix if we would move useSeoMeta to page (`test.vue`). 
But by some reasons it is not applicable for my project because we have 150+ sites in on nuxt project and we don't want move meta controlling to templates.  



NB

If you need k6 tool to run test. [how to install](https://k6.io/docs/get-started/installation/)
