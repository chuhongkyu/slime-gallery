import { useEffect } from "react";
import { useImageAnalysisStore } from "./store";
import useSetSkills from "./utils/useSetSkills";

export const Skill = () => {
    const imageAnalysis = useImageAnalysisStore((state) => state.image);
    const { skills } = useSetSkills({ size: imageAnalysis.size, type: imageAnalysis.color })

    return(
        <>
            
        </>
    )
}
