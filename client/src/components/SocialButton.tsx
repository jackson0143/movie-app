// Button.js
const SocialButton = ({ bgColor, hoverColor, focusRingColor, icon, text, onClickFunction=()=> {}}) => (
    <button
    className={`${bgColor} ${hoverColor} ${focusRingColor} focus:ring-4 focus:outline-none font-medium text-center inline-flex items-center me-2 mb-2 w-full py-3 border flex space-x-2 justify-center rounded-lg text-white`}
    onClick = {onClickFunction}
    
    >
      
      {icon}
      {text}
    </button>
  );
 
  export default SocialButton;
  