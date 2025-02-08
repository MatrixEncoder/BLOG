import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname.startsWith('/admin')) {
    // Skip auth check for login page
    if (context.url.pathname === '/admin/login') {
      return next();
    }

    const auth = context.cookies.get('admin-auth');
    if (!auth?.value) {
      return context.redirect('/admin/login');
    }
  }
  return next();
});