import Router from 'next/router';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

function redirect(ctx) {
  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: '/login'
    })
    ctx.res.end()
  } else {
    Router.push('/login')
  }
}

function parseCookies(request) {
  let cookies = {},
    rc = request.headers.cookie;

  rc && rc.split(';').forEach(function(cookie) {
    let parts = cookie.split('=');
    cookies[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return cookies;
}

export async function handleAuthSSR(ctx) {
  let token = null;
  let baseUrl = '';
  
  if (ctx.req) {
    baseUrl = `${ ctx.req.protocol }://${ ctx.req.get('host') }`
    token = parseCookies(ctx.req).token;
  }
  else {
    token = cookies.get('token')
  }

  try {
    const res = await fetch(baseUrl + '/auth/validate', {
      method: 'POST',
      headers: { 'Authorization': token }
    });

    if (res.status != 200) {
      redirect(ctx)
    }
  } catch (err) {
    redirect(ctx);
  }
}
