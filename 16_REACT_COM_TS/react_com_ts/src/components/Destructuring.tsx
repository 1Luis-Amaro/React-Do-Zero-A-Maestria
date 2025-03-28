import React from "react";

type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  //7 - enum
  category: Category

};

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}

const Destructuring = ({ title, content, commentsQty, tags, category }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>#{tag} </span>
        ))}
      </div>
      <h4>Categoria: {category} </h4>
    </div>
  );
};

export default Destructuring;
