
import { h, jsx} from "https://deno.land/x/sift@0.1.7/mod.ts";
import Layout from "../components/Layout.jsx";

const tips = {
  good: [
    "Write some code",
    "Go out and do some jogging",
    "Clean up your house",
    "Help someone who needs it",
    "Call your Mom",
  ],
  bad: [
    "Have a cold shower",
    "Have a long nap after your lunch",
    "Read a book",
    "Take yourself for a walk",
    "Get some rest",
    "Pray",
    "Try to accept yourself being weak, it is human!"
  ]
}

function getTips(tipName) {
  return tips[tipName] ?? ["No tips found"];
}
export default async function homePage(req, params) {
  const lines = getTips(params.feel).map(
    (tip, idx) => (<div className="tip" key={idx}>{tip}</div>));
  const TipsLine = ({children}) => (<div className="tips">{children}</div>); 
  return jsx(
    <Layout>
    <div className="container mx-auto max-w-screen-md p-4">
      <div className="text-3xl" > You feel {params.feel} </div>
      <a href="/">Back home</a>
    </div>
    
    <div className="container mx-auto max-w-screen-md p-4">
    <TipsLine>{lines}</TipsLine>
    
    </div>
    </Layout>
  );
}
