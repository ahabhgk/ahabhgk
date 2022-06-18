import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  author: "ahabhgk",
  title: "ahabhgk",
  avatar: "avatar.webp",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:ahabhgk@gmail.com" },
    { title: "GitHub", url: "https://github.com/ahabhgk" },
    { title: "Twitter", url: "https://twitter.com/ahabhgk" },
  ],
  middlewares: [
    // ga("UA-XXXXXXXX-X"),
    // redirects({
    //   "/foo": "/my_post",
    //   // you can skip leading slashes too
    //   "bar": "my_post2",
    // }),
  ],
});
