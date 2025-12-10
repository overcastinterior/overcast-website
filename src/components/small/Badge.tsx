// nextjs import 

interface BadgeProps {
    text: string;
    options?: string;
    options2?: string;
}

const Badge = ({text, options,options2} : BadgeProps) => {
  return (
    <div className={`inline-flex rounded-full border border-white px-3 py-1.5 xl:py-2.5 xl:px-4 space-x-2.5 items-center font-cal ${options}`}>
        <span className="block w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
        <h6 className={`${options2} text-white font-normal text-xs lg:text-sm uppercase`}>{text}</h6>
    </div>
  );
};

export default Badge;