"use client";

import React from "react";

// Function to decode HTML entities
function decodeHTMLEntities(text: string) {
  var txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
}

export const HtmlRenderer: React.FC<{ htmlText: string }> = ({ htmlText }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(htmlText) }} />
  );
};
