"use client";

import { useState, useEffect } from "react";

type Props = {
  textToShow: string;
};
export const Typewritter = ({ textToShow }: Props) => {
  const [text, setText] = useState("");

  const writeText = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => writeText(text, i + 1), 400);
    }
  };

  useEffect(() => {
    setTimeout(() => writeText(textToShow), 1000);
  }, []);

  return <span className="ml-2 text-emphasis">{text}</span>;
};
