const Name = ({
    text = "Siddarth Chava", // Default name
    size = "text-1xl", // Tailwind class for font size
    color = "text-black", // Tailwind class for text color
    className = "", // Additional custom classes
    additionalPadding = "pt-0", // Default no extra padding
  }: {
    text?: string;
    size?: string;
    color?: string;
    className?: string;
    additionalPadding?: string; // Prop for additional padding
  }) => {
    return (
      <h1
        className={`${size} ${color} ${additionalPadding} ${className} text-left`}
      >
        {text}
      </h1>
    );
  };
  
  export default Name;