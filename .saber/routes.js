
    export default [
      {
              path: "/",
              meta: {
                __relative: 'index.vue',
                __pageId: '3ca0195e'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-vue" */ "D:/fherl/Projects/Web Development/portfolio/pages/index.vue?saberPage=3ca0195e")
                
              }
            },
{
              path: "/page1.html",
              meta: {
                __relative: 'page1.vue',
                __pageId: 'c24befe4'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--page1-vue" */ "D:/fherl/Projects/Web Development/portfolio/pages/page1.vue?saberPage=c24befe4")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "D:/fherl/Projects/Web Development/portfolio/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]