interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(text);
  };

  return <button onClick={handleClick} />;
};

export default CopyToClipboard;
