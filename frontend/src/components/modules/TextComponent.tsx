interface TextComponentProps {
  data: {
    text?: string;
    date?: string;
    textEditor?: string;
  };
}

export const TextComponent = ({ data }: TextComponentProps) => {
  return (
    <div>
      {data.text && <p>{data.text}</p>}
      
      {data.date && <p>Date: {data.date}</p>}
      
      {data.textEditor && (
        <div dangerouslySetInnerHTML={{ __html: data.textEditor }} />
      )}
    </div>
  );
};