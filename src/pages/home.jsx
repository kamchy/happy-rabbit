import { h, jsx} from "https://deno.land/x/sift@0.1.7/mod.ts";
import Layout from "../components/Layout.jsx";
import Mood from "../components/Mood.jsx";


export default async function homePage() {
  return (
    <Layout>
    <div className="container mx-auto max-w-screen-md p-4">
      <div className="text-3xl">How to be a Happy Rabbit?</div>
      <p> Choose your mood to get some tips: </p>
      <div className="moods">
         <Mood name="Good" ico=":)" link="feel/good" /> 
         <Mood name="Bad!" ico=":(" link="feel/bad"  /> 
      </div>
    </div>
  </Layout>
  );
}
