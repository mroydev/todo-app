type Props = {
  children: React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  onClick?: () => void;
};

export default function Button({ children, buttonType, onClick }: Props) {
  return (
    <button
      className={`h-[45px] w-full border-[none] rounded-[5px] bg-[#473a2b] text-[#fff] text-[16px] cursor-pointer flex justify-center items-center [transition:all_0.2s] hover:bg-[#322618]
        ${buttonType === 'secondary' ? 'text-[14px] opacity-[0.85]' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
