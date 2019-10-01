
    export default [
      ,
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "D:/fherl/Projects/Web Development/portfolio/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]