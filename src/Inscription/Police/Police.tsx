interface PoliceProps {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    link1: string;
    link2: string
}

const Police = ({ text1, text2, text3, text4, link1, link2 }: PoliceProps) => {
    return ( 
        <p className="text-[#71717A] text-[1.2rem] font-400 text-center mt-[3rem]">{text1} 
            <a href={link1} className="text-[#71717A] text-[1.2rem] font-400 underline">{text2}</a>
            {text3}
            <a href={link2} className="text-[#71717A] text-[1.2rem] font-400 underline">{text4}</a>
        </p>
    )
}

export default Police;