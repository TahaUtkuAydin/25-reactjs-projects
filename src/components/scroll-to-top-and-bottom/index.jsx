import { useRef } from "react";
import UseFetch from "../use-fetch";

export default function ScrollToTopandBottom() {
  const { data, pending, error } = UseFetch(
    "https://dummyjson.com/products?limit=100"
  );

  const bottomRef = useRef();

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView ({ behavior: "smooth" });
  }
  if (error) {
    return <h1>Error occured!</h1>;
  }
  if (pending) {
    return <h1>Loading, please wait</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={() => handleScrollToBottom()}>Scroll to Bottom</button>
      <ul>
        {data && data.products
          ? data.products.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))
          : null}
      </ul>
      <button onClick={() => handleScrollToTop()}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}
