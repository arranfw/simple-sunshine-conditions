"use client";

import React from "react";

// Function to decode HTML entities
function decodeHTMLEntities(text: string) {
  if (!process.browser) return;
  var txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
}

export const HtmlRenderer: React.FC<{ htmlText: string }> = ({ htmlText }) => {
  const html = decodeHTMLEntities(htmlText);
  if (!html) return null;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
