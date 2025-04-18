// src/components/SocialButton.jsx
const SocialButton = ({ provider, onClick }) => {
    const providers = {
      google: { 
        text: 'Google',
        bgColor: 'bg-red-500 hover:bg-red-600',
      },
      facebook: {
        text: 'Facebook',
        bgColor: 'bg-blue-600 hover:bg-blue-700',
      },
      apple: {
        text: 'Apple',
        bgColor: 'bg-black hover:bg-gray-800',
      }
    };
  
    return (
      <button
        onClick={() => onClick(provider)}
        className={`${providers[provider].bgColor} text-white w-full py-2 px-4 rounded-md transition-colors`}
      >
        Đăng nhập với {providers[provider].text}
      </button>
    );
  };
  export default SocialButton;
