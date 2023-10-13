"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/icons/sprite.svg", {
    as: "image",
  });

  return null;
}
