import Image from "next/image"


function loading() {
  return (
    <div className="flex items-center justify-center my-[100px]">
      <Image height="60" width="200" src="spinner.svg.svg" alt="loading..." />
    </div>
  )
}

export default loading
