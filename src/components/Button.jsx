const Button = ({label, iconURL,backgroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex $ justify-center items-center border ${backgroundColor?`${backgroundColor} ${textColor} ${borderColor}`:"bg-coral-red text-white border-coral-red "}  px-7 py-4 gap-2 rounded-full text-lg leading-none font-montserrat`}>{label}
    {iconURL &&
    <img src={iconURL} alt="icon url" className='ml-2 rounded-full w-5 h-5 bg-white' />}  
    </button>
  )
}

export default Button