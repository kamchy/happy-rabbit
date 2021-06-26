import { h } from "https://deno.land/x/sift@0.1.7/mod.ts";
export default function Mood (props) {
  return (
  
  <a href={props.link}
    className={`mood`}>
      <span className="moodname">{props.name}</span>
      <span className="ico">[ {props.ico} ]</span>
  </a>
    )
};
