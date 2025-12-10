// nextjs import 

interface ButtonProps {
    text: string;
    options?: string;
}

const Button = ({text, options} : ButtonProps) => {
  return (
    <button className={`bg-[#C49D5A] py-3 px-8 rounded-full text-white font-medium font-golos cursor-pointer capitalize hover:bg-black ${options}`}>
      {text}
    </button>
  );
};

export default Button;