import WindowResize from ".";

export default function WindowResizeTest() {
    const {width,height} = WindowResize()
    return (
        <div>
          <h1>Use Window resize Hook</h1>
          <p>Width is {width}</p>
          <p>Height is {height}</p>
        </div>
      );
}
