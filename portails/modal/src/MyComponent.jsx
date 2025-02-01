import { createPortal } from "react-dom";

function MyComponent() {
  return createPortal(
    <div>
      <p>MyComponent, dans root</p>
    </div>,
    document.getElementById("second-root")
  );
}
export default MyComponent;
