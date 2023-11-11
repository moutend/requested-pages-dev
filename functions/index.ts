export const onRequestGet: PagesFunction<Env> = async (context) => {
  const o = {
    headers: {},
    cf: context.request.cf,
  };

  context.request.headers.forEach((value, name) => {
    o.headers[name] = value;
  });

  return new Response(JSON.stringify(o, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
