import ProgressBar from "../ProgressBar/ProgressBar";

const FooterLoaging = () => {
    return (
        <div className="flex items-center gap-2 justify-between mt-[2rem]">
            <ProgressBar color="bg-[#FFA273] opacity-60"/>
            <ProgressBar color="bg-[#FFA273]"/>
            <ProgressBar color=" bg-linear-to-r from-[#FFA273] to-[#00539C]"/>
            <ProgressBar color="bg-[#00539C]"/>
        </div>
    )
}

export default FooterLoaging