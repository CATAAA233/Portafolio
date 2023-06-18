"use client";
import { useState } from "react";
import styles from "./CustomButton.module.css";
interface Props {
  title: string;
  color?: string;
  icon?: string;
  textColor?: string;
}
export default function CustomButton({ title, color, textColor, icon }: Props) {
  const [ishover, setIsHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.Button}
      style={{
        outlineColor: ishover ? color : "",
        backgroundColor: ishover ? color : "",
        color: ishover ? textColor : "",
      }}
    >
      {title}
    </button>
  );
}
