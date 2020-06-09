'use strict';

const Controller = require('egg').Controller;

class indexController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'posts api';
  }
  async getPostsList() {
    const { ctx } = this;
    const posts = await this.app.mysql.select('posts', {});

    ctx.body = [ posts ];
  }
}

module.exports = indexController;
