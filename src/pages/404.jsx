import { h, jsx } from "https://deno.land/x/sift@0.1.7/mod.ts";
import Layout from "../components/Layout.jsx";

export default function notFoundPage() { 
  return jsx(
    <Layout>

    <div className="container mx-auto max-w-screen-md p-4">
    <h2>Nobody found anything here!</h2>
    <a href="/"> Go back home </a>
    </div>
    </Layout>
  )
}
