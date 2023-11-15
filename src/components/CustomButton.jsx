const CustomButton = ({title, class1="", type="button", onClick=''}) => {
  return (
    <>
     <button onClick={onClick} type={type} className={`rounded-md py-1 px-2 ${class1}`}>{title}</button>
    </>
  )
}

export default CustomButton
