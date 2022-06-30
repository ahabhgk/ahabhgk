import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";
import "https://esm.sh/prismjs@1.27.0/components/prism-typescript.min?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-jsx.min?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-tsx.min?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-bash.min?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-rust.min?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-ocaml.min?no-check";

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
  middlewares: [],
});
