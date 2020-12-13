import {
  app,
  get,
  post,
  redirect,
  contentType,
} from "https://denopkg.com/syumai/dinatra/mod.ts";


app(
  get("/", (x: unknown) => {
    console.log(x)
    return "whatever"
  }),
);
