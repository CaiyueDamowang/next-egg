'use strict';

/**
 * @default : 前台api
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/posts', controller.default.posts.index);
  router.get('/default/posts/getPostsList', controller.default.posts.getPostsList);
};
