const MyParagraph = (props) => {
  console.log('MyParagraph RUNNING');
  return (
    <div>
      {props.children}
      <p>MyParagraph</p>
    </div>
  )
};

export default MyParagraph;