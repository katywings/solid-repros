import { createClient } from "redis";
import { createResource } from "solid-js";
import server from "solid-start/server";
import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
  const [data] = createResource(server(
    () => {
      console.log(createClient)
    }
  ))

  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
