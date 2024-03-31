const CopyToClipboard = ({ text }) => {
    const handleClick = () => {
        navigator.clipboard.writeText(text);
    };
    return <button onClick={handleClick}/>;
};
export default CopyToClipboard;
