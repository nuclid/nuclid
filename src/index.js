import 'babel-polyfill';
import Koa from 'koa';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

let koa = new Koa();

koa.use(async (ctx, next) => {
  if (ctx.request.url === '/favicon.ico') {
    ctx.status = 404;
    return;
  }
  try {
    await next();
  } catch (err) {
    const { message, status } = err;
    ctx.body = { message };
    ctx.status = status || 500;
  }
});

koa.use(async (ctx, next) => {
  await next();
  if (! ctx.body) ctx.body = "No template registered.";
});

export class Nuclid {
  constructor() {
    this.koa = koa;
  }

  register(Comp) {
    koa.use(async (ctx, next) => {
      ctx.body = renderToStaticMarkup(
        <Comp
          posts={[
            { id: 1, title: 'title', text: 'epix' },
            { id: 2, title: 'another title', text: 'Lorem dolor' }
          ]}
        />
      );
    });
  }

  listen(...args) {
    this.koa.listen(...args);
  }
}
