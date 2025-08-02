interface Props {
  image: string;
  text: string;
  onClick?: () => void
}
const Connect: React.FC<Props> = ({ image, text, onClick }) => {
  return (
    <div 
      className="flex justify-center align-center gap-3 p-3 mt-4 border-[1px] border-[#E4E4E7] rounded-md cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt="image-connect"/>
      <p className="text-[#18181B] text-[1.3rem] font-medium">{text}</p>
    </div>
  );
};

export default Connect;
